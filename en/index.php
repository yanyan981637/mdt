<?php
include 'inc/HEADER.php';
?>

<!--home slider-->
<!-- Swiper -->
<!-- home -->
<div class="section mt-85">
  <div class="embed-responsive embed-responsive-16by9" id="home-slide">
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">

        <!-- AutoTronics Taipei -->
        <div class="swiper-slide">
          <div class="show-pc img">
            <img src="../images/home/2025_AutoTronics_Taipei.jpg" alt="2025 AutoTronics Taipei">
            <div class="banner-text-xl text-left">
              <h5>AutoTronics Taipei</h5>
              <p><span>Date:</span> 2025 04/23~04/26<br><span>Booth No:</span> L0306, Nangang Exhibition <br>&emsp;&emsp;&nbsp;&nbsp;&nbsp;Center Hall 1 (TaiNEX)</p>
            </div>
          </div>
          <div class="show-tablet img">
            <img src="../images/home/2025_AutoTronics_Taipei.jpg" alt="2025 AutoTronics Taipei">
            <div class="banner-text text-left">
              <h5>AutoTronics Taipei</h5>
              <p><span>Date:</span> 2025 04/23~04/26<br><span>Booth No:</span> L0306, Nangang Exhibition <br>&emsp;&emsp;&nbsp;&nbsp;&nbsp;Center Hall 1 (TaiNEX)</p>
            </div>
          </div>
          <div class="show-mobile img">
            <img src="../images/home/2025_AutoTronics_Taipei_m.jpg" class="show-mobile" alt="2025 AutoTronics Taipei">
            <div class="banner-text text-left">
              <h5>AutoTronics Taipei</h5>
              <p><span>Date:</span> 2025 04/23~04/26<br><span>Booth No:</span> L0306, Nangang Exhibition <br>&emsp;&emsp;&emsp;&nbsp;&nbsp;Center Hall 1 (TaiNEX)</p>
            </div>
          </div>
          <!-- <a class="btn btn-round btn-youtube absolute inline" href="https://www.taipeiampa.com.tw/zh-tw/index.html" target="_blank" aria-label="點擊觀看詳細影片">Learn More</a> -->
        </div>

        <!-- AutoTronics Taipei -->
        <div class="swiper-slide">
          <div class="show-pc img">
            <img src="../images/home/2025_automateShow.jpg" alt="2025 Automate Show">
            <!-- <div class="banner-text-xl text-left">
              <h5>AutoTronics Taipei</h5>
              <p><span>Date:</span> 2025 04/23~04/26<br><span>Booth No:</span> L0306, Nangang Exhibition <br>&emsp;&emsp;&nbsp;&nbsp;&nbsp;Center Hall 1 (TaiNEX)</p>
            </div> -->
          </div>
          <div class="show-tablet img">
            <img src="../images/home/2025_automateShow.jpg" alt="2025 Automate Show">
            <!-- <div class="banner-text text-left">
              <h5>AutoTronics Taipei</h5>
              <p><span>Date:</span> 2025 04/23~04/26<br><span>Booth No:</span> L0306, Nangang Exhibition <br>&emsp;&emsp;&nbsp;&nbsp;&nbsp;Center Hall 1 (TaiNEX)</p>
            </div> -->
          </div>
          <div class="show-mobile img">
            <img src="../images/home/2025_automateShow_m.jpg" class="show-mobile" alt="2025 Automate Show">
            <!-- <div class="banner-text text-left">
              <h5>AutoTronics Taipei</h5>
              <p><span>Date:</span> 2025 04/23~04/26<br><span>Booth No:</span> L0306, Nangang Exhibition <br>&emsp;&emsp;&emsp;&nbsp;&nbsp;Center Hall 1 (TaiNEX)</p>
            </div> -->
          </div>
          <!-- <a class="btn btn-round btn-youtube absolute inline" href="https://www.taipeiampa.com.tw/zh-tw/index.html" target="_blank" aria-label="點擊觀看詳細影片">Learn More</a> -->
        </div>

        <!-- Embedded World 2005/3/18(二)下架-->
        <!-- <div class="swiper-slide">
          <div class="show-pc img">
            <img src="../images/home/2025_Embedded_World_Include_Text.jpg" alt="2025 Embedded World MDT">
          </div>
          <div class="show-tablet img">
            <img src="../images/home/2025_Embedded_World_Include_Text.jpg" alt="2025 Embedded World MDT">
          </div>
          <div class="show-mobile img">
            <img src="../images/home/2025_Embedded_World_m.jpg" class="show-mobile" alt="2025 Embedded World MDT">
          </div>
          <a class="btn btn-round btn-youtube absolute inline" href="https://www.embedded-world.de/en/exhibitors-products/m/mitac-digital-technology-corporation" target="_blank" aria-label="Learn More">Learn More</a>
        </div> -->

        <div class="swiper-slide">
          <a class="btn btn-round btn-youtube absolute inline" href="https://www.youtube.com/watch?v=ppfIsR6fDqI "
            target="_blank">Learn More</a>
          <div class="youtube_iframe" data-youtube="rnKZS2D-2HA"></div>
        </div>
      </div>

      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
      <div class="swiper-pagination"></div>

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
    autoplay: { //
      delay: 10000
    },
  autoplay: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true, //
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  on: {

    slideChange: function() {
      var current = this.activeIndex
      $('.swiper-slide').each(function(i, el) {
        if (current === i) {
          if (el.video) {
            try {
              el.video.mute().playVideo()
            } catch (error) {}
          }
        } else {
          if (el.video) {
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

$(swiper.$el).on('mouseenter', function() {
  swiper.autoplay.stop()
})
$(swiper.$el).on('mouseleave', function() {
  swiper.autoplay.start()
})

function onYouTubeIframeAPIReady() {
  $('.swiper-slide').each(function(i, el) {
    var youtube_iframe = $(el).find('.youtube_iframe');

    if (youtube_iframe.length > 0) {
      $(youtube_iframe).attr('id', youtube_prefix + i);
      el.video = new YT.Player(youtube_prefix + i, {
        videoId: $(youtube_iframe).data('youtube'),
        events: {
          'onReady': function(e) {
            el.video.mute().playVideo()
          },
          'onStateChange': function(e) {
            if (e.data === 0) {
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
          <h1 class="h2 tc mb-20">Innovative Pioneer in Automotive Electronic and AIOT Industry</h1>
          <p class="ContImp">As a pioneering force in the automotive electronics and AIoT industries, MiTAC Digital
            Technology (MDT) has integrated its expertise in the AI as a Service (AIaaS) domain with innovative
            edge-computing platform design capabilities to provide industrial and automotive grade product solutions for
            enterprise and consumer applications.</p>



          <p class="ContImp">Our commitment to innovation extends to versatile processor development, supporting Intel
            x86, ARM, and Linux architectures to craft industrial computer solutions compatible with Windows or Android
            systems. Leveraging Edge AI alongside VisionAI technology and cloud computing, we propel our customers
            towards new and exciting directions in industrial computing solutions, reflecting the highest standards of
            quality and ingenuity.</p>



          <p class="ContImp">MDT persists in delivering comprehensive hardware and software integrated solutions,
            harnessing state-of-the-art technologies to solidify its position as a trusted leader in automotive
            electronics and IoT solutions.</p>



          <p class="ContImp">Our knowledgeable technical support teams, rigorous quality management processes, and
            ISO-compliant manufacturing facilities assure the highest product quality and reliability. To meet the rapid
            global market shifts and ensure effective product distribution across five continents, we have extended our
            R&D capacity and manufacturing proficiency by investing in a new facility at Hsinchu Science Park in 2020.
            This expansion enables us to collaborate closely with industry supply chains to create a smarter, safer, and
            more efficient smart living environment, enhancing our ability to deliver cutting-edge solutions worldwide.
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
          <a href="dashcam-recorder.php" data-track-category="トップページ" data-track-action="ITOKIN CORPORATE SITE">
            <div class="txt-wrap">
              <h3 class="FC_W ttl">
                <h2 class="em h4 mb-20"><i class="fa fa-chevron-right" aria-hidden="true"></i> Smart Mobility</h2>
                <span></span>
              </h3>
              <p class="leads">
                <span>MDT ensures driver and passenger comfort and safety.</span>
              </p>
              <span class="btn btn-blue btn-round btn-long" href="dashcam-recorder.php">Discover More</span>
              <p class="more"><span></span></p>
            </div>
            <span class="img"><img src="../ext/3screen/images/product_01.jpg" alt="Smart Mobility"></span>
          </a>
        </div>

        <div class="item item--mizuno">
          <a href="video-telematics.php" data-track-category="トップページ" data-track-action="MIZUNO BEYONDMAX BRAND SITE">
            <div class="txt-wrap"">
								<h3 class=" FC_W ttl">
              <h2 class="em h4 mb-20"><i class="fa fa-chevron-right" aria-hidden="true"></i> Smart Telematics</h2>
              <span></span></h3>
              <p class="leads">
                <span>Connected car solutions provide instant information sharing, remote monitoring, cloud storage, and
                  driver behavior analysis.</span>
              </p>
              <span class="btn btn-blue btn-round btn-long" href="video-telematics.php">Discover More</span>
              <p class="more"><span></span></p>
            </div>
            <span class="img"><img src="../ext/3screen/images/product_02.jpg" alt="Smart Telematics"></span>
          </a>
        </div>

        <div class="item item--second">
          <a href="tablet.php" data-track-category="トップページ" data-track-action="ENFÖLD BRAND SITE / EC SITE">
            <div class="txt-wrap">
              <h3 class="FC_W ttl">
                <h2 class="em h4 mb-20"><i class="fa fa-chevron-right" aria-hidden="true"></i> Smart Industries</h2>
                <span></span>
              </h3>
              <p class="leads">
                <span>Devices and management platforms meet modern business demands efficiently and
                  cost-effectively.</span>
              </p>
              <span class="btn btn-blue btn-round btn-long" href="tablet.php">Discover More</span>
              <p class="more"><span></span></p>
            </div>
            <span class="img"><img src="../ext/3screen/images/product_03.jpg" alt="Smart Industries"></span>
          </a>
        </div>

        <div class="item item--enfold">
          <a href="outdoor-luminaires.php" data-track-category="トップページ" data-track-action="ENFÖLD BRAND SITE / EC SITE">
            <div class="txt-wrap">
              <h3 class="FC_W ttl">
                <h2 class="em h4 mb-20"><i class="fa fa-chevron-right" aria-hidden="true"></i> Smart IOT</h2>
                <span></span>
              </h3>
              <p class="leads">
                <span>Outdoor luminaire solution integrates lighting, monitoring, tracking, and sensing
                  technology.</span>
              </p>
              <span class="btn btn-blue btn-round btn-long" href="outdoor-luminaires.php">Discover More</span>
              <p class="more"><span></span></p>
            </div>
            <span class="img"><img src="../ext/3screen/images/product_04.jpg" alt="Smart IOT"></span>
          </a>
        </div>

        <div class="item item--bant">
          <a href="kiosk.php" data-track-category="" data-track-action="">
            <div class="txt-wrap">
              <h3 class="FC_W ttl">
                <h2 class="em h4 mb-20"><i class="fa fa-chevron-right" aria-hidden="true"></i> Smart Retail</h2>
                <span></span>
              </h3>
              <p class="leads">
                <span>Smart retail solutions enhance shopping experience and optimize efficiency in retail
                  environments.</span>
              </p>
              <span class="btn btn-blue btn-round btn-long" href="kiosk.php">Discover More</span>
              <p class="more"><span></span></p>
            </div>
            <span class="img"><img src="../ext/3screen/images/product_05.jpg" alt="Smart Retail"></span>
          </a>
        </div>

      </div>

      <ul class="imgs">
        <li class="img--itokin" style="opacity: 0;"><span><img src="../ext/3screen/images/zoom/product_01.jpg"
              alt="Smart Mobility"></span></li>
        <li class="img--mizuno" style="opacity: 0;"><span><img src="../ext/3screen/images/zoom/product_02.jpg"
              alt="Smart Telematics"></span></li>
        <li class="img--third" style="opacity: 0;"><span><img src="../ext/3screen/images/zoom/product_03.jpg"
              alt="Smart Industries"></span></li>
        <li class="img--enfold" style="opacity: 0;"><span><img src="../ext/3screen/images/zoom/product_04.jpg"
              alt="Smart IOT"></span></li>
        <li class="img--bant" style="opacity: 0;"><span><img src="../ext/3screen/images/zoom/product_05.jpg"
              alt="Smart Retail"></span></li>
      </ul>
    </div>
  </div>

</div>



<div id="capability_banner" class="section padding-top-small padding-bottom">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="main-title tc">
          <h3 class="h2">Capability</h3>
        </div>
      </div>
    </div>
    <div class="row">
      <div id="pageIndex" class="animsition-overlay">

        <div class="secBanner" data-450="opacity: 1;" data-600="opacity: 0;">
          <ul id="bannerListing">
            <li>
              <div class="imgHolder"><img src="../images/home_capability1.jpg" alt="Automated production" /></div>
              <div class="contentHolder_home" data-0="margin-top: 0px;" data-350="margin-top: -50px;"
                data-500="margin-top: -100px;">
                <h3 class="FC_mdtB2 mb-30">Engineering</h3>
                <p>After enhancing our identity with smart camera products and connected services, we continue to build
                  on our reputation as a leader in car safety while breaking fresh ground in AIOT, innovating new ways
                  to meet our customers’ needs.</p>
                <a class="btn btn-lg" href="innovative-engineering.php">Discover More</a>
                <!-- <a class="btn btn-lg" href="https://test-www.mitacmdt.com/en/innovative-engineering.php">Discover More</a> -->
              </div>
            </li>
            <li>
              <div class="imgHolder"><img src="../images/home_capability2.jpg"
                  alt="EMC lab (Electro Magnetic Compatibility Lab)" /></div>
              <div class="contentHolder_home" data-0="margin-top: 0px;" data-350="margin-top: -50px;"
                data-500="margin-top: -100px;">
                <h3 class="FC_mdtB2 mb-30">Quality Management</h3>
                <p>We apply six processes to our rigorous quality control principles — DQ, CE, SQA, PQA, OQA, and
                  Service — to ensure all MDT products meet the strictest standards before delivery to our customer.</p>
                <a class="btn btn-lg" href="quality-management.php">Discover More</a>
              </div>
            </li>
            <li>
              <div class="imgHolder"><img src="../images/home_capability3_new_20230614.jpg"
                  alt="MDT's products are produced in a 1,790, 000 square-foot manufacturing facility in Kunshan, China featuring automated production, a rigorous management system and international certifications including ISO 9001, ISO 14001 and IATF16949. " />
              </div>
              <div class="contentHolder_home" data-0="margin-top: 0px;" data-350="margin-top: -50px;"
                data-500="margin-top: -100px;">
                <h3 class="FC_mdtB2 mb-30">Manufacturing Excellence</h3>
                <p>MDT’s 1,790,000-square-foot manufacturing site in China is certified to ISO 9001, ISO14001,
                  IHSAS18000, IATF16949, ISO13485, and GMP standards.</p>
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
  $(".secBanner").delay(100).animate({
    top: '0px'
  }, {
    duration: 1000
  });
  $(".secBanner .imgHolder").delay(500).animate({
    opacity: '1'
  }, {
    duration: 800
  }, "linear");
  $(".secBanner .contentHolder_home").delay(100).animate({
    top: '50%'
  }, {
    duration: 1000
  }, "linear");
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
          <h3 class="h2">Press &amp; Events</h3>
        </div>
      </div>
    </div>
    <div class="row">

      <div class="col-lg-4 col-sm-6 mb-30" data-scroll-reveal="enter bottom move 40px over 0.8s after 0.2s">
        <div class="pricing pt_pb_1r background-white borderTop_B">
          <div class="pn_p p">Press</div>
          <div class="pricing-sub p mb_1">2025.01.22</div>
          <h6 class="tit-H"><a class="FC_mdtG" href="press-events-20250122.php">MiTAC Showcases Its Automotive Product Solutions at Automotive World Japan 2025</a></h6>
          <div class="pricing-img"><a href="press-events-20250122.php"><img
                src="../images/press_news/20250122/20250122_615x410.jpg"
                alt="MiTAC Showcases Its Automotive Product Solutions at Automotive World Japan 2025"></a>
          </div>
        </div>
      </div>
      <div class="clearfix hidden-xs"></div>

      <div class="col-lg-4 col-sm-6 mb-30" data-scroll-reveal="enter bottom move 40px over 0.8s after 0.2s">
        <div class="pricing pt_pb_1r background-white borderTop_B">
          <div class="pn_p p">Press</div>
          <div class="pricing-sub p mb_1">2024.09.10</div>
          <h6 class="tit-H"><a class="FC_mdtG" href="press-events-20240910.php">MiTAC Showcases Advanced Dashcams,
              Rugged Tablets and Video Telematics for Fleet Management, and Award-Winning Smart Kiosk at Automechanika
              Frankfurt 2024</a></h6>
          <div class="pricing-img"><a href="press-events-20240910.php"><img
                src="../images/press_news/20240910/2024_automechanika_frankfurt_615x410.jpg"
                alt="MiTAC Showcases Advanced Dashcams, Rugged Tablets and Video Telematics for Fleet Management, and Award-Winning Smart Kiosk at Automechanika Frankfurt 2024"></a>
          </div>
        </div>
      </div>
      <div class="clearfix hidden-xs"></div>

      <div class="col-lg-4 col-sm-6 mb-30" data-scroll-reveal="enter bottom move 40px over 0.8s after 0.2s">
        <div class="pricing pt_pb_1r background-white borderTop_B">
          <div class="pn_p p">Press</div>
          <div class="pricing-sub p mb_1">2024.05.13</div>
          <h6 class="tit-H"><a class="FC_mdtG" href="press-events-20240513.php">MiTAC Digital Technology receives
              ISO/SAE 21434 certification for automotive cybersecurity</a></h6>
          <div class="pricing-img"><a href="press-events-20240513.php"><img
                src="../images/press_news/20240513/TUV_NORD_ISO21434_615x410_cover.jpg"
                alt="MiTAC Digital Technology receives ISO/SAE 21434 certification for automotive cybersecurity"></a>
          </div>
        </div>
      </div>
      <div class="clearfix hidden-xs"></div>

      <!-- <div class="col-lg-4 col-sm-6 mb-30" data-scroll-reveal="enter bottom move 40px over 0.8s after 0.2s">
        <div class="pricing pt_pb_1r background-white borderTop_B">
          <div class="pn_p p">Event</div>
          <div class="pricing-sub p mb_1">2024.04.25</div>
          <h6 class="tit-H"><a class="FC_mdtG" href="press-events-20240425.php">MiTAC's Breakthrough Innovations Shine
              at Embedded World 2024</a></h6>
          <div class="pricing-img"><a href="press-events-20240425.php"><img src="../images/press_news/20240425/001.png"
                alt="MiTAC's Breakthrough Innovations Shine at Embedded World 2024"></a></div>
        </div>
      </div>
      <div class="clearfix hidden-xs"></div> -->

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
        <div class="main-title tc">
          <h3 class="FC_W h2">Discover MDT</h3>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <p class="ContGen FC_W">As one of the world’s most reputable automotive eletronics brand, MiTAC Digital
          Technology meets the real needs of customers with its core competencies in GPS and image processing
          technologies, in combination with its passion, eagerness, positive attitude and determination. </p>
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

      <div class="col-md-6 col-sm-6 col-6 pd-0 portfolio-box">
        <div class="home_colorBox2">
          <a href="recruitment.php" class="h2">Recruitment</a>
          <span class="h2"><i class="fa fa-user-o" aria-hidden="true"></i></span>
        </div>
        <a href="recruitment.php">
          <figure class="image-hover">
            <img src="../images/home_hr.jpg" class="attachment-portfolio-3-col size-portfolio-3-col wp-post-image"
              sizes="(max-width: 570px) 100vw, 561px" alt="MDT_recruitment">
            <figcaption></figcaption>
          </figure>
        </a>
      </div>

      <div class="col-md-6 col-sm-6 col-6 pd-0 portfolio-box">
        <div class="home_colorBox1">
          <a href="general-inquiry.php" class="h2">Contact</a>
          <span class="h2"><i class="fa fa-comments-o" aria-hidden="true"></i></span>
        </div>
        <a href="general-inquiry.php">
          <figure class="image-hover">
            <img src="../images/home_contact.jpg" class="attachment-portfolio-3-col size-portfolio-3-col wp-post-image"
              sizes="(max-width: 570px) 100vw, 561px" alt="MDT_contact us">
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