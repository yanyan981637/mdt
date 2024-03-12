<?php
	require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';

	// Cookie http only
	ini_set("session.cookie_httponly", 1);
	// Script root path
	// $RootPath = App\DataAccess\Config::initRootPath();
	// Script last path
	$cfg['file_name'] = substr(strrchr($_SERVER['SCRIPT_NAME'], "/" ), 1 );
	// Database singleton
	$MysqlInstance = App\DataAccess\Mysql::getInstance();
	$MysqlConn = $MysqlInstance->getConnection();

	// youtube 參數當前域名
	function getCurrentDomain() {
		function is_https() {
			if ( !empty($_SERVER['HTTPS']) && strtolower($_SERVER['HTTPS']) !== 'off') {
					return true;
			} elseif ( isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https' ) {
					return true;
			} elseif ( !empty($_SERVER['HTTP_FRONT_END_HTTPS']) && strtolower($_SERVER['HTTP_FRONT_END_HTTPS']) !== 'off') {
					return true;
			}
			return false;
		}
	
		$current_url = is_https() ? 'https://' : 'http://';
		$current_url .= $_SERVER['SERVER_NAME'];
	
		$CURRENT_PORT = $_SERVER['SERVER_PORT'];
	
		if(!(($CURRENT_PORT == '443' && is_https()) || ($CURRENT_PORT == '80' && !is_https()))){
			$current_url .= $CURRENT_PORT;
		}
	
		return $current_url;
	
	}
	$current_domain = getCurrentDomain();


	session_start();

	$ckType = isset($_POST['ckType']) ? htmlspecialchars($_POST['ckType'], ENT_QUOTES, 'UTF-8') : '';
	if ((isset($ckType)) && ($ckType == 'all' || $ckType == 'essential')) {
		if (isset($_POST['csrf_token_ck']) && $_POST['csrf_token_ck'] == $_SESSION['csrf_token_ck']) {
			setcookie("mdt_policy", $_POST['ckType'], time()+3600*24*365, "/", $_SERVER['SERVER_NAME'], TRUE, TRUE);
		}
	}
	if (isset($_POST['MsgFormSend'])) {
		$_GET['MsgFormSend'] = htmlspecialchars($_GET['MsgFormSend'], ENT_QUOTES, 'UTF-8');
	}
	
	$sql_menu = "Select * From `ows_menu` Where menu_class='main' and is_online=1 And lang='tw'";
	$result_menu = mysqli_query($MysqlConn, $sql_menu);

	$all_menu = [];
	$current_menu = null;

	$Current_Menu_Id 					= null;
	$Current_Menu_Father_Id 	= null;
	$Current_Menu_Order		 	= null;
	$Current_Menu_Name 			= null;
	$Current_Menu_File_Name 	= null;
	$Current_Menu_Inquiry_type 	= 1;
	$Current_Menu_Is_Online 	= 1;
	$first_menu = [];

	while($row = mysqli_fetch_array($result_menu, MYSQLI_ASSOC))
  {
		if ( $row['file_name'] != 'index.php') {
			array_push($all_menu, $row);
		}

		if ($row['father_menu_id'] === null & $row['file_name'] != 'index.php') {
			array_push($first_menu, $row);
		}

  }

	//Menu

	//Meta

	if ($cfg['file_name'] == '404.php') {
		$cfg['file_name'] = "index.php";
	}

	$sqlM ="Select * From `ows_menu` Where menu_class='main' and lang='tw' And file_name = ? limit 1 ";
	$stmt = mysqli_prepare($MysqlConn, $sqlM);
	mysqli_stmt_bind_param($stmt, "s", $cfg['file_name']);
	mysqli_stmt_execute($stmt);
	$resultM = mysqli_stmt_get_result($stmt);
	$menuAry = mysqli_fetch_array($resultM);

	$Current_Menu_Id					= $menuAry['menu_id'];
	$Current_Menu_Father_Id		= $menuAry['father_menu_id'];
	$Current_Menu_Order				= $menuAry['menu_order'];
	$Current_Menu_Name				= $menuAry['menu_name'];
	$Current_Menu_File_Name		= $menuAry['file_name'];
	$Current_Menu_Inquiry_type = $menuAry['inquiry_type'];
	$Current_Menu_Is_Online = $menuAry['is_online'];
	// 當前菜單


// 	function get_active_menu($current_menu, $all_menu, $active_menu) {
// 		$active = $active_menu;

// 		array_push($active, $current_menu["menu_id"]);
		
// 		if ($current_menu['father_menu_id']){

// 			$father_menu_id = $current_menu['father_menu_id'];

// 			$parent_menu = array_filter($all_menu, function($item) use ($father_menu_id){
// 				return $item['menu_id'] == $father_menu_id;
// 			});
			
// 			return get_active_menu(array_values($parent_menu)[0], $all_menu, $active);
// 		}
// 		return $active;

// 	};
// $active_menu = get_active_menu($current_menu,$all_menu, []);
	//Meta
	$sqlT ="Select meta_title, meta_description, meta_keywords From `ows_meta` Where menu_id=? ";
	$stmt = mysqli_prepare($MysqlConn, $sqlT);
	mysqli_stmt_bind_param($stmt, "s", $Current_Menu_Id);
	mysqli_stmt_execute($stmt);
	$resultT = mysqli_stmt_get_result($stmt);
	$metaAry = mysqli_fetch_array($resultT);

	$Current_Meta_Title			= isset($metaAry['meta_title']) ? $metaAry['meta_title'] : "";
	$Current_Meta_Description	= isset($metaAry['meta_description']) ? $metaAry['meta_description'] : "";
	$Current_Meta_Keywords		= isset($metaAry['meta_keywords']) ? $metaAry['meta_keywords'] : "";
	$default_meta_description	= "神達數位是一個廣受信賴的車用電子領導廠商，除了車用電子，我們也是智聯網，專業平板領域的創新先驅者，我們以GPS和影像處理核心技術，滿足客戶實際需求，並以體貼入微的設計反映對品質的高標準及設計巧思，引領客戶朝向嶄新且引人入勝的方向前進。";
	$Current_Meta_Description	= ($Current_Meta_Description)?$Current_Meta_Description:$default_meta_description;
		// mysqli_close($MysqlConn);
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
<!--[if IE 8]><html class="no-js lt-ie9" lang="zh-Hant-TW"> <![endif]-->
<!--[if gt IE 8]>
<!--><html class="no-js" lang="zh-Hant-TW"><!--<![endif]-->
<head>

	<!-- Basic Page Needs
	================================================== -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<?php
		if(preg_match("/press-events/i", $cfg['file_name'])) {
			$Current_Menu_Name = "最新消息 - MiTAC Digital Technology 神達數位";
		}elseif($cfg['file_name'] == '404.php'){
			$Current_Menu_Name = "404";
		}

		$metaTitle = ($Current_Meta_Title)?$Current_Meta_Title:$Current_Menu_Name;
	?>
	<title><?php echo $metaTitle; ?></title>
	<meta name="description" content="<?php echo $Current_Meta_Description; ?>">
	<meta name="keywords" content="<?php echo $Current_Meta_Keywords; ?>">
	<meta property="og:locale" content="zh_TW" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="<?php echo $metaTitle; ?>" />
	<meta property="og:description" content="<?php echo $Current_Meta_Description; ?>" />
	<meta property="og:url" content="<?php echo "https://".$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI']; ?>" />
	<meta property="og:site_name" content="MiTAC Digital Technology 神達數位" />
	
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
	<link rel="stylesheet" href="../css/bootstrap-grid.min.css"/>
	<link rel="stylesheet" href="../css/font-awesome.min.css"/>
	<link rel="stylesheet" href="../css/mind-icons-line.css"/>
	<link rel="stylesheet" href="../css/MDT-style.css"/>
	<link rel="stylesheet" href="../css/style.css">
	<link rel="stylesheet" href="../css/owl.carousel.css"/>
	<link rel="stylesheet" href="../css/owl.transitions.css"/>
	<link rel="stylesheet" href="../css/colors/color-mitac.css"/>
	<link rel="stylesheet" href="../css/fonts.css"/>
	<link rel="stylesheet" href="../css/mdt-global-style.css">
	<link rel="stylesheet" href="../css/header.css">
	<!-- Favicons
	================================================== -->
	<link rel="icon" type="image/png" href="../favicon-16x16.png">
	
	<!-- Menu -->
	<script type="text/javascript" src="../ext/menu_b2b/prototype.js"></script>
	<script type="text/javascript" src="../ext/menu_b2b/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="../ext/menu_b2b/noconflict.js"></script>
	<script type="text/javascript" src="../ext/menu_b2b/slider.js"></script>
	<script type="text/javascript" src="../ext/menu_b2b/js.js"></script>
	<script type="text/javascript" src="../ext/menu_b2b/modernizr.js"></script>
	<script type="text/javascript" src="../ext/menu_b2b/jquery-migrate.js"></script>
	<script type="text/javascript" src="../ext/menu_b2b/jquery.appear.js"></script>
	<script type="text/javascript" src="../ext/menu_b2b/app.js"></script>
	<link rel="stylesheet" type="text/css" href="../ext/menu_b2b/styles.css" media="all" />
	<link rel="stylesheet" type="text/css" href="../ext/menu_b2b/theme.css" media="all" />
	<link rel="stylesheet" type="text/css" href="../ext/menu_b2b/theme-ext.css" media="all" />
	
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
		<script src="../ext/swiper/js/swiper.min.js"></script>
		
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
		<script src='https://www.google.com/recaptcha/api.js?hl=zh-tw' async defer></script>
		<script src="../js/jquery-validation-1.14.0/jquery.js"></script>
		<script src="../js/jquery-validation-1.14.0/jquery.validate.min.js"></script>
		<script src="../js/jquery-validation-1.14.0/messages_zh.js"></script>
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
  "name": "神達數位股份有限公司",
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
    "name": "MDT 神達數位股份有限公司"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "MDT 神達數位股份有限公司",
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
<noscript><iframe class="hidd" src="https://www.googletagmanager.com/ns.html?id=GTM-KPTFRWN"
height="0" width="0"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
	
	<!--<div id="royal_preloader"></div>-->

	
	<!-- Nav and Logo
	================================================== -->
	
	<div id="menu-wrap" class="cbp-af-header black-menu-background-1st-trans menu-fixed-padding menu-shadow">
		<div class="container">
			<div class="row">
				<div class="col-md-12">	
				<!--2024 menu-->
				<header id="header" class="page-header">
					<div class="page-header-container">
						<a class="logo" href="https://enterprise.mio.com/en_eu/">
							<img src="https://www.mitacmdt.com/images/MDT_logo_light@2x.png" alt="Mio" class="large" width="165" height="40"/>
							<img src="https://www.mitacmdt.com/images/MDT_logo_light@2x.png" alt="Mio" class="small"  width="67" height="25"/>
							<img src="https://www.mitacmdt.com/images/MDT_logo_light@2x.png" alt="Mio" class="white"  width="165" height="40"/>
						</a>
										<!-- Account -->
						<div id="header-account" class="d-none">
									</div>
						<!-- Skip Links -->
						<div class="skip-links">
							<a href="#header-nav" class="skip-link skip-nav">
								<span class="icon icon-menu"></span>
								<span class="label">Menu</span>
							</a>
						</div>


						<!-- Navigation -->
						<div id="header-nav" class="skip-content sliding-menu">

							<div class="sliding-menu-inner">
								<nav id="nav">
									<ol class="nav-primary">

										<!--product-->
										<li class="high megamenu level0"><!--Products 1級-->
											<a href="javascript:void(0);" class="level0 has-children disable " target="">
												Products            
											</a>
											<span class="more"></span>
											<div class="sub-menu-wrapper">
												<ul class="level0">
													<li class="level1"><!--2級-->
														<a href="https://enterprise.mio.com/en_eu/miowork" class="level1 has-children" data-target-submenu="#nav-501-sub" target="">
														Dashcam Recorder
														</a>
														<span class="more"></span>
														<ul class="level1">
															<li class="level2"><!--3級-->
																<a href="https://enterprise.mio.com/en_eu/miowork/handhelds" class="level2" target="">
																Single Cam Dashcam                   </a>
															</li>
															<li class="level2"><!--3級-->
																<a href="https://enterprise.mio.com/en_eu/miowork/handhelds" class="level2" target="">
																Multi-View Dashcam                   </a>
															</li>
															<li class="level2"><!--3級-->
																<a href="https://enterprise.mio.com/en_eu/miowork/handhelds" class="level2" target="">
																E-Mirror Dashcam                  </a>
															</li>
															<li class="level2"><!--3級-->
																<a href="https://enterprise.mio.com/en_eu/miowork/handhelds" class="level2" target="">
																Radar Combo                   </a>
															</li>
															<li class="level2"><!--3級-->
																<a href="https://enterprise.mio.com/en_eu/miowork/handhelds" class="level2" target="">
															Connected Dashcam                   </a>
															</li>
															<li class="level2"><!--3級-->
																<a href="https://enterprise.mio.com/en_eu/miowork/handhelds" class="level2" target="">
																DOP-Type Dashcam                   </a>
															</li>
														</ul>
													</li>
													
													<li class="level1"><!--2級-->
														<a href="https://enterprise.mio.com/en_eu/mioeye/" class="level1 has-children" data-target-submenu="#nav-601-sub" target="">
															Motobike Smart Camera
														</a>
														<span class="more"></span>
														<ul class="level1">
															<li class="level2"><!--3級-->
															<a href="https://enterprise.mio.com/en_eu/mioeye/fleet-cameras" class="level2" target="">
																Rider Cam</a>
															</li>
														</ul>
													</li>
													
													<li class="level1"><!--2級-->
														<a href="https://enterprise.mio.com/en_eu/miocare" class="level1 has-children" data-target-submenu="#nav-701-sub" target="">
														Outdoor                   </a>
														<span class="more"></span>
														<ul class="level1">
															<li class="level2"><!--3級-->
															<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2" target="">
																Cyclo Cycling Computer                       </a>
															</li>
														</ul>
													</li>

													<li class="level1"><!--2級-->
														<a href="https://enterprise.mio.com/en_eu/miocare" class="level1 has-children" data-target-submenu="#nav-801-sub" target="">
														Video Telematics                   </a>
														<span class="more"></span>
														<ul class="level1">
															<li class="level2"><!--3級-->
															<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2" target="">
															Connected Dashcam                      </a>
															</li>
														</ul>
													</li>

													<li class="level1"><!--2級-->
														<a href="https://enterprise.mio.com/en_eu/miocare" class="level1 has-children" data-target-submenu="#nav-901-sub" target="">
														Navigation                   </a>
														<span class="more"></span>
														<ul class="level1">
															<li class="level2"><!--3級-->
															<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2" target="">
															Car Navigation                      </a>
															</li>
															<li class="level2"><!--3級-->
															<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2" target="">
															Off Road Navigation                      </a>
															</li>
														</ul>
													</li>

													<li class="level1"><!--2級-->
														<a href="https://enterprise.mio.com/en_eu/miocare" class="level1 has-children" data-target-submenu="#nav-1001-sub" target="">
														Tablet                   </a>
														<span class="more"></span>
														<ul class="level1">
															<li class="level2"><!--3級-->
																<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2" target="">
																Industrial Tablet                      </a>
															</li>
															<li class="level2"><!--3級-->
																<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2" target="">
																Fleet Tablet                     </a>
															</li>
															<li class="level2"><!--3級-->
																<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2" target="">
																Handy Terminal                    </a>
															</li>
														</ul>
													</li>

													<li class="level1"><!--2級-->
														<a href="https://enterprise.mio.com/en_eu/miocare" class="level1 has-children" data-target-submenu="#nav-1101-sub" target="">
														Edge AI System                   </a>
														<span class="more"></span>
														<ul class="level1">
															<li class="level2"><!--3級-->
																<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2" target="">
																XYZ                      </a>
															</li>
														</ul>
													</li>

													<li class="level1"><!--2級-->
														<a href="https://enterprise.mio.com/en_eu/miocare" class="level1 has-children" data-target-submenu="#nav-1201-sub" target="">
														Pannel PC                   </a>
														<span class="more"></span>
														<ul class="level1">
															<li class="level2"><!--3級-->
																<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2" target="">
																XYZ                      </a>
															</li>
														</ul>
													</li>

													<li class="level1"><!--2級-->
														<a href="https://enterprise.mio.com/en_eu/miocare" class="level1 has-children" data-target-submenu="#nav-1301-sub" target="">
														Kiosk                   </a>
														<span class="more"></span>
														<ul class="level1">
															<li class="level2"><!--3級-->
																<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2" target="">
																Self-Service Kiosk                      </a>
															</li>
														</ul>
													</li>

													<li class="level1"><!--2級-->
														<a href="https://enterprise.mio.com/en_eu/miocare" class="level1 has-children" data-target-submenu="#nav-1401-sub" target="">
														Outdoor luminaires                   </a>
														<span class="more"></span>
														<ul class="level1">
															<li class="level2"><!--3級-->
																<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2" target="">
																Connectivity Module                      </a>
															</li>
														</ul>
													</li>

													<li class="level1"><!--2級-->
														<a href="https://enterprise.mio.com/en_eu/miocare" class="level1 has-children" data-target-submenu="#nav-1501-sub" target="">
														第11個item                   </a>
														<span class="more"></span>
														<ul class="level1">
															<li class="level2"><!--3級-->
																<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2" target="">
																XYZ                      </a>
															</li>
														</ul>
													</li>

												</ul>

												<div id="product-submenu" class="sub-megamenu-wrapper"><!--浮動mega子選單-->
													<div class="panel">
														<div id="nav-501-sub" class="collapse withImg" style="display: none;">
															<ul class="level1">
																
																<li class="level2"><!--3級-->
																	<a href="https://enterprise.mio.com/en_eu/miowork/handhelds" class="level2 has-children" target="">
																		Single Cam Dashcam                            </a>
																</li>
																<li class="level2"><!--3級-->
																	<a href="https://enterprise.mio.com/en_eu/miowork/handhelds" class="level2 has-children" target="">
																		Multi-View Dashcam                            </a>
																</li>
																<li class="level2"><!--3級-->
																	<a href="https://enterprise.mio.com/en_eu/miowork/handhelds" class="level2 has-children" target="">
																		E-Mirror Dashcam                            </a>
																</li>
																<li class="level2"><!--3級-->
																	<a href="https://enterprise.mio.com/en_eu/miowork/handhelds" class="level2 has-children" target="">
																		Radar Combo                            </a>
																</li>
																<li class="level2"><!--3級-->
																	<a href="https://enterprise.mio.com/en_eu/miowork/handhelds" class="level2 has-children" target="">
																		Connected Dashcam                            </a>
																</li>
																<li class="level2"><!--3級-->
																	<a href="https://enterprise.mio.com/en_eu/miowork/handhelds" class="level2 has-children" target="">
																		DOP-Type Dashcam                            </a>
																</li>

															</ul>

															<div class="cats-info-wrapper">
																<a href="#">
																	<img src="../images/menu/demo1.png" alt="">
																</a>
																<div class="cats-title mt-20">
																	MioWORK™
																</div>
																<p class="mb-10">501</p>
																<a class="btn btn-fill-black-b btn-xs btn-round" href="https://www.mio.com/tw/products/category-rider-camera" target="_blank">瞭解更多</a>
															</div>

														</div>
													</div>

													<div class="panel">
														<div id="nav-601-sub" class="collapse withImg" style="display: none;">
															<ul class="level1">
																<li class="level2">
																	<a href="https://enterprise.mio.com/en_eu/mioeye/fleet-cameras" class="level2 has-children" target="">
																	Rider Cam                             </a>
																</li>
															</ul>

															<div class="cats-info-wrapper">
																<a href="#">
																	<img src="../images/menu/kaizoku.png" alt="">
																</a>
																<div class="cats-title mt-20">
																Mobile Device Management　
																</div>
																<p class="mb-10">Seamlessly configure, manage, deploy device configurations, files and application or device updates - all remotely.</p>
																<a class="btn btn-fill-black-b btn-xs btn-round" href="https://www.mio.com/tw/products/category-rider-camera" target="_blank">瞭解更多</a>
															</div>

														</div>
													</div>

													<div class="panel">
														<div id="nav-701-sub" class="collapse withImg" style="display: none;">
															<ul class="level1">
																<li class="level2">
																	<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2 has-children" target="">
																Cyclo Cycling Computer                             </a>
																</li>
																
															</ul>

															<div class="cats-info-wrapper">
																<a href="#">
																	<img src="../images/menu/demo1.png" alt="">
																</a>
																<div class="cats-title mt-20">
																	MioWORK™701
																</div>
																<p class="mb-10">Rugged mobile devices designed for enterprise applications</p>
																<a class="btn btn-fill-black-b btn-xs btn-round" href="https://www.mio.com/tw/products/category-rider-camera" target="_blank">瞭解更多</a>
															</div>

														</div>
													</div>

													<div class="panel">
														<div id="nav-801-sub" class="collapse withImg" style="display: none;">
															<ul class="level1">
																<li class="level2">
																	<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2 has-children" target="">
																	Connected Dashcam                           </a>
																</li>
																
															</ul>

															<div class="cats-info-wrapper">
																<a href="#">
																	<img src="../images/menu/demo1.png" alt="">
																</a>
																<div class="cats-title mt-20">
																	MioWORK™ 801
																</div>
																<p class="mb-10">Rugged mobile devices designed for enterprise applications</p>
																<a class="btn btn-fill-black-b btn-xs btn-round" href="https://www.mio.com/tw/products/category-rider-camera" target="_blank">瞭解更多</a>
															</div>

														</div>
													</div>

													<div class="panel">
														<div id="nav-901-sub" class="collapse withImg" style="display: none;">
															<ul class="level1">
																<li class="level2">
																	<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2 has-children" target="">
																	Car Navigation                           </a>
																</li>
																<li class="level2">
																	<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2 has-children" target="">
																	Off Road Navigation                           </a>
																</li>
																
															</ul>

															<div class="cats-info-wrapper">
																<a href="#">
																	<img src="../images/menu/demo1.png" alt="">
																</a>
																<div class="cats-title mt-20">
																	MioWORK™ 901
																</div>
																<p class="mb-10">Rugged mobile devices designed for enterprise applications</p>
																<a class="btn btn-fill-black-b btn-xs btn-round" href="https://www.mio.com/tw/products/category-rider-camera" target="_blank">瞭解更多</a>
															</div>

														</div>
													</div>

													<div class="panel">
														<div id="nav-1001-sub" class="collapse withImg" style="display: none;">
															<ul class="level1">
																<li class="level2">
																	<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2 has-children" target="">
																	Industrial Tablet                          </a>
																</li>
																<li class="level2">
																	<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2 has-children" target="">
																	Fleet Tablet                           </a>
																</li>
																<li class="level2">
																	<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2 has-children" target="">
																	Handy Terminal                        </a>
																</li>
																
															</ul>

															<div class="cats-info-wrapper">
																<a href="#">
																	<img src="../images/menu/demo1.png" alt="">
																</a>
																<div class="cats-title mt-20">
																	MioWORK™ 1001
																</div>
																<p class="mb-10">Rugged mobile devices designed for enterprise applications</p>
																<a class="btn btn-fill-black-b btn-xs btn-round" href="https://www.mio.com/tw/products/category-rider-camera" target="_blank">瞭解更多</a>
															</div>

														</div>
													</div>

													<div class="panel">
														<div id="nav-1101-sub" class="collapse withImg" style="display: none;">
															<ul class="level1">
																<li class="level2">
																	<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2 has-children" target="">
																	XYZ                          </a>
																</li>
																
															</ul>

															<div class="cats-info-wrapper">
																<a href="#">
																	<img src="../images/menu/demo1.png" alt="">
																</a>
																<div class="cats-title mt-20">
																	MioWORK™ 1101
																</div>
																<p class="mb-10">Rugged mobile devices designed for enterprise applications</p>
																<a class="btn btn-fill-black-b btn-xs btn-round" href="https://www.mio.com/tw/products/category-rider-camera" target="_blank">瞭解更多</a>
															</div>

														</div>
													</div>

													<div class="panel">
														<div id="nav-1201-sub" class="collapse withImg" style="display: none;">
															<ul class="level1">
																<li class="level2">
																	<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2 has-children" target="">
																	XYZ                          </a>
																</li>
																
															</ul>

															<div class="cats-info-wrapper">
																<a href="#">
																	<img src="../images/menu/demo1.png" alt="">
																</a>
																<div class="cats-title mt-20">
																	MioWORK™ 1201
																</div>
																<p class="mb-10">Rugged mobile devices designed for enterprise applications</p>
																<a class="btn btn-fill-black-b btn-xs btn-round" href="https://www.mio.com/tw/products/category-rider-camera" target="_blank">瞭解更多</a>
															</div>

														</div>
													</div>

													<div class="panel">
														<div id="nav-1301-sub" class="collapse withImg" style="display: none;">
															<ul class="level1">
																<li class="level2">
																	<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2 has-children" target="">
																	Self-Service Kiosk                          </a>
																</li>
																
															</ul>

															<div class="cats-info-wrapper">
																<a href="#">
																	<img src="../images/menu/demo1.png" alt="">
																</a>
																<div class="cats-title mt-20">
																	MioWORK™ 1301
																</div>
																<p class="mb-10">Rugged mobile devices designed for enterprise applications</p>
																<a class="btn btn-fill-black-b btn-xs btn-round" href="https://www.mio.com/tw/products/category-rider-camera" target="_blank">瞭解更多</a>
															</div>

														</div>
													</div>

													<div class="panel">
														<div id="nav-1401-sub" class="collapse withImg" style="display: none;">
															<ul class="level1">
																<li class="level2">
																	<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2 has-children" target="">
																	Connectivity Module                         </a>
																</li>
																
															</ul>

															<div class="cats-info-wrapper">
																<a href="#">
																	<img src="../images/menu/demo1.png" alt="">
																</a>
																<div class="cats-title mt-20">
																	MioWORK™ 1401
																</div>
																<p class="mb-10">Rugged mobile devices designed for enterprise applications</p>
																<a class="btn btn-fill-black-b btn-xs btn-round" href="https://www.mio.com/tw/products/category-rider-camera" target="_blank">瞭解更多</a>
															</div>

														</div>
													</div>

													<div class="panel">
														<div id="nav-1401-sub" class="collapse withImg" style="display: none;">
															<ul class="level1">
																<li class="level2">
																	<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2 has-children" target="">
																	xyz                         </a>
																</li>
																
															</ul>

															<div class="cats-info-wrapper">
																<a href="#">
																	<img src="../images/menu/demo1.png" alt="">
																</a>
																<div class="cats-title mt-20">
																	MioWORK™ 1501
																</div>
																<p class="mb-10">Rugged mobile devices designed for enterprise applications</p>
																<a class="btn btn-fill-black-b btn-xs btn-round" href="https://www.mio.com/tw/products/category-rider-camera" target="_blank">瞭解更多</a>
															</div>

														</div>
													</div>


												</div>
											</div>
										</li>
										<!--product end-->

										<li class="high megamenu level0"><!--Solutions 1級-->
											<a href="javascript:void(0);" class="level0 has-children disable " target="">
												Solutions            
											</a>
											<span class="more"></span>
											<div class="sub-menu-wrapper">
												<ul class="level0">
													<li class="level1"><!--2級-->
														<a href="https://enterprise.mio.com/en_eu/miowork" class="level1 has-children" data-target-submenu="#nav-101-sub" target="">
														Smart Mobility
														</a>
														<span class="more"></span>
														<ul class="level1">
															<li class="level2"><!--3級-->
																<a href="https://enterprise.mio.com/en_eu/miowork/handhelds" class="level2" target="">
																Auxiliary Software                    </a>
															</li>
														</ul>
													</li>
													
													<li class="level1"><!--2級-->
														<a href="https://enterprise.mio.com/en_eu/mioeye/" class="level1 has-children" data-target-submenu="#nav-102-sub" target="">
															Smart Transportation
														</a>
														<span class="more"></span>
														<ul class="level1">
															<li class="level2"><!--3級-->
															<a href="https://enterprise.mio.com/en_eu/mioeye/fleet-cameras" class="level2" target="">
																Solution</a>
															</li>
														</ul>
													</li>
													
													<li class="level1"><!--2級-->
														<a href="https://enterprise.mio.com/en_eu/miocare" class="level1 has-children" data-target-submenu="#nav-203-sub" target="">
															Smart Industries                   </a>
														<span class="more"></span>
														<ul class="level1">
															<li class="level2"><!--3級-->
															<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2" target="">
																Auxiliary Software                       </a>
															</li>
														</ul>
													</li>
												</ul>

												<div id="product-submenu" class="sub-megamenu-wrapper"><!--浮動mega子選單-->
													<div class="panel">
														<div id="nav-101-sub" class="collapse withImg" style="display: none;">
															<ul class="level1">
																
																<li class="level2"><!--3級-->
																	<a href="https://enterprise.mio.com/en_eu/miowork/handhelds" class="level2 has-children" target="">
																		Auxiliary Software                            </a>
																	<ul class="level2">
																		<li class="level3"><!--4級-->
																			<a href="#" class="level3 " target="">
																				Smart ADAS  <span style="background-color: #f05a1e"></span>
																			</a>
																		</li>
																		<li class="level3"><!--4級-->
																			<a href="#" class="level3 " target="">
																				Motobike App (MiVue Pro)  <span style="background-color: #f05a1e"></span>
																			</a>
																		</li>
																		<li class="level3"><!--4級-->
																			<a href="#" class="level3 " target="">
																				Outdoor App (MioShare)  <span style="background-color: #f05a1e"></span>
																			</a>
																		</li>
																		<li class="level3"><!--4級-->
																			<a href="#" class="level3 " target="">
																				MioNext App  <span style="background-color: #f05a1e"></span>
																			</a>
																		</li>
																	</ul>
																</li>

															</ul>

															<div class="cats-info-wrapper">
																<a href="#">
																	<img src="../images/menu/demo1.png" alt="">
																</a>
																<div class="cats-title mt-20">
																	MioWORK™
																</div>
																<p class="mb-10">Rugged mobile devices designed for enterprise applications</p>
																<a class="btn btn-fill-black-b btn-xs btn-round" href="https://www.mio.com/tw/products/category-rider-camera" target="_blank">瞭解更多</a>
															</div>

														</div>
													</div>

													<div class="panel">
														<div id="nav-102-sub" class="collapse withImg" style="display: none;">
															<ul class="level1">
																<li class="level2">
																	<a href="https://enterprise.mio.com/en_eu/mioeye/fleet-cameras" class="level2 has-children" target="">
																	Solution                              </a>
																	<ul class="level2">
																		<li class="level3">
																			<a href="https://enterprise.mio.com/en_eu/mioeye/fleet-cameras/mioeye-k-series" class="level3 " target="">
																			VT Solution                                  </a>
																		</li>
																		<li class="level3">
																			<a href="https://enterprise.mio.com/en_eu/mioeye/fleet-cameras/mioeye-k-series" class="level3 " target="">
																			Route Management Platform                                  </a>
																		</li>
																	</ul>
																</li>
															</ul>

															<div class="cats-info-wrapper">
																<a href="#">
																	<img src="../images/menu/demo1.png" alt="">
																</a>
																<div class="cats-title mt-20">
																	MioWORK™
																</div>
																<p class="mb-10">Rugged mobile devices designed for enterprise applications</p>
																<a class="btn btn-fill-black-b btn-xs btn-round" href="https://www.mio.com/tw/products/category-rider-camera" target="_blank">瞭解更多</a>
															</div>

														</div>
													</div>

													<div class="panel">
														<div id="nav-203-sub" class="collapse withImg" style="display: none;">
															<ul class="level1">
																<li class="level2">
																	<a href="https://enterprise.mio.com/en_eu/miocare/tablets" class="level2 has-children" target="">
																	Auxiliary Software                              </a>
																	<ul class="level2">
																		<li class="level3">
																			<a href="https://enterprise.mio.com/en_eu/miocare/tablets/miocare-l1000-series" class="level3 " target="">
																			Mobile Device Management                                  </a>
																		</li>
																		<li class="level3">
																			<a href="https://enterprise.mio.com/en_eu/miocare/tablets/miocare-l1000-series" class="level3 " target="">
																			Tablet App                                  </a>
																		</li>
																	</ul>
																</li>
																
															</ul>

															<div class="cats-info-wrapper">
																<a href="#">
																	<img src="../images/menu/demo1.png" alt="">
																</a>
																<div class="cats-title mt-20">
																	MioWORK™
																</div>
																<p class="mb-10">Rugged mobile devices designed for enterprise applications</p>
																<a class="btn btn-fill-black-b btn-xs btn-round" href="https://www.mio.com/tw/products/category-rider-camera" target="_blank">瞭解更多</a>
															</div>

														</div>
													</div>

												</div>
											</div>
										</li>

										<li class="megamenu level0">
											<a href="javascript:void(0);" class="level0 has-children disable " target="">
												技術支援
											</a>
											<span class="more"></span>
											<div class="sub-menu-wrapper">
												<ul class="level0">
													<li class="level1">
														<a href="https://enterprise.mio.com/en_eu/miowork" class="level1 ">
														核心能力
														</a>
													</li>
													<li class="level1">
														<a href="https://enterprise.mio.com/en_eu/miowork" class="level1 ">
														創新研發
														</a>
													</li>
													<li class="level1">
														<a href="#" class="level1 ">
														品質管理
														</a>
													</li>
													<li class="level1">
														<a href="#" class="level1 ">
														生產製造
														</a>
													</li>
												</ul>
											</div>
										</li>

										<li class="megamenu level0">
										<a href="#" class="level0 has-children disable " target="_blank">
											服務
										</a>
										</li>

										<li class="megamenu level0">
											<a href="javascript:void(0);" class="level0 has-children disable " target="">
												關於我們
											</a>
											<span class="more"></span>
											<div class="sub-menu-wrapper">
												<ul class="level0">
													<li class="level1">
														<a href="https://enterprise.mio.com/en_eu/miowork" class="level1 ">
														公司簡介
														</a>
													</li>
													<li class="level1">
														<a href="https://enterprise.mio.com/en_eu/miowork" class="level1 ">
														聯華神通集團
														</a>
													</li>
													<li class="level1">
														<a href="#" class="level1 ">
														品牌介紹
														</a>
													</li>
													<li class="level1">
														<a href="#" class="level1 ">
														得獎紀錄
														</a>
													</li>
													<li class="level1">
														<a href="#" class="level1 ">
														投資人資訊
														</a>
													</li>
													<li class="level1">
														<a href="#" class="level1 ">
														企業社會責任
														</a>
													</li>
													<li class="level1">
														<a href="#" class="level1 ">
														最新消息
														</a>
													</li>
												</ul>
											</div>
										</li>

										<li class="megamenu level0">
											<a href="javascript:void(0);" class="level0 has-children disable " target="">
												聯絡我們
											</a>
											<span class="more"></span>
											<div class="sub-menu-wrapper">
												<ul class="level0">
													<li class="level1">
														<a href="https://enterprise.mio.com/en_eu/miowork" class="level1 ">
														聯絡我們
														</a>
													</li>
													<li class="level1">
														<a href="https://enterprise.mio.com/en_eu/miowork" class="level1 ">
														全球據點
														</a>
													</li>
													<li class="level1">
														<a href="https://enterprise.mio.com/en_eu/miowork" class="level1 ">
														加入神達數位
														</a>
													</li>
												</ul>
											</div>
										</li>

										<li class="megamenu level0">
											<a class="nav-link" href="#">
												<i class="fa fa-globe"></i>
											</a>
											<span class="more"></span>
											<div class="sub-menu-wrapper">
												<ul class="level0">
													<li class="level1">
														<a href="https://enterprise.mio.com/en_eu/miowork" class="level1 ">
														中文
														</a>
													</li>
													<li class="level1">
														<a href="https://enterprise.mio.com/en_eu/miowork" class="level1 ">
														English
														</a>
													</li>
												</ul>
											</div>
										</li>

									</ol>
								</nav>
							</div>

							<script>
							$j(document).ready(function() {
								$j('li.level1 a').each(function(){
									var targetSubmenu = $j(this).attr('data-target-submenu') + " ul";

									if($j(targetSubmenu).children().length == 0) {
										$j(targetSubmenu).parent().parent().hide();
										$j(this).removeClass('has-children');
									}
								})
							});
							</script>
						</div>

						<div class="dimmer"></div>
						<span class="dimmer-close"></span>
					</div>
				</header>
				<!--2024 menu end-->
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
	

	<!-- <div>

	</div> -->
