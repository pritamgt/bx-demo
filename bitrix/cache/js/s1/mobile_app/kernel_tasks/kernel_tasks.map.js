{"version":3, "file":"kernel_tasks.js", "sections": [{"offset": { "line": 3, "column": 0 }, "map": {"version":3,"file":"/bitrix/js/tasks/tasks.min.js","sources":["/bitrix/js/tasks/tasks.js"],"names":["BX","namespace","mergeEx","Tasks","alert","errors","params","p","Promise","Runtime","errorPopup","PopupWindow","lightShadow","setButtons","PopupWindowButton","text","message","className","events","click","type","isFunction","this","popupWindow","close","resolve","popupContent","i","length","util","htmlspecialchars","MESSAGE","title","isPlainObject","setTitleBar","content","isElementNode","create","html","setContent","window","console","dir","show","confirm","body","callback","DoNothing","ctx","confirmPopup","zIndex","overlay","opacity","autoHide","closeByEsc","disposable","isDisposable","id","Util","cb","buttonSet","code","default","hintManager","wasDisposed","def","filter","item","fulfill","style","margin","children","props","color","buttons","each","button","push","apply","checked","disable","PopupWindowButtonLink","reject","padding","maxWidth","maxHeight","overflow","outerHTML","toString","append","confirmDelete","entityName","substr","toLowerCase","replace","passCtx","f","args","Array","prototype","slice","call","arguments","unshift","data","k","isArray","Object","hasOwnProperty","deReference","name","obj","isNotEmptyString","split","len","top","trim"],"mappings":"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"}}]}