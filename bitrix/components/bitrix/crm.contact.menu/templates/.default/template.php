<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();
global $APPLICATION;

if (!empty($arResult['BUTTONS']))
{
	$type = $arParams['TYPE'];
	$template = 'type2';
	if($type === 'list')
	{
		$template = SITE_TEMPLATE_ID === 'bitrix24' ? 'title' : '';
	}
	else if($type === 'details')
	{
		$template = SITE_TEMPLATE_ID === 'bitrix24' ? 'slider' : 'type2';
	}

	$APPLICATION->IncludeComponent(
		'bitrix:crm.interface.toolbar',
		$template,
		array(
			'TOOLBAR_ID' => $arResult['TOOLBAR_ID'],
			'BUTTONS' => $arResult['BUTTONS']
		),
		$component,
		array('HIDE_ICONS' => 'Y')
	);
}

if(isset($arResult['SONET_SUBSCRIBE']) && is_array($arResult['SONET_SUBSCRIBE'])):
	$subscribe = $arResult['SONET_SUBSCRIBE'];
?><script type="text/javascript">
BX.ready(
	function()
	{
		BX.CrmSonetSubscription.create(
			"<?=CUtil::JSEscape($subscribe['ID'])?>",
			{
				"entityType": "<?=CCrmOwnerType::ContactName?>",
				"serviceUrl": "<?=CUtil::JSEscape($subscribe['SERVICE_URL'])?>",
				"actionName": "<?=CUtil::JSEscape($subscribe['ACTION_NAME'])?>"
			}
		);
	}
);
</script><?
endif;
if (is_array($arResult['STEXPORT_PARAMS']))
{
	Bitrix\Main\Page\Asset::getInstance()->addJs('/bitrix/js/crm/common.js');
	Bitrix\Main\Page\Asset::getInstance()->addJs('/bitrix/js/crm/stexport.js');
	?>
	<script type="text/javascript">
	BX.ready(
		function()
		{
			BX.Crm.StExportManager.create(
				"<?=CUtil::JSEscape($arResult['STEXPORT_PARAMS']['managerId'])?>",
				<?=CUtil::PhpToJSObject($arResult['STEXPORT_PARAMS'])?>
			);
		}
	);
	</script><?php
}
