<?php
	include 'inc/HEADER.php';
?>

	<!--home slider-->
	<!-- Swiper -->
	<!-- home -->
	<div class="section mt-85">
		<div class="embed-responsive embed-responsive-16by9">
			<iframe id="ytplayer" type="text/html" src="https://www.youtube.com/embed/ppfIsR6fDqI?rel=0&autoplay=1&enablejsapi=1&loop=1" frameborder="0"></iframe>
			<script src="https://www.youtube.com/iframe_api"></script>
			<script>
				var player;

				function onYouTubeIframeAPIReady() {
						player = new YT.Player('ytplayer', {
								events: {
										'onReady': onPlayerReady,
										'onStateChange': onPlayerStateChange
								}
						});
				}
				function onPlayerReady(event) {
						player.mute();
						player.playVideo();
				}
				function onPlayerStateChange(event){
					if(event.data === 0) {
						player.playVideo();
					}
				}
			</script>
		</div>
</div>


	
	
	<div class="section padding-top-bottom background-white">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-10">	
					<div class="call-box-4">
						<h1 class="h2 tc mb-20">Innovative Pioneer in Automotive Electronic and AIOT Industry</h1>
						<p class="ContImp">A trusted leader in automotive electronics , MiTAC Digital Technology (MDT) helps users navigate life with passion, positivity and a drive to keep moving forward.
						Beyond automotive electronics , MDT is at the forefront of innovation in the fields of AIoT and industrial tablets. We take our customer in new and exciting directions with thoughtful designs that reflect highest principles of quality and ingenuity.</p>
					</div>
				</div>
			</div>	
		</div>		
	</div>


	<div class="section">
		<div class="sec sec-case">
			<div class="p-case-list-index _load">
				<div class="areas">
					<div class="item item--itokin">
						<a href="dashcam-recorder.php" data-track-category="トップページ" data-track-action="ITOKIN CORPORATE SITE">
							<div class="txt-wrap" style="opacity: 1;">
								<h3 class="FC_W ttl"><h2 class="em h3"><i class="fa fa-chevron-right" aria-hidden="true"></i> Smart Mobility</h2><span></span></h3>
								<p class="leads">
									<span>As a leading innovator in automotive electronics, MDT provides comfort and safety to drivers and their passengers.</span>
								</p>
								<span class="btn btn-blue btn-round btn-long" href="dashcam-recorder.php">Discover More</span>
								<p class="more"><span></span></p>
							</div>
							<span class="img" style="opacity: 1;"><img src="../ext/3screen/images/product_01.jpg" alt="Smart Mobility"></span>
						</a>
					</div>
					
					<div class="item item--mizuno">
						<a href="video-telematics.php" data-track-category="トップページ" data-track-action="MIZUNO BEYONDMAX BRAND SITE">
							<div class="txt-wrap" style="opacity: 1;">
								<h3 class="FC_W ttl"><h2 class="em h3"><i class="fa fa-chevron-right" aria-hidden="true"></i> Smart Telematics</h2><span></span></h3>
								<p class="leads">
									<span>A pioneer in both information technology and the automotive fields, MDT continues to move ahead with connected car solution to provide users with instant information sharing, remote monitoring, cloud storage, and user behavior analysis.</span>
								</p>
								<span class="btn btn-blue btn-round btn-long" href="video-telematics.php">Discover More</span>
								<p class="more"><span></span></p>
							</div>
							<span class="img" style="opacity: 1;"><img src="../ext/3screen/images/product_02.jpg" alt="Smart Telematics"></span>
						</a>
					</div>
					
					<div class="item item--third">
						<a href="tablet.php" data-track-category="トップページ" data-track-action="ENFÖLD BRAND SITE / EC SITE">
							<div class="txt-wrap" style="opacity: 1;">
								<h3 class="FC_W ttl"><h2 class="em h3"><i class="fa fa-chevron-right" aria-hidden="true"></i> Smart  Industrials</h2><span></span></h3>
								<p class="leads">
									<span>To meet the demands of doing business today, MDT has developed a range devices and device management platforms that make transport, retail, hospitality, healthcare, and industrial processes more efficient and cost-effective.</span>
								</p>
								<span class="btn btn-blue btn-round btn-long" href="tablet.php">Discover More</span>
								<p class="more"><span></span></p>
							</div>
							<span class="img" style="opacity: 1;"><img src="../ext/3screen/images/product_03.jpg" alt="Smart Industrials"></span>
						</a>
					</div>

					<div class="item item--enfold">
						<a href="outdoor-luminaires.php" data-track-category="トップページ" data-track-action="ENFÖLD BRAND SITE / EC SITE">
							<div class="txt-wrap" style="opacity: 1;">
								<h3 class="FC_W ttl"><h2 class="em h3"><i class="fa fa-chevron-right" aria-hidden="true"></i> Smart  IOT</h2><span></span></h3>
								<p class="leads">
									<span>Equipped with a smart control unit, flexible sensors, and a camera, our location-based outdoor luminaire solution realizes the integration of lighting, monitoring, tracking, and sensing.</span>
								</p>
								<span class="btn btn-blue btn-round btn-long" href="outdoor-luminaires.php">Discover More</span>
								<p class="more"><span></span></p>
							</div>
							<span class="img" style="opacity: 1;"><img src="../ext/3screen/images/product_04.jpg" alt="Smart IOT"></span>
						</a>
					</div>
				</div>
				
				<ul class="imgs">
					<li class="img--itokin" style="opacity: 0;"><span><img src="../ext/3screen/images/product_01.jpg" alt="Smart Mobility"></span></li>
					<li class="img--mizuno" style="opacity: 0;"><span><img src="../ext/3screen/images/product_02.jpg" alt="Smart Telematics"></span></li>
					<li class="img--third" style="opacity: 0;"><span><img src="../ext/3screen/images/product_03.jpg" alt="Smart Industrialt"></span></li>
					<li class="img--enfold" style="opacity: 0;"><span><img src="../ext/3screen/images/product_04.jpg" alt="Smart IOT"></span></li>
				</ul>
			</div>
		</div>
		
	</div>

	
	
	<div id="capability_banner" class="section padding-top-small padding-bottom">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6">	
					<div class="main-title tc"><h3 class="h2">Capability</h3></div>
				</div>
			</div>
			<div class="row">
				<div id="pageIndex" class="animsition-overlay">

					<div class="secBanner" data-450="opacity: 1;" data-600="opacity: 0;">
						<ul id="bannerListing">
							<li>
								<div class="imgHolder"><img src="../images/home_capability1.jpg" alt="Automated production"/></div>
								<div class="contentHolder_home" data-0="margin-top: 0px;" data-350="margin-top: -50px;" data-500="margin-top: -100px;">
									<h3 class="FC_mdtB2 mb-30">Engineering</h3>
									<p>After enhancing our identity with smart camera products and connected services, we continue to build on our reputation as a leader in car safety while breaking fresh ground in AIOT, innovating new ways to meet our customers’ needs.</p>
									<a class="btn btn-lg" href="engineering.php">Discover More</a>
								</div>
							</li>
							<li>
								<div class="imgHolder"><img src="../images/home_capability2.jpg" alt="EMC lab (Electro Magnetic Compatibility Lab)"/></div>
								<div class="contentHolder_home" data-0="margin-top: 0px;" data-350="margin-top: -50px;" data-500="margin-top: -100px;">
									<h3 class="FC_mdtB2 mb-30">Quality Management</h3>
									<p>We apply six processes to our rigorous quality control principles — DQ, CE, SQA, PQA, OQA, and Service — to ensure all MDT products meet the strictest standards before delivery to our customer.</p>
									<a class="btn btn-lg" href="quality-management.php">Discover More</a>
								</div>
							</li>
							<li>
								<div class="imgHolder"><img src="../images/home_capability3.jpg" alt="MDT's products are produced in a 1,790, 000 square-foot manufacturing facility in Kunshan, China featuring automated production, a rigorous management system and international certifications including ISO 9001, ISO 14001 and IATF16949. "/></div>
								<div class="contentHolder_home" data-0="margin-top: 0px;" data-350="margin-top: -50px;" data-500="margin-top: -100px;">
									<h3 class="FC_mdtB2 mb-30">Manufacturing Excellence</h3>
									<p>MDT’s 1,790,000-square-foot manufacturing site in China is certified to ISO 9001, ISO14001, IHSAS18000,IATF16949, ISO13485, and GMP standards.</p>
									<a class="btn btn-lg" href="manufacturing-excellence.php">Discover More</a>
								</div>
							</li>
						</ul>
					</div>
				
				</div>
			</div>
		</div>
	</div>
	<!--slider_qm-->
	<script src="../ext/slider_qm/owl.carousel.js"></script>
	<script src="../ext/slider_qm/animsition.min.js" charset="utf-8"></script>

	<script>
		jQuery(window).load(function() {
			$(".secBanner").delay(100).animate({top:'0px'},{duration:1000});
			$(".secBanner .imgHolder").delay(500).animate({opacity:'1'},{duration:800}, "linear");
			$(".secBanner .contentHolder_home").delay(100).animate({top:'50%'},{duration:1000}, "linear");
			//$("header").delay(0).animate({marginTop:'0px'},{duration:800}, "linear");
		})
		
		var owl = $('#bannerListing');
		owl.owlCarousel({
			dots: true,
			autoplay: true,
			autoplayTimeout: 10000,
			loop:true,
			margin: 100,
			items:1
		})
	</script>
	
	
	<div class="section background-grey padding-top-bottom-small">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6">	
					<div class="main-title tc"><h3 class="h2">Press &amp; Events</h3></div>
				</div>
			</div>
			<div class="row">

				<div class="col-lg-4 col-sm-6 mb-30" data-scroll-reveal="enter bottom move 40px over 0.8s after 0.2s">
					<div class="pricing pt_pb_1r background-white borderTop_B">
						<div class="pn_p p">Press</div>
						<div class="pricing-sub p mb_1">2021.11.24</div>
						<h6 class="tit-H"><a class="FC_mdtG" href="press-events-20211124.php">MiTAC Digital Tech. wins Taiwan Excellence Award</a></h6>
						<div class="pricing-img"><a href="press-events-20211124.php"><img src="../images/press_news/press-room-new-pic-20211124-w920.jpg" alt="A trusted leader in automotive electronics, MiTAC Digital Technology Corporation (MDT) announces two industry awards in the company’s milestone. The winning products of the 30th Taiwan Excellence Awards are the Mio Cyclo Discover Pal and the MioEYE K Series."></a></div>
					</div>
				</div>
				<div class="clearfix hidden-xs"></div>

				<div class="col-lg-4 col-sm-6 mb-30" data-scroll-reveal="enter bottom move 40px over 0.8s after 0.2s">
					<div class="pricing pt_pb_1r background-white borderTop_B">
						<div class="pn_p p">Press</div>
						<div class="pricing-sub p mb_1">2019.04.11</div>
						<h6 class="tit-H"><a class="FC_mdtG" href="press-events-20190411.php">MiTAC Digital Technology announces partnership with UK InsurTech company to launch fully integrated telematics dash cam</a></h6>
						<div class="pricing-img"><a href="press-events-20190411.php"><img src="../images/press_news/MiVue_733_merge.png" alt="Mio dashcam - MiVue series "></a></div>
					</div>
				</div>
				<div class="clearfix hidden-xs"></div>
			
				<div class="col-lg-4 col-sm-6 mb-30" data-scroll-reveal="enter bottom move 40px over 0.8s after 0.2s">
					<div class="pricing pt_pb_1r background-white borderTop_O">
						<div class="pn_e p">Event</div>
						<div class="pricing-sub p mb_1">2019.02.26</div>
						<h6 class="tit-H"><a class="FC_mdtG" href="press-events-20190226.php">MiTAC Digital Technology exhibits its professional tablets and backend MDM solution at Embedded World 2019</a></h6>
						<div class="pricing-img"><a href="press-events-20190226.php"><img src="../images/press_news/Embedded_World_2019-1.jpg" alt="Mio @ 2019 embedded world"></a></div>
					</div>
				</div>
				<div class="clearfix hidden-xs"></div>
			
				<!--<div class="col-lg-4 col-sm-6 mb-30" data-scroll-reveal="enter bottom move 40px over 0.8s after 0.2s">
					<div class="pricing pt_pb_1r background-white borderTop_B">
						<div class="pn_p p">Press</div>
						<div class="pricing-sub p mb_1">2017.08.21</div>
						<h6 class="tit-H"><a class="FC_mdtG" href="press-events-20170821.php">MiTAC Holdings Corp. Expands Its Electronics Manufacturing to India With Infopower Investment</a></h6>
						<div class="pricing-img"><a href="press-events-20170821.php"><img src="../images/press_news/India_With_Infopower.jpg" alt="MiTAC Holdings Corp. Expands Its Electronics Manufacturing to India With Infopower Investment"></a></div>
					</div>
				</div>
				<div class="clearfix hidden-xs"></div>-->

			</div>
			<div class="row justify-content-center mt_6">
				<div class="col-md-6">
					<!--<div class="tc"><a href="#" class="h4" style="color:#313139;">More Press &amp; Events +</a></div>-->
				</div>
			</div>
		</div>		
	</div>
	
	

	<div class="section section-parallax padding-top-bottom-1st" id="home_discover">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6">	
					<div class="main-title tc"><h3 class="FC_W h2">Discover MDT</h3></div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-6">	
					<p class="ContGen FC_W">As one of the world’s most reputable automotive eletronics brand, MiTAC Digital Technology meets the real needs of customers with its core competencies in GPS  and image processing technologies, in combination with its passion, eagerness, positive attitude and determination. </p>
					<div class="tc mt-30">
						<a href="company-overview.php" class="btn btn-blue btn-round btn-lg">Discover More</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	
	<div class="section padding-top-bottom-small">
		<div class="container">
			<div class="row justify-content-center home_2col_pic">
			
				<div class="col-md-6 col-sm-6 col-6 pd-0 portfolio-box" >
					<div class="home_colorBox2">
						<a href="recruitment.php" class="h2">Recruitment</a>
						<span class="h2"><i class="fa fa-user-o" aria-hidden="true"></i></span>
					</div>
					<a href="recruitment.php">
						<figure class="image-hover">
							<img src="../images/home_hr.jpg" class="attachment-portfolio-3-col size-portfolio-3-col wp-post-image" sizes="(max-width: 570px) 100vw, 561px" alt="MDT_recruitment">
							<figcaption></figcaption>
						</figure>
					</a>
				</div>
				
				<div class="col-md-6 col-sm-6 col-6 pd-0 portfolio-box" >
					<div class="home_colorBox1">
						<a href="general-inquiry.php" class="h2">Contact</a>
						<span class="h2"><i class="fa fa-comments-o" aria-hidden="true"></i></span>
					</div>
					<a href="general-inquiry.php">
						<figure class="image-hover">
							<img src="../images/home_contact.jpg" class="attachment-portfolio-3-col size-portfolio-3-col wp-post-image" sizes="(max-width: 570px) 100vw, 561px" alt="MDT_contact us">
							<figcaption></figcaption>
						</figure>
					</a>
				</div>
				
			</div>
		</div>		
	</div>



<?php
	include 'inc/FOOTER.php';
?>
