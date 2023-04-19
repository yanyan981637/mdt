<?php
	require_once('../Conf/Config.inc.php');
	ini_set("session.cookie_httponly", 1);
	if(isset($_POST['ckType'])){
		setcookie("mdt_policy", $_POST['ckType'], time()+3600*24*365, "/", "mitacmdt.com", TRUE, TRUE);
	}
	$_GET['MsgFormSend'] = htmlspecialchars($_GET['MsgFormSend'], ENT_QUOTES, 'UTF-8');

	//Menu
	$sqlM ="Select * From `ows_menu` Where menu_class='main' and is_online=1 And lang='en' And file_name = '".$cfg['file_name']."' limit 1 ";
	$resultM = mysqli_query($MysqlConn, $sqlM);
	$menuAry = mysqli_fetch_array($resultM);
	$Current_Menu_Id 					= $menuAry['menu_id'];
	$Current_Menu_Father_Id 	= $menuAry['father_menu_id'];
	$Current_Menu_Order		 	= $menuAry['menu_order'];
	$Current_Menu_Name 			= $menuAry['menu_name'];
	$Current_Menu_File_Name 	= $menuAry['file_name'];
	//print '<pre>'. print_r($Current_Menu_Id, TRUE) .'</pre>';

	//Meta
	$sqlT ="Select meta_title, meta_description, meta_keywords From `ows_meta` Where menu_id='".$Current_Menu_Id."' ";
	$resultT = mysqli_query($MysqlConn, $sqlT);
	$metaAry = mysqli_fetch_array($resultT);
	$Current_Meta_Title				= $metaAry['meta_title'];
	$Current_Meta_Description	= $metaAry['meta_description'];
	$Current_Meta_Keywords		= $metaAry['meta_keywords'];
	$default_meta_description = "MiTAC Digital Technology (MDT) helps users navigate life with passion in automotive electronics. MDT is also at the forefront of innovation in the fields of AIoT and industrial tablets. We take our customer in new and exciting directions with thoughtful designs that reflect highest principles of quality and ingenuity.";
	$Current_Meta_Description = ($Current_Meta_Description)?$Current_Meta_Description:$default_meta_description;
	
	//判斷是否為手機
	function isMobile() {
		// 若有HTTP_X_WAP_PROFILE則為移動裝置
		if (isset($_SERVER['HTTP_X_WAP_PROFILE'])) {
			return true;
		} 
		// 若via資訊含有wap則為移動裝置,部分服務商會遮蔽該資訊
		if (isset($_SERVER['HTTP_VIA'])) {
		// 找不到為flase,否則為true
			return stristr($_SERVER['HTTP_VIA'], "wap") ? true : false;
		} 
		// 判斷手機傳送的客戶端標誌,相容性有待提高。其中'MicroMessenger'是電腦微信
		if (isset($_SERVER['HTTP_USER_AGENT'])) {
			$clientkeywords = array('nokia','sony','ericsson','mot','samsung','htc','sgh','lg','sharp','sie-','philips','panasonic','alcatel','lenovo','iphone','ipod','blackberry','meizu','android','netfront','symbian','ucweb','windowsce','palm','operamini','operamobi','openwave','nexusone','cldc','midp','wap','mobile','MicroMessenger'); 
			// 從HTTP_USER_AGENT中查詢手機瀏覽器的關鍵字
			if (preg_match("/(" . implode('|', $clientkeywords) . ")/i", strtolower($_SERVER['HTTP_USER_AGENT']))) {
				return true;
			}
		} 
		// 協議法，因為有可能不準確，放到最後判斷
		if (isset ($_SERVER['HTTP_ACCEPT'])) {
			// 若只支援wml並且不支援html則為移動裝置
			// 若支援wml和html但是wml在html之前則是移動裝置
			if ((strpos($_SERVER['HTTP_ACCEPT'], 'vnd.wap.wml') !== false) && (strpos($_SERVER['HTTP_ACCEPT'], 'text/html') === false || (strpos($_SERVER['HTTP_ACCEPT'], 'vnd.wap.wml') < strpos($_SERVER['HTTP_ACCEPT'], 'text/html')))) {
				return true;
			} 
		} 
		return false;
	}
?>

<!DOCTYPE html>
<!--[if IE 8]><html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]>
<!--><html class="no-js" lang="en"><!--<![endif]-->
<head>

	<!-- Basic Page Needs
	================================================== -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<?php
		if(preg_match("/press-events/i", $cfg['file_name'])) {
			$Current_Menu_Name = "Discover MDT - Events and Press";
		}elseif(preg_match("/connected-dashcam/i", $cfg['file_name'])) {
				$Current_Menu_Name = "Connected Dashcam";
		}elseif($cfg['file_name'] == '404.php'){
			$Current_Menu_Name = "404";
		}
		
		$metaTitle = ($Current_Meta_Title)?$Current_Meta_Title:$Current_Menu_Name;
	?>
	<title><?php echo $metaTitle; ?></title>
	<meta name="description" content="<?php echo $Current_Meta_Description; ?>">
	<meta name="keywords" content="<?php echo $Current_Meta_Keywords; ?>">
	<meta property="og:locale" content="en" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="<?php echo $metaTitle; ?>" />
	<meta property="og:description" content="<?php echo $Current_Meta_Description; ?>" />
	<meta property="og:url" content="<?php echo "https://".$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI']; ?>" />
	<meta property="og:site_name" content="MiTAC Digital Technology" />
	
	<!-- hreflang
	================================================== -->
	<?php
		$urlISO=array('x-default','zh-Hant','en');
		$urlLang=array('tw','tw','en');
		$i=count($urlLang);
		for($j=0 ; $j<$i ; $j++){
			echo "<link rel='alternate' hreflang='".$urlISO[$j]."' href='https://www.mitacmdt.com/".$urlLang[$j]."/".$Current_Menu_File_Name."' />";
		}
	?>

	<!-- Mobile Specific Metas
	================================================== -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="theme-color" content="#212121"/>
    <meta name="msapplication-navbutton-color" content="#212121"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="#212121"/>
	
	<!-- CSS
	================================================== -->
	<link rel="stylesheet" href="../css/bootstrap.min.css"/>
	<link rel="stylesheet" href="../css/font-awesome.min.css"/>
	<link rel="stylesheet" href="../css/mind-icons-line.css"/>
	<link rel="stylesheet" href="../css/MDT-style.css"/>
	<link rel="stylesheet" href="../css/owl.carousel.css"/>
	<link rel="stylesheet" href="../css/owl.transitions.css"/>
	<link rel="stylesheet" href="../css/colors/color-mitac.css"/>
	<link rel="stylesheet" href="../css/fonts.css"/>
	
	<!-- Favicons
	================================================== -->
	<link rel="icon" type="image/png" href="../favicon-16x16.png">
	
	
	<!-- Extention -->
	<?php if($Current_Menu_File_Name == 'index.php'){ ?>
		<link rel="stylesheet" type="text/css" href="../ext/swiper/css/swiper.min.css">
		<link rel="stylesheet" type="text/css" href="../ext/swiper/css/style.css">
		<link rel="stylesheet" type="text/css" href="../ext/3screen/style.css">
		<link href="../ext/slider_qm/owl.carousel.css" rel="stylesheet">
		<link href="../ext/slider_qm/owl.theme.css" rel="stylesheet">
		<link href="../ext/slider_qm/owl.transitions.css" rel="stylesheet">
		<link href="../ext/slider_qm/styles.css" rel="stylesheet" type="text/css">
		<script src="../js/jquery-2.1.3.min.js"></script>
		
	<?php }elseif($Current_Menu_File_Name == 'milestone.php'){ ?>
		<!--關<link rel="stylesheet" type="text/css" href="../ext/milestone/theme.769a946fc71b22e53bc1.css">
		<link rel="stylesheet" type="text/css" href="../ext/milestone/vendor.466c156343eadc76902d.css">-->
	
	<?php }elseif($Current_Menu_File_Name == 'quality-management.php'){ ?>
		<link href="../ext/slider_qm/owl.carousel.css" rel="stylesheet">
		<link href="../ext/slider_qm/owl.theme.css" rel="stylesheet">
		<link href="../ext/slider_qm/owl.transitions.css" rel="stylesheet">
		<link href="../ext/slider_qm/styles.css" rel="stylesheet" type="text/css">
		<script src="../js/jquery-2.1.3.min.js"></script>
		
	<?php }elseif($Current_Menu_File_Name == 'engineering.php' || $Current_Menu_File_Name == 'services.php'){ ?>
		<link rel="stylesheet" type="text/css" href="../ext/map_tips/css/style.css" media="screen">
		<!--關<link href="../ext/rvslider/css/rvslider.min.css" rel="stylesheet">-->
		
	<?php }elseif($Current_Menu_File_Name == 'general-inquiry.php'){ ?>
		<script src='https://www.google.com/recaptcha/api.js?hl=en' async defer></script>
		<script src="../js/jquery-validation-1.14.0/jquery.js"></script>
		<script src="../js/jquery-validation-1.14.0/jquery.validate.min.js"></script>
		<!--<script src="../js/jquery-validation-1.14.0/messages_zh.js"></script>-->
		<script type='text/javascript' src='../js/jquery.blockUI-2.70.js'></script>
		<script src='../ext/sweetalert/sweetalert.min.js'></script>

	<?php }elseif(preg_match("/connected-dashcam/i", $cfg['file_name'])){ ?>
		<link rel="stylesheet" type="text/css" href="../ext/swiper/css/swiper.min.css">
		<link rel="stylesheet" type="text/css" href="../ext/swiper/css/style.css">

	
	<?php } ?>
	
	<!--json-ld start-->
<script type='application/ld+json'>
[{
  "@context": "http://www.schema.org",
  "@type": "Corporation",
  "name": "神達數位",
  "url": "https://www.mitacmdt.com/",
  "logo": "https://www.mitacmdt.com/images/logo_MiTAC_570x180.png",
  "image": "https://www.mitacmdt.com/images/MiTAC_building.jpg",
  "description": "神達數位是一個廣受信賴的車用電子領導廠商，帶領使用者正面熱情地找尋人生方向並持續向前邁進。除了車用電子，我們也是智聯網，專業平板領域的創新先驅者，我們體貼入微的設計反映對品質的高標準及設計巧思，引領客戶朝向嶄新且引人入勝的方向前進。",
  "address": {
     "@type": "PostalAddress",
     "streetAddress": "桃園市龜山區文化二路200號",
     "addressLocality": "桃園市",
     "postalCode": "333",
     "addressCountry": "台灣"
  },
  "geo": {
     "@type": "GeoCoordinates",
     "latitude": "25.048009",
     "longitude": "121.375504"
  },
   "openingHours": "Mo 09:00-18:00 Tu 09:00-18:00 We 09:00-18:00 Th 09:00-18:00 Fr 01:00-18:00"
},
{
  "@context": "http://www.schema.org",
  "@type": "Corporation",
  "name": "MiTAC Digital Technology Corporation",
  "url": "https://www.mitacmdt.com/",
  "logo": "https://www.mitacmdt.com/images/logo_MiTAC_570x180.png",
  "image": "https://www.mitacmdt.com/images/MiTAC_building.jpg",
  "description": "A trusted leader in automotive electronics , MiTAC Digital Technology (MDT) helps users navigate life with passion, positivity and a drive to keep moving forward. Beyond automotive electronics , MDT is at the forefront of innovation in the fields of AIoT and industrial tablets. We take our customer in new and exciting directions with thoughtful designs that reflect highest principles of quality and ingenuity.",
  "address": {
     "@type": "PostalAddress",
     "streetAddress": "No.200, Wen Hwa 2nd Rd., Kuei Shan Dist., Taoyuan City 33383, Taiwan(R.O.C)",
     "addressLocality": "Taoyuan",
     "postalCode": "333",
     "addressCountry": "Taiwan"
  },
  "geo": {
     "@type": "GeoCoordinates",
     "latitude": "25.048009",
     "longitude": "121.375504"
  },
   "openingHours": "Mo 09:00-18:00 Tu 09:00-18:00 We 09:00-18:00 Th 09:00-18:00 Fr 01:00-18:00"
},
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.mitacmdt.com/tw/press-events-20171012.php"
  },
  "headline": "神達投控宣布成立神達數位，聚焦互聯汽車與車用電子產業",
  "description": "神達投資控股股份有限公司(以下簡稱神達投控，TWSE: 3706)今日(12日)代子公司神達電腦股份有限公司(以下簡稱神達電腦)，於證券交易所召開重大訊息記者會，說明今日神達電腦以及神達數位股份有限公司(以下簡稱神達數位)兩家子公司董事會決議分割受讓案，將神達電腦之行動通訊產品事業體，分割讓與新設立之神達數位，分割基準日擬訂於107年1月1日。此案為神達投控集團內的組織調整，將不會影響神達投控的股東權益。",
  "image": {
    "@type": "ImageObject",
    "url": "https://www.mitacmdt.com/images/press_news/news20180902.jpg"
  },
  "author": {
    "@type": "Organization",
    "name": "MDT神達數位"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "MDT神達數位",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.mitacmdt.com/"
    }
  },
  "datePublished": "2017-10-12",
  "dateModified": "2019-06-12"
},
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.mitacmdt.com/tw/press-events-20171012.php"
  },
  "headline": "MiTAC Holdings Corporation Announced the Establishment of MiTAC Digital Technology Corporation",
  "description": "MiTAC Holdings Corporation (MHC,TWSE: 3706) held a press conference of material information at the Taiwan Stock Exchange today on behalf of its subsidiary MiTAC International Corporation (MIC) announcing the Board of Directors’ approval of the spinoff of its Mobile Communication Product Business to MiTAC Digital Technology Corporation (MDT). The record date of the spinoff is set on January 1st, 2018. This spinoff is an organization re-structuring within the group and will not affect the shareholders equity of MHC.",
  "image": {
    "@type": "ImageObject",
    "url": "https://www.mitacmdt.com/images/press_news/news20180902.jpg"
  },
  "author": {
    "@type": "Organization",
    "name": "MDT神達數位"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "MDT神達數位",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.mitacmdt.com/"
    }
  },
  "datePublished": "2017-10-12",
  "dateModified": "2019-06-12"
},
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Mio, 我們對品質的堅持",
  "description": "Mio，世界級行車紀錄器領導品牌，精心為你。Mio行車記錄器為百分之百台灣研發設計，生產製造基地配備自動化生產設備與嚴謹管理系統。所有Mio 行車紀錄器皆通過超過50項測試，確保其最高品質與完美效能。
Mio守護您的行車安全，並在每一次的旅途中,創造無與倫比的完美體驗。",
  "thumbnailUrl": "https://i.ytimg.com/vi/UWX70dTajBw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCtlggVRkbB3MWo_YuEBwBI80CXmQ",
  "uploadDate": "2019-04-02",
  "duration": "PT3M38S",  
  "publisher": {
    "@type": "Organization",
    "name": "MiTAC神達數位",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.mitacmdt.com/images/logo_MiTAC_570x180.png"
    }
  },
  "contentUrl": "https://youtu.be/UWX70dTajBw"
},
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Mio, our commitment to quality",
  "description": "Mio, the world leading brand of Dashcam, it’s all about you. Mio Dashcams are 100% designed in Taiwan and manufactured in a state-of-the-art factory with automated production facilities and a rigorous management system . All Mio Dashcams undergo a battery of more than 50 rigorous tests to ensure the highest performance standards. We ensures your driving safety and gives you an enjoyable experience during each of your journeys.",
  "thumbnailUrl": "https://i.ytimg.com/vi/mSl6az1Bgiw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA561iR4RrHza7gkfZC5kwhgl6oKA",
  "uploadDate": "2019-04-02",
  "duration": "PT3M45S",  
  "publisher": {
    "@type": "Organization",
    "name": "MiTAC神達數位",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.mitacmdt.com/images/logo_MiTAC_570x180.png"
    }
  },
  "contentUrl": "https://youtu.be/mSl6az1Bgiw"
}]
</script>
<!--json-ld end-->
	
	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-KPTFRWN');</script>
	<!-- End Google Tag Manager -->	
</head>
<body class="royal_preloader">
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KPTFRWN"
height="0" width="0"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
	
	<!--<div id="royal_preloader"></div>-->

	
	<!-- Nav and Logo
	================================================== -->
	
	<div id="menu-wrap" class="cbp-af-header black-menu-background-1st-trans menu-fixed-padding menu-shadow">
		<div class="container">
			<div class="row">
				<div class="col-md-12">	
					<nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse bg-faded">
						<?php
							if(isMobile()){
								echo "<button class='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarNavMenuMain' aria-controls='navbarNavMenuMain' aria-expanded='false' aria-label='Toggle navigation'>
												<span class='navbar-toggler-icon'></span>
											</button>";
							}
						?>
						<a class="navbar-brand" href="index.php" title="MiTAC Digital Technology Corporation">
							<img src="../images/MDT_logo_light@2x.png" alt="MiTAC Digital Technology Corporation" class="">
						</a>
						<div class="collapse navbar-collapse justify-content-end" id="navbarNavMenuMain">
							<ul class="navbar-nav">
								<!-- get Menu -->
								<?php
								$sql1 ="Select * From `ows_menu` Where menu_class='main' And father_menu_id is NULL And is_online=1 And lang='en' And menu_id !=1 Order By menu_order ASC ";
								$result1 = mysqli_query($MysqlConn, $sql1);
								while ($menu1 = mysqli_fetch_array($result1, MYSQLI_ASSOC)) {
									
									if($menu1['file_name'] == NULL){//有sub menu
										//第一層
										if($Current_Menu_Father_Id == $menu1['menu_id']){$AC="active";}else{$AC="";}
										echo "<li class='nav-item dropdown ".$AC." '>
														<a class='nav-link dropdown-toggle' href='#' id='navbarDropdownMenuLink-mainNav-".$menu1['menu_id']."' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
															".$menu1['menu_name']."
															<span class='nav-uline'></span>
														</a>";
														
											//第二層
											echo "<div class='dropdown-menu menu-on-hover' aria-labelledby='navbarDropdownMenuLink-mainNav-".$menu1['menu_id']."'>";
											
												$sql2 ="Select * From `ows_menu` Where menu_class='main' And father_menu_id is not NULL And is_online=1 And lang='en' Order By menu_order ASC";
												$result2 = mysqli_query($MysqlConn, $sql2);
												while ($menu2 = mysqli_fetch_array($result2, MYSQLI_ASSOC)) {
													if($menu2['father_menu_id'] == $menu1['menu_id']){
														
														if($Current_Menu_Id == $menu2['menu_id'] && $Current_Menu_Father_Id == $menu2['father_menu_id']){$AC="active";}else{$AC="";}
														echo "<a class='dropdown-item ".$AC." ' href='".$menu2['file_name']."' target='".$menu2['href_target']."'>".$menu2['menu_name']."</a>";
													}
												}
											echo "</div>";
											//第二層 end
														
										echo "</li>";
										//第一層 end

									}else{//無sub menu
									
										if($Current_Menu_Id == $menu1['menu_id']){$AC="active";}else{$AC="";}
										echo "<li class='nav-item dropdown ".$AC." '>
														<a class='nav-link' href='".$menu1['file_name']."' id='navbarDropdownMenuLink-mainNav-".$menu1['menu_id']."'>
															".$menu1['menu_name']."
															<span class='nav-uline'></span>
														</a>
													</li>";
									}
								}

								//取得他語系網頁
								$sqlL ="Select * From `ows_menu` Where is_online=1 And lang='tw' And file_name = '".$Current_Menu_File_Name."' ";
								$resultL = mysqli_query($MysqlConn, $sqlL);
								$tspgAry = mysqli_fetch_array($resultL);
								if($tspgAry){
									$transferPageUrl = $RootPath."tw/".$Current_Menu_File_Name;
								}else{
									$transferPageUrl =	$RootPath."tw/";
								}

								?>
								<li class="nav-item dropdown lang">
									<a class="nav-link" href="#" id="navbarDropdownMenuLink-lng" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<i class="fa fa-globe"></i>
									</a>
									<div class="dropdown-menu menu-on-hover" aria-labelledby="navbarDropdownMenuLink-lng">
										<a class="dropdown-item" href="<?php echo $transferPageUrl; ?>">中文</a>
										<a class="dropdown-item active" href="#">English</a>
									</div>
								</li>
								<!--<li class="nav-item icons-item-menu modal-search">
									<a class="nav-link" href="#" data-toggle="modal" data-target="#Modal-search"><i class="fa fa-search"></i></a>
								</li>-->
								<!-- get Menu end-->
							</ul>
						</div>
					</nav>		
				</div>
			</div>	
		</div>		
	</div>
	
	<!-- Search -->
	<!--<div class="modal fade default search-modal" id="Modal-search" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header justify-content-end">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true"></span>
					</button>
				</div>
				<div class="modal-body">
					<div class="hero-center-wrap move-top">
						<div class="container">
							<div class="row justify-content-center">
								<div class="col-md-6">
									<input type="search" value="" placeholder="Search" class="form-control" />
									<button class="btn btn-primary btn-icon btn-round" type="submit" value="search">
										<i class="fa fa-search"></i>
									</button>
								</div>
							</div>	
						</div>	
					</div>	
				</div>
			</div>
		</div>
	</div>-->