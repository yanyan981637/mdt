<?php
include 'inc/HEADER.php';
?>

<!--home slider-->
<!-- Swiper -->
<div class="fix-slider"></div><!--to solve not full width-->

<!-- home -->
<div class="section mt-85">
	<div class="embed-responsive embed-responsive-16by9" id="home-slide">
		<div class="swiper mySwiper">
			<div class="swiper-wrapper">
				<!--<div class="swiper-slide">
					<div class="show-pc img">
						<img src="../images/home/xxx.jpg" alt="">
					</div>
					<div class="show-tablet img">
						<img src="../images/home/xxx.jpg" alt="">
							<div class="banner-text">
								<h5></h5>
								<p></p>
							</div>
					</div>
				<div class="show-mobile img">
				<img src="../images/home/xxx.jpg" class="show-mobile" alt="">
				<div class="banner-text">
				<h5></h5>
				<p></p>
				</div>
				</div>
			</div>-->
			<div class="swiper-slide">
				<a class="btn btn-round btn-youtube absolute inline" href="https://www.youtube.com/watch?v=ppfIsR6fDqI "
					target="_blank">瞭解更多</a>
					<div class="youtube_iframe" data-youtube="rnKZS2D-2HA"></div>
			</div>
		</div>
		<!--<div class="swiper-button-next swiper-button-white"></div>
		<div class="swiper-button-prev swiper-button-white"></div>
		<div class="swiper-pagination"></div>-->
		</div>
	</div>
</div>

<script>
	var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var youtube_prefix = 'slide_youtubr_'


var swiper;

swiper = new Swiper(".mySwiper", {
	centeredSlides: true,
	/*autoplay: {
		delay: 10000
	},*/
	autoplay: false,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	//loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	on: {

		slideChange: function () {
			var current = this.activeIndex
				$('.swiper-slide').each(function(i, el){
					if(current === i){
						if(el.video){
							try{
								el.video.mute().playVideo()
							}catch(error){}
						}
					}else {
						if(el.video){
							try {
								el.video.stopVideo()
							} catch (error) {
								
							}
						}
					}
					
				})
			},
	}
});


$(swiper.$el).on('mouseenter', function () {
	swiper.autoplay.stop()
})
$(swiper.$el).on('mouseleave', function () {
	swiper.autoplay.start()
})


function onYouTubeIframeAPIReady() {
	$('.swiper-slide').each(function(i, el){
		var youtube_iframe = $(el).find('.youtube_iframe');

		if(youtube_iframe.length > 0){
			$(youtube_iframe).attr('id', youtube_prefix + i);
			el.video = new YT.Player(youtube_prefix + i, {
          videoId: $(youtube_iframe).data('youtube'),
          events: {
            'onReady': function(e){
							el.video.mute().playVideo()
						},
            'onStateChange': function(e){
							if(e.data === 0){
								e.target.playVideo()
							}
						}
          }
        });
		}


	})
}


</script>

<div class="section padding-top-bottom background-white">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-10">
				<div class="call-box-4">
					<h1 class="h2 tc mb-20">車用電子及智聯網解決方案</h1>
					<p class="ContImp">
						神達數位是一個廣受信賴的車用電子領導廠商，帶領使用者正面熱情地找尋人生方向並持續向前邁進。除了致力於提供高品質的車用電子產業相關軟硬體設備，我們也是智聯網解決方案、強固型專業平板領域的創新先驅者，我們以GPS和影像處理核心技術，滿足客戶實際需求，並以體貼入微的設計反映對品質的高標準及設計巧思，引領客戶朝向嶄新且引人入勝的方向前進。
					</p>
					<p class="ContImp">我們擁有強大的技術支援團隊、嚴謹的品質管理六大程序以及符合ISO國際標準的生產製造流程，確保所有產品在送達客戶端之前皆已通過最嚴格的把關標準。</p>
					<p class="ContImp">
						神達數位的銷售遍及全球五大洲，因應全球市場的劇烈變化快速，及加強生產佈局，2020年神達數位選擇在新竹科學園區進駐與設廠，期望在提升研發能量，提供高品質生產製造，以及加強與國內汽車供應鏈合作，在汽車產業CASE(Connected連網，Autonomous自駕，Shared分享，Electric電力)願景下，攜手共創三贏。
					</p>
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
					<a href="dashcam-recorder.php" data-track-category="" data-track-action="">
						<div class="txt-wrap">
							<h3 class="FC_W ttl">
								<h2 class="em h3"><i class="fa fa-chevron-right" aria-hidden="true"></i> 智慧交通</h2>
								<span></span>
							</h3>
							<p class="leads">
								<span>作為車用電子的領導創新者，神達數位提供駕駛及乘客舒適且安全的行車環境。</span>
							</p>
							<span class="btn btn-blue btn-round btn-long" href="dashcam-recorder.php">瞭解更多</span>
							<p class="more"><span></span></p>
						</div>
						<span class="img"><img src="../ext/3screen/images/product_01.jpg" alt="智慧交通"></span>
					</a>
				</div>

				<div class="item item--mizuno">
					<a href="video-telematics.php" data-track-category="" data-track-action="">
						<div class="txt-wrap">
							<h3 class="FC_W ttl">
								<h2 class="em h3"><i class="fa fa-chevron-right" aria-hidden="true"></i> 智慧車載資通訊</h2><span></span>
							</h3>
							<p class="leads">
								<span>神達數位兼具資通訊與汽車產業領導者角色，以車聯網解決方案，不斷與時並進持續創新，提供使用者即時資訊分享，遠端控制，雲端儲存，和使用者行為分析。</span>
							</p>
							<span class="btn btn-blue btn-round btn-long" href="video-telematics.php">瞭解更多</span>
							<p class="more"><span></span></p>
						</div>
						<span class="img"><img src="../ext/3screen/images/product_02.jpg" alt="智慧車載資通訊"></span>
					</a>
				</div>

				<div class="item item--second">
					<a href="tablet.php" data-track-category="" data-track-action="">
						<div class="txt-wrap">
							<h3 class="FC_W ttl">
								<h2 class="em h3"><i class="fa fa-chevron-right" aria-hidden="true"></i> 智慧工業</h2><span></span>
							</h3>
							<p class="leads">
								<span>為了滿足現今商業模式之需求，神達數位開發出一系列專業平板裝置與裝置管理平台系統，適用於物流、觀光、醫療和工業領域，能節省成本並提升工作效率。</span>
							</p>
							<span class="btn btn-blue btn-round btn-long" href="tablet.php">瞭解更多</span>
							<p class="more"><span></span></p>
						</div>
						<span class="img"><img src="../ext/3screen/images/product_03.jpg" alt="智慧工業"></span>
					</a>
				</div>

				<div class="item item--enfold">
					<a href="outdoor-luminaires.php" data-track-category="" data-track-action="">
						<div class="txt-wrap">
							<h3 class="FC_W ttl">
								<h2 class="em h3"><i class="fa fa-chevron-right" aria-hidden="true"></i> 智慧物聯</h2><span></span>
							</h3>
							<p class="leads">
								<span>配備了智慧控制元件、彈性靈活的傳感器和攝影機，我們的定位型戶外照明解決方案實現了照明、監控、追蹤和感測的整合。</span>
							</p>
							<span class="btn btn-blue btn-round btn-long" href="outdoor-luminaires.php">瞭解更多</span>
							<p class="more"><span></span></p>
						</div>
						<span class="img"><img src="../ext/3screen/images/product_04.jpg" alt="智慧物聯"></span>
					</a>
				</div>
			</div>

			<ul class="imgs">
				<li class="img--itokin" style="opacity: 0;"><span><img src="../ext/3screen/images/product_01.jpg"
							alt="智慧交通"></span></li>
				<li class="img--mizuno"><span><img src="../ext/3screen/images/product_02.jpg" alt="智慧車載資通訊"></span></li>
				<li class="img--second"><span><img src="../ext/3screen/images/product_03.jpg" alt="智慧工業"></span></li>
				<li class="img--enfold"><span><img src="../ext/3screen/images/product_04.jpg" alt="智慧物聯"></span></li>
			</ul>
		</div>
	</div>

</div>



<div id="capability_banner" class="section padding-top-small padding-bottom">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-6">
				<div class="main-title tc">
					<h2>技術支援</h2>
				</div>
			</div>
		</div>
		<div class="row">
			<div id="pageIndex" class="animsition-overlay">

				<div class="secBanner" data-450="opacity: 1;" data-600="opacity: 0;">
					<ul id="bannerListing">
						<li>
							<div class="imgHolder"><img src="../images/home_capability1.jpg" alt="工廠自動化生產" /></div>
							<div class="contentHolder_home" data-0="margin-top: 0px;" data-350="margin-top: -50px;"
								data-500="margin-top: -100px;">
								<h3 class="FC_mdtB2 mb-30">研發實力</h3>
								<p>在提升於智慧攝影機和連網服務領域的企業識別度後，神達數位持續打造在汽車安全領域領導者的名聲，同時開創在智聯網領域之研發，引領創新科技，滿足客戶的需求。</p>
								<a class="btn btn-lg" href="engineering.php">瞭解更多</a>
							</div>
						</li>
						<li>
							<div class="imgHolder"><img src="../images/home_capability2.jpg" alt="EMC實驗室 (電磁兼容性實驗室)" /></div>
							<div class="contentHolder_home" data-0="margin-top: 0px;" data-350="margin-top: -50px;"
								data-500="margin-top: -100px;">
								<h3 class="FC_mdtB2 mb-30">品質管理</h3>
								<p>我們運用六個程序在嚴謹的品質管理準則中-
									DQE(設計品質)，CE(零件品質)，SQA(軟體品質)，PQA(程序品質)，OQA(成品品質)，Service(服務)，以確保所有神達位的產品在送達客戶端之前皆已通過最嚴格的把關標準。</p>
								<a class="btn btn-lg" href="quality-management.php">瞭解更多</a>
							</div>
						</li>
						<li>
							<div class="imgHolder"><img src="../images/home_capability3_new_20230614.jpg"
									alt="神達數位生產工廠位於華東地區，配備自動化生產設備，與嚴謹的管理系統，並擁有多項國際ISO認證" /></div>
							<div class="contentHolder_home" data-0="margin-top: 0px;" data-350="margin-top: -50px;"
								data-500="margin-top: -100px;">
								<h3 class="FC_mdtB2 mb-30">生產製造</h3>
								<p>
									神達數位位於中國的生產製造基地占地一百七十萬九千平方英尺，擁有ISO9001、ISO14001、IHSAS18000、IATF16949、ISO13485、GMP等多項國際認證，先進的自動化生產設備及嚴謹的品管系統，能夠提供高品質產品，滿足客戶特殊需求。
								</p>
								<a class="btn btn-lg" href="manufacturing-excellence.php">瞭解更多</a>
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
	jQuery(window).load(function () {
		$(".secBanner").delay(100).animate({ top: '0px' }, { duration: 1000 });
		$(".secBanner .imgHolder").delay(500).animate({ opacity: '1' }, { duration: 800 }, "linear");
		$(".secBanner .contentHolder_home").delay(100).animate({ top: '50%' }, { duration: 1000 }, "linear");
		//$("header").delay(0).animate({marginTop:'0px'},{duration:800}, "linear");
	})

	var owl = $('#bannerListing');
	owl.owlCarousel({
		dots: true,
		autoplay: true,
		autoplayTimeout: 10000,
		loop: true,
		margin: 100,
		items: 1
	})
</script>


<div class="section background-grey padding-top-bottom-small">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-6">
				<div class="main-title tc">
					<h2>最新消息</h2>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 col-sm-6 mb-30" data-scroll-reveal="enter bottom move 40px over 0.8s after 0.2s">
				<div class="pricing pt_pb_1r background-white borderTop_B">
					<div class="pn_p p">新聞</div>
					<div class="pricing-sub p mb_1">2023.05.15</div>
					<h6 class="tit-H"><a class="FC_mdtG" href="press-events-20230515.php">神達數位旗下電子後視鏡型行車記錄器 – Mio MiVue R850 系列榮獲
							2023 年 iF 設計獎！</a></h6>
					<div class="pricing-img"><a href="press-events-20230515.php"><img
								src="../images/press_news/press-room-new-pic-20230515-cover.png"
								alt="神達數位旗下電子後視鏡型行車記錄器 – Mio MiVue R850D榮獲 2023 年 iF 設計獎！"></a></div>
				</div>
			</div>
			<div class="clearfix hidden-xs"></div>

			<div class="col-lg-4 col-sm-6 mb-30" data-scroll-reveal="enter bottom move 40px over 0.8s after 0.2s">
				<div class="pricing pt_pb_1r background-white borderTop_B">
					<div class="pn_p p">新聞</div>
					<div class="pricing-sub p mb_1">2022.11.23</div>
					<h6 class="tit-H"><a class="FC_mdtG" href="press-events-20221123.php">MiTAC
							車載視訊管理解決方案及全螢幕觸控式電子後視鏡型行車記錄器雙雙獲得台灣精品獎肯定</a></h6>
					<div class="pricing-img"><a href="press-events-20221123.php"><img
								src="../images/press_news/press-room-new-pic-20221123-w920-2.jpg"
								alt="MiTAC 車載視訊管理解決方案及全螢幕觸控式電子後視鏡型行車記錄器雙雙獲得台灣精品獎肯定"></a></div>
				</div>
			</div>
			<div class="clearfix hidden-xs"></div>

			<div class="col-lg-4 col-sm-6 mb-30" data-scroll-reveal="enter bottom move 40px over 0.8s after 0.2s">
				<div class="pricing pt_pb_1r background-white borderTop_B">
					<div class="pn_p p">新聞</div>
					<div class="pricing-sub p mb_1">2022.05.24</div>
					<h6 class="tit-H"><a class="FC_mdtG" href="press-events-20220524.php">神達數位車載視訊管理解決方案獲Computex Best Choice
							Award肯定</a></h6>
					<div class="pricing-img"><a href="press-events-20220524.php"><img
								src="../images/press_news/2022BC Award_ProductImage_EVO_with_BC1.png"
								alt="神達數位車載視訊管理解決方案獲Computex Best Choice Award肯定"></a></div>
				</div>
			</div>
			<div class="clearfix hidden-xs"></div>
		</div>
		<div class="row justify-content-center mt_6">
			<div class="col-md-6">
				<!--<div class="tc"><a href="#" class="h4" style="">More Press &amp; Events +</a></div>-->
			</div>
		</div>
	</div>
</div>



<div class="section section-parallax padding-top-bottom-1st" id="home_discover">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-6">
				<div class="main-title tc">
					<h2 class="FC_W">關於神達數位</h2>
				</div>
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-md-6">
				<p class="ContGen FC_W">神達數位是世界知名的車用電子產品領導廠商，以GPS和影像處理核心技術，結合熱情、積極、正向的態度與決心，滿足客戶實際需求。</p>
				<div class="tc mt-30">
					<a href="company-overview.php" class="btn btn-blue btn-round btn-lg">
						<h6>瞭解更多</h6>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>


<div class="section padding-top-bottom-small">
	<div class="container">
		<div class="row justify-content-center home_2col_pic">

			<div class="col-md-6 col-sm-6 col-6 pd-0 portfolio-box">
				<div class="home_colorBox2">
					<a href="recruitment.php" class="h2">加入我們</a>
					<span class="h2"><i class="fa fa-user-o" aria-hidden="true"></i></span>
				</div>
				<a href="recruitment.php">
					<figure class="image-hover">
						<img src="../images/home_hr.jpg" class="attachment-portfolio-3-col size-portfolio-3-col wp-post-image"
							sizes="(max-width: 570px) 100vw, 561px" alt="歡迎加入神達數位大家庭">
						<figcaption></figcaption>
					</figure>
				</a>
			</div>

			<div class="col-md-6 col-sm-6 col-6 pd-0 portfolio-box">
				<div class="home_colorBox1">
					<a href="general-inquiry.php" class="h2">聯絡我們</a>
					<span class="h2"><i class="fa fa-comments-o" aria-hidden="true"></i></span>
				</div>
				<a href="general-inquiry.php">
					<figure class="image-hover">
						<img src="../images/home_contact.jpg" class="attachment-portfolio-3-col size-portfolio-3-col wp-post-image"
							sizes="(max-width: 570px) 100vw, 561px" alt="神達數位＿聯絡我們">
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