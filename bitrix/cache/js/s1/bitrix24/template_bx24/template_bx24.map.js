{"version":3, "file":"template_bx24.js", "sections": [{"offset": { "line": 6, "column": 0 }, "map": {"version":3,"file":"/bitrix/components/bitrix/main.interface.buttons/templates/.default/utils.min.js","sources":["/bitrix/components/bitrix/main.interface.buttons/templates/.default/utils.js"],"names":["BX","namespace","Buttons","Utils","getByClass","rootElement","className","all","result","document","body","getElementsByClassName","length","slice","call","getByTag","tag","getElementsByTagName","getBySelector","selector","querySelector","querySelectorAll"],"mappings":"CAAC,WACA,YAEAA,IAAGC,UAAU,aAMbD,IAAGE,QAAQC,OAQVC,WAAY,SAASC,EAAaC,EAAWC,GAE5C,GAAIC,KAEJ,IAAIF,EACJ,CACCE,GAAUH,GAAeI,SAASC,MAAMC,uBAAuBL,EAE/D,KAAKC,EACL,CACCC,EAASA,EAAOI,OAASJ,EAAO,GAAK,SAGtC,CACCA,KAAYK,MAAMC,KAAKN,IAIzB,MAAOA,IAURO,SAAU,SAASV,EAAaW,EAAKT,GAEpC,GAAIC,KAEJ,IAAIQ,EACJ,CACCR,GAAUH,GAAeI,SAASC,MAAMO,qBAAqBD,EAE7D,KAAKT,EACL,CACCC,EAASA,EAAOI,OAASJ,EAAO,GAAK,SAGtC,CACCA,KAAYK,MAAMC,KAAKN,IAIzB,MAAOA,IAURU,cAAe,SAASb,EAAac,EAAUZ,GAE9C,GAAIC,KAEJ,IAAIW,EACJ,CACC,IAAKZ,EACL,CACCC,GAAUH,GAAeI,SAASC,MAAMU,cAAcD,OAGvD,CACCX,GAAUH,GAAeI,SAASC,MAAMW,iBAAiBF,EACzDX,MAAYK,MAAMC,KAAKN,IAIzB,MAAOA"}},{"offset": { "line": 10, "column": 0 }, "map": {"version":3,"file":"/bitrix/components/bitrix/tasks.iframe.popup/templates/.default/logic.min.js","sources":["/bitrix/components/bitrix/tasks.iframe.popup/templates/.default/logic.js"],"names":["BX","namespace","Tasks","Component","IframePopup","opts","this","merge","vars","skip","callbacks","resizeInterval","resizeLock","lastHeight","sys","scope","instances","win","ctrls","iframe","wrap","close","setCallbacks","bindEvents","mergeEx","prototype","add","params","edit","view","taskId","open","urlParams","action","parameters","parseInt","isNaN","path","getPath","Bitrix24","PageSlider","toggleLoading","getWindow","show","setBindElement","getWindowCoords","adjustPosition","getIframe","src","bind","window","throttle","onWindowResize","addCustomEvent","onContentLoaded","onContentUnLoaded","bindInnerDocumentEvents","innerDoc","getContentDocument","onInnerDocumentKeyDown","create","attrs","scrolling","frameBorder","PopupWindow","top","left","autoHide","closeByEsc","content","getIframeContainer","overlay","lightShadow","closeIcon","contentNoPaddings","draggable","titleBar","events","onPopupClose","delegate","onPopupShow","onPopupOpen","props","className","id","title","message","click","onCloseClicked","children","insertAfter","setTitle","replace","setTitleBar","pathToTasks","indexOf","type","isPlainObject","k","encodeURIComponent","popupWidth","pos","width","windowWidth","GetWindowSize","innerWidth","windowScrollTop","GetWindowScrollPos","scrollTop","Math","floor","iFrame","contentDocument","contentWindow","document","body","getContentContainer","getElementById","onTaskGlobalEvent","eventType","isNotEmptyString","cbAction","toString","toUpperCase","task","options","args","ID","push","taskUgly","STAY_AT_PAGE","fn","isString","deReference","isFunction","apply","doc","pair","parseUrl","location","pathname","startMonitorContent","stopMonitorContent","toggleClass","lockHeight","isShown","onContentResize","realHeight","offsetHeight","style","height","unLockHeight","popupContainer","marginBottom","resizeOverlay","e","Util","isEsc","toggleFixedHeight","way","setInterval","proxy","each","callback","showCreateForm","url","toLowerCase","found","match","RegExp","isArray","onTaskAdded","newDataPack","legacyHtmlTaskItem","onCustomEvent","onTaskChanged","onTaskDeleted","Singletons","iframePopup","taskIFramePopup","TasksIFrameInst"],"mappings":"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"}},{"offset": { "line": 22, "column": 0 }, "map": {"version":3,"file":"/bitrix/templates/bitrix24/components/bitrix/menu/left_vertical/map.min.js","sources":["/bitrix/templates/bitrix24/components/bitrix/menu/left_vertical/map.js"],"names":["BX","namespace","Bitrix24","SlidingPanel","options","this","containerClassName","container","create","props","className","overlayClassName","overlay","isOpen","header","imBar","panel","creatorConfirmedPanel","animation","startParams","endParams","currentParams","bind","onContainerClick","addCustomEvent","onTopPanelCollapse","prototype","animateStep","state","setContent","open","document","proxy","onDocumentKeyUp","onDocumentClick","addEventListener","onHeaderClick","parentNode","body","appendChild","scrollSize","window","innerWidth","documentElement","clientWidth","style","paddingRight","right","zIndex","overflow","adjustPosition","stop","easing","duration","start","finish","transition","transitions","linear","step","complete","onTrasitionEnd","animate","close","immediately","unbind","removeEventListener","classList","remove","headerPosition","pos","scrollTop","pageYOffset","bottom","top","add","removeChild","cssText","event","stopPropagation","keyCode","isParentForNode","target","match","GroupPanel","translateX","opacity","apply","arguments","ajaxPath","type","isNotEmptyString","siteId","message","menu","menuOverlay","createElement","leftMenu","content","items","counter","intranetGroups","getElementsByClassName","extranetGroups","length","addClass","closeLink","filters","slice","call","i","filter","onFilterClick","onItemsClick","onMenuClick","closeImmediately","Object","constructor","super","transform","backgroundColor","onCustomEvent","pulse_loading","display","innerHTML","left","width","height","scrollHeight","removeClass","filterElement","isDomNode","proxy_context","currentFilter","dataset","newFilter","saveFilter","delegate","hasClass","star","item","groupId","id","action","toggleClass","animateStart","animateCounter","ajax","method","dataType","url","data","sessid","bitrix_sessid","site_id","preventDefault","flyingStar","cloneNode","marginLeft","offsetWidth","scale","positive","Map","translateY"],"mappings":"AAAAA,GAAGC,UAAU,cAEbD,IAAGE,SAASC,aAAe,SAASC,GAEnCC,KAAKC,mBAAqBD,KAAKC,oBAAsB,sBACrDD,MAAKE,UAAYP,GAAGQ,OAAO,OAC1BC,OACCC,UAAWL,KAAKC,qBAIlBD,MAAKM,iBAAmBN,KAAKM,kBAAoB,uBACjDN,MAAKO,QAAUZ,GAAGQ,OAAO,OACxBC,OACCC,UAAWL,KAAKM,mBAIlBN,MAAKQ,OAAS,KAEdR,MAAKS,OAASd,GAAG,SACjBK,MAAKU,MAAQf,GAAG,YAChBK,MAAKW,MAAQhB,GAAG,QAChBK,MAAKY,sBAAwBjB,GAAG,mBAEhCK,MAAKa,UAAY,IACjBb,MAAKc,YAAcd,KAAKc,eACxBd,MAAKe,UAAYf,KAAKe,aACtBf,MAAKgB,cAAgB,IAErBrB,IAAGsB,KAAKjB,KAAKE,UAAW,QAASF,KAAKkB,iBAAiBD,KAAKjB,MAC5DL,IAAGwB,eAAe,qBAAsBnB,KAAKoB,mBAAmBH,KAAKjB,OAGtEL,IAAGE,SAASC,aAAauB,WAExBC,YAAa,SAASC,KAKtBC,WAAY,aAKZC,KAAM,WAEL,GAAIzB,KAAKQ,OACT,CACC,OAGDR,KAAKQ,OAAS,IAEdb,IAAGsB,KAAKS,SAAU,QAAS/B,GAAGgC,MAAM3B,KAAK4B,gBAAiB5B,MAC1DL,IAAGsB,KAAKS,SAAU,QAAS/B,GAAGgC,MAAM3B,KAAK6B,gBAAiB7B,MAC1DA,MAAKS,OAAOqB,iBAAiB,QAASnC,GAAGgC,MAAM3B,KAAK+B,cAAe/B,MAAO,KAE1E,KAAKA,KAAKO,QAAQyB,WAClB,CACCN,SAASO,KAAKC,YAAYlC,KAAKO,SAGhC,IAAKP,KAAKE,UAAU8B,WACpB,CACChC,KAAKwB,YAELxB,MAAKO,QAAQ2B,YAAYlC,KAAKE,WAG/B,GAAIiC,GAAaC,OAAOC,WAAaX,SAASY,gBAAgBC,WAC9Db,UAASO,KAAKO,MAAMC,aAAeN,EAAa,IAEhD,IAAInC,KAAKU,MACT,CACCV,KAAKU,MAAM8B,MAAME,MAAQP,EAAa,KAGvC,GAAInC,KAAKW,MACT,CACCX,KAAKW,MAAM6B,MAAMG,OAAS,KAG3B,GAAI3C,KAAKY,sBACT,CACCZ,KAAKY,sBAAsB4B,MAAMG,OAAS,IAG3CjB,SAASO,KAAKO,MAAMI,SAAW,QAC/B5C,MAAKS,OAAO+B,MAAMG,OAAS,GAE3B3C,MAAK6C,gBAEL,IAAI7C,KAAKa,UACT,CACCb,KAAKa,UAAUiC,OAGhB9C,KAAKa,UAAY,GAAIlB,IAAGoD,QACvBC,SAAU,IACVC,MAAOjD,KAAKgB,cAAgBhB,KAAKgB,cAAgBhB,KAAKc,YACtDoC,OAAQlD,KAAKe,UACboC,WAAaxD,GAAGoD,OAAOK,YAAYC,OACnCC,KAAM3D,GAAGgC,MAAM,SAASJ,GACvBvB,KAAKgB,cAAgBO,CACrBvB,MAAKsB,YAAYC,IACfvB,MACHuD,SAAU5D,GAAGgC,MAAM,WAClB3B,KAAKwD,kBACHxD,OAGJA,MAAKa,UAAU4C,WAGhBC,MAAO,SAASC,GAEf,IAAK3D,KAAKQ,OACV,CACC,GAAIR,KAAKa,UACT,CACCb,KAAKa,UAAUiC,KAAK,MAGrB,OAGD9C,KAAKQ,OAAS,KAEdb,IAAGiE,OAAOlC,SAAU,QAAS/B,GAAGgC,MAAM3B,KAAK4B,gBAAiB5B,MAC5DL,IAAGiE,OAAOlC,SAAU,QAAS/B,GAAGgC,MAAM3B,KAAK6B,gBAAiB7B,MAC5DA,MAAKS,OAAOoD,oBAAoB,QAASlE,GAAGgC,MAAM3B,KAAK+B,cAAe/B,MAAO,KAE7EA,MAAKE,UAAU4D,UAAUC,OAAO/D,KAAKC,mBAAqB,QAE1D,IAAID,KAAKa,UACT,CACCb,KAAKa,UAAUiC,OAGhB,GAAIa,IAAgB,KACpB,CACC3D,KAAKgB,cAAgBhB,KAAKc,WAC1Bd,MAAKwD,qBAGN,CACCxD,KAAKa,UAAY,GAAIlB,IAAGoD,QACvBC,SAAU,IACVC,MAAOjD,KAAKgB,cACZkC,OAAQlD,KAAKc,YACbqC,WAAaxD,GAAGoD,OAAOK,YAAYC,OACnCC,KAAM3D,GAAGgC,MAAM,SAASJ,GACvBvB,KAAKgB,cAAgBO,CACrBvB,MAAKsB,YAAYC,IACfvB,MACHuD,SAAU5D,GAAGgC,MAAM,WAClB3B,KAAKwD,kBACHxD,OAGJA,MAAKa,UAAU4C,YAIjBZ,eAAgB,WAEf,GAAImB,GAAiBrE,GAAGsE,IAAIjE,KAAKS,OACjC,IAAIyD,GAAY9B,OAAO+B,aAAezC,SAASY,gBAAgB4B,SAE/D,IAAIA,EAAY,EAChB,CACClE,KAAKO,QAAQiC,MAAM4B,QAAUF,EAAY,IACzClE,MAAKE,UAAUsC,MAAM4B,QAAUF,EAAY,KAG5C,GAAIG,GAAMH,EAAYF,EAAeI,OAASF,EAAYF,EAAeI,MACzEpE,MAAKO,QAAQiC,MAAM6B,IAAMA,EAAM,MAGhCb,eAAgB,WAEfxD,KAAKa,UAAY,IACjB,IAAIb,KAAKQ,OACT,CACCR,KAAKgB,cAAgBhB,KAAKe,SAC1Bf,MAAKE,UAAU4D,UAAUQ,IAAItE,KAAKC,mBAAqB,aAGxD,CACCD,KAAKgB,cAAgBhB,KAAKc,WAE1B,IAAId,KAAKO,QAAQyB,WACjB,CACChC,KAAKO,QAAQyB,WAAWuC,YAAYvE,KAAKO,SAG1C,GAAIP,KAAKU,MACT,CACCV,KAAKU,MAAM8B,MAAME,MAAQ,GAG1B,GAAI1C,KAAKW,MACT,CACCX,KAAKW,MAAM6B,MAAMgC,QAAU,GAG5B,GAAIxE,KAAKY,sBACT,CACCZ,KAAKY,sBAAsB4B,MAAMgC,QAAU,GAG5C9C,SAASO,KAAKO,MAAMgC,QAAU,EAC9BxE,MAAKE,UAAUsC,MAAMgC,QAAU,EAC/BxE,MAAKS,OAAO+B,MAAMgC,QAAU,EAC5BxE,MAAKO,QAAQiC,MAAMgC,QAAU,KAI/BtD,iBAAkB,SAASuD,GAE1BA,EAAMC,mBAGP9C,gBAAiB,SAAS6C,GAEzB,GAAIA,EAAME,UAAY,GACtB,CACC3E,KAAK0D,UAIP7B,gBAAiB,SAAS4C,GAEzB,GAAI9E,GAAGiF,gBAAgB5E,KAAKE,UAAWuE,EAAMI,QAC7C,CAEC,OAGD7E,KAAK0D,SAGN3B,cAAe,SAAS0C,GAGvB,GAAIzE,KAAKQ,QAAUiE,EAAMI,OAAOxE,UAAUyE,MAAM,SAChD,CACC9E,KAAK0D,MAAM,QAIbtC,mBAAoB,WAEnB,GAAIpB,KAAKQ,OACT,CACCR,KAAK6C,mBAKRlD,IAAGE,SAASkF,WAAa,SAAShF,GAEjCC,KAAKC,mBAAqB,oBAC1BD,MAAKM,iBAAmB,qBACxBN,MAAKc,aAAgBkE,YAAa,IAAKC,QAAS,EAChDjF,MAAKe,WAAciE,WAAY,EAAGC,QAAS,GAE3CtF,IAAGE,SAASC,aAAaoF,MAAMlF,KAAMmF,UAErCpF,GAAUA,KAEVC,MAAKoF,SAAWzF,GAAG0F,KAAKC,iBAAiBvF,EAAQqF,UAAYrF,EAAQqF,SAAW,IAChFpF,MAAKuF,OAAS5F,GAAG0F,KAAKC,iBAAiBvF,EAAQwF,QAAUxF,EAAQwF,OAAS5F,GAAG6F,QAAQ,UAErFxF,MAAKyF,KAAO9F,GAAG,uBACfK,MAAK0F,YAAchE,SAASiE,cAAc,MAC1C3F,MAAK0F,YAAYrF,UAAY,0BAE7BL,MAAK4F,SAAWjG,GAAG,eACnBK,MAAK6F,QAAUlG,GAAG,sBAClBK,MAAK8F,MAAQnG,GAAG,oBAChBK,MAAK+F,QAAUpG,GAAG,oCAElB,IAAIqG,GAAiBhG,KAAK8F,MAAMG,uBAAuB,4BACvD,IAAIC,GAAiBlG,KAAK8F,MAAMG,uBAAuB,4BACvD,IAAID,EAAeG,QAAU,IAAMD,EAAeC,QAAU,GAC5D,CACCxG,GAAGyG,SAASpG,KAAKE,UAAW,iCAG7BF,KAAKqG,UAAY1G,GAAG,yBAEpBK,MAAKsG,WAAaC,MAAMC,KAAKxG,KAAK6F,QAAQI,uBAAuB,6BACjE,KAAK,GAAIQ,GAAI,EAAGA,EAAIzG,KAAKsG,QAAQH,OAAQM,IACzC,CACC,GAAIC,GAAS1G,KAAKsG,QAAQG,EAC1B9G,IAAGsB,KAAKyF,EAAQ,QAAS/G,GAAGgC,MAAM3B,KAAK2G,cAAe3G,OAGvDL,GAAGsB,KAAKjB,KAAK8F,MAAO,QAAS9F,KAAK4G,aAAa3F,KAAKjB,MACpDL,IAAGsB,KAAKjB,KAAKqG,UAAW,QAASrG,KAAK0D,MAAMzC,KAAKjB,MACjDL,IAAGsB,KAAKjB,KAAKyF,KAAM,QAASzF,KAAK6G,YAAY5F,KAAKjB,MAElD,IAAI8G,GAAmB,WACtB9G,KAAK0D,MAAM,OACVzC,KAAKjB,KAEPL,IAAGwB,eAAe,+BAAgC2F,EAClDnH,IAAGwB,eAAe,wCAAyC2F,EAC3DnH,IAAGwB,eAAe,yCAA0C2F,GAG7DnH,IAAGE,SAASkF,WAAW1D,UAAY0F,OAAO5G,OAAOR,GAAGE,SAASC,aAAauB,UAC1E1B,IAAGE,SAASkF,WAAW1D,UAAU2F,YAAcrH,GAAGE,SAASkF,UAC3DpF,IAAGE,SAASkF,WAAW1D,UAAU4F,MAAQtH,GAAGE,SAASC,aAAauB,SAElE1B,IAAGE,SAASkF,WAAW1D,UAAUG,WAAa,WAE7CxB,KAAKE,UAAUgC,YAAYlC,KAAK6F,SAGjClG,IAAGE,SAASkF,WAAW1D,UAAUC,YAAc,SAASC,GAEvDvB,KAAKE,UAAUsC,MAAM0E,UAAY,cAAgB3F,EAAMyD,WAAa,IAEpEhF,MAAKO,QAAQiC,MAAM2E,gBAAkB,iBAAmB5F,EAAM0D,QAAU,IAAM,IAG/EtF,IAAGE,SAASkF,WAAW1D,UAAUI,KAAO,WAEvC9B,GAAGyH,cAAc,uCAAwCpH,MAGzD,IAAIoC,OAAOiF,eAAiBjF,OAAOiF,cAAc5F,KACjD,CACCW,OAAOiF,cAAc3D,MAAM,MAG5B1D,KAAK4F,SAASpD,MAAMG,OAAS,GAC7B3C,MAAKE,UAAUsC,MAAM8E,QAAU,OAC/B3H,IAAGyG,SAASpG,KAAKyF,KAAKzD,WAAY,wBAClChC,MAAKyF,KAAK8B,UAAY5H,GAAG6F,QAAQ,YAEjC,IAAIvB,GAAMtE,GAAGsE,IAAIjE,KAAK4F,SACtB5F,MAAK0F,YAAYlD,MAAMgF,KAAOvD,EAAIuD,KAAO,IACzCxH,MAAK0F,YAAYlD,MAAM6B,IAAMJ,EAAIG,OAAS,IAC1CpE,MAAK0F,YAAYlD,MAAMiF,MAAQxD,EAAIwD,MAAQ,IAC3CzH,MAAK0F,YAAYlD,MAAM2E,gBAAkBxH,GAAG6C,MAAMxC,KAAK4F,SAAU,kBACjE5F,MAAK0F,YAAYlD,MAAMkF,OAAShG,SAASY,gBAAgBqF,aAAe1D,EAAIG,OAAS,IAErF1C,UAASO,KAAKC,YAAYlC,KAAK0F,YAE/B1F,MAAKiH,MAAMxF,KAAKyD,MAAMlF,KAAMmF,WAG7BxF,IAAGE,SAASkF,WAAW1D,UAAUqC,MAAQ,WAExC1D,KAAKyF,KAAK8B,UAAY5H,GAAG6F,QAAQ,YACjCxF,MAAKiH,MAAMvD,MAAMwB,MAAMlF,KAAMmF,WAG9BxF,IAAGE,SAASkF,WAAW1D,UAAUmC,eAAiB,WAEjDxD,KAAKiH,MAAMzD,eAAe0B,MAAMlF,KAAMmF,UACtC,KAAKnF,KAAKQ,OACV,CACCR,KAAK4F,SAASpD,MAAMgC,QAAU,EAC9B7E,IAAGiI,YAAY5H,KAAKyF,KAAKzD,WAAY,wBACrChC,MAAK0F,YAAY1D,WAAWuC,YAAYvE,KAAK0F,cAI/C/F,IAAGE,SAASkF,WAAW1D,UAAUwF,YAAc,SAASpC,GAEvD,GAAIzE,KAAKQ,OACT,CACCR,KAAK0D,YAGN,CACC1D,KAAKyB,OAGNgD,EAAMC,kBAGP/E,IAAGE,SAASkF,WAAW1D,UAAUsF,cAAgB,SAASlC,GAEzD,GAAIoD,GAAgBlI,GAAG0F,KAAKyC,UAAUnI,GAAGoI,eAAiBpI,GAAGoI,cAAgB,IAE7E,IAAIC,GAAgBhI,KAAK6F,QAAQoC,QAAQvB,OAAS1G,KAAK6F,QAAQoC,QAAQvB,OAAS,KAChF,IAAIwB,GAAYL,EAAcI,QAAQvB,OAASmB,EAAcI,QAAQvB,OAAS,KAE9E,IAAIsB,IAAkBE,EACtB,CACClI,KAAK6F,QAAQoC,QAAQvB,OAASwB,CAC9BlI,MAAKmI,WAAWD,EAEhB,IAAIvI,IAAGoD,QACNC,SAAU,GACVC,OAASgC,QAAS,GAClB/B,QAAU+B,QAAS,GACnB9B,WAAaxD,GAAGoD,OAAOK,YAAYC,OAEnCC,KAAM3D,GAAGyI,SAAS,SAAS7G,GAC1BvB,KAAK8F,MAAMtD,MAAMyC,QAAU1D,EAAM0D,QAAU,KACzCjF,MAEHuD,SAAU5D,GAAGyI,SAAS,WAErBzI,GAAGiI,YAAY5H,KAAK6F,QAAS,uBAAyBmC,EACtDrI,IAAGyG,SAASpG,KAAK6F,QAAS,uBAAyBqC,EAEnD,IAAIvI,IAAGoD,QACNC,SAAU,GACVC,OAASgC,QAAS,GAClB/B,QAAU+B,QAAS,GACnB9B,WAAaxD,GAAGoD,OAAOK,YAAYC,OACnCC,KAAM3D,GAAGyI,SAAS,SAAS7G,GAC1BvB,KAAK8F,MAAMtD,MAAMyC,QAAU1D,EAAM0D,QAAU,KACzCjF,MACHuD,SAAU5D,GAAGyI,SAAS,WACrBpI,KAAK8F,MAAMtD,MAAMgC,QAAU,IACzBxE,QACDyD,WAEDzD,QACDyD,UAGJgB,EAAMC,kBAGP/E,IAAGE,SAASkF,WAAW1D,UAAUuF,aAAe,SAASnC,GAExD,IAAK9E,GAAG0I,SAAS5D,EAAMI,OAAQ,yBAC/B,CACC,OAGD,GAAIyD,GAAO7D,EAAMI,MACjB,IAAI0D,GAAOD,EAAKtG,UAChB,IAAIwG,GAAUD,EAAKN,QAAQQ,EAE3B,IAAIC,GAAS/I,GAAG0I,SAASE,EAAM,6BAA+B,wBAA0B,kBACxF5I,IAAGgJ,YAAYJ,EAAM,4BAErBvI,MAAK4I,aAAaN,EAClBtI,MAAK6I,eAAeH,IAAW,mBAE/B/I,IAAGmJ,MACFC,OAAQ,OACRC,SAAU,OACVC,IAAKjJ,KAAKoF,SACV8D,MACCC,OAASxJ,GAAGyJ,gBACZC,QAAUrJ,KAAKuF,OACfmD,OAAQA,EACRF,QAASA,IAIX/D,GAAM6E,iBAIP3J,IAAGE,SAASkF,WAAW1D,UAAUuH,aAAe,SAASN,GAExD,GAAIiB,GAAajB,EAAKkB,WACtBD,GAAW/G,MAAMiH,WAAa,IAAMnB,EAAKoB,YAAc,IACvDpB,GAAKtG,WAAWE,YAAYqH,EAE5B,IAAI5J,IAAGoD,QACNC,SAAU,IACVC,OAASgC,QAAS,IAAK0E,MAAO,KAC9BzG,QAAU+B,QAAS,EAAG0E,MAAO,KAC7BxG,WAAaxD,GAAGoD,OAAOK,YAAYC,OACnCC,KAAM,SAAS/B,GACdgI,EAAW/G,MAAM0E,UAAY,SAAW3F,EAAMoI,MAAQ,IAAM,GAC5DJ,GAAW/G,MAAMyC,QAAU1D,EAAM0D,QAAU,KAE5C1B,SAAU,WACTgG,EAAWvH,WAAWuC,YAAYgF,MAEjC9F,UAGJ9D,IAAGE,SAASkF,WAAW1D,UAAUwH,eAAiB,SAASe,GAE1D5J,KAAK+F,QAAQwB,UAAYqC,IAAa,MAAQ,KAAO,IAErD,IAAIjK,IAAGoD,QACNC,SAAU,IACVC,OAASgC,QAAS,IAAKZ,IAAK,GAC5BnB,QAAU+B,QAAS,EAAGZ,KAAM,IAC5BlB,WAAaxD,GAAGoD,OAAOK,YAAYC,OACnCC,KAAM,SAAS/B,GACdvB,KAAK+F,QAAQvD,MAAM6B,IAAM9C,EAAM8C,IAAM,IACrCrE,MAAK+F,QAAQvD,MAAMyC,QAAU1D,EAAM0D,QAAU,KAC5ChE,KAAKjB,MACPuD,SAAU,WACTvD,KAAK+F,QAAQvD,MAAMgC,QAAU,IAC5BvD,KAAKjB,QACLyD,UAGJ9D,IAAGE,SAASkF,WAAW1D,UAAU8G,WAAa,SAASzB,GAEtD,IAAK1G,KAAKoF,WAAazF,GAAG0F,KAAKC,iBAAiBoB,GAChD,CACC,OAGD/G,GAAGmJ,MACFC,OAAQ,OACRC,SAAU,OACVC,IAAKjJ,KAAKoF,SACV8D,MACCC,OAASxJ,GAAGyJ,gBACZC,QAAUrJ,KAAKuF,OACfmD,OAAQ,mBACRhC,OAAQA,KAKX/G,IAAGE,SAASgK,IAAM,SAAS9J,GAE1BC,KAAKC,mBAAqB,gBAC1BD,MAAKM,iBAAmB,wBACxBN,MAAKc,aAAgBgJ,YAAa,IAAK7E,QAAS,EAChDjF,MAAKe,WAAc+I,WAAY,EAAG7E,QAAS,GAE3CtF,IAAGE,SAASC,aAAaoF,MAAMlF,KAAMmF,UAErCnF,MAAKyF,KAAO9F,GAAG,eACfK,MAAK6F,QAAUlG,GAAG,kBAClBK,MAAKqG,UAAY1G,GAAG,qBAEpBA,IAAGsB,KAAKjB,KAAKyF,KAAM,QAASzF,KAAK6G,YAAY5F,KAAKjB,MAClDL,IAAGsB,KAAKjB,KAAKqG,UAAW,QAASrG,KAAK0D,MAAMzC,KAAKjB,OAGlDL,IAAGE,SAASgK,IAAIxI,UAAY0F,OAAO5G,OAAOR,GAAGE,SAASC,aAAauB,UACnE1B,IAAGE,SAASgK,IAAIxI,UAAU2F,YAAcrH,GAAGE,SAASgK,GACpDlK,IAAGE,SAASgK,IAAIxI,UAAU4F,MAAQtH,GAAGE,SAASC,aAAauB,SAE3D1B,IAAGE,SAASgK,IAAIxI,UAAUG,WAAa,WAEtCxB,KAAKE,UAAUgC,YAAYlC,KAAK6F,SAGjClG,IAAGE,SAASgK,IAAIxI,UAAUC,YAAc,SAASC,GAEhDvB,KAAKE,UAAUsC,MAAM0E,UAAY,cAAgB3F,EAAMuI,WAAa,IAEpE9J,MAAKO,QAAQiC,MAAM2E,gBAAkB,iBAAmB5F,EAAM0D,QAAU,IAAM,IAG/EtF,IAAGE,SAASgK,IAAIxI,UAAUI,KAAO,WAEhC9B,GAAGyH,cAAc,gCAAiCpH,MAElDA,MAAKyF,KAAK3B,UAAUQ,IAAI,oBACxBtE,MAAKiH,MAAMxF,KAAKyD,MAAMlF,KAAMmF,WAG7BxF,IAAGE,SAASgK,IAAIxI,UAAUqC,MAAQ,WAEjC1D,KAAKyF,KAAK3B,UAAUC,OAAO,oBAC3B/D,MAAKiH,MAAMvD,MAAMwB,MAAMlF,KAAMmF,WAG9BxF,IAAGE,SAASgK,IAAIxI,UAAUwF,YAAc,SAASpC,GAEhD,GAAIzE,KAAKQ,OACT,CACCR,KAAK0D,YAGN,CACC1D,KAAKyB,OAGNgD,EAAMC"}},{"offset": { "line": 30, "column": 0 }, "map": {"version":3,"file":"/bitrix/templates/bitrix24/components/bitrix/im.messenger/.default/script.min.js","sources":["/bitrix/templates/bitrix24/components/bitrix/im.messenger/.default/script.js"],"names":["bxImBarInit","BX","isImBarTransparent","bind","window","bxImBarRedraw","addCustomEvent","BXIM","openNotify","openMessenger","e","webrtc","openKeyPad","messenger","popupPopupMenu","util","in_array","uniquePopupId","replace","close","bindDelegate","className","openPopupMenu","this","PreventDefault","getAttribute","messengerWindow","size","td","findChildrenByClassName","i","length","computedStyle","getComputedStyle","parseInt","getPropertyValue","toString","style","paddingRight","document","body","right","counter","notifyCounter","findChildByClassName","innerHTML","type","node","delegate","command","params","online","USER_ID","bxImBarRecount","USERS","options","selectedIndex","text","initObj","notify","panelButtonCall","panelButtonCallAnlgePosition","panelButtonCallAnlgeOffset","MessengerCommon","recentListRedraw","bar","scrolledY","pageYOffset","documentElement","scrollTop","scrolledX","pageXOffset","scrollLeft","scrollWidth","clientWidth","barOffset","panel","offsetHeight","creatorNotify","top","addClass","removeClass","count","bxFullscreenClose","MessengerWindow","closePopup"],"mappings":"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"}}]}