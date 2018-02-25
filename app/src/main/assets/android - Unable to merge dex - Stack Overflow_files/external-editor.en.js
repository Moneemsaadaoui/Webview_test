"use strict";StackExchange.mockups=function(){function t(t,e,i,n,a){function o(t,e,i){for(var n=-1,a=-1;;){if(a=e.indexOf(t,a+1),-1==a)break;(0>n||Math.abs(a-i)<Math.abs(a-n))&&(n=a)}return n}return t.replace(new RegExp("<!-- Begin mockup[^>]*? -->\\s*!\\[[^\\]]*\\]\\((http://[^ )]+)[^)]*\\)\\s*<!-- End mockup -->","g"),function(t,s,r){var l={"payload":s.replace(/[^-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]/g,""),"pos":o(t,e,r),"len":t.length};return-1===l.pos?t:(a.push(l),t+"\n\n"+i+n+"-"+(a.length-1)+"%")})}function e(){StackExchange.externalEditor.init({"thingName":"mockup","thingFinder":t,"getIframeUrl":function(t){var e="/plugins/mockups/editor";return t&&(e+="?edit="+encodeURIComponent(t)),e},"buttonTooltip":"UI wireframe","buttonImageUrl":"/content/Shared/Balsamiq/wmd-mockup-button.png","onShow":function(t){window.addMockupToEditor=t},"onRemove":function(){window.addMockupToEditor=null;try{delete window.addMockupToEditor}catch(t){}}})}return{"init":e}}(),StackExchange.schematics=function(){function t(){if(!window.postMessage)return n;var t=document.createElement("div");t.innerHTML="<svg/>";var e="http://www.w3.org/2000/svg"==(t.firstChild&&t.firstChild.namespaceURI);if(!e)return n;var i=navigator.userAgent;return/Firefox|Chrome/.test(i)?s:/Apple/.test(navigator.vendor)||/Opera/.test(i)?o:a}function e(t,e,i,n,a){function o(t,e,i){for(var n=-1,a=-1;;){if(a=e.indexOf(t,a+1),-1==a)break;(0>n||Math.abs(a-i)<Math.abs(a-n))&&(n=a)}return n}return t.replace(new RegExp("<!-- Begin schematic[^>]*? -->\\s*!\\[[^\\]]*\\]\\((http://[^ )]+)[^)]*\\)\\s*<!-- End schematic -->","g"),function(t,s,r){var l={"payload":s.replace(/[^-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]/g,""),"pos":o(t,e,r),"len":t.length};return-1===l.pos?t:(a.push(l),t+"\n\n"+i+n+"-"+(a.length-1)+"%")})}function i(){var i;StackExchange.externalEditor.init({"thingName":"schematic","thingFinder":e,"getIframeUrl":function(t){var e="/plugins/schematics/editor";return t&&(e+="?edit="+encodeURIComponent(t)),e},"buttonTooltip":"Schematic","buttonImageUrl":"/content/Sites/electronics/img/wmd-schematic-button.png?v=1","checkSupport":function(){var e=t();switch(e){case s:return!0;case o:return confirm("Your browser is not officially supported by the schematics editor; however it has been reported to work. Launch the editor?");case a:return confirm("Your browser is not officially supported by the schematics editor; it may or may not work. Launch the editor anyway?");case n:return alert("Sorry, your browser does not support all the necessary features for the schematics editor."),!1}},"onShow":function(t){var e=$("<div class='popup' />").css("z-index",1111).text("Loading editor").appendTo("body").show().addSpinner({"marginLeft":5}).center({"dy":-200});$("<div style='text-align:right;margin-top: 10px' />").append($("<button>cancel</button>").click(function(){e.remove(),t()})).appendTo(e),i=function(i){if(i=i.originalEvent,"https://www.circuitlab.com"===i.origin){i.data||t();var n=$.parseJSON(i.data);if(n&&"success"===n.load)return e.remove(),void 0;if(n&&n.edit_url&&n.image_url){n.fkey=StackExchange.options.user.fkey;var a=$("<div class='popup' />").css("z-index",1111).appendTo("body").show(),o=function(){a.text("Storing image").addSpinner({"marginLeft":5}).center(),$.post("/plugins/schematics/save",n).done(function(e){a.remove(),t(e.img)}).fail(function(t){if(409===t.status){var e="Storing aborted";t.responseText.length<200&&(e=t.responseText),a.text(e+", will retry shortly").addSpinner({"marginLeft":5}).center(),setTimeout(o,1e4)}else a.remove(),alert("Failed to upload the schematic image.")})};o()}}},$(window).on("message",i)},"onRemove":function(){$(window).off("message",i)}})}var n=0,a=1,o=2,s=3;return{"init":i}}(),StackExchange.externalEditor=function(){function t(t){function e(t,e){function d(e){function n(){StackExchange.helpers.closePopups(v.add(a)),u()}var a,r=m||b.caret(),l=b[0].value||"",h=e?e.pos:r.start,p=e?e.len:r.end-r.start,d=l.substring(0,h),g=l.substring(h+p);m=null;var f=function(e,a){if(!e)return setTimeout(n,0),b.focus(),void 0;StackExchange.navPrevention.start();var o=void 0===a?i(e):a,s=d.replace(/(?:\r\n|\r|\n){1,2}$/,""),l=s+o+g.replace(/^(?:\r\n|\r|\n){1,2}/,""),c=r.start+o.length-d.length+s.length;setTimeout(function(){t.textOperation(function(){b.val(l).focus().caret(c,c)}),n()},0)},v=null;if(o){var x=o(e?e.payload:null);v=$("<iframe>",{"src":x})}else{var w=s(e?e.payload:null);v=$(w)}v.addClass("esc-remove").css({"position":"fixed","top":"2.5%","left":"2.5%","width":"95%","height":"95%","background":"white","z-index":1001}),$("body").loadPopup({"html":v,"target":$("body"),"lightbox":!0}).done(function(){$(window).resize(),c(f)})}$('<style type="text/css"> .wmd-'+n+"-button span { background-position: 0 0; } .wmd-"+n+"-button:hover span { background-position: 0 -40px; }</style>)").appendTo("head");var g,f,m,v=t.getConverter().hooks,b=$("#wmd-input"+e);b.on("keyup",function(t){var e=t.keyCode||t.charCode;if(8===e||46===e){var i=b.caret().start;b.caret(i,i)}}),v.chain("preConversion",function(t){var e=(t.match(/%/g)||[]).length,i=b.length?b[0].value||"":"";return g=new Array(e+2).join("%"),f=[],a(t,i,g,n,f)}),v.chain("postConversion",function(t){return t.replace(new RegExp(g+n+"-(\\d+)%","g"),function(t,e){return"<sup><a href='#' class='edit-"+n+"' data-id='"+e+"'>"+h+"</a></sup>"})});var x="The "+n+" editor does not support touch devices.",w=!1;$("#wmd-preview"+e).on("touchend",function(){w=!0}).on("click","a.edit-"+n,function(){return w?(alert(x),w=!1,!1):(w=!1,(!p||p())&&d(f[$(this).attr("data-id")]),!1)}),$("#wmd-input"+e).keyup(function(t){t.shiftKey||t.altKey||t.metaKey||!t.ctrlKey||77!==t.which||(!p||p())&&d()}),setTimeout(function(){var t=($("#wmd-button-bar"+e),$("#wmd-image-button"+e)),i=$("<li class='wmd-button wmd-"+n+"-button' id='wmd-"+n+"-button"+e+"' title='"+r+" Ctrl-M' />").insertAfter(t),a=!1,o=$("<span />").css({"backgroundImage":"url("+l+")"}).appendTo(i).on("touchend",function(){a=!0}).click(function(){return a?(alert(x),a=!1,void 0):(a=!1,(!p||p())&&d(),void 0)});$.browser.msie&&o.mousedown(function(){m=b.caret()})},0)}function i(t){return('\n\n<!-- Begin {THING}: In order to preserve an editable {THING}, please\n     don\'t edit this section directly.\n     Click the "edit" link below the image in the preview instead. -->\n\n![{THING}]('+t+")\n\n<!-- End {THING} -->\n\n").replace(/{THING}/g,n)}var n=t.thingName,a=t.thingFinder,o=t.getIframeUrl,s=t.getDivContent,r=t.buttonTooltip,l=t.buttonImageUrl,c=t.onShow,u=t.onRemove||function(){},h=t.editLabel||"edit the above "+n,p=t.checkSupport;StackExchange.MarkdownEditor.creationCallbacks.add(e)}return{"init":t}}();