
; /* Start:"a:4:{s:4:"full";s:62:"/bitrix/templates/mobile_app/tasks/logic.min.js?15274018169294";s:6:"source";s:43:"/bitrix/templates/mobile_app/tasks/logic.js";s:3:"min";s:47:"/bitrix/templates/mobile_app/tasks/logic.min.js";s:3:"map";s:47:"/bitrix/templates/mobile_app/tasks/logic.map.js";}"*/
BX.namespace("BX.Mobile.Tasks");BX.Mobile.Tasks.widget=function(e){BX.merge(this,{opts:{scope:false,controls:{},instances:{},instanceCode:false,bindEvents:{},removeTemplates:true,useSpawn:false,initializeByGlobalEvent:false,globalEventScope:"document",registerDispatcher:true,usePull:false,setTitle:true,setPullDown:true},vars:{},ctrls:{A:{},S:{}},tmpls:{},sys:{scope:null,stack:{init:[]},instances:{},classCode:"widget",instanceCode:false,initialized:false}});this.pushFuncStack("init",BX.Mobile.Tasks.widget);this.isuiWidget=true};BX.merge(BX.Mobile.Tasks.widget.prototype,{preInit:function(){var e=this,t=this.opts,s=this.ctrls,i=this.sys.classCode;if(!("querySelector"in document))throw new Error("Your browser does not support querySelector");if(!i.match(/^[a-zA-Z0-9-_]+$/))throw new Error('Only letters, digitis, "-" and "_" allowed in code');if(BX.type.isNotEmptyString(t.instanceCode)){this.sys.instanceCode=t.instanceCode}},init:function(){var e=this,t=this.ctrls,s=this.opts,i=this.sys,n=this.sys.classCode,o;if(s.scope!==false){i.scope=BX.type.isNotEmptyString(s.scope)?BX(s.scope):s.scope;if(!BX.type.isElementNode(i.scope))throw new Error("Bad scope: invalid node passed");if(s.useSpawn&&i.scope)e.tmpls["scope"]=i.scope.outerHTML;this.findTemplates()}if(typeof s.bindEvents=="object"){for(o in s.bindEvents){if(BX.type.isFunction(s.bindEvents[o]))this.bindEvent(o,s.bindEvents[o])}}s.bindEvents=null},destroy:function(){},option:function(e,t){if(typeof t=="undefined"){return this.opts[e]}else{this.opts[e]=t}},variable:function(e,t){if(typeof t=="undefined"){return this.vars[e]}else{this.vars[e]=t}},control:function(e,t,s){if(!BX.type.isNotEmptyString(e))throw new Error("Requested control id is incorrect");if(t!==false&&typeof t!=="undefined"&&t!==null){if(!BX.type.isDomNode(t))throw new TypeError("Bad control instance to keep");this.ctrls["S"]=t;return}if(!BX.type.isPlainObject(s))s={};if(typeof s.scope!="undefined"){if(!BX.type.isDomNode(s.scope))throw new Error("Scope provided is not a valid dom node")}else{if(!BX.type.isDomNode(this.sys.scope))throw new Error("Widget scope is not a valid dom node")}var i=s.scope||this.sys.scope,n=!!s.all,o=!!s.reCache,r=!!s.noCache;if(BX.type.isElementNode(this.opts.controls[e]))return this.opts.controls[e];var a=n?"A":"S";if(typeof this.ctrls[a][e]==="undefined"||o){var l=i[n?"querySelectorAll":"querySelector"](this.getControlSearchString(e));if(l!==null)this.ctrls[a][e]=l}var c=this.ctrls[a][e];if(r)delete this.ctrls[a][e];return c},getRequiredControl:function(e,t){return this.controlR.apply(this,[e,t])},controlR:function(e,t){var s=this.control(e,false,t);if(typeof s=="undefined"||s===null)throw new ReferenceError("Requested control can not be found: "+this.getControlSearchValue(e));return s},instance:function(e,t){if(typeof t!="undefined"){if(typeof t=="undefined"||typeof t===null)throw new TypeError("Bad instance reference");if(typeof this.sys.instances[e]!="undefined")throw new ReferenceError("Instance is already defined under code: "+e);this.sys.instances[e]=t}return this.sys.instances[e]},find:function(e){if(!BX.type.isNotEmptyString(e))return null;return this.sys.scope.querySelector(e)},findAll:function(e){if(!BX.type.isNotEmptyString(e))return[];return Array.prototype.slice.call(this.sys.scope.querySelectorAll(e))},template:function(e,t){if(typeof t=="undefined"){return this.tmpls[e]}else{if(!BX.type.isString(t))throw new TypeError("Bad template html");this.tmpls[e]=t}},findTemplates:function(){var e=this.scope().querySelectorAll('script[type="text/html"]');for(var t=0;t<e.length;t++){var s=BX.data(e[t],"bx-template-id");if(typeof s=="string"&&s.length>0&&s.search(this.classCode())==0){s=s.replace(this.classCode()+"-","");this.tmpls[s]=e[t].innerHTML;if(this.opts.removeTemplates)BX.remove(e[t])}}},getHTMLByTemplate:function(e,t){var s=this.tmpls[e];if(!BX.type.isNotEmptyString(s))return"";for(var i in t){if(typeof t[i]!="undefined"&&t.hasOwnProperty(i)){var n="";if(i.toString().indexOf("=")==0){n=t[i].toString();i=i.toString().substr(1)}else n=BX.util.htmlspecialchars(t[i]).toString();var o="{{"+i.toString().toLowerCase()+"}}";if(n.search(o)>=0)n="";while(s.search(o)>=0)s=s.replace(o,n)}}return s},createNodesByTemplate:function(e,t,s){var i=this.tmpls[e];if(!BX.type.isNotEmptyString(i))return null;i=i.replace(/^\s\s*/,"").replace(/\s\s*$/,"");var n=this.getHTMLByTemplate(e,t);var o=false;var r=false;if(i.search(/^<\s*(tr|th)[^<]*>/)>=0)o=true;else if(i.search(/^<\s*td[^<]*>/)>=0)r=true;var a=document.createElement("div");if(o||r){if(o){a.innerHTML="<table><tbody>"+n+"</tbody></table>";a=a.childNodes[0].childNodes[0]}else{a.innerHTML="<table><tbody><tr>"+n+"</tr></tbody></table>";a=a.childNodes[0].childNodes[0].childNodes[0]}}else a.innerHTML=n;if(s){var l=a.childNodes;var c=[];for(var p=0;p<l.length;p++)if(BX.type.isElementNode(l[p]))c.push(l[p]);return c}else return Array.prototype.slice.call(a.childNodes)},parentConstruct:function(e,t){var s=e.superclass;if(typeof s=="object")s.constructor.apply(this,[t,true])},handleInitStack:function(e,t,s){this.pushFuncStack("init",t);if(!e){BX.merge(this.opts,s);BX.Mobile.Tasks.widget.prototype.preInit.call(this);var i=function(){if(this.sys.initialized)return;this.resolveFuncStack("init");for(var e in this.sys.stack){if(e!="init")this.resolveFuncStack(e,true)}this.sys.initialized=true;this.fireEvent("init",[this])};if(BX.type.isString(this.opts.initializeByGlobalEvent)&&this.opts.initializeByGlobalEvent.length>0){var n=this.opts.globalEventScope=="window"?window:document;BX.addCustomEvent(n,this.opts.initializeByGlobalEvent,BX.proxy(i,this))}else i.call(this)}},pushFuncStack:function(e,t){if(BX.type.isFunction(t.prototype[e])){if(typeof this.sys.stack[e]=="undefined")this.sys.stack[e]=[];this.sys.stack[e].push({owner:t,f:t.prototype[e]})}},disableInFuncStack:function(e,t){var s=this.sys.stack[e];if(typeof s=="undefined")return;for(var i=0;i<s.length;i++){if(s[i].owner==t)s[i].f=BX.DoNothing}},resolveFuncStack:function(e,t){var s=this.sys.stack[e];if(typeof s=="undefined")return;for(var i=0;i<s.length;i++){s[i].f.call(this)}if(t)this.fireEvent(e,[this],document);this.sys.stack[e]=null},fireEvent:function(e,t,s){s=s||this;t=t||[];BX.onCustomEvent(s,"bx-tasks-ui-"+this.sys.classCode+"-"+e,t);return this},bindEvent:function(e,t){BX.addCustomEvent(this,"bx-tasks-ui-"+this.sys.classCode+"-"+e,t);return this},getControlSearchValue:function(e){return this.sys.classCode+"-"+(this.sys.instanceCode===false?"":this.sys.instanceCode.toLowerCase()+"-")+e},getControlSearchString:function(e){return'[data-bx-id~="'+this.getControlSearchValue(e)+'"]'},getClassCode:function(){return this.sys.classCode},classCode:function(){return this.getClassCode()},getInstanceCode:function(){return this.sys.instanceCode},getScope:function(){return this.sys.scope},scope:function(){return this.getScope()},passCtx:function(e,t){return function(){var s=Array.prototype.slice.call(arguments);s.unshift(t);e.apply(this,s)}}});BX.Mobile.Tasks.page=function(e,t){this.parentConstruct(BX.Mobile.Tasks.page,e);BX.merge(this,{sys:{classCode:"page"},vars:{userId:false},appCtrls:{menu:false}});this.handleInitStack(t,BX.Mobile.Tasks.page,e)};BX.extend(BX.Mobile.Tasks.page,BX.Mobile.Tasks.widget);BX.merge(BX.Mobile.Tasks.page.prototype,{init:function(){if(typeof window.BXMobileApp!="undefined"){var e=BX.message("PAGE_TITLE");if(BX.type.isNotEmptyString(e)&&this.option("setTitle")){this.resetMenu(this.getDefaultMenu());window.BXMobileApp.UI.Page.TopBar.title.setText(e);window.BXMobileApp.UI.Page.TopBar.title.show()}}else throw new ReferenceError("BXMobileApp is not defined, no init is possible");if(typeof window.app=="undefined")throw new ReferenceError("app is not defined, no init is possible");else if(this.option("setPullDown")){window.app.pullDown({enable:true,pulltext:BX.message("MB_TASKS_PULLDOWN_PULL"),downtext:BX.message("MB_TASKS_PULLDOWN_DOWN"),loadtext:BX.message("MB_TASKS_PULLDOWN_LOADING"),action:"RELOAD",callback:function(){window.app.reload()}});BX.addCustomEvent("onOpenPageBefore",BX.delegate(this.getPageParameters,this));BX.ready(BX.delegate(this.getPageParameters,this))}if(this.option("usePull")){BX.addCustomEvent("onPull",BX.delegate(this.pullHandler,this))}},addFastClick:function(e){if(BX.type.isElementNode(e)&&typeof window.FastButton!="undefined"){document.addEventListener("DOMContentLoaded",function(){new window.FastButton(e,function(e){e.target.click()})},false)}},pullHandler:function(e){},pageOpenHandler:function(e){},dynamicActionsCustom:function(e){},getDefaultMenu:function(){return[]},resetMenu:function(e){var t="";if(BX.type.isArray(e)&&e.length>0){this.appCtrls.menu=new window.BXMobileApp.UI.Menu({items:e});t=BX.delegate(this.appCtrls.menu.show,this.appCtrls.menu)}window.BXMobileApp.UI.Page.TopBar.title.setCallback(t)},setUser:function(e){if(+e>0)this.variable("userId",+e)},getUser:function(){return this.variable("userId")},dynamicActions:function(e){try{this.setUser(e.userId)}catch(t){}this.dynamicActionsCustom(e)},getPageParameters:function(){if(typeof window.app=="undefined")throw new ReferenceError("app is not defined, pageOpenHandler() wont work");window.app.getPageParams({callback:BX.delegate(this.pageOpenHandler,this)})}});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:124:"/bitrix/components/bitrix/mobile.tasks.snmrouter/templates/.default/bitrix/tasks.list/.default/script.min.js?152740181613020";s:6:"source";s:104:"/bitrix/components/bitrix/mobile.tasks.snmrouter/templates/.default/bitrix/tasks.list/.default/script.js";s:3:"min";s:108:"/bitrix/components/bitrix/mobile.tasks.snmrouter/templates/.default/bitrix/tasks.list/.default/script.min.js";s:3:"map";s:108:"/bitrix/components/bitrix/mobile.tasks.snmrouter/templates/.default/bitrix/tasks.list/.default/script.map.js";}"*/
(function(){var e=window.BX,t;if(e&&e["Mobile"]&&e["Mobile"]["Tasks"]&&e["Mobile"]["Tasks"]["list"])return;e.namespace("BX.Mobile.Tasks.list");window.BXMobileApp.addCustomEvent("onTasksListSort",function(t){if(t&&t["action"]=="sort"){var a=e.util.add_url_param(top.location.href,{SORTF:t["sortBy"],SORTD:t["sortOrder"].toUpperCase()});window.app.showPopupLoader();window.app.reload({url:a})}});window.BXMobileApp.addCustomEvent("onTasksListFields",function(){e.reload()});var a=new(function(){var t=function(){this.tasks={};this.timer=null;this.check=e.delegate(this.check,this)};t.prototype={activate:function(t){var a=e("bx-task-timetracking-"+t);if(a)a.disabled=false},register:function(t,a){var i=e("bx-task-timetracking-"+t);if(!i)return;i.checked=true;i.disabled=false;this.tasks[t]={trueTime:parseInt(i.value),currentTime:0};if(a&&a["TIME_ELAPSED"])this.tasks[t].trueTime=parseInt(a["TIME_ELAPSED"]);if(this.timer===null)this.timer=setInterval(this.check,1e3)},deregister:function(t,a){if(e("bx-task-timetracking-"+t)){e("bx-task-timetracking-"+t).checked=false;if(a===true)e("bx-task-timetracking-"+t).disabled=true;if(this.tasks[t])e("bx-task-timetracking-"+t).value=this.tasks[t].trueTime+this.tasks[t].currentTime}delete this.tasks[t];var i=0;for(var s in this.tasks){if(this.tasks.hasOwnProperty(s)){i++;break}}if(i===0){clearInterval(this.timer);this.timer=null}},check:function(){for(var e in this.tasks){if(this.tasks.hasOwnProperty(e)){this.refresh(e,++this.tasks[e].currentTime+this.tasks[e].trueTime)}}},refresh:function(t,a){var i=e("bx-task-timetracking-"+t+"-value"),s=[Math.floor(a/3600),Math.floor(a/60)%60,a%60],r;for(r=0;r<s.length;r++){s[r]+="";s[r]="00".substring(0,2-s[r].length)+s[r]}i.innerHTML=s.join(":")}};return t}());e.Mobile.Tasks.list=function(t,a){this.parentConstruct(e.Mobile.Tasks.list,t);e.merge(this,{sys:{classCode:"list"},vars:{objectId:e.util.getRandomString(),task:{}}});for(var i in t.tasksData){if(t.tasksData.hasOwnProperty(i)){this.bindTask(t.tasksData[i]["ID"],t.tasksData[i])}}this.handleInitStack(a,e.Mobile.Tasks.list,t)};e.extend(e.Mobile.Tasks.list,e.Mobile.Tasks.page);e.merge(e.Mobile.Tasks.list.prototype,{bindTask:function(t,i){this.variable("task"+t,i);if(e("bx-task-priority-"+i["ID"])&&!e("bx-task-priority-"+i["ID"]).hasAttribute("bx-bound")){e("bx-task-priority-"+i["ID"]).setAttribute("bx-bound","Y");e.bind(e("bx-task-priority-"+i["ID"]),"click",e.delegate(function(){this.act("changePriority",t)},this))}if(e("bx-task-favorites-"+i["ID"])&&!e("bx-task-favorites-"+i["ID"]).hasAttribute("bx-bound")){e("bx-task-favorites-"+i["ID"]).setAttribute("bx-bound","Y");e.bind(e("bx-task-favorites-"+i["ID"]),"click",e.delegate(function(){this.act("favorite.addDelete",t)},this))}if(e("bx-task-timetracking-"+i["ID"])&&!e("bx-task-timetracking-"+i["ID"]).hasAttribute("bx-bound")){e("bx-task-timetracking-"+i["ID"]).setAttribute("bx-bound","Y");if(e("bx-task-timetracking-"+i["ID"]).checked)a.register(i["ID"],i);var s=e.proxy(function(t){e.eventCancelBubble(t);this.act("dayplan.timer."+(e("bx-task-timetracking-"+i["ID"]).checked?"start":"stop"),i["ID"]);return e.PreventDefault(t)},this);e.bind(e("bx-task-timetracking-"+i["ID"]),"click",s)}},init:function(){t=this;window.app.hidePopupLoader();e.Mobile.Tasks.list.actShow=e.delegate(this.actShow,this);e.Mobile.Tasks.list.act=e.delegate(this.act,this);this.actExecute=e.delegate(this.actExecute,this);this.actSuccess=e.delegate(this.actSuccess,this);this.actFailure=e.delegate(this.actFailure,this);BXMobileApp.addCustomEvent("onTaskWasUpdated",e.delegate(function(t,a,i){if(!i){i=t[2];t=t[0]}var s=this.variable("task"+t),r=false;if(s){if(i["TITLE"]&&i["TITLE"]!=s["TITLE"]&&e("bx-task-title-"+s["ID"])){e("bx-task-title-"+s["ID"]).innerHTML=i["TITLE"]}if(i["DESCRIPTION"]&&i["DESCRIPTION"]!=s["DESCRIPTION"]){if(e("bx-task-description-"+s["ID"]))e("bx-task-description-"+s["ID"]).innerHTML=i["DESCRIPTION"];else r=true}if(i["RESPONSIBLE"]&&i["RESPONSIBLE_ID"]&&i["RESPONSIBLE_ID"]+""!=s["RESPONSIBLE_ID"]+""){if(e("bx-task-responsible_id-"+s["ID"])){e("bx-task-responsible_id-"+s["ID"]).innerHTML=i["RESPONSIBLE"]["NAME"];e("bx-task-responsible_id-"+s["ID"]).setAttribute("bx-user_id",i["RESPONSIBLE_ID"])}else r=true}if(i["PRIORITY"]&&i["PRIORITY"]+""!=s["PRIORITY"]+""&&e("bx-task-priority-"+s["ID"])){e("bx-task-priority-"+s["ID"]).checked=i["PRIORITY"]==2}if(i["REAL_STATUS"]&&i["STATUS"]+""!=s["STATUS"]+""&&e("bx-task-status-"+s["ID"])){var T=e.Mobile.Tasks.statusMap;e("bx-task-status-"+s["ID"]).innerHTML=e.message("TASKS_STATUS_"+T[s["STATUS"]])||e.message("TASKS_STATUS_STATE_UNKNOWN")}if(i["DEADLINE"]&&i["DEADLINE"]+""!=s["DEADLINE"]+""){if(e("bx-task-deadline-"+s["ID"]))e("bx-task-deadline-"+s["ID"]).innerHTML=i["DEADLINE"];else r=true}if(r){e.reload()}}},this));BXMobileApp.addCustomEvent("onTaskWasCreated",function(){e.reload()});BXMobileApp.addCustomEvent("onTaskWasPerformed",e.proxy(function(e,t,a){if(!a){a=e[2];t=e[1];e=e[0]}if(this.variable("task"+e)&&t!=this.variable("objectId"))this.actSuccess(a)},this));BXMobileApp.addCustomEvent("onTaskWasRemoved",e.delegate(function(t,a,i){if(!i){t=t[0]}if(this.variable("task"+t)){var s=e.findChild(e("bx-mobile-grid"),{attribute:{"data-id":"mobile-grid-item-"+t}},true,false);if(s){e.fx.hide(s,{type:"fold",time:.2})}}},this))},getDefaultMenu:function(){return[{name:e.message("MB_TASKS_ROLES_TASK_ADD"),arrowFlag:false,icon:"add",action:e.Mobile.Tasks.createWindow},{name:e.message("TASKS_LIST_SORT"),image:"/bitrix/js/mobile/images/sort.png",arrowFlag:false,icon:"",action:function(){window.BXMobileApp.PageManager.loadPageModal({url:top.location.href.replace(/routePage=list/gi,"routePage=listsorter").replace(/SORTF=[a-z]+/gi,"").replace(/SORTD=[a-z]+/gi,"").replace(/&&/gi,"&"),bx24ModernStyle:true})}},{name:e.message("TASKS_LIST_FIELDS"),image:"/bitrix/js/mobile/images/fields.png",arrowFlag:false,icon:"",action:function(){window.BXMobileApp.PageManager.loadPageModal({url:top.location.href.replace(/routePage=list/gi,"routePage=listfields"),bx24ModernStyle:true})}}]},actShow:function(t){var a=this.variable("task"+t);if(a){var i=[];i.push({title:e.message("TASKS_LIST_GROUP_ACTION_VIEW"),callback:function(){window.BXMobileApp.PageManager.loadPageUnique({url:e.message("TASK_PATH_TO_READ").replace(/#TASK_ID#/gi,t).replace(/#USER_ID#/gi,e.message("USER_ID")),bx24ModernStyle:true})}});if(a["ALLOWED_ACTIONS"]["ACTION_EDIT"])i.push({title:e.message("TASKS_LIST_GROUP_ACTION_EDIT"),callback:function(){var a=e.message("TASK_PATH_TO_EDIT").replace(/#TASK_ID#/gi,t).replace(/#USER_ID#/gi,e.message("USER_ID")).replace(/#SALT#/gi,(new Date).getTime());window.BXMobileApp.PageManager.loadPageModal({url:a,bx24ModernStyle:true,cache:false})}});if(a["ALLOWED_ACTIONS"]["ACTION_COMPLETE"])i.push({title:e.message("TASKS_LIST_GROUP_ACTION_COMPLETE"),callback:function(){e.Mobile.Tasks.list.act("complete",t)}});if(a["ALLOWED_ACTIONS"]["ACTION_DEFER"])i.push({title:e.message("TASKS_LIST_GROUP_ACTION_DEFER"),callback:function(){e.Mobile.Tasks.list.act("defer",t)}});if(i.length>0)new window.BXMobileApp.UI.ActionSheet({buttons:i},"actionSheet").show()}},act:function(t,a,i){if(this.appCtrls&&this.appCtrls.menu)this.appCtrls.menu.hide();var s=e.type.isPlainObject(a)?a["id"]:0,r=e.type.isPlainObject(a)?a["id"]:a;a=a+0>0?a:a["id"];var T=this.variable("task"+r),o=t,n={act:o,id:r,userid:e.message("USER_ID"),taskid:r};if(t=="favorite.addDelete"){o=T["ALLOWED_ACTIONS"]["ACTION_ADD_FAVORITE"]?"favorite.add":"favorite.delete"}else if(t=="changePriority"){o="update";n["task.action"]="changePriority";n.data={PRIORITY:T["PRIORITY"]+""=="2"?"0":"2"}}if(e.type.isPlainObject(i)){for(var l in i){if(i.hasOwnProperty(l)){n[l]=i[l]}}}var A=e.util.add_url_param(e.message("TASK_PATH_TO_AJAX"),{act:o,id:r});n["parameters"]=n["parameters"]||{};n["parameters"]["RETURN_ENTITY"]=true;window.app.showPopupLoader();new e.Tasks.Util.Query({url:A}).add("task."+o,n,{},{onExecuted:e.proxy(function(t){if(t&&t.response&&t.response.status=="failed"){window.app.BasicAuth({success:e.proxy(function(){new e.Tasks.Util.Query({url:A}).add("task."+o,n,{},{onExecuted:this.actExecute}).execute()},this),failure:this.actFailure})}else this.actExecute.apply(this,arguments)},this)}).execute()},actExecute:function(t,a){window.app.hidePopupLoader();if(t&&t.length>0){var i=[],s;for(var r=0;r<t.length;r++){if(t[r]["CODE"]=="ACTION_FAILED.OTHER_TASK_ON_TIMER"){window.app.confirm({title:e.message("TASKS_TT_ERROR1_TITLE"),text:e.message("TASKS_TT_ERROR1_DESC").replace("#TITLE#",t[r]["DATA"]["TASK"]["TITLE"]),callback:e.proxy(function(t){return e.proxy(function(e){if(e<=1){this.act("dayplan.timer.start",a["ARGUMENTS"]["taskid"],{stopPrevious:t})}},this)},this)(t[r]["DATA"]["TASK"]["ID"]),buttons:[e.message("TASKS_TT_CONTINUE"),e.message("TASKS_TT_CANCEL")]});return}else{i.push(t[r]["MESSAGE"]||t[r]["CODE"])}}window.app.alert({text:i.join(". "),title:e.message("MB_TASKS_TASK_ERROR_TITLE")})}else if(a["OPERATION"]=="task.delete"){window.BXMobileApp.onCustomEvent("onTaskWasRemoved",[a["ARGUMENTS"]["taskid"],this.variable("objectId"),a],true,true)}else{window.BXMobileApp.onCustomEvent("onTaskWasPerformed",[a["ARGUMENTS"]["taskid"],this.variable("objectId"),a],true,true);this.actSuccess(a)}},actSuccess:function(t){var i=t["ARGUMENTS"]?t["ARGUMENTS"]["id"]||t["ARGUMENTS"]["taskid"]:0,s=this.variable("task"+i),r=e("bx-task-status-"+s["ID"]),T=e("bx-task-icon-"+s["ID"]),o=e.Mobile.Tasks.statusMap;if(!s)return;if(t["OPERATION"]=="task.renew"){a.activate(s["ID"])}else if(t["OPERATION"]=="task.start"||t["OPERATION"]=="task.dayplan.timer.start"){s["ALLOWED_ACTIONS"]["ACTION_START"]=false;s["ALLOWED_ACTIONS"]["ACTION_COMPLETE"]=true;e.hide(e("bx-task-start-"+s["ID"]));e.show(e("bx-task-complete-"+s["ID"]));r.innerHTML=e.message("TASKS_STATUS_STATE_IN_PROGRESS");T.className="mobile-grid-fields-task-icon state_in_progress";a.activate(s["ID"]);if(t["OPERATION"]=="task.dayplan.timer.start"){e("bx-task-timetracking-"+s["ID"]).checked=true;a.register(s["ID"],t["RESULT"]["TASK"]);a.deregister(t["ARGUMENTS"]["stopPrevious"]);a.deregister(t["ARGUMENTS"]["stopprevious"])}}else if(t["OPERATION"]=="task.complete"){s["ALLOWED_ACTIONS"]["ACTION_START"]=false;s["ALLOWED_ACTIONS"]["ACTION_COMPLETE"]=false;e.hide(e("bx-task-start-"+s["ID"]));e.hide(e("bx-task-complete-"+s["ID"]));r.innerHTML=e.message("TASKS_STATUS_STATE_COMPLETED");T.className="mobile-grid-fields-task-icon state_completed";a.deregister(s["ID"],true)}else if(t["OPERATION"]=="task.defer"){s["ALLOWED_ACTIONS"]["ACTION_START"]=true;s["ALLOWED_ACTIONS"]["ACTION_COMPLETE"]=true;e.show(e("bx-task-start-"+s["ID"]));e.show(e("bx-task-complete-"+s["ID"]));r.innerHTML=e.message("TASKS_STATUS_STATE_DEFERRED");T.className="mobile-grid-fields-task-icon state_deferred";a.deregister(s["ID"])}else if(t["OPERATION"]=="task.favorite.add"){s["ALLOWED_ACTIONS"]["ACTION_ADD_FAVORITE"]=false;s["ALLOWED_ACTIONS"]["ACTION_DELETE_FAVORITE"]=true;if(e("bx-task-favorites-"+i))e("bx-task-favorites-"+i).checked=true}else if(t["OPERATION"]=="task.dayplan.timer.stop"){a.deregister(s["ID"])}else if(t["OPERATION"]=="task.favorite.delete"){s["ALLOWED_ACTIONS"]["ACTION_ADD_FAVORITE"]=true;s["ALLOWED_ACTIONS"]["ACTION_DELETE_FAVORITE"]=false;if(e("bx-task-favorites-"+i))e("bx-task-favorites-"+i).checked=false}else if(t["OPERATION"]=="task.update"&&t["ARGUMENTS"]&&t["ARGUMENTS"]["task.action"]=="changePriority"){s["PRIORITY"]=t["ARGUMENTS"]["data"]["PRIORITY"]+"";if(e("bx-task-priority-"+i))e("bx-task-priority-"+s["ID"]).checked=s["PRIORITY"]=="2"}else if(t["OPERATION"]=="task.get"){for(var n in t["RESULT"]["CAN"]["ACTION"]){if(t["RESULT"]["CAN"]["ACTION"].hasOwnProperty(n)){s["ALLOWED_ACTIONS"]["ACTION_"+n]=t["RESULT"]["CAN"]["ACTION"][n]=="YES"||t["RESULT"]["CAN"]["ACTION"][n]=="true"||t["RESULT"]["CAN"]["ACTION"][n]===true}}e[s["ALLOWED_ACTIONS"]["ACTION_START"]?"show":"hide"](e("bx-task-start-"+s["ID"]));e[s["ALLOWED_ACTIONS"]["ACTION_COMPLETE"]?"show":"hide"](e("bx-task-complete-"+s["ID"]));if(t["RESULT"]["DATA"]["REAL_STATUS"]&&t["RESULT"]["DATA"]["REAL_STATUS"]+""!=s["REAL_STATUS"]+""&&e("bx-task-status-"+s["ID"])){for(n in t["RESULT"]["DATA"]){if(t["RESULT"]["DATA"].hasOwnProperty(n)){if(s.hasOwnProperty(n))s[n]=t["RESULT"]["DATA"][n]}}var l=o[s["REAL_STATUS"]]||"STATE_UNKNOWN";r.innerHTML=e.message("TASKS_STATUS_"+l);T.className="mobile-grid-fields-task-icon "+l.toLowerCase()}if(e("bx-task-favorites-"+i))e("bx-task-favorites-"+i).checked=s["ALLOWED_ACTIONS"]["ACTION_DELETE_FAVORITE"]}else if(t["OPERATION"]=="task.delegate"){e.reload()}},actFailure:function(){window.app.alert({text:e.message("TASKS_LIST_GROUP_ACTION_ERROR1"),title:e.message("MB_TASKS_TASK_ERROR_TITLE")})}});e.Mobile.Tasks.go=function(t){window.BXMobileApp.PageManager.loadPageUnique({url:e.message("TASK_PATH_TO_USER_PROFILE").replace("#USER_ID#",t.getAttribute("bx-user_id")),bx24ModernStyle:true})};e.Mobile.Tasks.list.addCurrent=function(e,a){if(t){t.bindTask(e,a)}}})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:61:"/bitrix/templates/mobile_app/log_mobile.min.js?15274018162637";s:6:"source";s:42:"/bitrix/templates/mobile_app/log_mobile.js";s:3:"min";s:46:"/bitrix/templates/mobile_app/log_mobile.min.js";s:3:"map";s:46:"/bitrix/templates/mobile_app/log_mobile.map.js";}"*/
(function(){if(BX.MSL)return;BX.MobileSonetLog=function(){};BX.MobileSonetLog.prototype.DBCheck=function(e){if(app.db!=undefined){app.db.createTable({tableName:"b_default",fields:[{name:"KEY",unique:true},"VALUE"],success:function(t){e.success()},fail:function(t){e.fail()}})}else return false};BX.MobileSonetLog.prototype.DBDelete=function(e){if(parseInt(e)<=0){e=false}if(app.db!=undefined){var t=false;this.DBCheck({success:function(){app.db.deleteRows({tableName:"b_default",filter:{KEY:"post_unsent"+(e?"_"+e:"")},success:function(e){},fail:function(e){}})},fail:function(){}})}else return false};BX.MobileSonetLog.prototype.DBSave=function(e,t){if(parseInt(t)<=0){t=false}for(x in e){if(x==="sessid"){delete e[x];break}}if(app.db!=undefined){this.DBCheck({success:function(){app.db.getRows({tableName:"b_default",filter:{KEY:"post_unsent"+(t?"_"+t:"")},success:function(n){text=JSON.stringify(e);if(n.items.length>0){app.db.updateRows({tableName:"b_default",updateFields:{VALUE:text},filter:{KEY:"post_unsent"+(t?"_"+t:"")},success:function(e){},fail:function(e){}})}else{app.db.addRow({tableName:"b_default",insertFields:{KEY:"post_unsent"+(t?"_"+t:""),VALUE:text},success:function(e){},fail:function(e){}})}},fail:function(e){}})},fail:function(){}})}else return false};BX.MobileSonetLog.prototype.DBLoad=function(e,t){if(parseInt(t)<=0){t=false}if(app.db!=undefined){this.DBCheck({success:function(){app.db.getRows({tableName:"b_default",filter:{KEY:"post_unsent"+(t?"_"+t:"")},success:function(t){if(t.items.length>0&&t.items[0].VALUE.length>0){var n=JSON.parse(t.items[0].VALUE);if(typeof n=="object")e.onLoad(n);else e.onEmpty()}else e.onEmpty()},fail:function(t){e.onEmpty()}})},fail:function(){e.onEmpty()}})}else{e.onEmpty();return null}};BX.MobileSonetLog.prototype.viewImageBind=function(e,t){if(app.enableInVersion(6)){e=BX(e);if(!!e){BX.bindDelegate(e,"click",t,function(n){var i=BX.findChildren(e,t,true),o=[],a=false,f=false;var s=[];for(var l=0;l<i.length;l++){a=i[l].getAttribute("data-bx-image");if(!BX.util.in_array(a,o)){f=i[l].getAttribute("data-bx-preview");o[o.length]=i[l].getAttribute("data-bx-image");s[s.length]={url:a,preview:typeof f!="undefined"&&f!==null&&f.length>0?f:"",description:""}}}var u={photos:s};if(this.tagName.toUpperCase()=="IMG"){a=this.getAttribute("data-bx-image");if(typeof a!="undefined"&&a.length>0){u.default_photo=a}f=this.getAttribute("data-bx-preview");if(typeof f!="undefined"&&f!==null&&f.length>0){u.default_preview=f}}BXMobileApp.UI.Photo.show(u);return BX.PreventDefault(n)})}}};BX.MSL=new BX.MobileSonetLog;window.BX.MSL=BX.MSL})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:95:"/bitrix/components/bitrix/mobile.interface.grid/templates/.default/script.min.js?15274018163781";s:6:"source";s:76:"/bitrix/components/bitrix/mobile.interface.grid/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
BX.namespace("BX.Mobile.Grid");BX.Mobile.Grid={init:function(e){this.curPage=1;this.pagerName="";this.pagesNum=1;this.ajaxUrl="";this.sortEventName="";this.fieldsEventName="";this.filterEventName="";this.reloadGridAfterEvent=true;if(typeof e=="object"){this.pagerName=e.pagerName||"";this.pagesNum=e.pagesNum||1;this.ajaxUrl=e.ajaxUrl||"";this.sortEventName=e.sortEventName||"";this.fieldsEventName=e.fieldsEventName||"";this.filterEventName=e.filterEventName||"";this.reloadGridAfterEvent=e.reloadGridAfterEvent!=="N"}BX.bind(window,"scroll",function(){var e=document.documentElement.clientHeight?document.documentElement.clientHeight:document.body.clientHeight;var t=document.documentElement.scrollHeight?document.documentElement.scrollHeight:document.body.scrollHeight;var i=window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;if(t-e<=i){BX.Mobile.Grid.getNextPageItems()}});this.wrapper=document.querySelector("[data-role='mobile-grid']");this.sections=document.querySelector("[data-role='mobile-grid-sections']");if(this.reloadGridAfterEvent){BXMobileApp.addCustomEvent(this.sortEventName,function(){window.BXMobileApp.UI.Page.reload()});BXMobileApp.addCustomEvent(this.fieldsEventName,function(){window.BXMobileApp.UI.Page.reload()});BXMobileApp.addCustomEvent(this.filterEventName,function(){window.BXMobileApp.UI.Page.reload()})}},showMoreActions:function(actions){var buttons=[];for(var i=0;i<actions.length;i++){buttons.push({title:actions[i].TEXT,callback:BX.proxy(function(){eval(this.action)},{action:actions[i].ONCLICK})})}new window.BXMobileApp.UI.ActionSheet({buttons:buttons},"actionSheet").show()},getNextPageItems:function(){this.curPage++;if(this.curPage>this.pagesNum)return;BXMobileApp.UI.Page.PopupLoader.show();var e=this.ajaxUrl.indexOf("?")!==-1?this.ajaxUrl+"&"+this.pagerName+"="+this.curPage:this.ajaxUrl+"?"+this.pagerName+"="+this.curPage;BX.ajax({timeout:30,method:"POST",url:e,data:{ajax:"Y"},onsuccess:BX.proxy(function(e){var t=BX.processHTML(e,false),i=BX.create("div",{html:t.HTML});var s=i.querySelectorAll('[data-role="mobile-grid-item"]');if(s){for(var o=0;o<s.length;o++){if(this.wrapper)this.wrapper.appendChild(s[o])}}BX.ajax.processScripts(t.SCRIPT);BXMobileApp.UI.Page.PopupLoader.hide()},this),onfailure:function(){}})},searchInit:function(){this.searchInput=document.querySelector("[data-role='search-input']");if(this.searchInput){BX.bind(this.searchInput.form,"submit",BX.proxy(function(e){this.onSearchKeyUp();return BX.PreventDefault(e)},this));BX.bind(this.searchInput,"keyup",BX.proxy(function(){this.onSearchKeyUp()},this));var e=document.querySelector("[data-role='search-cancel']");if(e){BX.bind(e,"click",BX.proxy(function(){this.searchInput.value="";this.onSearchKeyUp()},this))}}},onSearchKeyUp:function(){if(this.timeoutId)clearTimeout(this.timeoutId);if(this.searchInput.value.length>2||this.searchInput.value.length==0){this.timeoutId=setTimeout(BX.proxy(function(){BX.ajax.post(this.ajaxUrl,{action:"search",sessid:BX.bitrix_sessid(),search:this.searchInput.value,doNotUseViewPort:true},BX.proxy(function(e){if(this.wrapper){var t=BX.processHTML(e,false);var i=function(){if(this.wrapper.childNodes.length>0)BX.ajax.processScripts(t.SCRIPT);else BX.defer_proxy(i,this)};if(t.HTML){this.wrapper.innerHTML=t.HTML}else{this.wrapper.innerHTML=""+'<div class="mobile-grid-empty-search"> '+'<div class="mobile-grid-empty-search-box"> '+'<div class="mobile-grid-empty-search-icon"></div><br /> '+'<div class="mobile-grid-empty-search-text">'+BX.message("M_GRID_EMPTY_SEARCH")+"</div> "+"</div>"+"</div>"}if(this.sections){this.sections.style.display=this.searchInput.value.length==0?"block":"none"}BX.defer_proxy(i,this)}},this))},this),250)}}};
/* End */
;; /* /bitrix/templates/mobile_app/tasks/logic.min.js?15274018169294*/
; /* /bitrix/components/bitrix/mobile.tasks.snmrouter/templates/.default/bitrix/tasks.list/.default/script.min.js?152740181613020*/
; /* /bitrix/templates/mobile_app/log_mobile.min.js?15274018162637*/
; /* /bitrix/components/bitrix/mobile.interface.grid/templates/.default/script.min.js?15274018163781*/

//# sourceMappingURL=page_9a8105b764b34d4a9d1a1e2bdeb04d28.map.js