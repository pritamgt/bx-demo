{"version":3,"sources":["common.js"],"names":["BX","namespace","ImOpenLines","UserSelector","this","_id","_settings","_fieldId","_control","_currentUser","_componentName","_componentObj","_componentContainer","_serviceContainer","_zIndex","_isDialogDisplayed","_dialog","_inputKeyPressHandler","delegate","onInputKeyPress","prototype","initialize","id","settings","getSetting","type","isDomNode","document","body","addCustomEvent","window","onCustomEntitySelectorOpen","onCustomEntitySelectorClose","getId","name","defaultval","hasOwnProperty","getSearchInput","getLabelNode","isOpened","open","objName","searchInput","unbind","proxy","search","bind","onSelect","setSelected","selected","getSelected","key","unselect","style","display","PopupWindow","autoHide","draggable","closeByEsc","offsetLeft","offsetTop","zIndex","bindOptions","forceBindPosition","content","events","onPopupShow","onDialogShow","onPopupClose","onDialogClose","onPopupDestroy","onDialogDestroy","show","_onFocus","setPopupContainer","close","closeSiblings","siblings","items","k","control","fieldId","current","getCurrentValues","parentNode","removeChild","appendChild","destroy","e","user","node","value","setData","closeAll","create","self"],"mappings":"CAAC,WAEAA,GAAGC,UAAU,kBAEb,UAAUD,GAAGE,YAAwB,cAAK,YAC1C,CACCF,GAAGE,YAAYC,aAAe,WAE7BC,KAAKC,IAAM,GACXD,KAAKE,aACLF,KAAKG,SAAW,GAChBH,KAAKI,SAAW,KAEhBJ,KAAKK,aAAe,KACpBL,KAAKM,eAAiB,KACtBN,KAAKO,cAAgB,KACrBP,KAAKQ,oBAAsB,KAC3BR,KAAKS,kBAAoB,KAEzBT,KAAKU,QAAU,KACfV,KAAKW,mBAAqB,MAC1BX,KAAKY,QAAU,KAEfZ,KAAKa,sBAAwBjB,GAAGkB,SAASd,KAAKe,gBAAiBf,OAIhEJ,GAAGE,YAAYC,aAAaiB,WAE3BC,WAAY,SAASC,EAAIC,GAExBnB,KAAKC,IAAMiB,EACXlB,KAAKE,UAAYiB,EAAWA,KAC5BnB,KAAKG,SAAWH,KAAKoB,WAAW,UAAW,IAC3CpB,KAAKM,eAAiBN,KAAKoB,WAAW,gBAAiB,IACvDpB,KAAKQ,oBAAsBZ,GAAGI,KAAKM,eAAiB,qBAEpDN,KAAKS,kBAAoBT,KAAKoB,WAAW,mBAAoB,MAC7D,IAAIxB,GAAGyB,KAAKC,UAAUtB,KAAKS,mBAC3B,CACCT,KAAKS,kBAAoBc,SAASC,KAGnC5B,GAAG6B,eAAeC,OAAQ,mCAAoC9B,GAAGkB,SAASd,KAAK2B,2BAA4B3B,OAC3GJ,GAAG6B,eAAeC,OAAQ,kCAAmC9B,GAAGkB,SAASd,KAAK4B,4BAA6B5B,QAE5G6B,MAAO,WAEN,OAAO7B,KAAKC,KAEbmB,WAAY,SAAUU,EAAMC,GAE3B,OAAO/B,KAAKE,UAAU8B,eAAeF,GAAS9B,KAAKE,UAAU4B,GAAQC,GAEtEE,eAAgB,WAEf,OAAOjC,KAAKI,SAAWJ,KAAKI,SAAS8B,eAAiB,MAEvDC,SAAU,WAET,OAAOnC,KAAKW,oBAEbyB,KAAM,WAEL,GAAGpC,KAAKO,gBAAkB,KAC1B,CACC,IAAI8B,EAAU,KAAOrC,KAAKM,eAC1B,IAAIoB,OAAOW,GACX,CACC,KAAM,gDAAiDA,EAAS,mBAEjErC,KAAKO,cAAgBmB,OAAOW,GAG7B,IAAIC,EAActC,KAAKiC,iBACvB,GAAGjC,KAAKO,cAAc+B,YACtB,CACC1C,GAAG2C,OAAOvC,KAAKO,cAAc+B,YAAa,QAAS1C,GAAG4C,MAAMxC,KAAKO,cAAckC,OAAQzC,KAAKO,gBAE7FP,KAAKO,cAAc+B,YAAcA,EACjC1C,GAAG8C,KAAK1C,KAAKO,cAAc+B,YAAa,QAAS1C,GAAG4C,MAAMxC,KAAKO,cAAckC,OAAQzC,KAAKO,gBAC1FP,KAAKO,cAAcoC,SAAW/C,GAAGkB,SAASd,KAAK2C,SAAU3C,MACzDJ,GAAG8C,KAAKJ,EAAa,QAAStC,KAAKa,uBAGnC,GAAGb,KAAKK,aACR,CACCL,KAAKO,cAAcqC,aAAc5C,KAAKK,mBAGvC,CACC,IAAIwC,EAAW7C,KAAKO,cAAcuC,cAClC,GAAGD,EACH,CACC,IAAI,IAAIE,KAAOF,EACf,CACC,GAAGA,EAASb,eAAee,GAC3B,CACC/C,KAAKO,cAAcyC,SAASD,MAOhC,GAAG/C,KAAKY,UAAY,KACpB,CACCZ,KAAKQ,oBAAoByC,MAAMC,QAAU,GACzClD,KAAKY,QAAU,IAAIhB,GAAGuD,YACrBnD,KAAKC,IACLD,KAAKiC,kBAEJmB,SAAU,MACVC,UAAW,MACXC,WAAY,KACZC,WAAY,EACZC,UAAW,EACXC,OAAQzD,KAAKU,QACbgD,aAAeC,kBAAmB,MAClCC,QAAU5D,KAAKQ,oBACfqD,QAECC,YAAalE,GAAGkB,SAASd,KAAK+D,aAAc/D,MAC5CgE,aAAcpE,GAAGkB,SAASd,KAAKiE,cAAejE,MAC9CkE,eAAgBtE,GAAGkB,SAASd,KAAKmE,gBAAiBnE,SAMtDA,KAAKY,QAAQwD,OACbpE,KAAKO,cAAc8D,WAEnB,GAAGrE,KAAKI,SACR,CACCJ,KAAKI,SAASkE,kBAAkBtE,KAAKQ,uBAGvC+D,MAAO,WAEN,IAAIjC,EAActC,KAAKiC,iBACvB,GAAGK,EACH,CACC1C,GAAG2C,OAAOD,EAAa,QAAStC,KAAKa,uBAGtC,GAAGb,KAAKY,QACR,CACCZ,KAAKY,QAAQ2D,QAGd,GAAGvE,KAAKI,SACR,CACCJ,KAAKI,SAASkE,kBAAkB,QAIlCE,cAAe,WAEd,IAAIC,EAAW7E,GAAGE,YAAYC,aAAa2E,MAC3C,IAAI,IAAIC,KAAKF,EACb,CACC,GAAGA,EAASzC,eAAe2C,IAAMF,EAASE,KAAO3E,KACjD,CACCyE,EAASE,GAAGJ,WAIf5C,2BAA4B,SAASiD,GAEpC,IAAIC,EAAUD,EAAQ/C,QACtB,GAAG7B,KAAKG,WAAa0E,EACrB,CACC7E,KAAKI,SAAW,KAChBJ,KAAKuE,YAGN,CACCvE,KAAKI,SAAWwE,EAChB,GAAG5E,KAAKI,SACR,CACC,IAAI0E,EAAU9E,KAAKI,SAAS2E,mBAC5B/E,KAAKK,cAAiBa,GAAM4D,EAAQ,UAErC9E,KAAKwE,gBACLxE,KAAKoC,SAGPR,4BAA6B,SAASgD,GAErC,GAAG5E,KAAKG,WAAayE,EAAQ/C,QAC7B,CACC7B,KAAKI,SAAW,KAChBJ,KAAKuE,UAGPR,aAAc,WAEb/D,KAAKW,mBAAqB,MAE3BsD,cAAe,WAEdjE,KAAKQ,oBAAoBwE,WAAWC,YAAYjF,KAAKQ,qBACrDR,KAAKS,kBAAkByE,YAAYlF,KAAKQ,qBACxCR,KAAKQ,oBAAoByC,MAAMC,QAAU,OAEzClD,KAAKY,QAAQuE,UACbnF,KAAKW,mBAAqB,OAE3BwD,gBAAiB,WAEhBnE,KAAKY,QAAU,MAEhBG,gBAAiB,SAASqE,GAEzB,IAAIpF,KAAKY,UAAYZ,KAAKW,mBAC1B,CACCX,KAAKoC,OAGN,GAAGpC,KAAKO,cACR,CACCP,KAAKO,cAAckC,WAsBrBE,SAAU,SAAS0C,GAElBrF,KAAKK,aAAegF,EACpB,GAAGrF,KAAKI,SACR,CAEC,IAAIkF,EAAOtF,KAAKI,SAAS8B,eACzBoD,EAAKC,MAAQ,GACbvF,KAAKI,SAASoF,QAAQH,EAAK,QAASA,EAAK,OAE1CrF,KAAKuE,UAGP3E,GAAGE,YAAYC,aAAa0F,SAAW,WAEtC,IAAI,IAAId,KAAK3E,KAAK0E,MAClB,CACC,GAAG1E,KAAK0E,MAAM1C,eAAe2C,GAC7B,CACC3E,KAAK0E,MAAMC,GAAGJ,WAKjB3E,GAAGE,YAAYC,aAAa2E,SAC5B9E,GAAGE,YAAYC,aAAa2F,OAAS,SAASxE,EAAIC,GAEjD,IAAIwE,EAAO,IAAI/F,GAAGE,YAAYC,aAAamB,EAAIC,GAC/CwE,EAAK1E,WAAWC,EAAIC,GACpBnB,KAAK0E,MAAMiB,EAAK9D,SAAW8D,EAC3B,OAAOA,KAlRT","file":""}