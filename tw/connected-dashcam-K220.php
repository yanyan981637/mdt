<?php
	include 'inc/HEADER.php';
?>
	<!-- Primary Page Layout
	================================================== -->
	<!-- Hero Block
	================================================== -->
	<!-- <div class="SecTopNavPlaceholder"></div>
	<div class="SecTopNav shadow">
		<div class="container">
			<div class="row">
        <div class="col-12 d-lg-none">
        <a class="SecTopNav_title" href="javascript:void(0);">
					K220
        </a>
        <div class="bg"></div>
        </div>
				<ul class="col-12">
					<li><a href="#pdt_detail">Detailed Views</a></li>
					<li><a href="#pdt_spec">Specifications</a></li>
					<li><a href="#pdt_accs">Accessories</a></li>
        </ul>
			</div>
		</div>
	</div> -->
	<div class="SecTopNavPlaceholder"></div>
	<div class="SecTopNav shadow">
		<div class="container">
			<div class="row">
        <div class="col-12 d-lg-none">
        <a class="SecTopNav_title" href="javascript:void(0);">
				聯網型行車記錄器
        </a>
        <div class="bg"></div>
        </div>
				<ul class="col-12">
					<li><a href="connected-dashcam-K165-K265.php">Premium - K165/K265</a></li>
					<li><a href="connected-dashcam-K145C-K245C.php">Pro - K145C/K245C</a></li>
					<li><a href="connected-dashcam-K145-K245.php">Advanced - K145/K245</a></li>
					<li><a href="connected-dashcam-K220.php" class="active">Entry - K220</a></li>
        </ul>
			</div>
		</div>
	</div>

	<div class="section productDetail background-white mt-90">
		<div class="container">
			<div class="row pt-30">
				<div class="col-md-6">	
					<div class="pdt_img">

						<!-- product slider -->
						<div style="background: #fff; height:1px; "></div><!--to solve not full width-->
						<div class="swiper-container">
							<div class="swiper-wrapper">
									<div class='swiper-slide'>
										<img src="../images/video-telematics/K220_image_1.png" alt="K220:經濟實惠的選擇" />
									</div>
									<div class='swiper-slide'>
										<img src="../images/connected_dashcam/pdt/K220_W.png" alt="K220:經濟實惠的選擇" />
									</div>
							</div>
							<!-- Add Arrows -->
							<div class="swiper-button-next"></div>
							<div class="swiper-button-prev"></div>
						</div>
						
						<!-- Swiper JS -->
						<script src="../ext/swiper/js/swiper.min.js"></script>
						<!-- Initialize Swiper -->
						<script>
							var swiper = new Swiper('.swiper-container', {
								slidesPerView: 1,
								loop: true,
								spaceBetween: 1000,
								effect: 'fade',
								centeredSlides: true,
								//autoHeight: true,
								//height : window.innerHeight,//
								autoplay: {
									delay: 4000,
									disableOnInteraction: true,
								},
								pagination: {
									el: '.swiper-pagination',
									type: 'fraction',
									clickable: true,
								},
								navigation: {
									nextEl: '.swiper-button-next',
									prevEl: '.swiper-button-prev',
								},
							});
						</script>
						<!--product slider END-->

					</div>
					<div class="pdt_btn tc">
						<a href="../Downloads/202411/Mitac K220_datasheet_20241113.pdf" target="_blank" class="btn-long btn-fill-lightBlue btn-round mb-10" style="">下載產品規格書</a>
						<a href="./general-inquiry.php?class=2" class="btn-long btn-fill-black btn-round mb-10" style="">聯絡我們</a>
					</div>
				</div>
				<div class="col-md-6">	
					<!-- <h2 class="FC_mdtB mt_mb_3 pt_pb_1r pdt_name">K220</h2> -->
					<div class="pdt_name pt_pb_1r">
						<h1 class="FC_mdtB h2">K220</h1>
						<p>經濟實惠的選擇</p>
					</div>
					<ul class="mt_2 pl-30">
						<li>4G LTE 聯網</li>
						<li>AT&amp;T 電信商與 AWS認證</li>
						<li>資料同步儲存於本機SD 卡和雲端</li>
						<li>支援開放式API與SDK，協助客戶輕鬆整合至各種平台</li>
						<li>內建車輛電瓶低電壓保護功能</li>
						<li>防竄改設計</li>
					</ul>
					<div class="pdt_desc_ico">
						<img src="../images/connected_dashcam/android.jpg" alt="Android platform" />
						<img src="../images/connected_dashcam/Qualcomm.jpg" alt="Qualcomm solution" />
						<img src="../images/connected_dashcam/aws.jpg" alt="AWS Certification" />
						<img src="../images/connected_dashcam/ATT.jpg" alt="AT&amp;T Network Ready Device" />
						<img src="../images/connected_dashcam/PTCRB.jpg" alt="PCTRB Certification" />
					</div>
				</div>
			</div>	
		</div>		
	</div>

	<div class="ProdcuctNavPlaceholder"></div>
	<div class="product-nav">
		<div class="container">
			<div class="row">
        <div class="col-12 d-lg-none">
        <a class="product-nav_title" href="javascript:void(0);">
					K220
        </a>
          <div class="bg"></div>
        </div>
				<ul class="col-12">
					<li><a href="#pdt_detail">功能介紹</a></li>
					<li><a href="#pdt_spec">規格</a></li>
					<li><a href="#pdt_accs">配件</a></li>
        </ul>
			</div>
		</div>
	</div>

	<!--Detailed Views-->
	<div class="section productDetail over-hide mt-10" id="pdt_detail">
		<div class="container">	
			<div class="row">	
			  <div class="col-md-12 align-items-stretch padding-top-bottom-smaller background-grey">
					<div class="productGrid section justify-content-center text-left">
						<h4 class="FC_mdt1 tc"><span>功能介紹</span></h4>
					</div>	
				</div>
				<div class="col-md-12 align-items-stretch padding-bottom-small background-grey">	
					<div class="productGrid section justify-content-center text-left rwd-padding-on-grid pdt_img">
						<img src="../images/video-telematics/K220_detailed_views_01.png" class="img-fluid mx-auto rounded d-none d-md-block" alt="K220 Detailed" />
						<img src="../images/video-telematics/K220_detailed_views_m_01.png" class="img-fluid mx-auto rounded d-block d-md-none" alt="K220 Detailed" />
					</div>
				</div>
				<div class="col-md-12 align-items-stretch padding-bottom-small background-grey">	
					<div class="productGrid section justify-content-center text-left rwd-padding-on-grid pdt_img">
						<img src="../images/video-telematics/K220_detailed_views_02.png" class="img-fluid mx-auto rounded d-none d-md-block" alt="K220 Detailed" />
						<img src="../images/video-telematics/K220_detailed_views_m_02.png" class="img-fluid mx-auto rounded d-block d-md-none" alt="K220 Detailed" />
					</div>
				</div>
				<div class="col-md-12 align-items-stretch padding-bottom-small background-grey">	
					<div class="productGrid section justify-content-center text-left rwd-padding-on-grid pdt_img">
						<img src="../images/video-telematics/K220_detailed_views_03.png" class="img-fluid mx-auto rounded d-none d-md-block" alt="K220 Detailed" />
						<img src="../images/video-telematics/K220_detailed_views_m_03.png" class="img-fluid mx-auto rounded d-block d-md-none" alt="K220 Detailed" />
					</div>
				</div>
			</div>

		</div>	
	</div>


	<!--Specifications-->
	<div class="section productDetail over-hide mt-10" id="pdt_spec">
		<div class="container">
			<div class="row">	
				<div class="col-md-12 align-items-stretch padding-top-bottom-smaller">
						<div class="productGrid section justify-content-center text-left">
							<h4 class="FC_mdt1 tc"><span>Specifications</span></h4>
						</div>	
				</div>
			</div>
			<div class="data-table product-specs-table table-responsive">
				<table>
					<tbody>
						<tr>
							<th class="label">Product</th>
							<td class="data">Qualcomm<sup>&reg;</sup> Snapdragon<sup>&trade;</sup> SDM450 Octa core, 1.8GHz</td>
						</tr>
						<tr>
							<th class="label">OS</th>
							<td class="data">Android<sup>&trade;</sup> 9.0</td>
						</tr>
						<tr>
							<th class="label">Memory</th>
							<td class="data">2GB RAM / 16GB internal storage</td>
						</tr>
						<tr>
							<th class="label">Expansion</th>
							<td class="data">MicroSD slot (up to 512GB support)</td>
						</tr>
						<tr>
							<th class="label">Wireless Interface</th>
							<td class="data">
								<ul>
									<li>IEEE 802.11 a/b/g/n/ac (2.4GHz & 5GHz)</li>
									<li>Bluetooth<sup>&reg;</sup> 4.2 BLE</li>
									<li>GPS, QZSS, GLONASS, Galileo (supports ADR**)</li>
								</ul>
							</td>
						</tr>
						<tr>
							<th class="label">Camera</th>
							<td class="data">
								<ul>
									<li>MicroSD slot (up to 512GB capacity)</li>
									<li>Mini USB x1 (supports external cam, USB type)</li>
									<li>Built-in mic x1</li>
									<li>Built-in speaker x1</li>
								</ul>
							</td>
						</tr>
						<tr>
							<th class="label">Buttons</th>
							<td class="data">Emergency recording button</td>
						</tr>
						<tr>
							<th class="label">Environment</th>
							<td class="data">
								<ul>
									<li>-20 to +60C (-40 to +140F) operating temperature</li>
									<li>-20 to +70C (-40 to +158F) operating temperature (under certain conditions)</li>
									<li>-30° to +85°C (-22° to +185°F) storage temperature</li>
								</ul>
							</td>
						</tr>
						<tr>
							<th class="label">Certification*</th>
							<td class="data">CE, CB, FCC/IC, UKCA, BQB, PTCRB, WEEE, ROHS, AT&amp;T Network Ready, AWS, BIS</td>
						</tr>
						<tr>
							<th class="label">Dimensions</th>
							<td class="data">112 x 70 x 47.9mm</td>
						</tr>
						<tr>
							<th class="label">Remark</th>
							<td class="data tc" colspan="2">*Region Dependent, **Optional</td>
						</tr>
					</tbody>
				</table>
			</div>

		</div>
	</div>


	<!--Accessories-->
	<div class="section productDetail over-hide mt-10" id="pdt_accs">
		<div class="container">
			<div class="row">	
				<div class="col-md-12 align-items-stretch padding-top-bottom-smaller">
						<div class="productGrid section justify-content-center text-left">
							<h4 class="FC_mdt1 tc"><span>配件</span></h4>
						</div>	
				</div>
			</div>

			<div class="row">	
			  <div class="col-md-4 align-items-stretch tc">	
					<div class="accsBox">	
						<h5>外接鏡頭</h5>
						<img src="../images/connected_dashcam/pdt/P.23-4.png" alt="配件 外接鏡頭" />
						<p class="st2">
							需另外購買
						</p>
					</div>
				</div>
				<div class="col-md-4 align-items-stretch tc">	
					<div class="accsBox">	
						<h5>外接鏡頭</h5>
						<img src="../images/video-telematics/P.26-5.png" alt="配件 外接鏡頭" />
						<p class="st2">
							需另外購買
						</p>
					</div>
				</div>
				<div class="col-md-4 align-items-stretch tc">	
					<div class="accsBox">	
						<h5>改良式供電車載資料傳輸接頭</h5>
						<img src="../images/connected_dashcam/pdt/smart_cable.png" alt="配件 改良式供電車載資料傳輸接頭" />
						<p class="st2">
							需另外購買
						</p>
					</div>
				</div>
				
				
			</div>
			<div class="row">	
				<div class="col-md-4 align-items-stretch tc">	
					<div class="accsBox">	
						<h5>遠端手動錄影觸發按鈕</h5>
						<img src="../images/connected_dashcam/pdt/P.23-5.png" alt="配件 遠端手動錄影觸發按鈕" />
						<p class="st2">
							需另外購買
						</p>
					</div>
				</div>
				<div class="col-md-4 align-items-stretch tc">	
					<div class="accsBox">	
						<h5>OBD電源供應線</h5>
						<img src="../images/connected_dashcam/pdt/P.23-1.png" alt="配件 OBD電源供應線" />
						<p class="st2">
						  標準配件
						</p>
					</div>
				</div>
				<div class="col-md-4 align-items-stretch tc">	
					<div class="accsBox">	
						<h5>電源線 (含ACC訊號)</h5>
						<img src="../images/connected_dashcam/pdt/p23-2.png" alt="配件 電源線 (含ACC訊號)" />
						<p class="st2">
							需另外購買
						</p>
					</div>
				</div>
			</div>
					<div class="pdt_btn tc">
						<a href="../Downloads/202402/CDR_Accessory_brochure_20240206.pdf" target="_blank" class="btn-long btn-fill-lightBlue btn-round mb-10" style="">下載配件規格書</a>
					</div>
		</div>
	</div>

<?php
	include 'inc/FOOTER.php';
?>