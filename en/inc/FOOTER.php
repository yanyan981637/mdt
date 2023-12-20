	<!-- start projects nav -->
	<?php if($Current_Menu_Father_Id != null & $Current_Menu_Is_Online != 0){//sub menu ?>
	
		<div class='container'>
			<div class='proj-nav'>
				<div class='c-card-carousel__controller o-animate-in-element js-animate-in-element' style='opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);'>	
						
					<?php
						$sql ="SELECT menu_name ,file_name ,href_target FROM ows_menu where menu_class='main' and is_online=1 and lang='en' and father_menu_id=? and menu_order < ? order by menu_order DESC limit 1";

						$stmt = mysqli_prepare($MysqlConn, $sql);
						mysqli_stmt_bind_param($stmt, "ss", $Current_Menu_Father_Id, $Current_Menu_Order);
						mysqli_stmt_execute($stmt);
						$result = mysqli_stmt_get_result($stmt);
						$prevAry = mysqli_fetch_array($result);

						if(!empty($prevAry)){
							$prev_menu_name		= $prevAry['menu_name'];
							$prev_file_name		= $prevAry['file_name'];
							$prev_href_target	= $prevAry['href_target'];

							echo "<div class='proj-prev'>
											<a href='".$prev_file_name."' target='".$prev_href_target."'>
												<div class='l-flex l-flex--center-middle c-card-carousel__prev' style='float: left;'>
													<img src='../images/ic_chevron_left-white.svg' alt='arrow' class='o-icon c-card-carousel__arrow'>
												</div>
												<div class='proj-nav-title hidden-xs'><span>".$prev_menu_name."</span></div>
											</a>
										</div>";
						}


						$sql ="SELECT menu_name ,file_name ,href_target FROM ows_menu where menu_class='main' and is_online=1 and lang='en' and father_menu_id=? and menu_order > ? order by menu_order limit 1";

						$stmt = mysqli_prepare($MysqlConn, $sql);
						mysqli_stmt_bind_param($stmt, "ss", $Current_Menu_Father_Id, $Current_Menu_Order);
						mysqli_stmt_execute($stmt);
						$result = mysqli_stmt_get_result($stmt);
						$nextAry = mysqli_fetch_array($result);

						if(!empty($nextAry)){
							$next_menu_name		= $nextAry['menu_name'];
							$next_file_name		= $nextAry['file_name'];
							$next_href_target	= $nextAry['href_target'];

							echo "<div class='proj-next'>
											<a href='".$next_file_name."' target='".$next_href_target."'>
												<div class='l-flex l-flex--center-middle c-card-carousel__next' style='float: right;'>
													<img src='../images/ic_chevron_right-white.svg' alt='arrow' class='o-icon c-card-carousel__arrow'>
												</div>
												<div class='proj-nav-title hidden-xs'><span>".$next_menu_name."</span></div>
											</a>
										</div>";
						}
					?>
					
				</div>
			</div>
		</div>
						
	<?php } ?>


	<!-- Footer Light Block
	================================================== -->
	<div class="section padding-top-smaller dark background-dark over-hide footer-1 z-bigger-2">
		<div class="container">
			<div class="row fItem">
				<div class="hidden-xs col-md-3 col-sm-4 col-6 mb-20">
					<h6>Product & Solution</h6>
					<ul class="list-style">
						<li><a href="./dashcam-recorder.php" target="_bank">Smart Mobility</a></li>
						<li><a href="./video-telematics.php">Smart Telematics</a></li>
						<li><a href="./tablet.php">Smart Industries</a></li>
						<li><a href="./outdoor-luminaires.php">Smart IOT</a></li>
					</ul>
				</div>
				<div class="hidden-xs col-md-3 col-sm-4 col-6 mb-20">
					<h6>Capability</h6>
					<ul class="list-style">
					  <li><a href="./core-competence.php">Core Competence</a></li>
					  <li><a href="./innovative-engineering.php">Innvovative Engineering</a></li>
					  <li><a href="./quality-management.php">Quality Management</a></li>
					  <li><a href="./manufacturing-excellence.php">Manufacturing Excellence</a></li>
					</ul>
				</div>
				<div class="hidden-xs col-md-3 col-sm-4 col-6 mb-20">
					<h6>Discover MDT</h6>
					<ul class="list-style">
					  <li><a href="./company-overview.php">Company Overview</a></li>
					  <li><a href="./MiTAC-holdings.php">MiTAC Holdings</a></li>
					  <li><a href="./own-brands.php">Own Brands</a></li>
					  <li><a href="./global-glory.php">Global Glory</a></li>
						<li><a href="https://www.mitac.com/en-global/ir_information/index" target="_blank">Investor Information</a></li>
					  <li><a href="./csr.php">CSR</a></li>
					  <li><a href="./press-events-list.php">Press</a></li>
					</ul>
				</div>
				
				<div class="col-md-3 col-sm-12 col-12 mb-20 logo-footer-100">
					<a href="index.php"><img src="../images/MDT_logo_light@2x.png" alt="MiTAC Digital Technology Corporation" class="mb-20"></a>
					<ul class="list-style footAddr mt-3 mb-3">
						<li>+886 3-396-1888</li>
						<li>No.200, Wen Hwa 2nd Rd., Kuei Shan Dist., Taoyuan City 33383, Taiwan(R.O.C)</li>
					</ul>
					<div class="social_btn">
						<div class="ico">
							<a href="https://www.linkedin.com/company/mitacmdt/" target="_blank"><img src="../images/social/logo_linkedIn.png" alt="linkedIn"></a>
						</div>
						<div class="ico">
							<a href="https://www.youtube.com/channel/UCTLkd2lKmNHdr6tAnxCZklg" target="_blank"><img src="../images/social/logo_youtube.png" alt="YouTube"></a>
						</div>
					</div>
				</div>
			</div>
		</div>	
		<div class="container scd-foot">
			<div class="row">
				<div class="col-md-6 col-sm-12">
					<?php
						$sqlPM ="Select menu_name, file_name, href_target From `ows_menu` Where menu_class='policy' And father_menu_id is NULL And is_online=1 And lang='en' Order By menu_order ASC ";
						$resultPM = mysqli_query($MysqlConn, $sqlPM);
						while ($menuPM = mysqli_fetch_array($resultPM, MYSQLI_ASSOC)) {
							echo "<a href='".$menuPM['file_name']."' target='".$menuPM['href_target']."'>".$menuPM['menu_name']."</a>&nbsp;|&nbsp;.";
						}
					?>
				</div>
				<div class="col-md-6 col-sm-12">
					<span class="cpright">Copyright &copy; MiTAC Digital Technology Corporation. All Rights Reserved.</span>
				</div>
			</div>
		</div>	
	</div>

	<?php
	$csrfToken = bin2hex(random_bytes(32));
	$_SESSION['csrf_token_ck'] = $csrfToken;
	?>
	<div class="fixed-bottom">
		<div id="v-cookielaw" class="v-bar v-yellow-alert v-bottom">
			<div class="v-message">
				This website uses essential and analytics cookies. You can choose your option by clicking “Accept All” or “Accept Essential” as Cookies Preferences. For more detailed information about the cookies we use, see our Cookie Policy.
			</div>
			<div class="v-actions">
				<form method='POST' name='form_CKaccept'  id='form_CKaccept' action=''>
					<button type='button' onclick="cookieAccept('all')" class='v-accept btn btn-blue btn-round btn-sm'>Accept All</button>
					<button type='button' onclick="cookieAccept('essential')" class='v-accept btn btn-blue btn-round btn-sm'>Accept Essential</button>
					<input type="hidden" id="ckType" name="ckType" value="" />
					<input type="hidden" id="csrf_token_ck" name="csrf_token_ck" value="<?php echo $csrfToken; ?>" />
				</form>
				<a href="./privacy-policy.php" class="btn btn-blue btn-round btn-sm inline">Privacy Policy</a>
			</div>
		</div>
	</div>

	<div class="scroll-to-top"><i class="fa fa-angle-up"></i></div>
	
	<!-- JAVASCRIPT
    ================================================== -->
	<?php if($Current_Menu_File_Name != 'general-inquiry.php'){//general-inquiry.php使用jquery.validate.min.js與jquery-3.2.1.min.js有覆蓋問題 ?>
		<script type="text/javascript" src="../js/jquery-3.5.1.min.js"></script>
	<?php } ?>
	
	<script type="text/javascript" src="../js/royal_preloader.min.js"></script> 
	<script type="text/javascript" src="../js/jquery.cookie.js"></script>
	<script type="text/javascript" src="../js/tether.min.js"></script>
	<script type="text/javascript" src="../js/bootstrap.min.js"></script>
	<script type="text/javascript" src="../js/header.js"></script>
	<script type="text/javascript" src="../js/plugins.js"></script> 
	<script type="text/javascript" src="../js/custom/custom-creative-agency.js"></script>  

	<!-- Extention -->
	<?php if($Current_Menu_File_Name == 'index.php'){ ?>
		<!--3screen-->
		<script src="../ext/3screen/bundle.min.js"></script>
		<script src="../ext/3screen/common.min.js"></script>
			
	<?php }
		//elseif($Current_Menu_File_Name == 'engineering.php'){ ?>
		<!--關 Responsive Video Slider JS
		<script src="../ext/rvslider/js/rvslider.min.js"></script>
		<script>
			//jQuery(function($){
				//$('.rvs-container').rvslider();
			//});
		</script>-->
		
		<?php 
		// }elseif($Current_Menu_File_Name == 'video-telematics.php' 
		// 			|| $Current_Menu_File_Name == 'smart-dashcam.php' 
		// 			|| $Current_Menu_File_Name == 'fleet-management.php' 
		// 			|| $Current_Menu_File_Name == 'safefy-enhancement.php' 
		// 			|| $Current_Menu_File_Name == 'efficiency-improvement.php' 
		// 			|| $Current_Menu_File_Name == 'business-collaboration.php'
		// 			|| $Current_Menu_File_Name == 'connected-dashcam.php'){ 
		// <a class="pccflightbox" href="./general-inquiry.php?class=2">Inquiry Form</a>

		// 			}
	?>
	
	
	<?php // } ?>


	<?php 
		// if(preg_match("/connected-dashcam/i", $cfg['file_name'])) {
		// <a class="pccflightbox" href="./general-inquiry.php?class=2">Inquiry Form</a>

	?>

	
	<?php 
	
	if($Current_Menu_File_Name != 'general-inquiry.php') {
		if ($Current_Menu_Inquiry_type == 1 || !$Current_Menu_Inquiry_type) {

			echo '<a class="pccflightbox" href="./general-inquiry.php">Inquiry Form</a>';

		} else {

			echo '<a class="pccflightbox" href="./general-inquiry.php?class='. $Current_Menu_Inquiry_type .'">Inquiry Form</a>';

		}

	}

	?>

	<script src="../js/extra.js"></script>
	<?php if(preg_match("/connected-dashcam/i", $cfg['file_name'])): ?>
		<script src="../js/product.js"></script>
	<?php endif; ?>
	<script>
		<?php if (isset($_COOKIE["mdt_policy"])) { ?>
		$(function(){
			<?php if($_COOKIE["mdt_policy"] == 'all' || $_COOKIE["mdt_policy"] == 'essential' || $_POST["ckType"] == 'all' || $_POST["ckType"] == 'essential' ){ ?>
				$("#v-cookielaw").hide();
			<?php } ?>
		});
		<?php } ?>
	
		function cookieAccept(v){
			var ck = v;	
			if (ck != "" && (ck == "all" || ck == "essential")) {
				$("#ckType").val(ck);
				form_CKaccept.submit();
			}
		}
	</script>
	
</body>
</html>
