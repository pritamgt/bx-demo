; /* /bitrix/js/lists/js/lists.min.js?15274018077015*/

; /* Start:"a:4:{s:4:"full";s:47:"/bitrix/js/lists/js/lists.min.js?15274018077015";s:6:"source";s:28:"/bitrix/js/lists/js/lists.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
BX.namespace("BX.Lists");BX.Lists=function(){var e=null;var t={};return{ajax:function(e){e.data=e.data||{};e.data["SITE_ID"]=BX.message("SITE_ID");e.data["sessid"]=BX.bitrix_sessid();return BX.ajax(e)},modalWindow:function(o){o=o||{};o.title=o.title||false;o.bindElement=o.bindElement||null;o.overlay=typeof o.overlay==="undefined"?true:o.overlay;o.autoHide=o.autoHide||false;o.closeIcon=typeof o.closeIcon==="undefined"?{right:"20px",top:"10px"}:o.closeIcon;o.modalId=o.modalId||"lists_modal_window_"+(Math.random()*(2e5-100)+100);o.withoutContentWrap=typeof o.withoutContentWrap==="undefined"?false:o.withoutContentWrap;o.contentClassName=o.contentClassName||"";o.contentStyle=o.contentStyle||{};o.content=o.content||[];o.buttons=o.buttons||false;o.events=o.events||{};o.draggable=o.draggable||false;o.withoutWindowManager=!!o.withoutWindowManager||false;var s=[];if(o.withoutContentWrap){s=s.concat(o.content)}else{s.push(BX.create("div",{props:{className:"bx-lists-popup-content "+o.contentClassName},style:o.contentStyle,children:o.content}))}var a=[];if(o.buttons){for(var r in o.buttons){if(!o.buttons.hasOwnProperty(r)){continue}if(r>0){a.push(BX.create("SPAN",{html:"&nbsp;"}))}a.push(o.buttons[r])}s.push(BX.create("div",{props:{className:"bx-lists-popup-buttons"},children:a}))}var n=BX.create("div",{props:{className:"bx-lists-popup-container"},children:s});o.events.onPopupShow=BX.delegate(function(){if(a.length){e=a[0];BX.bind(document,"keydown",BX.proxy(this._keyPress,this))}if(o.events.onPopupShow)BX.delegate(o.events.onPopupShow,BX.proxy_context)},this);var i=o.events.onPopupClose;o.events.onPopupClose=BX.delegate(function(){e=null;try{BX.unbind(document,"keydown",BX.proxy(this._keypress,this))}catch(e){}if(i){BX.delegate(i,BX.proxy_context)()}if(o.withoutWindowManager){delete t[o.modalId]}BX.proxy_context.destroy()},this);var l;if(o.withoutWindowManager){if(!!t[o.modalId]){return t[o.modalId]}l=new BX.PopupWindow(o.modalId,o.bindElement,{titleBar:o.title,draggable:o.draggable,content:n,closeByEsc:true,closeIcon:o.closeIcon,autoHide:o.autoHide,overlay:o.overlay,events:o.events,buttons:[],zIndex:isNaN(o["zIndex"])?0:o.zIndex});t[o.modalId]=l}else{l=BX.PopupWindowManager.create(o.modalId,o.bindElement,{titleBar:o.title,draggable:o.draggable,content:n,closeByEsc:true,closeIcon:o.closeIcon,autoHide:o.autoHide,overlay:o.overlay,events:o.events,buttons:[],zIndex:isNaN(o["zIndex"])?0:o.zIndex})}l.show();return l},removeElement:function(e){return e.parentNode?e.parentNode.removeChild(e):e},addToLinkParam:function(e,t,o){if(!e.length){return"?"+t+"="+o}e=BX.util.remove_url_param(e,t);if(e.indexOf("?")!=-1){return e+"&"+t+"="+o}return e+"?"+t+"="+o},getFirstErrorFromResponse:function(e){e=e||{};if(!e.errors)return"";return e.errors.shift().message},showModalWithStatusAction:function(e,t){e=e||{};if(!e.message){if(e.status=="success"){e.message=BX.message("LISTS_ASSETS_JS_STATUS_ACTION_SUCCESS")}else{e.message=BX.message("LISTS_ASSETS_JS_STATUS_ACTION_ERROR")+". "+this.getFirstErrorFromResponse(e)}}var o=BX.create("div",{props:{className:"bx-lists-alert"},children:[BX.create("span",{props:{className:"bx-lists-aligner"}}),BX.create("span",{props:{className:"bx-lists-alert-text"},text:e.message}),BX.create("div",{props:{className:"bx-lists-alert-footer"}})]});var s=BX.PopupWindowManager.getCurrentPopup();if(s){s.destroy()}var a=setTimeout(function(){var e=BX.PopupWindowManager.getCurrentPopup();if(!e||e.uniquePopupId!="bx-lists-status-action"){return}e.close();e.destroy()},3500);var r=BX.PopupWindowManager.create("bx-lists-status-action",null,{content:o,onPopupClose:function(){this.destroy();clearTimeout(a)},autoHide:true,zIndex:2e3,className:"bx-lists-alert-popup"});r.show();BX("bx-lists-status-action").onmouseover=function(e){clearTimeout(a)};BX("bx-lists-status-action").onmouseout=function(e){a=setTimeout(function(){var e=BX.PopupWindowManager.getCurrentPopup();if(!e||e.uniquePopupId!="bx-lists-status-action"){return}e.close();e.destroy()},3500)}},addNewTableRow:function(e,t,o,s){var a=document.getElementById(e);var r=a.rows.length;var n=a.insertRow(r);var i=0;for(i=0;i<t;i++){var l=n.insertCell(i);var d=a.rows[r-1].cells[i].innerHTML;d=d.replace(o,function(e){return e.replace("[n"+arguments[s]+"]","[n"+(1+parseInt(arguments[s]))+"]")});var c={html:d};BX.onCustomEvent(window,"onAddNewRowBeforeInner",[c]);d=c.html;l.innerHTML=d;var u=BX.processHTML(d);BX.ajax.processScripts(u.SCRIPT)}},createAdditionalHtmlEditor:function(e,t,o){var s=document.getElementById(e);var a=s.rows.length;var r=s.insertRow(a);var n=r.insertCell(0);var i=s.rows[a-1].cells[0].innerHTML;var l=0,d,c,u;while(true){d=i.indexOf("[n",l);if(d<0)break;c=i.indexOf("]",d);if(c<0)break;u=parseInt(i.substr(d+2,c-d));i=i.substr(0,d)+"[n"+ ++u+"]"+i.substr(c+1);l=d+1}l=0;while(true){d=i.indexOf("__n",l);if(d<0)break;c=i.indexOf("_",d+2);if(c<0)break;u=parseInt(i.substr(d+3,c-d));i=i.substr(0,d)+"__n"+ ++u+"_"+i.substr(c+1);l=c+1}n.innerHTML=i;var p="id_"+t+"__n"+a+"_";var m=t+"[n"+a+"][VALUE]";window.BXHtmlEditor.Show({id:p,inputName:m,name:m,content:"",width:"100%",height:"200",allowPhp:false,limitPhpAccess:false,templates:[],templateId:"",templateParams:[],componentFilter:"",snippets:[],placeholder:"Text here...",actionUrl:"/bitrix/tools/html_editor_action.php",cssIframePath:"/bitrix/js/fileman/html_editor/iframe-style.css?1412693817",bodyClass:"",bodyId:"",spellcheck_path:"/bitrix/js/fileman/html_editor/html-spell.js?v=1412693817",usePspell:"N",useCustomSpell:"Y",bbCode:false,askBeforeUnloadPage:false,settingsKey:"user_settings_1",showComponents:true,showSnippets:true,view:"wysiwyg",splitVertical:false,splitRatio:"1",taskbarShown:false,taskbarWidth:"250",lastSpecialchars:false,cleanEmptySpans:true,lazyLoad:false,showTaskbars:false,showNodeNavi:false,controlsMap:[{id:"Bold",compact:true,sort:"80"},{id:"Italic",compact:true,sort:"90"},{id:"Underline",compact:true,sort:"100"},{id:"Strikeout",compact:true,sort:"110"},{id:"RemoveFormat",compact:true,sort:"120"},{id:"Color",compact:true,sort:"130"},{id:"FontSelector",compact:false,sort:"135"},{id:"FontSize",compact:false,sort:"140"},{separator:true,compact:false,sort:"145"},{id:"OrderedList",compact:true,sort:"150"},{id:"UnorderedList",compact:true,sort:"160"},{id:"AlignList",compact:false,sort:"190"},{separator:true,compact:false,sort:"200"},{id:"InsertLink",compact:true,sort:"210"},{id:"InsertImage",compact:false,sort:"220"},{id:"InsertVideo",compact:true,sort:"230"},{id:"InsertTable",compact:false,sort:"250"},{id:"Smile",compact:false,sort:"280"},{separator:true,compact:false,sort:"290"},{id:"Fullscreen",compact:false,sort:"310"},{id:"More",compact:true,sort:"400"}],autoResize:true,autoResizeOffset:"40",minBodyWidth:"350",normalBodyWidth:"555"});var f=BX.findChildrenByClassName(BX(e),"bx-html-editor");for(var h in f){var v=f[h].getAttribute("id");var b=BX.findChildrenByClassName(BX(v),"bx-editor-iframe");if(b.length>1){for(var w=0;w<b.length-1;w++){b[w].parentNode.removeChild(b[w])}}}}}}();
/* End */
;