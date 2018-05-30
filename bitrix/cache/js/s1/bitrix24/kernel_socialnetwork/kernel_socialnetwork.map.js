{"version":3, "file":"kernel_socialnetwork.js", "sections": [{"offset": { "line": 21, "column": 0 }, "map": {"version":3,"file":"/bitrix/js/socialnetwork/render_parts.min.js","sources":["/bitrix/js/socialnetwork/render_parts.js"],"names":["BX","window","RenderParts","currentUserSonetGroupIdList","mobile","publicSection","init","params","this","getNodeSG","entity","hidden","VISIBILITY","util","in_array","ENTITY_ID","getNodeHiddenDestination","create","attrs","href","LINK","target","text","NAME","getNodeU","props","className","getNodeDR","getNodeTask","length","userId","parseInt","message","getNodeCreateTaskSourceComment","getNodeUA"],"mappings":"CAAA,WACA,GAAIA,GAAKC,OAAOD,EAChB,IAAIA,EAAGE,YACP,CACC,OAGDF,EAAGE,aAEFC,+BACAC,OAAQ,MACRC,cAAe,MAGhBL,GAAGE,YAAYI,KAAO,SAASC,GAE9B,SAAWA,GAAOJ,6BAA+B,YACjD,CACCK,KAAKL,4BAA8BI,EAAOJ,4BAE3C,SAAWI,GAAOF,eAAiB,YACnC,CACCG,KAAKH,gBAAkBE,EAAOF,cAE/BG,KAAKJ,SAAWG,EAAOH,OAGxBJ,GAAGE,YAAYO,UAAY,SAASC,GAEnC,GAAIC,SACID,GAAOE,YAAc,aACzBF,EAAOE,YAAc,kBACpBZ,EAAGa,KAAKC,SAASJ,EAAOK,UAAWP,KAAKL,4BAG7C,IAAIQ,EACJ,CACC,MAAOH,MAAKQ,+BAGb,CACC,OACER,KAAKJ,OACHJ,EAAGiB,OAAO,KACXC,OACCC,KAAMT,EAAOU,KACbC,OAAQ,UAETC,KAAMZ,EAAOa,OAEZvB,EAAGiB,OAAO,QACXK,KAAMZ,EAAOa,QAMlBvB,GAAGE,YAAYsB,SAAW,SAASd,GAElC,OACEF,KAAKJ,OACHJ,EAAGiB,OAAO,KACXC,OACCC,KAAMT,EAAOU,MAEdK,OACCC,UAAW,oBAAsBhB,EAAOE,YAAc,WAAa,6BAA+B,KAEnGU,KAAMZ,EAAOa,OAEZvB,EAAGiB,OAAO,KACXC,OACCC,KAAMT,EAAOU,MAEdE,KAAMZ,EAAOa,OAKjBvB,GAAGE,YAAYyB,UAAY,SAASjB,GAEnC,OACEF,KAAKJ,OACHJ,EAAGiB,OAAO,KACXC,OACCC,KAAMT,EAAOU,KACbC,OAAQ,UAETC,KAAMZ,EAAOa,OAEZvB,EAAGiB,OAAO,QACXK,KAAMZ,EAAOa,OAKjBvB,GAAGE,YAAY0B,YAAc,SAASlB,GAErC,OACEF,KAAKJ,SACFI,KAAKH,eACNK,EAAOU,KAAKS,OAAS,SACdnB,GAAOE,YAAc,mBACrBF,GAAOE,WAAWkB,QAAU,aACnCC,SAASrB,EAAOE,WAAWkB,SAAWC,SAAS/B,EAAGgC,QAAQ,YAC1DhC,EAAGiB,OAAO,KACXC,OACCC,KAAMT,EAAOU,KACbC,OAAQ,UAETC,KAAMZ,EAAOa,OAEZvB,EAAGiB,OAAO,QACXK,KAAMZ,EAAOa,OAKjBvB,GAAGE,YAAY+B,+BAAiC,SAASvB,GAExD,OAEGF,KAAKJ,SACFI,KAAKH,eACNK,EAAOU,KAAKS,OAAS,EAEtB7B,EAAGiB,OAAO,KACXC,OACCC,KAAMT,EAAOU,KACbC,OAAQ,UAETC,KAAKtB,EAAGgC,QAAQ,sDAEfhC,EAAGiB,OAAO,QACXK,KAAMtB,EAAGgC,QAAQ,sDAKrBhC,GAAGE,YAAYgC,UAAY,WAE1B,MAAOlC,GAAGiB,OAAO,QAChBK,KAAMtB,EAAGgC,QAAQ,0CAInBhC,GAAGE,YAAYc,yBAA2B,WAEzC,MAAOhB,GAAGiB,OAAO,QAChBK,KAAMtB,EAAGgC,QAAQ"}},{"offset": { "line": 25, "column": 0 }, "map": {"version":3,"file":"/bitrix/js/socialnetwork/comment_aux.min.js","sources":["/bitrix/js/socialnetwork/comment_aux.js"],"names":["BX","window","CommentAux","init","params","RenderParts","getLiveText","type","result","length","message","replace","this","getShareList","taskId","parseInt","taskName","sourceEntityType","sourceEntityId","task","renderEntity","ENTITY_TYPE","NAME","LINK","VISIBILITY","userId","taskResponsibleId","sourceComment","sourceEntityLink","messageType","isEnabledKeepVersion","userGender","renderedShareList","ii","hasOwnProperty","push","join","entity","getNodeU","getNodeUA","getNodeSG","getNodeDR","getNodeTask","getNodeCreateTaskSourceComment","tmp","create","children","innerHTML","cleanNode"],"mappings":"CAAA,WAEA,GAAIA,GAAKC,OAAOD,EAChB,IAAIA,EAAGE,WACP,CACC,OAGDF,EAAGE,aAIHF,GAAGE,WAAWC,KAAO,SAASC,GAE7BJ,EAAGK,YAAYF,KAAKC,GAGrBJ,GAAGE,WAAWI,YAAc,SAASC,EAAMH,GAE1C,GAAII,GAAS,EACb,IAAID,GAAQ,QACZ,CACC,SACQH,IAAU,UACdA,EAAOK,OAAS,EAEpB,CACCD,EAASR,EAAGU,QAAQN,EAAOK,QAAU,EAAI,iCAAmC,mCAC5ED,GAASA,EAAOG,QAAQ,eAAgBC,KAAKC,aAAaT,SAGvD,IAAIG,GAAQ,aACjB,CACC,SACQH,IAAU,gBACPA,GAAOU,QAAU,aACxBC,SAASX,EAAOU,QAAU,SACnBV,GAAOY,UAAY,aAC1BZ,EAAOY,SAASP,OAAS,SAClBL,GAAOa,kBAAoB,aAClCb,EAAOa,iBAAiBR,OAAS,SAC1BL,GAAOc,gBAAkB,aAChCH,SAASX,EAAOc,gBAAkB,EAEtC,CACC,GAAIC,GAAOP,KAAKQ,cACfC,YAAa,OACbC,KAAMlB,EAAOY,SACbO,KAAM,GACNC,YACCC,aAAgBrB,GAAOsB,mBAAqB,aAAeX,SAASX,EAAOsB,mBAAqB,EAAIX,SAASX,EAAOsB,mBAAqB,IAI3I,IAAItB,EAAOa,kBAAoB,YAC/B,CACCT,EAASR,EAAGU,QAAQ,4CAA4CC,QAAQ,cAAeQ,OAEnF,IAAIf,EAAOa,kBAAoB,eACpC,CACC,GAAIU,GAAgBf,KAAKQ,cACxBC,YAAa,0BACbE,WAAcnB,GAAOwB,kBAAoB,YAAcxB,EAAOwB,iBAAmB,IAElFpB,GAASR,EAAGU,QAAQ,+CAA+CC,QAAQ,cAAeQ,GAAMR,QAAQ,iBAAkBgB,SAIxH,IAAIpB,GAAQ,cACjB,CACC,GAAIsB,SACIzB,IAAU,gBACPA,GAAO0B,sBAAwB,aACtC1B,EAAO0B,qBACP,uCACA,2CAEJ,IAAIC,SACI3B,IAAU,gBACPA,GAAO2B,YAAc,YAC5B3B,EAAO2B,WACP,EAEJvB,GAASR,EAAGU,QAAQmB,GAAeE,EAAWtB,OAAS,EAAI,IAAMsB,EAAa,KAG/E,MAAOvB,GAGRR,GAAGE,WAAWW,aAAe,SAAST,GAErC,GAAII,GAAS,EACb,IAAIwB,KAEJ,UACQ5B,IAAU,UACdA,EAAOK,OAAS,EAEpB,CACC,GAAIwB,EACJ,KAAKA,EAAK,EAAGA,EAAK7B,EAAOK,OAAQwB,IACjC,CACC,GAAI7B,EAAO8B,eAAeD,GAC1B,CACCD,EAAkBG,KAAKvB,KAAKQ,aAAahB,EAAO6B,MAIlDzB,EAASwB,EAAkBI,KAAK,MAGjC,MAAO5B,GAGRR,GAAGE,WAAWkB,aAAe,SAASiB,GAErC,GAAI7B,GAAS,EAEb,UACQ6B,IAAU,UACdA,EAAOhB,aAAe,YAE1B,CACC,OAAQgB,EAAOhB,aAEd,IAAK,IACJb,EAASR,EAAGK,YAAYiC,SAASD,EACjC,MACD,KAAK,KACJ7B,EAASR,EAAGK,YAAYkC,WACxB,MACD,KAAK,KACJ/B,EAASR,EAAGK,YAAYmC,UAAUH,EAClC,MACD,KAAK,KACJ7B,EAASR,EAAGK,YAAYoC,UAAUJ,EAClC,MACD,KAAK,OACJ7B,EAASR,EAAGK,YAAYqC,YAAYL,EACpC,MACD,KAAK,0BACJ7B,EAASR,EAAGK,YAAYsC,+BAA+BN,EACvD,MACD,UAGD,GAAIO,GAAM5C,EAAG6C,OAAO,OACnBC,UACCtC,IAIFA,GAASoC,EAAIG,SACb/C,GAAGgD,UAAUJ,EAAK,MAGnB,MAAOpC"}}]}