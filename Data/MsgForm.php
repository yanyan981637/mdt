<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';

use App\DataAccess\Config;
use App\Logger\Log;
use App\Mail\MailSender;

$config = (new Config())->getGeneralConfig();
$logger = new Log('FORM','Spam.log');

// Script root path
$RootPath = App\DataAccess\Config::initRootPath();
// Script last path
$cfg['file_name'] = substr(strrchr($_SERVER['SCRIPT_NAME'], "/" ), 1 );
// Database singleton
$MysqlInstance = App\DataAccess\Mysql::getInstance();
$MysqlConn = $MysqlInstance->getConnection();

session_start();

$PgLang	= $_POST['PgLang'];

//form-key validation
$csrf_token_cform = isset($_POST['csrf_token_cform']) ? $_POST['csrf_token_cform'] : '';
$remote_address = !isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? $_SERVER['REMOTE_ADDR'] : $_SERVER['HTTP_X_FORWARDED_FOR'];

if ((!$csrf_token_cform || !isset($_SESSION['csrf_token_cform'])) || ($csrf_token_cform !== $_SESSION['csrf_token_cform'])) {
	if ($PgLang == 'en') {
		$status['flag']			= 0;
		$status['msg_tit']		= 'Submission Failed';
		$status['msg_content']	= 'Please make sure all required fields are filled.';
	} elseif ($PgLang == 'tw') {
		$status['flag']			= 0;
		$status['msg_tit']		= '發送失敗';
		$status['msg_content']	= '抱歉，請確認每個必填欄位都有填寫。';
	}

	$logger->warning('Form action has been attacked from ' . $remote_address .', no valid CSRF token.');

	echo json_encode($status);
	return;
}

if (isset($_POST['g-recaptcha-response'])) { //正常通道submit
	function send_post($url, $post_data)
	{
		$postdata = http_build_query($post_data); //組成xxx=123&yyy=456
		$options = array(
			'http' => array(
				'method' => 'POST',
				'header' => 'Content-type:application/x-www-form-urlencoded',
				'content' => $postdata,
				'timeout' => 15 * 60 // 超時(單位:s)  
			)
		);
		$context = stream_context_create($options);
		$result = file_get_contents($url, false, $context);
		return $result;
	}

	$post_data = array(
		'secret' => $config['GOOGLE_RECAPTCHA_SECRET'],
		'response' => $_POST["g-recaptcha-response"]
	);
	$recaptcha_json_result = send_post('https://www.google.com/recaptcha/api/siteverify', $post_data);
	$recaptcha_result = json_decode($recaptcha_json_result, true); //json轉陣列 

	if ($recaptcha_result['success'] == TRUE) { //通過驗證

		if (isset($_POST['MsgFormSend'])) {
			$contactName = stripslashes(trim($_POST['Q_name']));
			$email = isset($_POST['Q_email']) ? trim($_POST['Q_email']) : '';
			$message = '';

			//If there is no error, then..
			if (!isset($hasError)) {
				if ($contactName === '') {
					$nameError = 'You forgot to enter your name.';
					$hasError = true;
				}

				//Check to make sure sure that a valid email address is submitted
				if ($email === '') {
					$emailError = 'You forgot to enter your email address.';
					$hasError = true;
				} else if (!preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i", $email)) {
					if ($PgLang == 'en') {
						$emailError = 'You entered an invalid email address.';
					} elseif ($PgLang == 'tw') {
						$emailError = '您輸入的Email格式可能錯誤';
					}
					$hasError = true;
				}

				//Check to make sure comments were entered 
				if (trim($_POST['Q_msg']) === '') {
					$messageError = 'You forgot to enter your message.';
					$hasError = true;
				} else {
					if (function_exists('stripslashes')) {
						$message = stripslashes(trim($_POST['Q_msg']));
					} else {
						$message = trim($_POST['Q_msg']);
					}
				}
			}

			if (!isset($hasError)) {
				// TO_DO Xss/Html filter
				$class		= $_POST['Q_class'];
				$region		= $_POST['Q_region'];
				$name		= $_POST['Q_name'];
				$email		= $_POST['Q_email'];
				$tel		= $_POST['Q_tel'];
				$company	= $_POST['Q_company'];
				$msg		= $_POST['Q_msg'];
	
				$msgContent = [
					'class' => $class,
					'region' => $region,
					'name' => $name,
					'email' => $email,
					'tel' => $tel,
					'company' => $company,
					'msg' => $msg
				];

				// TO_DO move to another method or function
				//Insert DB
				try {
					mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
					$sql_insert = "INSERT INTO `ows_contact_form`(class, region, name, email, tel, company, msg) VALUES (?, ?, ?, ?, ?, ?, ?)";
					$stmt = mysqli_prepare($MysqlConn, $sql_insert);
					mysqli_stmt_bind_param($stmt, "sssssss", $class, $region, $name, $email, $tel, $company, $msg);
					$result = mysqli_stmt_execute($stmt);
					mysqli_stmt_close($stmt);
				} catch (\Throwable $e) {
					die('DB insert error');
				}
			
				if ($PgLang == 'en') {
					if (!empty($result)) {
						$status['flag']			= 1;
						$status['msg_tit']		= 'Thanks';
						$status['msg_content']	= 'Thanks, We will contact with you shortly.';
					} else {
						$status['flag']			= 0;
						$status['msg_tit']		= 'Submission Failed';
						$status['msg_content']	= 'Please make sure all required fields are filled.';
					}
				} elseif ($PgLang == 'tw') {
					if (!empty($result)) {
						$status['flag']			= 1;
						$status['msg_tit']		= '發送成功';
						$status['msg_content']	= '表單已發送成功，我們會儘快與您聯絡，謝謝。';
					} else {
						$status['flag']			= 0;
						$status['msg_tit']		= '發送失敗';
						$status['msg_content']	= '抱歉，請確認每個必填欄位都有填寫。';
					}
				}

				$noticeMail = new MailSender("", $msgContent);
				$noticeMail->sendMail();

			} else {
				$status['flag'] = 0;
				if ($PgLang == 'en') {
					$status['msg_tit'] = 'Submission Failed';
				} elseif ($PgLang == 'tw') {
					$status['msg_tit'] = '發送失敗';
				}
				$status['msg_content'] = $emailError;
			}

			echo json_encode($status); //輸出結果
			die();
		}
	} else {
		$logger->warning('Google recaptcha verification failed.');
	}
} else {
	$logger->warning('Form action has been attacked from ' . $remote_address .', no Recaptcha verification found.');
}
