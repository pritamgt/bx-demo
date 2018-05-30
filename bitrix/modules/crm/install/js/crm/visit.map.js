{"version":3,"sources":["visit.js"],"names":["configCamera","AJAX_URL","BX","message","COMMUNICATIONS_AJAX_URL","bitrix_sessid","crmSelectorLoaded","consentGiven","recognizeConsentGiven","callbacks","onVisitCreated","DoNothing","CrmActivityVisit","config","type","isPlainObject","this","buttons","createLead","createContact","selectEntity","addDeal","addInvoice","owner","id","createdDeals","createdInvoices","Math","round","random","ajaxUrl","recorder","mainNode","popup","hasFaceId","hasConsent","HAS_CONSENT","hasRecognizeConsent","HAS_RECOGNIZE_CONSENT","faceIdInstalled","FACEID_INSTALLED","hasPhoto","faceId","communicationSearch","faceSearch","recordLength","timestamp","Date","getTime","timerInterval","externalRequests","_externalEventHandler","_onExternalEvent","bind","_selectEntityHandler","_onSelectEntity","createTimestamp","entityType","OWNER_TYPE","entityId","OWNER_ID","failed","vkProfile","vkProfileChanged","init","create","prototype","addCustomEvent","window","getId","setId","getMainNode","setMainNode","getPopup","setPopup","getNode","name","scope","querySelector","getNodeValue","node","value","showEdit","self","params","ajax_action","_checkConsent","_checkRecognizeConsent","_createAjaxPopup","linksContainer","removeClass","dealId","parseInt","push","addEventListener","_onCreateButtonClick","_onSelectorButtonClick","_onAddButtonClick","recorderNode","finishButton","_onFinishButtonClick","CrmRecorder","isSupported","element","_onRecorderDeviceFailure","_onRecorderDeviceReady","start","setInterval","oldTimestamp","newTimestamp","difference","_updateTimer","addClass","faceidNode","FaceSearch","visitView","onSelect","_onFaceSelected","onReset","_onFaceReset","onSocialProfileSelected","_onFaceSocialProfileSelected","style","minWidth","profileNode","isNotEmptyString","setVkProfile","setTimeout","adjustPosition","saveActivity","next","finishLoader","clearInterval","stop","record","formData","FormData","append","floor","savePhoto","getImageBlob","ajax","method","dataType","url","data","preparePost","onsuccess","response","onprogress","p","dispose","removeCustomEvent","obCrm","visitCrmSelector","RemoveOnSaveListener","content","PopupWindow","titleBar","closeIcon","closeByEsc","events","onPopupClose","destroy","PopupWindowButton","text","className","click","userOptions","save","close","PopupWindowButtonLink","show","max-width","html","_saveRecognizeConsent","sessid","wrapper","min-width","height","noAllPaddings","zIndex","draggable","restrict","overlay","backgroundColor","opacity","_onPopupClose","HTML","innerHTML","setOwner","entity","_reloadOwnerCard","selectorContainer","__renderSavePhoto","e","target","dataset","context","open","key","entityTypeName","isCanceled","isBoolean","role","util","add_url_param","contact_id","company_id","contact","company","runCallback","requestData","ENTITY_TYPE","ENTITY_ID","cardContainer","lengthElement","minutes","toString","seconds","length","String","concat","innerText","_openCrmSelector","Open","AddOnSaveListener","found","lead","hasOwnProperty","substr","profile","error","timerNode","errorNode","setCallback","eventName","callback","isFunction","event","CommunicationSearch","communicationType","CrmCommunicationType","undefined","entityTitle","callBacks","nop","setEntity","CrmCommunicationSearch","messages","SearchTab","NoData","selectNode","inputNode","openDialog","PreventDefault","_communicationSearch","serviceUrl","selectCallback","delegate","selectCommunication","enableSearch","enableDataLoading","dialogAutoHide","_communicationSearchController","titleNode","CrmCommunicationSearchController","onCloseDialog","defer","focus","result","getSettings","closeDialog","mediaStream","defaulCamera","__getDefaultCamera","state","cameraList","imageBlob","elements","loader","social","picture","settings","seachSocial","settingsMenu","socialSelector","__bindEvents","hide","setImageBlob","__getMediaStream","changeCamera","cameraId","__setDefaultCamera","stopMediaStream","__onSearchButtonClick","__onSettingsButtonClick","__onSearchSocialButtonClick","__onSavePhotoButtonClick","navigator","mediaDevices","getUserMedia","__getConstraints","then","stream","videoNode","volume","src","URL","createObjectURL","play","__getCameraList","catch","console","log","audio","video","browser","IsChrome","mandatory","sourceId","deviceId","exact","enumerateDevices","deviceList","forEach","deviceInfo","kind","label","localStorage","getItem","setItem","pictureContainer","videoContainer","createPicture","__setState","__showLoader","searchFace","__hideLoader","ERRORS","SUCCESS","DATA","ENTITY_TITLE","FACE_ID","alert","menuItems","popupWindow","cameraInfo","menuItem","onclick","PopupMenu","autoHide","offsetTop","offsetLeft","offsetWidth","angle","position","onPopupDestroy","SocialSelector","__onSocialProfileSelected","onDispose","__onSocialSelectorClosed","newState","pictureButton","canvas","getContext","width","videoWidth","videoHeight","drawImage","toBlob","profileContainer","profileLink","searchButton","htmlspecialchars","href","_bindEvents","selectButtons","document","querySelectorAll","i","item","_onSelectButtonClick","OnPopupClose","OnPopupDestroy","startSearch","MediaStream","getTracks","track"],"mappings":"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","file":""}