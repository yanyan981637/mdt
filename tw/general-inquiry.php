<?php
	include 'inc/HEADER.php';
	
	$class = ($_GET['class'])?$_GET['class']:1;//預設為1
?>
	<!-- Primary Page Layout
	================================================== -->
	<!-- Hero Block
	================================================== -->
	<div class="section mid-height-incNav over-hide">
		<?php
			if($class==2){
				echo "<div class='parallax' style='background-image: url(../images/Hero_slider/hero_video_telematics.jpg)'></div>";
			}elseif($class==3){
				echo "<div class='parallax' style='background-image: url(../images/Hero_slider/hero_contact.jpg)'></div>";
			}else{
				echo "<div class='parallax' style='background-image: url(../images/Hero_slider/hero_contact.jpg)'></div>";
			}
		?>
		<div class="hero-center-wrap z-bigger">
			<div class="container color-white hero-text big-text text-center">
				<div class="row">
					<div class="col-md-12 mg-auto">	
						<h1 class="color-white">聯絡我們</h1>
					</div>	
				</div>		
			</div>			
		</div>	
	</div>

	
	<div class="section" >
		<div class="container ">
			<div class="row justify-content-center">
				<div class="col-md-12 mt-60 mb-30">
					<p>如果您有任何疑問或需求，歡迎填寫以下聯絡資訊, 我們將盡快與您連絡。 <span class="FC_mdtB"><span class="req remark">*表示必填項目</span></span></p>
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
								swal('系統異常', '抱歉！系統發生異常，建議您可以寄Email給我們，謝謝。', "error");
							}
						});
						return false;
									
					}
				});
			
				$().ready(function() {
					$("#MsgForm").validate();
				});
			</script>
			<form class="contact-form" id="MsgForm" method="post">
				<div class="row justify-content-center">
					<div class="col-md-4">
						<input type="hidden" id="Q_class" name="Q_class" value="<?php echo $class; ?>">
						<div class="form-group">
							<label class="h5 FC_mdtB" for="Q_name">地區 <span class="req">*</span></label>
							<select class="form-control" id="Q_region" name="Q_region" placeholder="Region" required>
								<option value="">請選擇..</option>
								<option value="tw">Taiwan 台灣</option>
								<option value="eu">Europe 歐洲</option>
								<option value="ru">Russia 俄羅斯</option>
								<option value="cn">China 中國</option>
								<option value="us">US 美國</option>
								<option value="sea">Southeast Asia 東南亞</option>
								<option value="lame">Latin America 拉丁美洲</option>
								<option value="au">Australia 澳洲</option>
								<option value="nz">New Zealand 紐西蘭</option>
								<option value="else">Else 其他區域</option>
							</select>
						</div>
					</div>
				
					<div class="col-md-4">
						<div class="form-group">
							<label class="h5 FC_mdtB" for="Q_name">姓名 <span class="req">*</span></label>
							<input type="text" id="Q_name" name="Q_name" value="" placeholder="Name" class="form-control" required>
						</div>
					</div>
					
					<div class="col-md-4">
						<div class="form-group">
							<label class="h5 FC_mdtB" for="Q_tel">聯絡電話</label>
							<input type="text" id="Q_tel" name="Q_tel" value="" placeholder="Tel" class="form-control">
						</div>
					</div>
					
					<div class="col-md-6">
						<div class="form-group">
							<label class="h5 FC_mdtB" for="Q_email">Email <span class="req">*</span></label>
							<input type="email" id="Q_email" name="Q_email" value="" placeholder="Email" class="form-control" required>
						</div>
					</div>
					
					<div class="col-md-6">
						<div class="form-group">
							<label class="h5 FC_mdtB" for="Q_company">公司名稱</label>
							<input type="text" id="Q_company" name="Q_company" value="" placeholder="Company" class="form-control">
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<label class="h5 FC_mdtB" for="Q_msg">建議/需求 <span class="req">*</span></label>
							<textarea id="Q_msg" name="Q_msg" class="form-control" placeholder="Comments/Questions" value="" style="margin-top: 0px; height: 120px;" required></textarea>
						</div>
					</div>
					
					<div class="col-md-12">
						<p  class="remark">我想了解神達數位針對個人資料應用範圍的<a href="privacy-policy.php" target="_blank">隱私條款</a></p>
					</div>
					
					<input type="hidden" id="PgLang" name="PgLang" value="tw" >

					<div class="col-md-9 tc mt-30">
						<div class="g-recaptcha" data-sitekey="6LcbXpEUAAAAAOHJWB6fn_yhRRmk9ZpR7r5aEnow"></div>
						<div class="g-recaptcha-message-area"></div>
						<div class="send-message-area" style="margin:10px;"></div>
						<input type="submit" value="確定" name="MsgFormSend" id="submit_btn" class="btn btn-primary btn-lg btn-round" />
						<input type="reset" value="重填" name="MsgFormSend" class="btn btn-primary btn-lg btn-round" style="background-color:#aaa;margin-left:6px;" />
					</div>
				</div>
			</form>
			
		</div>
	</div>



<?php
	include 'inc/FOOTER.php';
?>