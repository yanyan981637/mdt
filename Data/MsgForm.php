<?php

	if(isset($_POST['g-recaptcha-response'])){//正常通道submit
		function send_post($url, $post_data){
			$postdata = http_build_query($post_data);//組成xxx=123&yyy=456
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
					  
		$post_data = array('secret' => '6LcbXpEUAAAAAPeQn_E60s-0dFSdZ8cT2FB7oBwN', 'response' => $_POST["g-recaptcha-response"]);  
		$recaptcha_json_result = send_post('https://www.google.com/recaptcha/api/siteverify', $post_data);     
		$recaptcha_result = json_decode($recaptcha_json_result, true);//json轉陣列 
		
		if($recaptcha_result['success'] == TRUE){//通過驗證
		
			if(isset($_POST['MsgFormSend'])) {
				
				$contactName = stripslashes(trim($_POST['Q_name']));
				$email= isset($_POST['Q_email']) ? trim($_POST['Q_email']) : '';
				$message = '';
				
				//If there is no error, then..
				if(!isset($hasError)) {
					if($contactName === '') {
						$nameError = 'You forgot to enter your name.';
						$hasError = true;
					} 
					
					//Check to make sure sure that a valid email address is submitted
					if($email === '')  {
						$emailError = 'You forgot to enter your email address.';
						$hasError = true;
					} else if (!preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i", $email)) {
						if($_POST['PgLang'] == 'en'){
							$emailError = 'You entered an invalid email address.';
						}elseif($_POST['PgLang'] == 'tw'){
							$emailError = '您輸入的Email格式可能錯誤';
						}
						$hasError = true;
					}
					 
					//Check to make sure comments were entered 
					if(trim($_POST['Q_msg']) === '') {
						$messageError = 'You forgot to enter your message.';
						$hasError = true;
					}else {
						if(function_exists('stripslashes')) {
							$message = stripslashes(trim($_POST['Q_msg']));
						}else {
							$message = trim($_POST['Q_msg']);
						}
					}
				}
				
				
				if(!isset($hasError)) {
					require_once("save.php");//Insert DB
					require_once("../Mail/General-Inquiry-Form.php");//email
				}else{
					$status['flag'] 					= 0;
					if($_POST['PgLang'] == 'en'){
						$status['msg_tit'] 			= 'Submission Failed';
					}elseif($_POST['PgLang'] == 'tw'){
						$status['msg_tit'] 			= '發送失敗';
					}
					$status['msg_content'] 	= $emailError;
				}

				echo json_encode($status);//輸出結果
				die();
				
			}
		}

	}

?>