<?php
	require_once('../Conf/Config.inc.php');
	
	//POST info
	$class			=$_POST['Q_class'];
	$region			=$_POST['Q_region'];
	$name			=$_POST['Q_name'];
	$email			=$_POST['Q_email'];
	$tel			=$_POST['Q_tel'];
	$company		=$_POST['Q_company'];
	$msg			=$_POST['Q_msg'];
	
	//insert
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

	if($_POST['PgLang'] == 'en'){

		if(!empty($result)){
			$status['flag']			= 1;
			$status['msg_tit']		= 'Thanks';
			$status['msg_content']	= 'Thanks, We will contact with you shortly.';
		}else{
			$status['flag']			= 0;
			$status['msg_tit']		= 'Submission Failed';
			$status['msg_content']	= 'Please make sure all required fields are filled.';
		}

	}elseif($_POST['PgLang'] == 'tw'){

		if(!empty($result)){
			$status['flag']			= 1;
			$status['msg_tit']		= '發送成功';
			$status['msg_content']	= '表單已發送成功，我們會儘快與您聯絡，謝謝。';
		}else{
			$status['flag']			= 0;
			$status['msg_tit']		= '發送失敗';
			$status['msg_content']	= '抱歉，請確認每個必填欄位都有填寫。';
		}

	}
	
	//不需echo $status;
?>