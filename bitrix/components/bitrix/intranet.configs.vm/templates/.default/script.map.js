{"version":3,"sources":["script.js"],"names":["BX","namespace","Bitrix24","Configs","Vm","init","params","this","ajaxPath","siteNameConf","type","isDomNode","bind","proxy","showHideSmtpAuth","showCertificatePopup","uploadFile","blocks","querySelectorAll","i","l","length","style","display","checked","submitForm","button","remove","addClass","submit","PopupWindowManager","create","closeIcon","contentNoPaddings","content","titleBar","message","width","buttons","PopupWindowButton","text","className","events","click","buttonNode","certificateData","keyPath","value","path","chainPath","innerHTML","email","dns","ajax","method","dataType","url","data","sessid","bitrix_sessid","action","onsuccess","json","hasOwnProperty","alert","error","interval","setInterval","checkCertitficateState","onfailure","popupWindow","close","show","document","location","reload","inputFileId","inputPathId","form","previousSibling","obj","FormData","isSupported","append","elements","name","files","send","result","decodeURIComponent","removeClass"],"mappings":"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","file":""}