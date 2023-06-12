<?php
	require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';

	include 'inc/HEADER.php';

	$class = isset($_GET['class']) ? $_GET['class'] : 1;//預設為1
	$config = (new App\DataAccess\Config())->getRecaptchaConfig();
?>
	<!-- Primary Page Layout
	================================================== -->
	<!-- Hero Block
	================================================== -->
	<div class="section mid-height-incNav over-hide">
		<div class='parallax' style='background-image: url(../images/Hero_slider/general_inquiry-banner.jpg)'></div>
		<div class="hero-center-wrap z-bigger">
			<div class="container color-white hero-text big-text text-center">
				<div class="row">
					<div class="col-md-12 mg-auto">	
						<h1 class="color-white">General Inquiry</h1>
					</div>	
				</div>		
			</div>			
		</div>	
	</div>

	
	<div class="section" >
		<div class="container ">
			<div class="row justify-content-center">
				<div class="col-md-12 mt-60 mb-30">
					<p>If you shall have any questions, please fill in the contact form, and we will contact with you shortly. <span class="req remark">*indicates required information</span></span></p>
				</div>
			</div>
			
			<script type="text/javascript">
				$.validator.setDefaults({
					submitHandler: function() {
						
						var v = grecaptcha.getResponse();
						if(v.length == 0){
								jQuery(".g-recaptcha-message-area").html("<label class='error'>You can't proceed!</label>").fadeIn('slow').delay(3000).fadeOut('slow');
								return false;
						}
						
						var postvalues =  jQuery("#MsgForm").serialize();
						//alert(postvalues);
						
						$.ajax({
							type: "POST",
							url: "../Data/MsgForm.php",
							data: postvalues,
							dataType: 'json',
							success: function(response){
								
								$.blockUI({
									message: '<p style="margin:0px;word-wrap:break-word;">Wait a moment..</p>', 
									timeout: 1500,
									css: {
										border: 'none', 
										padding: '15px', 
										backgroundColor: '#000', 
										'-webkit-border-radius': '3px', 
										'-moz-border-radius': '3px', 
										opacity: .8, 
										color: '#fff' 
									} 
								});
								
								grecaptcha.reset();
								
								
								if(response['flag'] == 1){//success
								
									jQuery('#Q_region, #Q_name, #Q_email, #Q_tel, #Q_company, #Q_msg').val("");
									swal(response['msg_tit'], response['msg_content'], "success");
									
								}else if(response['flag'] == 0){//error
									
									swal(response['msg_tit'], response['msg_content'], "error");
									
								}
								
							},
							error: function(response) {
								swal('System Error', 'Sorry, Please Email us if you have any question.', "error");
							}
						});
						return false;
									
					}
				});
			
				$().ready(function() {
					$("#MsgForm").validate();
				});
			</script>

			<?php
			$csrfToken = bin2hex(random_bytes(32));
			$_SESSION['csrf_token_cform'] = $csrfToken;
			?>
			<form class="contact-form" id="MsgForm" method="post">
				<div class="row justify-content-center">
					<div class="col-md-4">
						<input type="hidden" id="Q_class" name="Q_class" value="<?php echo $class; ?>">
						<div class="form-group">
							<label class="h5 FC_mdtB" for="Q_name">Region  <span class="req">*</span></label>
							<select class="form-control" id="Q_region" name="Q_region" placeholder="Region" required>
								<option value="">Please choose..</option>
								<option value="tw">Taiwan</option>
								<option value="eu">Europe</option>
								<option value="ru">Russia</option>
								<option value="cn">China</option>
								<option value="us">US</option>
								<option value="sea">Southeast Asia</option>
								<option value="lame">Latin America</option>
								<option value="au">Australia</option>
								<option value="nz">New Zealand</option>
								<option value="else">Else</option>
							</select>
						</div>
					</div>
				
					<div class="col-md-4">
						<div class="form-group">
							<label class="h5 FC_mdtB" for="Q_name">Name  <span class="req">*</span></label>
							<input type="text" id="Q_name" name="Q_name" value="" placeholder="Name" class="form-control" required>
						</div>
					</div>
					
					<div class="col-md-4">
						<div class="form-group">
							<label class="h5 FC_mdtB" for="Q_tel">Tel</label>
							<input type="text" id="Q_tel" name="Q_tel" value="" placeholder="Tel" class="form-control">
						</div>
					</div>
					
					<div class="col-md-6">
						<div class="form-group">
							<label class="h5 FC_mdtB" for="Q_email">Email  <span class="req">*</span></label>
							<input type="email" id="Q_email" name="Q_email" value="" placeholder="Email" class="form-control" required>
						</div>
					</div>
					
					<div class="col-md-6">
						<div class="form-group">
							<label class="h5 FC_mdtB" for="Q_company">Company</label>
							<input type="text" id="Q_company" name="Q_company" value="" placeholder="Company" class="form-control">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label class="h5 FC_mdtB" for="Q_msg">Comments/Questions  <span class="req">*</span></label>
							<textarea id="Q_msg" name="Q_msg" class="form-control" placeholder="Comments/Questions" value="" style="margin-top: 0px; height: 120px;" required></textarea>
						</div>
					</div>
					
					<div class="col-md-12">
						<p class="remark">Read MDT's <a href="privacy-policy.php" target="_blank">Privacy Policy</a> for details on how your information may be used.</p>
					</div>
					
					<input type="hidden" id="PgLang" name="PgLang" value="en" >
					<input type="hidden" id="csrf_token_cform" name="csrf_token_cform" value="<?php echo $csrfToken; ?>" />

					<div class="col-md-9 tc mt-30">
						<div class="g-recaptcha" data-sitekey="<?= $config['GOOGLE_RECAPTCHA_KEY'] ?>"></div>
						<div class="g-recaptcha-message-area"></div>
						<div class="send-message-area" style="margin:10px;"></div>
						<input type="submit" value="Submit" name="MsgFormSend" id="submit_btn" class="btn btn-blue1 btn-lg btn-round" />
						<input type="reset" value="Reset" name="MsgFormSend" class="btn btn-primary btn-lg btn-round" style="background-color:#aaa;margin-left:6px;" />
					</div>
				</div>
			</form>
			
		</div>
	</div>



<?php
	include 'inc/FOOTER.php';
?>