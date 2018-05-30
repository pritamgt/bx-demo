<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
IncludeModuleLangFile($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/intranet/public/about/.left.menu.php");
$aMenuLinks = Array(
	Array(
		GetMessage("ABOUT_MENU_OFFICIAL"),
		"#SITE_DIR#about/index.php", 
		Array("#SITE_DIR#about/official.php"), 
		Array(), 
		"" 
	),
	Array(
		GetMessage("ABOUT_MENU_LIFE"),
		"#SITE_DIR#about/life.php", 
		Array(), 
		Array(), 
		"" 
	),
	Array(
		GetMessage("ABOUT_MENU_ABOUT"),
		"#SITE_DIR#about/company/", 
		Array(), 
		Array(), 
		"" 
	),
	Array(
		GetMessage("ABOUT_MENU_PHOTO"),
		"#SITE_DIR#about/gallery/", 
		Array(), 
		Array(), 
		"CBXFeatures::IsFeatureEnabled('CompanyPhoto')" 
	),
	Array(
		GetMessage("ABOUT_MENU_VIDEO"),
		"#SITE_DIR#about/media.php", 
		Array(), 
		Array(), 
		"CBXFeatures::IsFeatureEnabled('CompanyVideo')" 
	),
	Array(
		GetMessage("ABOUT_MENU_CAREER"),
		"#SITE_DIR#about/career.php", 
		Array("#SITE_DIR#about/resume.php"), 
		Array(), 
		"CBXFeatures::IsFeatureEnabled('CompanyCareer')" 
	),
	Array(
		GetMessage("ABOUT_MENU_NEWS"),
		"#SITE_DIR#about/business_news.php", 
		Array(), 
		Array(), 
		"" 
	),
);
?>