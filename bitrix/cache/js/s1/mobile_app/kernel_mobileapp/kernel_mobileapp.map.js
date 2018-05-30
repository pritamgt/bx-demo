{"version":3, "file":"kernel_mobileapp.js", "sections": [{"offset": { "line": 3, "column": 0 }, "map": {"version":3,"file":"/bitrix/js/mobileapp/fastclick.min.js","sources":["/bitrix/js/mobileapp/fastclick.js"],"names":["FastClick","layer","options","oldOnClick","this","trackingClick","trackingClickStart","targetElement","touchStartX","touchStartY","lastTouchIdentifier","touchBoundary","tapDelay","tapTimeout","notNeeded","bind","method","context","apply","arguments","methods","i","l","length","deviceIsAndroid","addEventListener","onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel","Event","prototype","stopImmediatePropagation","removeEventListener","type","callback","capture","rmv","Node","call","hijacked","adv","event","propagationStopped","onclick","deviceIsWindowsPhone","navigator","userAgent","indexOf","deviceIsIOS","test","deviceIsIOS4","deviceIsIOSWithBadTarget","deviceIsBlackBerry10","needsClick","target","nodeName","toLowerCase","disabled","className","needsFocus","readOnly","sendClick","clickEvent","touch","document","activeElement","blur","changedTouches","createEvent","initMouseEvent","determineEventType","window","screenX","screenY","clientX","clientY","forwardedTouchEvent","dispatchEvent","tagName","focus","setSelectionRange","value","updateScrollParent","scrollParent","parentElement","fastClickScrollParent","contains","scrollHeight","offsetHeight","fastClickLastScrollTop","scrollTop","getTargetElementFromEventTarget","eventTarget","nodeType","TEXT_NODE","parentNode","selection","targetTouches","getSelection","rangeCount","isCollapsed","identifier","preventDefault","timeStamp","pageX","pageY","lastClickTime","touchHasMoved","boundary","Math","abs","findControl","labelElement","control","undefined","htmlFor","getElementById","querySelector","forElement","targetTagName","cancelNextClick","elementFromPoint","pageXOffset","pageYOffset","top","cancelable","stopPropagation","permitted","detail","destroy","metaViewport","chromeVersion","blackberryVersion","firefoxVersion","ontouchstart","exec","content","documentElement","scrollWidth","outerWidth","match","style","msTouchAction","touchAction","attach","define","amd","module","exports"],"mappings":"CACE,WACD,YAqBA,SAASA,GAAUC,EAAOC,GACzB,GAAIC,EAEJD,GAAUA,KAOVE,MAAKC,cAAgB,KAQrBD,MAAKE,mBAAqB,CAQ1BF,MAAKG,cAAgB,IAQrBH,MAAKI,YAAc,CAQnBJ,MAAKK,YAAc,CAQnBL,MAAKM,oBAAsB,CAQ3BN,MAAKO,cAAgBT,EAAQS,eAAiB,EAQ9CP,MAAKH,MAAQA,CAObG,MAAKQ,SAAWV,EAAQU,UAAY,GAOpCR,MAAKS,WAAaX,EAAQW,YAAc,GAExC,IAAIb,EAAUc,UAAUb,GAAQ,CAC/B,OAID,QAASc,GAAKC,EAAQC,GACrB,MAAO,YAAa,MAAOD,GAAOE,MAAMD,EAASE,YAIlD,GAAIC,IAAW,UAAW,UAAW,eAAgB,cAAe,aAAc,gBAClF,IAAIH,GAAUb,IACd,KAAK,GAAIiB,GAAI,EAAGC,EAAIF,EAAQG,OAAQF,EAAIC,EAAGD,IAAK,CAC/CJ,EAAQG,EAAQC,IAAMN,EAAKE,EAAQG,EAAQC,IAAKJ,GAIjD,GAAIO,EAAiB,CACpBvB,EAAMwB,iBAAiB,YAAarB,KAAKsB,QAAS,KAClDzB,GAAMwB,iBAAiB,YAAarB,KAAKsB,QAAS,KAClDzB,GAAMwB,iBAAiB,UAAWrB,KAAKsB,QAAS,MAGjDzB,EAAMwB,iBAAiB,QAASrB,KAAKuB,QAAS,KAC9C1B,GAAMwB,iBAAiB,aAAcrB,KAAKwB,aAAc,MACxD3B,GAAMwB,iBAAiB,YAAarB,KAAKyB,YAAa,MACtD5B,GAAMwB,iBAAiB,WAAYrB,KAAK0B,WAAY,MACpD7B,GAAMwB,iBAAiB,cAAerB,KAAK2B,cAAe,MAK1D,KAAKC,MAAMC,UAAUC,yBAA0B,CAC9CjC,EAAMkC,oBAAsB,SAASC,EAAMC,EAAUC,GACpD,GAAIC,GAAMC,KAAKP,UAAUE,mBACzB,IAAIC,IAAS,QAAS,CACrBG,EAAIE,KAAKxC,EAAOmC,EAAMC,EAASK,UAAYL,EAAUC,OAC/C,CACNC,EAAIE,KAAKxC,EAAOmC,EAAMC,EAAUC,IAIlCrC,GAAMwB,iBAAmB,SAASW,EAAMC,EAAUC,GACjD,GAAIK,GAAMH,KAAKP,UAAUR,gBACzB,IAAIW,IAAS,QAAS,CACrBO,EAAIF,KAAKxC,EAAOmC,EAAMC,EAASK,WAAaL,EAASK,SAAW,SAASE,GACxE,IAAKA,EAAMC,mBAAoB,CAC9BR,EAASO,MAEPN,OACE,CACNK,EAAIF,KAAKxC,EAAOmC,EAAMC,EAAUC,KAQnC,SAAWrC,GAAM6C,UAAY,WAAY,CAIxC3C,EAAaF,EAAM6C,OACnB7C,GAAMwB,iBAAiB,QAAS,SAASmB,GACxCzC,EAAWyC,IACT,MACH3C,GAAM6C,QAAU,MASlB,GAAIC,GAAuBC,UAAUC,UAAUC,QAAQ,kBAAoB,CAO3E,IAAI1B,GAAkBwB,UAAUC,UAAUC,QAAQ,WAAa,IAAMH,CAQrE,IAAII,GAAc,iBAAiBC,KAAKJ,UAAUC,aAAeF,CAQjE,IAAIM,GAAeF,GAAe,gBAAkBC,KAAKJ,UAAUC,UAQnE,IAAIK,GAA2BH,GAAe,cAAgBC,KAAKJ,UAAUC,UAO7E,IAAIM,GAAuBP,UAAUC,UAAUC,QAAQ,QAAU,CAQjElD,GAAUiC,UAAUuB,WAAa,SAASC,GACzC,OAAQA,EAAOC,SAASC,eAGxB,IAAK,SACL,IAAK,SACL,IAAK,WACJ,GAAIF,EAAOG,SAAU,CACpB,MAAO,MAGR,KACD,KAAK,QAGJ,GAAKT,GAAeM,EAAOrB,OAAS,QAAWqB,EAAOG,SAAU,CAC/D,MAAO,MAGR,KACD,KAAK,QACL,IAAK,SACL,IAAK,QACJ,MAAO,MAGR,MAAO,iBAAmBR,KAAKK,EAAOI,WAUvC7D,GAAUiC,UAAU6B,WAAa,SAASL,GACzC,OAAQA,EAAOC,SAASC,eACxB,IAAK,WACJ,MAAO,KACR,KAAK,SACJ,OAAQnC,CACT,KAAK,QACJ,OAAQiC,EAAOrB,MACf,IAAK,SACL,IAAK,WACL,IAAK,OACL,IAAK,QACL,IAAK,QACL,IAAK,SACJ,MAAO,OAIR,OAAQqB,EAAOG,WAAaH,EAAOM,QACpC,SACC,MAAO,iBAAmBX,KAAKK,EAAOI,YAWxC7D,GAAUiC,UAAU+B,UAAY,SAASzD,EAAeqC,GACvD,GAAIqB,GAAYC,CAGhB,IAAIC,SAASC,eAAiBD,SAASC,gBAAkB7D,EAAe,CACvE4D,SAASC,cAAcC,OAGxBH,EAAQtB,EAAM0B,eAAe,EAG7BL,GAAaE,SAASI,YAAY,cAClCN,GAAWO,eAAepE,KAAKqE,mBAAmBlE,GAAgB,KAAM,KAAMmE,OAAQ,EAAGR,EAAMS,QAAST,EAAMU,QAASV,EAAMW,QAASX,EAAMY,QAAS,MAAO,MAAO,MAAO,MAAO,EAAG,KACpLb,GAAWc,oBAAsB,IACjCxE,GAAcyE,cAAcf,GAG7BjE,GAAUiC,UAAUwC,mBAAqB,SAASlE,GAGjD,GAAIiB,GAAmBjB,EAAc0E,QAAQtB,gBAAkB,SAAU,CACxE,MAAO,YAGR,MAAO,QAOR3D,GAAUiC,UAAUiD,MAAQ,SAAS3E,GACpC,GAAIgB,EAGJ,IAAI4B,GAAe5C,EAAc4E,mBAAqB5E,EAAc6B,KAAKc,QAAQ,UAAY,GAAK3C,EAAc6B,OAAS,QAAU7B,EAAc6B,OAAS,QAAS,CAClKb,EAAShB,EAAc6E,MAAM7D,MAC7BhB,GAAc4E,kBAAkB5D,EAAQA,OAClC,CACNhB,EAAc2E,SAUhBlF,GAAUiC,UAAUoD,mBAAqB,SAAS9E,GACjD,GAAI+E,GAAcC,CAElBD,GAAe/E,EAAciF,qBAI7B,KAAKF,IAAiBA,EAAaG,SAASlF,GAAgB,CAC3DgF,EAAgBhF,CAChB,GAAG,CACF,GAAIgF,EAAcG,aAAeH,EAAcI,aAAc,CAC5DL,EAAeC,CACfhF,GAAciF,sBAAwBD,CACtC,OAGDA,EAAgBA,EAAcA,oBACtBA,GAIV,GAAID,EAAc,CACjBA,EAAaM,uBAAyBN,EAAaO,WASrD7F,GAAUiC,UAAU6D,gCAAkC,SAASC,GAG9D,GAAIA,EAAYC,WAAaxD,KAAKyD,UAAW,CAC5C,MAAOF,GAAYG,WAGpB,MAAOH,GAUR/F,GAAUiC,UAAUL,aAAe,SAASgB,GAC3C,GAAIrC,GAAe2D,EAAOiC,CAG1B,IAAIvD,EAAMwD,cAAc7E,OAAS,EAAG,CACnC,MAAO,MAGRhB,EAAgBH,KAAK0F,gCAAgClD,EAAMa,OAC3DS,GAAQtB,EAAMwD,cAAc,EAE5B,IAAIjD,EAAa,CAGhBgD,EAAYzB,OAAO2B,cACnB,IAAIF,EAAUG,aAAeH,EAAUI,YAAa,CACnD,MAAO,MAGR,IAAKlD,EAAc,CAUlB,GAAIa,EAAMsC,YAActC,EAAMsC,aAAepG,KAAKM,oBAAqB,CACtEkC,EAAM6D,gBACN,OAAO,OAGRrG,KAAKM,oBAAsBwD,EAAMsC,UAQjCpG,MAAKiF,mBAAmB9E,IAI1BH,KAAKC,cAAgB,IACrBD,MAAKE,mBAAqBsC,EAAM8D,SAChCtG,MAAKG,cAAgBA,CAErBH,MAAKI,YAAc0D,EAAMyC,KACzBvG,MAAKK,YAAcyD,EAAM0C,KAGzB,IAAKhE,EAAM8D,UAAYtG,KAAKyG,cAAiBzG,KAAKQ,SAAU,CAC3DgC,EAAM6D,iBAGP,MAAO,MAURzG,GAAUiC,UAAU6E,cAAgB,SAASlE,GAC5C,GAAIsB,GAAQtB,EAAM0B,eAAe,GAAIyC,EAAW3G,KAAKO,aAErD,IAAIqG,KAAKC,IAAI/C,EAAMyC,MAAQvG,KAAKI,aAAeuG,GAAYC,KAAKC,IAAI/C,EAAM0C,MAAQxG,KAAKK,aAAesG,EAAU,CAC/G,MAAO,MAGR,MAAO,OAUR/G,GAAUiC,UAAUJ,YAAc,SAASe,GAC1C,IAAKxC,KAAKC,cAAe,CACxB,MAAO,MAIR,GAAID,KAAKG,gBAAkBH,KAAK0F,gCAAgClD,EAAMa,SAAWrD,KAAK0G,cAAclE,GAAQ,CAC3GxC,KAAKC,cAAgB,KACrBD,MAAKG,cAAgB,KAGtB,MAAO,MAURP,GAAUiC,UAAUiF,YAAc,SAASC,GAG1C,GAAIA,EAAaC,UAAYC,UAAW,CACvC,MAAOF,GAAaC,QAIrB,GAAID,EAAaG,QAAS,CACzB,MAAOnD,UAASoD,eAAeJ,EAAaG,SAK7C,MAAOH,GAAaK,cAAc,uFAUnCxH,GAAUiC,UAAUH,WAAa,SAASc,GACzC,GAAI6E,GAAYnH,EAAoBoH,EAAepC,EAAcpB,EAAO3D,EAAgBH,KAAKG,aAE7F,KAAKH,KAAKC,cAAe,CACxB,MAAO,MAIR,GAAKuC,EAAM8D,UAAYtG,KAAKyG,cAAiBzG,KAAKQ,SAAU,CAC3DR,KAAKuH,gBAAkB,IACvB,OAAO,MAGR,GAAK/E,EAAM8D,UAAYtG,KAAKE,mBAAsBF,KAAKS,WAAY,CAClE,MAAO,MAIRT,KAAKuH,gBAAkB,KAEvBvH,MAAKyG,cAAgBjE,EAAM8D,SAE3BpG,GAAqBF,KAAKE,kBAC1BF,MAAKC,cAAgB,KACrBD,MAAKE,mBAAqB,CAM1B,IAAIgD,EAA0B,CAC7BY,EAAQtB,EAAM0B,eAAe,EAG7B/D,GAAgB4D,SAASyD,iBAAiB1D,EAAMyC,MAAQjC,OAAOmD,YAAa3D,EAAM0C,MAAQlC,OAAOoD,cAAgBvH,CACjHA,GAAciF,sBAAwBpF,KAAKG,cAAciF,sBAG1DkC,EAAgBnH,EAAc0E,QAAQtB,aACtC,IAAI+D,IAAkB,QAAS,CAC9BD,EAAarH,KAAK8G,YAAY3G,EAC9B,IAAIkH,EAAY,CACfrH,KAAK8E,MAAM3E,EACX,IAAIiB,EAAiB,CACpB,MAAO,OAGRjB,EAAgBkH,OAEX,IAAIrH,KAAK0D,WAAWvD,GAAgB,CAI1C,GAAKqC,EAAM8D,UAAYpG,EAAsB,KAAQ6C,GAAeuB,OAAOqD,MAAQrD,QAAUgD,IAAkB,QAAU,CACxHtH,KAAKG,cAAgB,IACrB,OAAO,OAGRH,KAAK8E,MAAM3E,EACXH,MAAK4D,UAAUzD,EAAeqC,EAI9B,KAAKO,GAAeuE,IAAkB,SAAU,CAC/CtH,KAAKG,cAAgB,IACrBqC,GAAM6D,iBAGP,MAAO,OAGR,GAAItD,IAAgBE,EAAc,CAIjCiC,EAAe/E,EAAciF,qBAC7B,IAAIF,GAAgBA,EAAaM,yBAA2BN,EAAaO,UAAW,CACnF,MAAO,OAMT,IAAKzF,KAAKoD,WAAWjD,GAAgB,CACpCqC,EAAM6D,gBACNrG,MAAK4D,UAAUzD,EAAeqC,GAG/B,MAAO,OASR5C,GAAUiC,UAAUF,cAAgB,WACnC3B,KAAKC,cAAgB,KACrBD,MAAKG,cAAgB,KAUtBP,GAAUiC,UAAUP,QAAU,SAASkB,GAGtC,IAAKxC,KAAKG,cAAe,CACxB,MAAO,MAGR,GAAIqC,EAAMmC,oBAAqB,CAC9B,MAAO,MAIR,IAAKnC,EAAMoF,WAAY,CACtB,MAAO,MAMR,IAAK5H,KAAKoD,WAAWpD,KAAKG,gBAAkBH,KAAKuH,gBAAiB,CAGjE,GAAI/E,EAAMV,yBAA0B,CACnCU,EAAMV,+BACA,CAGNU,EAAMC,mBAAqB,KAI5BD,EAAMqF,iBACNrF,GAAM6D,gBAEN,OAAO,OAIR,MAAO,MAYRzG,GAAUiC,UAAUN,QAAU,SAASiB,GACtC,GAAIsF,EAGJ,IAAI9H,KAAKC,cAAe,CACvBD,KAAKG,cAAgB,IACrBH,MAAKC,cAAgB,KACrB,OAAO,MAIR,GAAIuC,EAAMa,OAAOrB,OAAS,UAAYQ,EAAMuF,SAAW,EAAG,CACzD,MAAO,MAGRD,EAAY9H,KAAKsB,QAAQkB,EAGzB,KAAKsF,EAAW,CACf9H,KAAKG,cAAgB,KAItB,MAAO2H,GASRlI,GAAUiC,UAAUmG,QAAU,WAC7B,GAAInI,GAAQG,KAAKH,KAEjB,IAAIuB,EAAiB,CACpBvB,EAAMkC,oBAAoB,YAAa/B,KAAKsB,QAAS,KACrDzB,GAAMkC,oBAAoB,YAAa/B,KAAKsB,QAAS,KACrDzB,GAAMkC,oBAAoB,UAAW/B,KAAKsB,QAAS,MAGpDzB,EAAMkC,oBAAoB,QAAS/B,KAAKuB,QAAS,KACjD1B,GAAMkC,oBAAoB,aAAc/B,KAAKwB,aAAc,MAC3D3B,GAAMkC,oBAAoB,YAAa/B,KAAKyB,YAAa,MACzD5B,GAAMkC,oBAAoB,WAAY/B,KAAK0B,WAAY,MACvD7B,GAAMkC,oBAAoB,cAAe/B,KAAK2B,cAAe,OAS9D/B,GAAUc,UAAY,SAASb,GAC9B,GAAIoI,EACJ,IAAIC,EACJ,IAAIC,EACJ,IAAIC,EAGJ,UAAW9D,QAAO+D,eAAiB,YAAa,CAC/C,MAAO,MAIRH,IAAkB,mBAAmBI,KAAK1F,UAAUC,aAAe,CAAC,IAAI,EAExE,IAAIqF,EAAe,CAElB,GAAI9G,EAAiB,CACpB6G,EAAelE,SAASqD,cAAc,sBAEtC,IAAIa,EAAc,CAEjB,GAAIA,EAAaM,QAAQzF,QAAQ,uBAAyB,EAAG,CAC5D,MAAO,MAGR,GAAIoF,EAAgB,IAAMnE,SAASyE,gBAAgBC,aAAenE,OAAOoE,WAAY,CACpF,MAAO,YAKH,CACN,MAAO,OAIT,GAAIvF,EAAsB,CACzBgF,EAAoBvF,UAAUC,UAAU8F,MAAM,8BAI9C,IAAIR,EAAkB,IAAM,IAAMA,EAAkB,IAAM,EAAG,CAC5DF,EAAelE,SAASqD,cAAc,sBAEtC,IAAIa,EAAc,CAEjB,GAAIA,EAAaM,QAAQzF,QAAQ,uBAAyB,EAAG,CAC5D,MAAO,MAGR,GAAIiB,SAASyE,gBAAgBC,aAAenE,OAAOoE,WAAY,CAC9D,MAAO,SAOX,GAAI7I,EAAM+I,MAAMC,gBAAkB,QAAUhJ,EAAM+I,MAAME,cAAgB,eAAgB,CACvF,MAAO,MAIRV,IAAmB,oBAAoBE,KAAK1F,UAAUC,aAAe,CAAC,IAAI,EAE1E,IAAIuF,GAAkB,GAAI,CAGzBH,EAAelE,SAASqD,cAAc,sBACtC,IAAIa,IAAiBA,EAAaM,QAAQzF,QAAQ,uBAAyB,GAAKiB,SAASyE,gBAAgBC,aAAenE,OAAOoE,YAAa,CAC3I,MAAO,OAMT,GAAI7I,EAAM+I,MAAME,cAAgB,QAAUjJ,EAAM+I,MAAME,cAAgB,eAAgB,CACrF,MAAO,MAGR,MAAO,OAURlJ,GAAUmJ,OAAS,SAASlJ,EAAOC,GAClC,MAAO,IAAIF,GAAUC,EAAOC,GAI7B,UAAWkJ,UAAW,kBAAqBA,QAAOC,MAAQ,UAAYD,OAAOC,IAAK,CAGjFD,OAAO,WACN,MAAOpJ,SAEF,UAAWsJ,UAAW,aAAeA,OAAOC,QAAS,CAC3DD,OAAOC,QAAUvJ,EAAUmJ,MAC3BG,QAAOC,QAAQvJ,UAAYA,MACrB,CACN0E,OAAO1E,UAAYA"}}]}