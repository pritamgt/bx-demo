{"version":3,"file":"logic.min.js","sources":["logic.js"],"names":["BX","namespace","Tasks","Component","TasksWidgetMemberSelectorView","extend","sys","code","methods","bindEvents","this","getManager","setHeaderButtonLabelText","text","control","innerHTML","util","htmlspecialchars","subInstance","mgr","constructor","Manager","scope","data","option","query","getQuery","nameTemplate","min","max","path","bindEvent","onChangeByUser","bind","id","parseInt","route","fieldName","args","userIds","each","item","push","value","ID","NAME","LAST_NAME","EMAIL","mngr","add","delegate","errors","checkHasErrors","RESULT","length","reduce","sum","current","popup","PopupWindowManager","create","content","darkMode","autoHide","width","show","callRemote","then","Util","fireGlobalTaskEvent","STAY_AT_PAGE","addItem","deleteItem","extractItemValue","UserItemSet","options","preRendered","autoSync","role","multiple","useSearch","forceTop","useAdd","controlBind","itemFx","useSmartCodeNaming","construct","callConstruct","fireUserTriggeredChangeDebounce","debounce","prepareData","callMethod","arguments","AVATAR_CSS","AVATAR","onClose","vars","changed","fireUserTriggeredChange","onItemDeleteClicked","node","doOnItem","fireEvent","call"],"mappings":"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"}