; /* /bitrix/js/rest/client.min.js?15274018415795*/

; /* Start:"a:4:{s:4:"full";s:44:"/bitrix/js/rest/client.min.js?15274018415795";s:6:"source";s:25:"/bitrix/js/rest/client.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function(){"use strict";BX.namespace("BX.rest");var e="/rest";if(!!BX.rest.callMethod){return}BX.rest.callMethod=function(e,r,n,s){return t({method:e,data:r,callback:n,sendCallback:s})};BX.rest.callBatch=function(e,r,n,s){var a=BX.type.isArray(e)?[]:{};var i=0;var o=function(e){t.batch(e,r,n,s)};for(var u in e){var l=null,c=null;if(!!e[u]&&e.hasOwnProperty(u)){if(BX.type.isArray(e[u])){l=e[u][0];c=e[u][1]}else if(!!e[u].method){l=e[u].method;c=e[u].params}if(!!l){i++;a[u]=[l,c]}}}if(i>0){var f=function(e){return function(t){a[e]=a[e][0]+"?"+t;if(--i<=0)o(a)}};for(var p in a){if(a.hasOwnProperty(p)){t.prepareData(a[p][1],"",f(p))}}}};var t=function(n){var s=!!n.callback&&BX.type.isFunction(n.callback);var a=s?null:new BX.Promise;var i=n.sendCallback||function(){};var o=t.xhr();var u=e+"/"+t.escape(n.method)+".json";o.open("POST",u);o.setRequestHeader("Content-Type","application/x-www-form-urlencoded");var l=false;o.onprogress=function(){};o.ontimeout=function(){};o.timeout=0;o.onload=function(){if(l)return;o.onload=BX.DoNothing;var e=t.isSuccess(o);var i=o.status;if(e){var u=o.responseText;if(u.length>0){try{u=JSON.parse(u)}catch(t){e=false}}else if(i==200){u={result:{}}}else if(i==0){u={result:{},error:"ERROR_NETWORK",error_description:"A network error occurred while the request was being executed."}}else{u={result:{},error:"BLANK_ANSWER_WITH_ERROR_CODE",error_description:"Blank answer with error http code: "+i}}}o=null;if(e){var c=new r(u,n,i);if(s){n.callback.apply(window,[c])}else{if(c.error()){a.reject(c)}else{a.fulfill(c)}}}else{var c=new r({error:"ERROR_UNEXPECTED_ANSWER",error_description:"Server returned an unexpected response.",ex:{}},n,0);if(s){n.callback.apply(window,[c])}else{a.reject(c)}}};o.onerror=function(e){var t=new r({error:"ERROR_NETWORK",error_description:"A network error occurred while the request was being executed.",ex:e},n,0);if(s){n.callback.apply(window,[t])}else{a.reject(t)}};var c="sessid="+BX.bitrix_sessid();if(typeof n.start!=="undefined"){c+="&start="+parseInt(n.start)}if(!!n.data){t.prepareData(n.data,"",function(e){c+="&"+e;o.send(c);i(o)})}else{o.send(c);i(o)}return s?o:a};t.batch=function(e,n,s,a){return t({method:"batch",data:{halt:!!s?1:0,cmd:e},callback:function(t,s,a){if(!!n){var i=t.error();var o=t.data();var u=BX.type.isArray(e)?[]:{};for(var l in e){if(!!e[l]&&e.hasOwnProperty(l)){if(BX.type.isString(e[l])){var c=e[l].split("?")}else{c=[BX.type.isArray(e[l])?e[l][0]:e[l].method,BX.type.isArray(e[l])?e[l][1]:e[l].data]}if(o&&(typeof o.result[l]!=="undefined"||typeof o.result_error[l]!=="undefined")){u[l]=new r({result:typeof o.result[l]!=="undefined"?o.result[l]:{},error:o.result_error[l]||undefined,total:o.result_total[l],time:o.result_time[l],next:o.result_next[l]},{method:c[0],data:c[1],callback:n},t.status)}else if(i){u[l]=new r({result:{},error:{error:i.ex.error,description:i.ex.error_description},total:0},{method:c[0],data:c[1],callback:n},t.status)}}}n.apply(window,[u])}},sendCallback:a})};t.xhr=function(){return new XMLHttpRequest};t.escape=function(e){return BX.util.urlencode(e)};t.prepareData=function(e,r,n){var a="",i=[];if(BX.type.isString(e)||e===null){n.call(document,e||"")}else{for(var o in e){if(!e.hasOwnProperty(o)){continue}var u=t.escape(o);if(r)u=r+"["+u+"]";if(typeof e[o]==="object"){i.push([u,e[o]])}else{if(a.length>0){a+="&"}if(typeof e[o]==="boolean"){a+=u+"="+(e[o]?1:0)}else{a+=u+"="+t.escape(e[o])}}}var l=i.length;if(l>0){var c=function(e){a+=(!!e?"&":"")+e;if(--l<=0){n.call(document,a)}};var f=l;for(var o=0;o<f;o++){if(BX.type.isDomNode(i[o][1])){if(i[o][1].tagName.toUpperCase()==="INPUT"&&i[o][1].type==="file"){if(s.canUse()){s(i[o][1],function(e){return function(r){if(BX.type.isArray(r)&&r.length>0){c(e+"[0]="+t.escape(r[0])+"&"+e+"[1]="+t.escape(r[1]))}else{c(e+"=")}}}(i[o][0]))}}else if(typeof i[o][1].value!=="undefined"){c(i[o][0]+"="+t.escape(i[o][1].value))}else{c("")}}else if(BX.type.isDate(i[o][1])){c(i[o][0]+"="+t.escape(i[o][1].toJSON()))}else if(BX.type.isArray(i[o][1])&&i[o][1].length<=0){c(i[o][0]+"=")}else{t.prepareData(i[o][1],i[o][0],c)}}}else{n.call(document,a)}}};t.isSuccess=function(e){return typeof e.status==="undefined"||e.status>=200&&e.status<300||e.status===304||e.status>=400&&e.status<500||e.status===1223||e.status===0};var r=function(e,t,r){this.answer=e;this.query=BX.clone(t);this.status=r;if(typeof this.answer.next!=="undefined"){this.answer.next=parseInt(this.answer.next)}if(typeof this.answer.error!=="undefined"){this.answer.ex=new n(this.status,typeof this.answer.error==="string"?this.answer:this.answer.error)}};r.prototype.data=function(){return this.answer.result};r.prototype.time=function(){return this.answer.time};r.prototype.error=function(){return this.answer.ex};r.prototype.error_description=function(){return this.answer.error_description};r.prototype.more=function(){return!isNaN(this.answer.next)};r.prototype.total=function(){return parseInt(this.answer.total)};r.prototype.next=function(e){if(this.more()){this.query.start=this.answer.next;if(!!e&&BX.type.isFunction(e)){this.query.callback=e}return t(this.query)}return false};var n=function(e,t){this.status=e;this.ex=t};n.prototype.getError=function(){return this.ex};n.prototype.getStatus=function(){return this.status};n.prototype.toString=function(){return this.ex.error+(!!this.ex.error_description?": "+this.ex.error_description:"")+" ("+this.status+")"};var s=function(e,t){if(s.canUse()){var r=e.files,n=0,a=e.multiple?[]:null;for(var i=0,o;o=r[i];i++){var u=new window.FileReader;u.BXFILENAME=r[i].name;u.onload=function(e){e=e||window.event;var r=[this.BXFILENAME,btoa(e.target.result)];if(a===null)a=r;else a.push(r);if(--n<=0){t(a)}};u.readAsBinaryString(o)}n=i;if(n<=0){t(a)}}};s.canUse=function(){return!!window.FileReader}})();
/* End */
;