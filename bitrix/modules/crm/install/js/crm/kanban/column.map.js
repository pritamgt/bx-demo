{"version":3,"sources":["column.js"],"names":["BX","namespace","CRM","Kanban","Column","options","apply","this","arguments","prototype","__proto__","constructor","renderSubtitleTime","pathToAdd","currencyFormat","price","currency","useTemplate","result","format","Currency","getCurrencyFormat","CURRENT_DECIMALS","DECIMALS","HIDE_ZERO","parseInt","util","number_format","DEC_POINT","THOUSANDS_SEP","FORMAT_STRING","replace","decPrice","val","data","getData","sum","parseFloat","setData","incPrice","getAddColumnButton","columnData","type","layout","info","style","marginRight","create","getAddPath","gridData","getGridData","entityType","toLowerCase","wrapperId","button","querySelector","getAttribute","indexOf","renderSubTitle","subTitlePriceText","attrs","className","subTitlePrice","children","sum_old","sum_init","renderSubTitleAnimation","Math","abs","element","value","innerHTML","round","bind","href","getId","text","start","step","finalCall","i","timeout","setTimeout","callee","textContent","handleAddColumnButtonClick","event","rights","canAddColumn","Intranet","getGrid","accessNotify","switchToEditMode"],"mappings":"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","file":""}