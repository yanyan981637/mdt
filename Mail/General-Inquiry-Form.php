<?php
	/*-------------
	$class：訪客來源類別
	1: 一般
	2: Video Telematics
	---------------*/

	if($class==1){
		$class = "General";
		$subject = "[Contact Message - General] from MDT Website";
	}elseif($class==2){
		$class = "Video Telematics";
		$subject = "[Contact Message - Video Telematics] from MDT Website";
	}else{
		$class = "Unknow";
	}
	
	require_once('../Conf/Mailer.inc.php');//郵件發送設置
	
	$mail->Subject = $subject;
	$mail->Body    = "------------------------------<br>
									Origin Message:<br><br>
									Inquiry Class: ".$class."<br>
									Region: ".$region."<br>
									Name: ".$name."<br>
									Email: ".$email."<br>
									Tel: ".$tel."<br>
									Company: ".$company."<br>
									Comment: ".$msg."<br>
									------------------------------";

	if(!$mail->Send()) {//發送郵件
		$mensagemRetorno = 'Error: '. print($mail->ErrorInfo);
		//echo $mensagemRetorno;
	} else {
		$mensagemRetorno = 'E-mail sent!';
		//echo $mensagemRetorno;
	}
?>