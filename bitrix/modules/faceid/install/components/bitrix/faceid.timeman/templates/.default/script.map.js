{"version":3,"file":"script.min.js","sources":["script.js"],"names":["domNode","BX","create","attrs","src","type","document","head","insertBefore","firstChild","Module","isModuleInitialized","isBxFaceIdInitialized","onRuntimeInitialized","_BXFaceIdStart","BXFaceIdStart","jsDetectionInProgress","streaming","video","canvas","photo","startbutton","deviceId","localStorage","get","lastVisitorTs","sizes","cameraRatio","screenRatio","window","screen","width","height","cameraSmallWidth","cameraSmallHeight","cameraFullWidth","cameraFullHeight","snapshotWidth","snapshotHeight","trackingSmallRatio","trackingFullRatio","cameraWidth","cameraHeight","trackingRatio","overlay","overlayCC","currentAjaxConnections","trackingVisitorsName","photoMaker","WebPhotoMakerM","setStopAfterBestShot","setMovementThreshold","setBestShotScoreThreshold","setRotationThreshold","setMinFaceScaleFactor","setMaxNumberOfFramesWithoutDetection","bufferSize","nativeFrameBuffer","_malloc","nativeFrameBufferData","Uint8ClampedArray","HEAPU8","buffer","trackIds","trackNames","currentUserInfo","showingRecognizedFace","showingRecognizedFacePrev","buildCameraList","navigator","mediaDevices","enumerateDevices","then","devices","cont","getElementById","checkedClassName","forEach","device","kind","set","classes","label","replace","length","message","text","class","data-camera-id","appendChild","bind","hasClass","this","i","els","findChildren","removeClass","addClass","getAttribute","initStream","toggle","startup","catch","err","console","log","name","startupFailed","FACEID_AGREEMENT","getMedia","getUserMedia","webkitGetUserMedia","mozGetUserMedia","msGetUserMedia","exact","audio","stream","mozSrcObject","vendorURL","URL","webkitURL","createObjectURL","play","remove","msg","toString","indexOf","getContext","addEventListener","ev","videoWidth","videoHeight","setAttribute","capture","preventDefault","FACEID_LAST_VISITORS","prependVisitor","innerHTML","show","requestAnimationFrame","checked","context","drawImage","snapshotSrc","toDataURL","tmpImg","Image","onload","faces","vlGetFaces","unknownFaces","j","frameId","getBestShotFrameNumber","getCurrentFrameNumber","push","recognizeMultiFaces","onerror","fellIds","ids","countBad","newTrack","visualizeDetection","ctx","xywh","radius","color","trackId","save","strokeStyle","lineWidth","sx","x","sy","y","ex","ey","r","r2d","Math","PI","beginPath","moveTo","lineTo","arc","closePath","font","fillStyle","fillText","toUpperCase","stroke","restore","takepicture","multiFaces","handleNewVisitorFace","modeAuto","vizFaces","bufferCC","bufferImageData","getImageData","data","submitRawImage","update","strIds","getIds","jIds","JSON","parse","id","detection","getSmoothedFaceDetection","predicted","faceDetectionIsPredicted","verdict","speedSlow","isSlowMovement","overlayDetection","stringify","positionX","positionY","thereCanBeOnlyOne","visualizeFaces","onUserLeft","resetPhotoMaker","hide","clearRect","face","reset","image","found","portraitCanvas","createElement","portraitContext","addSize","sourceX","max","sourceY","sourceWidth","sourceHeight","destWidth","destHeight","destX","destY","portraitData","imageData","trackingFrameId","faceNotFound","newVisitorDiv","prepend","visitorLimit","currentVisitors","lastChild","imgCont","findChild","imgEl","tag","loaderCont","uniqAjaxId","random","ajaxConnectionAdd","ajax","url","method","action","autoOpen","dataType","processData","start","onsuccess","json","ajaxConnectionRemove","ok","errorMessage","result","visitor","isEmpty","workday_status","full_name","error","code","discardBestShot","onfailure","index","splice","updateDailyCounters","updateCounters","renderVisitor","last_visit_ts","updateVisitorsCount","appendVisitor","updateCountersByRender","append","innerText","parseInt","visits_count","crm_url","visitor_id","attr","data-visitor-id","k","confidence","vk_id","html","image_src","visit_info","util","htmlspecialchars","shot_src","searchPopup","clone","style","top","body","scrollTop","socialCont","header","clientX","clientY","mousemove","event","deltaX","deltaY","left","mouseup","unbind","pos","transform","searchVkButton","jsonResult","vkResult","items","status","balance","_html","renderVkItem","itemsCont","countCont","loader","vkButtons","userInfo","parentNode","addr","socParent","crmResult","nameCont","loaderDesc","errorDesc","closeButton","crmButton","buttonParent","lead_title","item","featured","round","personal","ready","last","moreResult","more","obj","hasOwnProperty","prop","videoElement","wrapper","findParent","fsContainer","webkitFullscreenElement","webkitCancelFullScreen","webkitRequestFullscreen","button","toggleClass","e","userId","endWorkday"],"mappings":"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"}