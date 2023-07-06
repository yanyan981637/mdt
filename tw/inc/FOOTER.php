	<!-- start projects nav -->
	<?php if($Current_Menu_Father_Id != null & $Current_Menu_Is_Online != 0){//sub menu ?>
	
		<div class='container'>
			<div class='proj-nav'>
				<div class='c-card-carousel__controller o-animate-in-element js-animate-in-element' style='opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);'>	
						
					<?php
						$sql ="SELECT menu_name ,file_name ,href_target FROM ows_menu where menu_class='main' and is_online=1 and lang='tw' and father_menu_id=? and menu_order < ? order by menu_order DESC limit 1";

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


						$sql ="SELECT menu_name ,file_name ,href_target FROM ows_menu where menu_class='main' and is_online=1 and lang='tw' and father_menu_id=? and menu_order > ? order by menu_order limit 1";

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
					<h6>產品 & 解決方案</h6>
					<ul class="list-style">
						<li><a href="./dashcam-recorder.php">智慧交通</a></li>
						<li><a href="./video-telematics.php">智慧車載資通訊</a></li>
						<li><a href="./tablet.php">智慧工業</a></li>
						<li><a href="./outdoor-luminaires.php">智慧物聯</a></li>
					</ul>
				</div>
				<div class="hidden-xs col-md-3 col-sm-4 col-6 mb-20">
					<h6>技術支援</h6>
					<ul class="list-style">
					  <li><a href="./core-competence.php">核心能力</a></li>
					  <li><a href="./innovative-engineering.php">創新研發</a></li>
					  <li><a href="./quality-management.php">品質管理</a></li>
					  <li><a href="./manufacturing-excellence.php">生產製造</a></li>
					</ul>
				</div>
				<div class="hidden-xs col-md-3 col-sm-4 col-6 mb-20">
					<h6>關於我們</h6>
					<ul class="list-style">
					  <li><a href="./company-overview.php">公司簡介</a></li>
					  <li><a href="./MiTAC-holdings.php">聯華神通集團</a></li>
					  <li><a href="./own-brands.php">品牌介紹</a></li>
					  <li><a href="./global-glory.php">得獎記錄</a></li>
					  <li><a href="./csr.php">企業社會責任</a></li>
					  <li><a href="./press-events-list.php">最新消息</a></li>
					</ul>
				</div>
				
				<div class="col-md-3 col-sm-12 col-12 mb-20 logo-footer-100">
					<a href="index.php"><img src="../images/MDT_logo_light@2x.png" alt="神達數位股份有限公司" class="mb-20"></a>
					<ul class="list-style footAddr mt-3 mb-3">
						<li>+886 3-396-1888</li>
						<li>333 桃園市龜山區文化二路200號</li>
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
						$sqlPM ="Select menu_name, file_name, href_target From `ows_menu` Where menu_class='policy' And father_menu_id is NULL And is_online=1 And lang='tw' Order By menu_order ASC ";
						$resultPM = mysqli_query($MysqlConn, $sqlPM);
						while ($menuPM = mysqli_fetch_array($resultPM, MYSQLI_ASSOC)) {
							echo "<a href='".$menuPM['file_name']."' target='".$menuPM['href_target']."'>".$menuPM['menu_name']."</a>&nbsp;|&nbsp;.";
						}
					?>
				</div>
				<div class="col-md-6 col-sm-12">
					<span class="cpright">&copy; 神達數位股份有限公司 版權所有</span>
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
				本網站使用必要性和數據分析cookies。您可透過選擇"接受全部"或"接受必要性"做為您的cookies偏好。欲瞭解更多我們使用cookies的詳細資訊，請參考我們的Cookie政策。
			</div>
			<div class="v-actions">
				<form method='POST' name='form_CKaccept'  id='form_CKaccept' action=''>
					<button type='button' onclick="cookieAccept('all')" class='v-accept btn btn-blue btn-round btn-sm'>接受全部</button>
					<button type='button' onclick="cookieAccept('essential')" class='v-accept btn btn-blue btn-round btn-sm'>接受必要性</button>
					<input type="hidden" id="ckType" name="ckType" value="" />
					<input type="hidden" id="csrf_token_ck" name="csrf_token_ck" value="<?php echo $csrfToken; ?>" />
				</form>
				<a href="./privacy-policy.php" class="btn btn-blue btn-round btn-sm inline">隱私權條款</a>
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