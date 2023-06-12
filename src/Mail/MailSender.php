<?php
namespace App\Mail;

require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

use App\DataAccess\Config;
use App\Logger\Log;

class MailSender {
	public $subject;
	public $msgContent;

	private $logger;
	private $class, $region, $name, $email, $tel, $company, $msg;
	private $postData, $class_value, $subject_value, $recipients, $msgBody;

	public function __construct(string $subject, array $msgContent) {
		$this->subject = $subject;
		$this->msgContent = $msgContent;
		$this->logger = new Log('MAIL','Mail.log');
	}

	public function getSubject() {
		return $this->subject;
	}

	public function getMsgContent() {
		return $this->msgContent;
	}

	public function sendMail() {

		$config = (new Config())->getMailConfig();
		$recipients = array();
		$postData = $this->msgContent;

		list($class, $region, $name, $email, $tel, $company, $msg) = array_values($postData);

		switch ($class) {
			case 1:
				$class_value = "General";
				$subject_value = "[Contact Message - General] from MDT Website";
				$recipients[] = array(
					'email' => $config['CF_GENERAL'],
					'name' => 'business'
				);
				if ($region == "au" || $region == "nz") {
					$recipients[] = array(
						'email' => $config['CF_AUNZ'],
						'name' => 'business'
					);
				}
				break;
			case 2:
				$class_value = "Video Telematics";
				$subject_value = "[Contact Message - Video Telematics] from MDT Website";
				$recipients[] = array(
					'email' => $config['CF_VT'],
					'name' => 'VTSales'
				);
				break;
			default:
				$class_value = "Unknown";
				$subject_value = "Unknown";
				break;
		}

		if (!$subject_value) {
			$subject_value = $this->subject;
		}

		$msgBody = "------------------------------<br>
			Origin Message:<br><br>
			Inquiry Class: ".$class_value."<br>
			Region: ".$region."<br>
			Name: ".$name."<br>
			Email: ".$email."<br>
			Tel: ".$tel."<br>
			Company: ".$company."<br>
			Comment: ".$msg."<br>
			------------------------------";

		try {
			$mail = new PHPMailer;
			// Enable verbose debug output
			// $mail->SMTPDebug = 3;
			// Set CharSet
			$mail->CharSet = 'UTF-8';
			// Set Encode
			$mail->Encoding = 'base64';
			// Set mailer to use SMTP
			$mail->isSMTP();
			// Specify main and backup SMTP servers
			$mail->Host = $config['MAIL_HOST'];
			// Enable SMTP authentication
			$mail->SMTPAuth = true;
			// SMTP username
			$mail->Username = $config['MAIL_USERNAME'];
			// SMTP password
			$mail->Password = $config['MAIL_PASSWORD'];
			// Enable TLS encryption, `ssl` also accepted
			$mail->SMTPSecure = $config['MAIL_ENCRYPTION'];
			// TCP port to connect to
			$mail->Port = $config['MAIL_PORT'];
			
			$mail->From = 'business@mitacmdt.com';//已綁定，更改則無法啟用發信機制
			$mail->FromName = 'MDT Business';
	
			foreach($recipients as $recipient) {
				$mail->addAddress($recipient['email'], $recipient['name']);
				$mail->addReplyTo($recipient['email'], $recipient['name']);
			}
	
			$mail->Subject = $subject_value;
			$mail->Body = $msgBody;

			// return;

			// Set email format to HTML
			$mail->isHTML(true);

			if (!$mail->Send()) {//發送郵件
				$mensagemRetorno = 'Error: '. print($mail->ErrorInfo);
				$this->logger->error($mensagemRetorno);
				//echo $mensagemRetorno;
			} else {
				$mensagemRetorno = 'E-mail sent!';
				$this->logger->info($mensagemRetorno);
				//echo $mensagemRetorno;
			}
		} catch (Exception $e) {
			$errormsg = 'Message could not be sent. Mailer Error: '.$e->getMessage();
			$this->logger->error($errormsg);
			// echo 'Message could not be sent. Mailer Error: '.$e->getMessage();
		}
	}
}

?>