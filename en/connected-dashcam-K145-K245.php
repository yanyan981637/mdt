<?php
	include 'inc/HEADER.php';
?>
	<!-- Primary Page Layout
	================================================== -->
	<!-- Hero Block
	================================================== -->
	<div class="SecTopNav">
		<div class="container">
			<div class="row">
				<div class="col-md-12 hidden-xs">
					<span><a href="#pdt_detail">Detailed Views</a></span>
					<span><a href="#pdt_spec">Specifications</a></span>
					<span><a href="#pdt_accs">Accessories</a></span>
				</div>
			</div>
		</div>
	</div>


	<div class="section productDetail background-white">
		<div class="container">
			<div class="row">
				<div class="col-md-6">	
					<div class="pdt_img">

						<!-- product slider -->
						<div style="background: #fff; height:1px; "></div><!--to solve not full width-->
						<div class="swiper-container">
							<div class="swiper-wrapper">
									<div class='swiper-slide'>
										<img src="../images/connected_dashcam/pdt/K145_W.png" />
									</div>

									<div class='swiper-slide'>
										<img src="../images/connected_dashcam/pdt/K245_W.png" />
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
						<a href="../Downloads/202304/Mitac_K145-245_datasheet_20230419.pdf" target="_blank" class="btn-long btn-fill-lightBlue btn-round mb-10" style="">Download Datasheet</a>
						<a href="./general-inquiry.php?class=2" class="btn-long btn-fill-black btn-round mb-10" style="">Contact Us</a>
					</div>
				</div>
				<div class="col-md-6">	
					<h2 class="FC_mdtB mt_mb_3 pt_pb_1r pdt_name">K145/K245</h2>
					<ul>
						<li>Dual forward & in-cabin facing Full HD camera with 142° FOV</li>
						<li>Built-in 4G LTE Cat.6 & dual-band WiFi</li>
						<li>Bluetooth 4.2 BLE, NFC/HF RFID</li>
						<li>Qualcomm Octa-core & Android 9</li>
						<li>Single Micro SD slots (up to 512GB)</li>
						<li>GPS, GLONASS, Galileo, QZSS</li>
						<li>6-axis Accelerometer & Gyro</li>
						<li>Battery discharge prevention</li>
					</ul>
					<div class="pdt_desc_ico">
						<img src="../images/connected_dashcam/android.png" />
						<img src="../images/connected_dashcam/Qualcomm.png" />
						<img src="../images/connected_dashcam/aws.png" />
					</div>
				</div>
			</div>	
		</div>		
	</div>

	<!--Detailed Views-->
	<div class="section productDetail over-hide pt_3r" id="pdt_detail">
		<div class="container">
			<div class="row">	
				<div class="col-md-12 align-items-stretch padding-top-bottom-smaller background-grey">
						<div class="productGrid section justify-content-center text-left">
							<h4 class="FC_mdt1 tc"><span>Detailed Views</span></h4>
						</div>	
				</div>
				<div class="col-md-5 align-items-stretch background-grey">	
					<div class="productGrid section justify-content-center text-left rwd-padding-on-grid pdt_img">
						<img src="../images/connected_dashcam/pdt/P.12-1.png" />
						<img src="../images/connected_dashcam/pdt/P.12-2.png" />
					</div>
				</div>
				<div class="col-md-7 align-items-stretch background-grey">	
					<div class="productGrid section justify-content-center text-left rwd-padding-on-grid">
						<div class="section text-left">	
							<div class="txtBox">	
								<h5>WINDSHIELD MOUNTING</h5>
								<p class="st2">
									Easy to install in minutes
								</p>
								<h5>NFC</h5>
								<p class="st2">
									For driver ID verification & instant pairing with other
								</p>
								<h5>4G LTE / WIFI INDICATOR</h5>
								<p class="st2">
									Blue – LTE<br/>
									Green – WiFi
								</p>
								<h5>EMERGENCY RECORDING BUTTON</h5>
								<p class="st2">
									Manually press button to protect the clip from being Overwritten
								</p>
								<h5>FORWARD CAMERA</h5>
								<p class="st2">
									Full HD 1920 x 1080 pixels<br/>
									Wide 142° FOV<br/>
									90⁰ tiltable camera angle
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>	

			<div class="row">	
				<div class="col-md-5 align-items-stretch padding-bottom-small background-grey">	
					<div class="productGrid section justify-content-center text-left rwd-padding-on-grid pdt_img">
						<img src="../images/connected_dashcam/pdt/P.14-1.png" />
						<img src="../images/connected_dashcam/pdt/P.14-2.png" />
					</div>
				</div>
				<div class="col-md-7 align-items-stretch padding-bottom-small background-grey">	
					<div class="productGrid section justify-content-center text-left rwd-padding-on-grid">
						<div class="section text-left">	
							<div class="txtBox">	
								<h5>I/O COVER WITH TAMPER-RESISTANT LOCK SCREWS</h5>
								<p class="st2">
									Prevent unauthorised access to I/O ports including Micro SD and SIM
								</p>
								<h5>INWARD CAMERA</h5>
								<p class="st2">
									Full HD 1920 x 1080 pixels<br/>
									Wide 142° FOV<br/>
									IR for low light visibility<br/>
									90⁰ tiltable camera angle
								</p>
								<h5>MINI USB</h5>
								<p class="st2">
										For data transfer and external camera connection
								</p>
								<h5>ALL-IN-ONE CONNECTOR</h5>
								<p class="st2">
									Connect to vehicle battery<br/>
									Optional ECU integration
								</p>
								<h5>MICRO SD & NANO SIM</h5>
								<p class="st2">
									Storage up to 512GB<br/>
									LTE Cat.6 (3G/2G fallback)
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>	

		</div>	
	</div>


	<!--Specifications-->
	<div class="section productDetail over-hide pt_3r" id="pdt_spec">
		<div class="container">
			<div class="row">	
				<div class="col-md-12 align-items-stretch padding-top-bottom-smaller">
						<div class="productGrid section justify-content-center text-left">
							<h4 class="FC_mdt1 tc"><span>Specifications</span></h4>
						</div>	
				</div>
			</div>
			<div class="data-table product-specs-table">
				<table>
					<tbody>
						<tr>
							<th class="label">Platform</th>
							<td class="data tc"><h5>K145</h5></td>
							<td class="data tc"><h5>K245</h5></td>
						</tr>
						<tr>
							<th class="label">Platform</th>
							<td class="data tc" colspan="2">Qualcomm® Snapdragon™ SDM450 Octa core, 1.8GHz</td>
						</tr>
						<tr>
							<th class="label">OS</th>
							<td class="data tc" colspan="2">Android™ 9.0</td>
						</tr>
						<tr>
							<th class="label">Memory</th>
							<td class="data tc" colspan="2">2GB RAM / 16GB internal storage</td>
						</tr>
						<tr>
							<th class="label">Expansion</th>
							<td class="data tc" colspan="2">MicroSD slot (up to 512GB support)</td>
						</tr>
						<tr>
							<th class="label">Wireless Interface</th>
							<td class="data tc" colspan="2">
								<ul>
									<li>IEEE 802.11 a/b/g/n/ac (2.4GHz & 5GHz)</li>
									<li>Bluetooth® 4.2 BLE</li>
									<li>GPS, QZSS, GLONASS, Galileo (supports ADR**)</li>
								</ul>
							</td>
						</tr>
						<tr>
							<th class="label">NFC</th>
							<td class="data tc" colspan="2">NFC: MiFare®, FeliCa | RFID (HF): ISO14443A&B, ISO15693</td>
						</tr>
						<tr>
							<th class="label">Camera</th>
							<td class="data">
								<ul>
									<li>Forward: FOV: D: 142° / H: 116°/ V: 60° (±5%)</li>
									<li>Full HD 1920 x 1080 @ 30fps (configurable)</li>
								</ul>
							</td>
							<td class="data">
								<ul>
									<li>Forward: FOV: D: 142° / H: 116°/ V: 60° (±5%)</li>
									<li>Full HD 1920 x 1080 @ 30fps (configurable)</li>
									<li>Inward (IR): FOV: D: 142° / H: 116°/ V: 60° (±5%)</li>
									<li>Full HD 1920 x 1080 @ 30fps (configurable)</li>
								</ul>
							</td>
						</tr>
						<tr>
							<th class="label">Physical Interface</th>
							<td class="data tc" colspan="2">
								<ul>
									<li>MicroSD slot (up to 256GB capacity)</li>
									<li>Mini USB x1 (supports 3rd cam, USB type)</li>
									<li>Built-in mic x2</li>
									<li>Built-in speaker x1</li>
								</ul>
							</td>
						</tr>
						<tr>
							<th class="label">Buttons</th>
							<td class="data tc" colspan="2">Emergency recording button for driver to manually trigger 60s recording (5 ˜ 30s before and 5 ˜ 30s after, adjustable)</td>
						</tr>
						<tr>
							<th class="label">Environment</th>
							<td class="data tc" colspan="2">
								<ul>
									<li>-20° to +60°C (-4° to +140°F) operating temperature</li>
									<li>-30° to +85°C (-22° to +185°F) storage temperature</li>
								</ul>
							</td>
						</tr>
						<tr>
							<th class="label">Certification*</th>
							<td class="data tc" colspan="2">CE, CB, FCC/IC, UKCA, RCM, BQB, ROHS, WEEE</td>
						</tr>
						<tr>
							<th class="label">Dimensions</th>
							<td class="data">98 x 61.2 x 39.2mm (3.86 x 2.41 x 1.54")</td>
							<td class="data">122.8 x 61.2 x 44.2mm (4.83 x 2.41 x 1.74")</td>
						</tr>
					</tbody>
				</table>
			</div>

		</div>
	</div>


	<!--Accessories-->
	<div class="section productDetail over-hide pt_3r" id="pdt_accs">
		<div class="container">
			<div class="row">	
				<div class="col-md-12 align-items-stretch padding-top-bottom-smaller">
						<div class="productGrid section justify-content-center text-left">
							<h4 class="FC_mdt1 tc"><span>Accessories</span></h4>
						</div>	
				</div>
			</div>

			<div class="row">	
				<div class="col-md-4 align-items-stretch tc">	
					<div class="accsBox">	
						<h5>PREMIUM CABLE</h5>
						<img src="../images/connected_dashcam/pdt/P.24-1.png" />
						<p class="st2">
							Standard accessory
						</p>
					</div>
				</div>
				<div class="col-md-4 align-items-stretch tc">	
					<div class="accsBox">	
						<h5>ENTRY CABLE</h5>
						<img src="../images/connected_dashcam/pdt/P.24-2.png" />
						<p class="st2">
							Sold separately
						</p>
					</div>
				</div>
				<div class="col-md-4 align-items-stretch tc">	
					<div class="accsBox">	
						<h5>SMART CABLE</h5>
						<img src="../images/connected_dashcam/pdt/smart_cable.png" />
						<p class="st2">
							Sold separately
						</p>
					</div>
				</div>
			</div>
			<div class="row">	
				<div class="col-md-4 align-items-stretch tc">	
					<div class="accsBox">	
						<h5>EXTERNAL CAMERA</h5>
						<img src="../images/connected_dashcam/pdt/P.23-4.png" />
						<p class="st2">
							Sold separately
						</p>
					</div>
				</div>
				<div class="col-md-4 align-items-stretch tc">	
					<div class="accsBox">	
						<h5>CABLE CAP</h5>
						<img src="../images/connected_dashcam/pdt/P.24-5.png" />
						<p class="st2">
							Sold separately
						</p>
					</div>
				</div>
				<div class="col-md-4 align-items-stretch tc">	
					<div class="accsBox">	
						<h5>PANIC BUTTON</h5>
						<img src="../images/connected_dashcam/pdt/P.24-6.png" />
						<p class="st2">
							Sold separately
						</p>
					</div>
				</div>
			</div>
					<div class="pdt_btn tc">
						<a href="../Downloads/202301/CDR_Accessory_brochure_20221031.pdf" target="_blank" class="btn-long btn-fill-lightBlue btn-round mb-10" style="">Download Datasheet</a>
					</div>
		</div>
	</div>


<?php
	include 'inc/FOOTER.php';
?>