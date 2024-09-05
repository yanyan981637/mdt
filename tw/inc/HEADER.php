<?php
	require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';
	
	// Cookie http only
	ini_set("session.cookie_httponly", 1);
	// Script root path
	// $RootPath = App\DataAccess\Config::initRootPath();	
	// Database singleton
	$MysqlInstance = App\DataAccess\Mysql::getInstance();
	$MysqlConn = $MysqlInstance->getConnection();
	// Script last path
	$cfg['file_name'] = substr(strrchr($_SERVER['SCRIPT_NAME'], "/" ), 1 );
	
	// 判斷當前是否為 HTTPS 協議
	function is_https() {
		return (!empty($_SERVER['HTTPS']) && strtolower($_SERVER['HTTPS']) !== 'off')
			|| (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https')
			|| (!empty($_SERVER['HTTP_FRONT_END_HTTPS']) && strtolower($_SERVER['HTTP_FRONT_END_HTTPS']) !== 'off');
	}

	// 獲取當前完整域名
	function getCurrentDomain() {
		$protocol = is_https() ? 'https://' : 'http://';
		$domain = $_SERVER['SERVER_NAME'];
		$port = $_SERVER['SERVER_PORT'];

		// 僅在非默認埠號時添加埠號資訊
		if (!(($port == '443' && is_https()) || ($port == '80' && !is_https()))) {
			$domain .= ":$port";
		}

		return $protocol . $domain;
	}

	$currentDomain = getCurrentDomain();

	session_start();

	// 過濾並檢查來自 POST 的資料，並設定 cookie
	$ckType = isset($_POST['ckType']) ? htmlspecialchars($_POST['ckType'], ENT_QUOTES, 'UTF-8') : '';
	if ($ckType && ($ckType === 'all' || $ckType === 'essential')) {
		$csrfTokenPost = isset($_POST['csrf_token_ck']) ? htmlspecialchars($_POST['csrf_token_ck'], ENT_QUOTES, 'UTF-8') : '';
		if ($csrfTokenPost && $csrfTokenPost === $_SESSION['csrf_token_ck']) {
			setcookie(
				"mdt_policy",
				$ckType,
				time() + 3600 * 24 * 365,
				"/",
				$_SERVER['SERVER_NAME'],
				is_https(), // 根據是否為 HTTPS 動態設置 cookie 的 secure 標誌
				true // HTTP Only
			);
		}
	}
	
	// 過濾 MsgFormSend 參數，防止 XSS 攻擊
	if (isset($_POST['MsgFormSend'])) {
		$_GET['MsgFormSend'] = htmlspecialchars($_POST['MsgFormSend'], ENT_QUOTES, 'UTF-8');
	}

	// Paths to JSON files
	$ows_menu_JsonPath = __DIR__ . '/../../src/WebData/ows_menu_20240827.json';
	$ows_meta_JsonPath = __DIR__ . '/../../src/WebData/ows_meta_20240827.json';

	// Function to replace slashes in all string fields of an array
	function replaceSlashes(&$array) {
		foreach ($array as &$item) {
			if (is_array($item)) {
				replaceSlashes($item);
			} elseif (is_string($item)) {
				$item = str_replace('\/', '/', $item);
			}
		}
		unset($item);
	}

	// Read and decode JSON data
	$ows_menu_data_Array = json_decode(file_get_contents($ows_menu_JsonPath), true)["ows_menu"];
	$ows_meta_data_Array = json_decode(file_get_contents($ows_meta_JsonPath), true)["ows_meta"];

	// Replace slashes in menu and meta data arrays
	replaceSlashes($ows_menu_data_Array);
	replaceSlashes($ows_meta_data_Array);

	// Filter and sort menu data
	$filteredData = array_filter($ows_menu_data_Array, function($row) {
		return $row['menu_class'] === 'main' && $row['is_online'] == 1 && $row['lang'] === 'tw';
	});

	usort($filteredData, function($a, $b) {
		return $a['menu_order'] <=> $b['menu_order'];
	});

	// Initialize variables
	$all_menu = [];
	$first_menu = [];
	$current_menu = [];
	$all_meta = [];
	$Current_Meta_Title = null;
	$Current_Meta_Description = null;
	$Current_Meta_Keywords = null;

	// Filter menus based on file name
	foreach ($filteredData as $row) {
		if ($row['file_name'] != 'index.php') {
			$all_menu[] = $row;
		}
		if (is_null($row['father_menu_id']) && $row['file_name'] != 'index.php') {
			$first_menu[] = $row;
		}
	}

	if ($cfg['file_name'] == '404.php') {
		$cfg['file_name'] = "index.php";
	}

	// Filter for the current menu
	$current_menu = array_filter($ows_menu_data_Array, function($row) use ($cfg) {
		return $row['menu_class'] === 'main' && $row['is_online'] == 1 && $row['lang'] === 'tw' && $row['file_name'] === $cfg['file_name'];
	});
	$current_menu = reset($current_menu);

	// Set current menu details if found
	if ($current_menu && !preg_match("/press-events/i", $cfg['file_name'])) {
		$Current_Menu_Id           = $current_menu['menu_id'];
		$Current_Menu_Father_Id    = $current_menu['father_menu_id'];
		$Current_Menu_Order        = $current_menu['menu_order'];
		$Current_Menu_Name         = $current_menu['menu_name'];
		$Current_Menu_File_Name    = $current_menu['file_name'];
		$Current_Menu_Inquiry_type = $current_menu['inquiry_type'];
		$Current_Menu_Is_Online    = $current_menu['is_online'];
	}

	// Process meta data
	foreach ($ows_meta_data_Array as $rowT) {
		$all_meta[] = $rowT;

		if ($rowT['menu_id'] == $Current_Menu_Id) {
			$Current_Meta_Title       = $rowT['meta_title'] ?? "";
			$Current_Meta_Description = $rowT['meta_description'] ?? "";
			$Current_Meta_Keywords    = $rowT['meta_keywords'] ?? "";

			$default_meta_description = "神達數位是一個廣受信賴的車用電子領導廠商，除了車用電子，我們也是智聯網，專業平板領域的創新先驅者，我們以GPS和影像處理核心技術，滿足客戶實際需求，並以體貼入微的設計反映對品質的高標準及設計巧思，引領客戶朝向嶄新且引人入勝的方向前進。";
			$Current_Meta_Description = $Current_Meta_Description ?: $default_meta_description;
		}
	}


	//判斷是否為手機
	function isMobile() {
		// 檢查 HTTP_X_WAP_PROFILE 頭信息
		if (!empty($_SERVER['HTTP_X_WAP_PROFILE'])) {
			return true;
		}

		// 檢查 HTTP_VIA 頭信息中是否包含 "wap"
		if (!empty($_SERVER['HTTP_VIA']) && stripos($_SERVER['HTTP_VIA'], "wap") !== false) {
			return true;
		}

		// 檢查 HTTP_USER_AGENT 中的常見移動設備標識
		if (!empty($_SERVER['HTTP_USER_AGENT'])) {
			$clientKeywords = [
				'nokia', 'sony', 'ericsson', 'mot', 'samsung', 'htc', 'sgh', 'lg',
				'sharp', 'sie-', 'philips', 'panasonic', 'alcatel', 'lenovo', 
				'iphone', 'ipod', 'blackberry', 'meizu', 'android', 'netfront', 
				'symbian', 'ucweb', 'windowsce', 'palm', 'operamini', 'operamobi', 
				'openwave', 'nexusone', 'cldc', 'midp', 'wap', 'mobile', 'MicroMessenger'
			];
			// 使用更高效的正則匹配
			if (preg_match("/(" . implode('|', $clientKeywords) . ")/i", $_SERVER['HTTP_USER_AGENT'])) {
				return true;
			}
		}

		// 檢查 HTTP_ACCEPT 中的 WAP MIME 類型
		if (!empty($_SERVER['HTTP_ACCEPT'])) {
			if (strpos($_SERVER['HTTP_ACCEPT'], 'vnd.wap.wml') !== false && 
			(strpos($_SERVER['HTTP_ACCEPT'], 'text/html') === false || 
				strpos($_SERVER['HTTP_ACCEPT'], 'vnd.wap.wml') < strpos($_SERVER['HTTP_ACCEPT'], 'text/html'))) {
				return true;
			}
		}

		return false;
	}
?>

<!DOCTYPE html>
<html class="no-js" lang="zh-Hant-TW">
<head>
	<!-- Basic Page Needs -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<?php
	// Set current menu name based on file name
	if (preg_match("/press-events/i", $cfg['file_name'])) {
		$Current_Menu_Name = "最新消息 - MiTAC Digital Technology 神達數位";
	} elseif ($cfg['file_name'] == '404.php') {
		$Current_Menu_Name = "404";
	}

	$metaTitle = $Current_Meta_Title ?: $Current_Menu_Name;
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

	<!-- hreflang -->
	<?php
		$urlISO = ['x-default', 'zh-Hant', 'en'];
		$urlLang = ['tw', 'tw', 'en'];

		foreach ($urlLang as $index => $lang) {
			echo "<link rel='alternate' hreflang='{$urlISO[$index]}' href='https://www.mitacmdt.com/{$lang}/{$Current_Menu_File_Name}' />";
		}
	?>

	<!-- Mobile Specific Metas -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="theme-color" content="#212121"/>
	<meta name="msapplication-navbutton-color" content="#212121"/>
	<meta name="apple-mobile-web-app-status-bar-style" content="#212121"/>

	<!-- CSS -->
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
	<link rel="icon" type="image/png" href="../favicon-16x16.png">

	<!-- Menu -->
	<script src="../ext/menu_b2b/prototype.js"></script>
	<script src="../ext/menu_b2b/validation.js"></script>
	<script src="../ext/menu_b2b/jquery-1.11.3.min.js"></script>
	<script src="../ext/menu_b2b/slider.js"></script>
	<script src="../ext/menu_b2b/js.js"></script>
	<script src="../ext/menu_b2b/modernizr.js"></script>
	<script src="../ext/menu_b2b/jquery-migrate.js"></script>
	<script src="../ext/menu_b2b/jquery.appear.js"></script>
	<script src="../ext/menu_b2b/noconflict.js"></script>
	<script src="../ext/menu_b2b/enquire.js"></script>
	<script src="../ext/menu_b2b/app.js"></script>
	<link rel="stylesheet" href="../ext/menu_b2b/styles.css" media="all" />
	<link rel="stylesheet" href="../ext/menu_b2b/theme.css" media="all" />

	<!-- Extensions -->
	<?php
		// Define an array for extensions to simplify the structure
		$extensions = [
			'index.php' => [
				'css' => [
					'../ext/swiper/css/swiper.min.css',
					'../ext/swiper/css/style.css',
					'../ext/3screen/style.css',
					'../ext/slider_qm/owl.carousel.css',
					'../ext/slider_qm/owl.theme.css',
					'../ext/slider_qm/owl.transitions.css',
					'../ext/slider_qm/styles.css',
				],
				'js' => [
					'../js/jquery-2.1.3.min.js',
					'../ext/swiper/js/swiper.min.js',
				]
			],
			'milestone.php' => [],
			'quality-management.php' => [
				'css' => [
					'../ext/slider_qm/owl.carousel.css',
					'../ext/slider_qm/owl.theme.css',
					'../ext/slider_qm/owl.transitions.css',
					'../ext/slider_qm/styles.css',
				],
				'js' => [
					'../js/jquery-2.1.3.min.js',
				]
			],
			'engineering.php' => [
				'css' => ['../ext/map_tips/css/style.css'],
			],
			'services.php' => [
				'css' => ['../ext/map_tips/css/style.css'],
			],
			'general-inquiry.php' => [
				'js' => [
					'https://www.google.com/recaptcha/api.js?hl=zh-tw',
					'../js/jquery-validation-1.14.0/jquery.js',
					'../js/jquery-validation-1.14.0/jquery.validate.min.js',
					'../js/jquery-validation-1.14.0/messages_zh.js',
					'../js/jquery.blockUI-2.70.js',
					'../ext/sweetalert/sweetalert.min.js',
				]
			],
			'connected-dashcam' => [
				'css' => [
					'../ext/swiper/css/swiper.min.css',
					'../ext/swiper/css/style.css',
				]
			]
		];

		// Include the extensions based on the current file name
		foreach ($extensions as $file => $assets) {
			if (preg_match("/$file/i", $Current_Menu_File_Name)) {
				foreach ($assets['css'] ?? [] as $css) {
					echo "<link rel='stylesheet' href='$css'>";
				}
				foreach ($assets['js'] ?? [] as $js) {
					echo "<script src='$js'></script>";
				}
			}
		}
	?>
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
		"description": "A trusted leader in automotive electronics, MiTAC Digital Technology (MDT) helps users navigate life with passion, positivity and a drive to keep moving forward. Beyond automotive electronics, MDT is at the forefront of innovation in the fields of AIoT and industrial tablets. We take our customers in new and exciting directions with thoughtful designs that reflect highest principles of quality and ingenuity.",
		"address": {
		"@type": "PostalAddress",
		"streetAddress": "No.200, Wen Hwa 2nd Rd., Kuei Shan Dist., Taoyuan City 33383, Taiwan (R.O.C)",
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
		"publisher":    {
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
		"description": "MiTAC Holdings Corporation (MHC, TWSE: 3706) held a press conference of material information at the Taiwan Stock Exchange today on behalf of its subsidiary MiTAC International Corporation (MIC) announcing the Board of Directors’ approval of the spinoff of its Mobile Communication Product Business to MiTAC Digital Technology Corporation (MDT). The record date of the spinoff is set on January 1st, 2018. This spinoff is an organization re-structuring within the group and will not affect the shareholders equity of MHC.",
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
		"description": "Mio，世界級行車紀錄器領導品牌，精心為你。Mio行車記錄器為百分之百台灣研發設計，生產製造基地配備自動化生產設備與嚴謹管理系統。所有Mio 行車記錄器皆通過超過50項測試，確保其最高品質與完美效能。Mio守護您的行車安全，並在每一次的旅途中，創造無與倫比的完美體驗。",
		"thumbnailUrl": "https://i.ytimg.com/vi/UWX70dTajBw/hqdefault.jpg",
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
		"description": "Mio, the world leading brand of Dashcam, it’s all about you. Mio Dashcams are 100% designed in Taiwan and manufactured in a state-of-the-art factory with automated production facilities and a rigorous management system. All Mio Dashcams undergo a battery of more than 50 rigorous tests to ensure the highest performance standards. We ensure your driving safety and give you an enjoyable experience during each of your journeys.",
		"thumbnailUrl": "https://i.ytimg.com/vi/mSl6az1Bgiw/hqdefault.jpg",
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

	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-KPTFRWN');</script>
	<!-- End Google Tag Manager -->
</head>
<body class="royal_preloader">

<script>
console.log("web refresh test")
console.log(555);

</script>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe class="hidd" src="https://www.googletagmanager.com/ns.html?id=GTM-KPTFRWN" height="0" width="0"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<!-- <div id="royal_preloader"></div> -->

<!-- Nav and Logo -->
<div id="menu-wrap" class="cbp-af-header black-menu-background-1st-trans menu-fixed-padding menu-shadow">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <header id="header" class="page-header">
                    <div class="page-header-container">
                        <!-- Logo -->
                        <a class="logo" href="./index.php">
                            <img src="../../images/MDT_logo_light@2x.png" alt="MiTAC神達數位" class="large" width="165" height="40" />
                            <img src="../../images/MDT_logo_light@2x.png" alt="MiTAC神達數位" class="small" width="165" height="40" />
                            <img src="../../images/MDT_logo_light@2x.png" alt="MiTAC神達數位" class="white" width="165" height="40" />
                        </a>
                        <!-- Account -->
                        <div id="header-account" class="d-none"></div>
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
                                        <!-- Generate Menu -->
                                        <?php
                                            function getSubItems($father_menu_id, $all_menu) {
                                                return array_values(array_map(function($items) {
                                                    return [
                                                        'menu_id' => $items['menu_id'],
                                                        'father_menu_id' => $items['father_menu_id'],
                                                        'menu_order' => $items['menu_order'],
                                                        'menu_name' => $items['menu_name'],
                                                        'file_name' => $items['file_name'] ?: 'javascript:void(0);',
                                                        'href_target' => $items['href_target']
                                                    ];
                                                }, array_filter($all_menu, function($items) use ($father_menu_id) {
                                                    return $items['father_menu_id'] == $father_menu_id;
                                                })));
                                            }

                                            function getOgInfo($menu_id, $all_meta) {
                                                foreach ($all_meta as $og) {
                                                    if($og['menu_id'] == $menu_id) {
                                                        return [
                                                            'menu_id' => $og['menu_id'],
                                                            'og_title' => $og['og_title'],
                                                            'og_alt' => $og['og_alt'],
                                                            'og_img' => $og['og_img'],
                                                            'og_url' => $og['og_url']
                                                        ];
                                                    }
                                                }
                                                return null;
                                            }

                                            $special_menus = [185, 186, 187, 188];
                                            $void_link = 'javascript:void(0);';

                                            foreach ($first_menu as $menu) {
                                                $pop = in_array($menu['menu_id'], $special_menus) ? 'high' : '';
                                                $first_menu_href = empty($menu['file_name']) ? $void_link : $menu['file_name'];

                                                echo "<li class='{$pop} megamenu level0'>
                                                        <a href='{$first_menu_href}' class='level0 has-children disable' target='{$menu['href_target']}'>
                                                            {$menu['menu_name']}
                                                        </a>";

                                                $level_1 = getSubItems($menu['menu_id'], $all_menu);
                                                if ($level_1) {
                                                    echo "<span class='more'></span>
                                                          <div class='sub-menu-wrapper'>
                                                              <ul class='level0'>";
                                                    
                                                    foreach ($level_1 as $items1) {
                                                        $active = ($items1['menu_id'] == $Current_Menu_Id || $items1['menu_id'] == $Current_Menu_Father_Id) ? 'active' : '';
                                                        echo "<li class='level1 {$active} @{$items1['menu_id']}'>
                                                                <a href='{$items1['file_name']}' class='level1 has-children' data-target-submenu='#nav-{$items1['menu_id']}-sub' target='{$items1['href_target']}'>
                                                                    {$items1['menu_name']}
                                                                </a>";

                                                        $level_2 = getSubItems($items1['menu_id'], $all_menu);
                                                        if ($level_2) {
                                                            echo "<span class='more'></span>
                                                                  <ul class='level1'>";
                                                            
                                                            foreach ($level_2 as $items2) {
                                                                echo "<li class='level2'>
                                                                        <a href='{$items2['file_name']}' class='level2' target='{$items2['href_target']}'>
                                                                            {$items2['menu_name']}
                                                                        </a>
                                                                      </li>";
                                                            }
                                                            echo "</ul>";
                                                        }
                                                        echo "</li>";
                                                    }
                                                    echo "</ul>";

                                                    if ($pop == 'high') {
                                                        echo "<div id='product-submenu' class='sub-megamenu-wrapper'>";
                                                        foreach ($level_1 as $items1) {
                                                            echo "<div class='panel'>
                                                                    <div id='nav-{$items1['menu_id']}-sub' class='collapse withImg' style='display: none;'>";

                                                            $level_2 = getSubItems($items1['menu_id'], $all_menu);
                                                            if ($level_2) {
                                                                echo "<ul class='level1'>";
                                                                foreach ($level_2 as $items2) {
                                                                    echo "<li class='level2'>
                                                                            <a href='{$items2['file_name']}' class='level2 has-children' target='{$items2['href_target']}'>
                                                                                {$items2['menu_name']}
                                                                            </a>";

                                                                    $level_3 = getSubItems($items2['menu_id'], $all_menu);
                                                                    if ($level_3) {
                                                                        echo "<ul class='level2'>";
                                                                        foreach ($level_3 as $items3) {
                                                                            echo "<li class='level3'>
                                                                                    <a href='{$items3['file_name']}' class='level3' target='{$items3['href_target']}'>
                                                                                        {$items3['menu_name']}
                                                                                    </a>
                                                                                  </li>";
                                                                        }
                                                                        echo "</ul>";
                                                                    }
                                                                    echo "</li>";
                                                                }
                                                                echo "</ul>";
                                                            }

                                                            $og_info = getOgInfo($items1['menu_id'], $all_meta);
                                                            if ($og_info) {
                                                                echo "<div class='cats-info-wrapper'>
                                                                        <a href='#'>
                                                                            <img src='../images/menu/{$og_info['og_img']}' alt='{$og_info['og_title']}'>
                                                                        </a>
                                                                        <div class='cats-title mt-20'>
                                                                            {$og_info['og_title']}
                                                                        </div>
                                                                        <p class='mb-10'>{$og_info['og_alt']}</p>
                                                                        <a class='btn btn-fill-black-b btn-xs btn-round' href='{$og_info['og_url']}' target='{$items1['href_target']}'>瞭解更多</a>
                                                                      </div>";
                                                            }
                                                            echo "</div></div>";
                                                        }
                                                        echo "</div>";
                                                    }
                                                    echo "</div>";
                                                }
                                                echo "</li>";
                                            }

                                            // 語系轉換邏輯重構
                                            $tspgAry = null;
                                            foreach ($ows_menu_data_Array as $menu_item) {
                                                if ($menu_item['lang'] === 'en' && $menu_item['file_name'] === $Current_Menu_File_Name) {
                                                    $tspgAry = $menu_item;
                                                    break;
                                                }
                                            }
                                            // 設定轉換頁面URL
                                            $transferPageUrl = $tspgAry ? "/en/{$Current_Menu_File_Name}" : "/en/";
                                        ?>

                                        <!-- Language Switch -->
                                        <li class="megamenu level0">
                                            <a class="nav-link" href="#"><i class="fa fa-globe"></i></a>
                                            <span class="more"></span>
                                            <div class="sub-menu-wrapper">
                                                <ul class="level0">
                                                    <li class="level1">
                                                        <a href="#" class="level1">中文</a>
                                                    </li>
                                                    <li class="level1">
                                                        <a href="<?php echo $transferPageUrl; ?>" class="level1">English</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ol>
                                </nav>
                            </div>

                            <!-- Hide Empty Submenus -->
                            <script>
                                document.addEventListener("DOMContentLoaded", function() {
                                    document.querySelectorAll('li.level1 a').forEach(function(el) {
                                        var targetSubmenu = el.getAttribute('data-target-submenu') + " ul";
                                        var submenu = document.querySelector(targetSubmenu);
                                        if (submenu && submenu.children.length === 0) {
                                            submenu.closest('.panel').style.display = 'none';
                                            el.classList.remove('has-children');
                                        }
                                    });
                                });
                            </script>
                        </div>

                        <div class="dimmer"></div>
                        <span class="dimmer-close"></span>
                    </div>
                </header>
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
