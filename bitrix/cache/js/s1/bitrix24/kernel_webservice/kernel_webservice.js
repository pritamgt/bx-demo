; /* /bitrix/js/webservice/stssync.min.js?15274019391395*/

; /* Start:"a:4:{s:4:"full";s:51:"/bitrix/js/webservice/stssync.min.js?15274019391395";s:6:"source";s:32:"/bitrix/js/webservice/stssync.js";s:3:"min";s:36:"/bitrix/js/webservice/stssync.min.js";s:3:"map";s:36:"/bitrix/js/webservice/stssync.map.js";}"*/
(function(){if(!!BX.StsSync){return}BX.StsSync={sync:function(t,s,i,n,r,a,o){var l=500,c=20,f=window.location.host;if(!!o){f=f.replace(/:\d+/,"")+":"+o}s=window.location.protocol+"//"+f+s;BX.ajax({url:"/bitrix/tools/stssync.php",dataType:"json",method:"POST",data:{action:"stssync_auth",type:t,sessid:BX.bitrix_sessid()},onsuccess:function(o){if(!o.ap){alert("Error!");return}s+="/"+BX.message("USER_ID")+"/"+o.ap;a=a.replace(/{/g,"%7B").replace(/}/g,"%7D").replace(/-/g,"%2D");var f="stssync://sts/?ver=1.1"+"&type="+t+"&cmd=add-folder"+"&base-url="+e(s)+"&list-url="+e(i)+"&guid="+a;var p="&site-name="+e(n)+"&list-name="+e(r);if(f.length+p.length>l&&(n.length>c||r.length>c)){if(n.length>c)n=n.substring(0,c-1)+"...";if(r.length>c)r=r.substring(0,c-1)+"...";p="&site-name="+e(n)+"&list-name="+e(r)}f+=p;try{window.location.href=f}catch(g){}}})}};function e(e){var t,s=e.length,i,n,r="",a=false,o="&\\[]|";for(t=0;t<s;t++){i=e.charAt(t);n=i.charCodeAt(0);if(a&&n<=127){r+="]";a=false}if(!a&&n>127){r+="[";a=true}if(o.indexOf(i)>=0)r+="|";if(n>=97&&n<=122||n>=65&&n<=90||n>=48&&n<=57)r+=i;else if(n<=15)r+="%0"+n.toString(16).toUpperCase();else if(n<=127)r+="%"+n.toString(16).toUpperCase();else if(n<=255)r+="00"+n.toString(16).toUpperCase();else if(n<=4095)r+="0"+n.toString(16).toUpperCase();else r+=n.toString(16).toUpperCase()}if(a)r+="]";return r}})();
/* End */
;
//# sourceMappingURL=kernel_webservice.map.js