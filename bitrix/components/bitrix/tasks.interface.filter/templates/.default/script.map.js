{"version":3,"sources":["script.js"],"names":["BX","FilterEntitySelector","this","_id","_settings","_fieldId","_control","_selector","_inputKeyPressHandler","delegate","keypress","prototype","initialize","id","settings","getSetting","addCustomEvent","window","onCustomEntitySelectorOpen","onCustomEntitySelectorClose","getId","name","defaultval","hasOwnProperty","e","open","field","query","Tasks","Integration","Socialnetwork","NetworkSelector","scope","mode","useSearch","useAdd","parent","popupOffsetTop","popupOffsetLeft","bindEvent","data","setData","util","htmlspecialcharsback","nameFormatted","close","control","closeAll","k","items","create","self","TasksGroupsSelectorInit","menu","selectorId","buttonAddId","pathTaskAdd","indexOf","messages","groups","currentGroup","groupLimit","setTaskAddHref","groupId","setAttribute","parseInt","text","htmlspecialchars","bind","menuItems","clickHandler","item","onCustomEvent","currentMenuItems","getMenuItems","addMenuItem","onclick","length","getMenuItem","removeMenuItem","innerHTML","i","c","push","class","delimiter","TASKS_BTN_GROUP_SELECT","selector","proxy_context","substring","PopupMenu","autoHide","closeByEsc","popupWindow","show","SortManager","setSort","dir","gridId","Main","gridManager","undefined","grid","getById","instance","sortByColumn","sort_by","sort_order","getRows","enableDragAndDrop","disableDragAndDrop","url","location","toString","href","add_url_param","SORTF","SORTD"],"mappings":"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","file":""}