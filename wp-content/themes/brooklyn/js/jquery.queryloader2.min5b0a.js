!function(e){jQuery.browser={},jQuery.browser.mozilla=/mozilla/.test(navigator.userAgent.toLowerCase())&&!/webkit/.test(navigator.userAgent.toLowerCase()),jQuery.browser.webkit=/webkit/.test(navigator.userAgent.toLowerCase()),jQuery.browser.opera=/opera/.test(navigator.userAgent.toLowerCase()),jQuery.browser.msie=/msie/.test(navigator.userAgent.toLowerCase()),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var t=this.length>>>0,i=Number(arguments[1])||0;for((i=i<0?Math.ceil(i):Math.floor(i))<0&&(i+=t);i<t;i++)if(i in this&&this[i]===e)return i;return-1});var t=[],i=0,r=!1,n="",a="",o="",s="",l=0,d=0,u=!1,g="",v="",c={onComplete:function(){},backgroundColor:"#000",barColor:"#fff",textColor:"#fff",overlayId:"qLoverlay",barHeight:1,showbar:"on",percentage:!1,loaderLogo:!1,deepSearch:!0,completeAnimation:"fade",minimumTime:500,onLoadComplete:function(){if("text_draw"!==preloader_settings.style&&"text_background_animation"!==preloader_settings.style)if("grow"==c.completeAnimation){var t=500,i=new Date;i.getTime()-d<c.minimumTime&&(t=c.minimumTime-(i.getTime()-d)),e(o).stop().animate({width:"100%"},t,function(){e(this).animate({top:"0%",width:"100%",height:"100%"},500,function(){e("#"+c.overlayId).fadeOut(500,function(){e(this).remove(),c.onComplete()})})})}else e("#"+c.overlayId).delay(1e3).fadeOut(300,function(){e("#"+c.overlayId).remove(),c.onComplete()});else"text_draw"!==preloader_settings.style?g=setInterval(function(){u&&(clearInterval(g),(v=anime.timeline({autoplay:!0})).add({targets:"#ut-overlay-svg",scale:[1,10],easing:"easeInOutQuad",opacity:[1,0],duration:1200}),e("#"+c.overlayId).fadeOut(300,function(){e("#"+c.overlayId).remove(),c.onComplete()}))},50):"text_background_animation"!==preloader_settings.style&&(g=setInterval(function(){u&&(clearInterval(g),e("#"+c.overlayId).fadeOut(300,function(){e("#"+c.overlayId).remove(),c.onComplete()}))},50))}},p=function(){n=e("<div></div>").appendTo("body").css({display:"none",width:0,height:0,overflow:"hidden"});for(var i=0;t.length>i;i++)e.ajax({url:t[i],type:"HEAD",complete:function(e){r||(l++,h(this.url))}})},h=function(t){e("<img />").attr("src",t).bind("load error",function(){b()}).appendTo(n)},b=function(){var t=++i/l*100;e(o).stop().animate({width:t+"%",minWidth:t+"%"},200),1==c.percentage&&e(s).text(Math.ceil(t)+"%"),i==l&&y()},y=function(){e(n).remove(),c.onLoadComplete(),r=!0},f=function(){function i(){var t=e("#ut-overlay-svg").get(0),i=e("#ut-stroke-offset-group").get(0).getBBox();t.setAttribute("width",Math.round(i.width)),t.setAttribute("height",Math.round(i.height)),t.setAttribute("viewBox","0 0 "+Math.round(i.width)+" "+Math.round(i.height))}a=e("#qLoverlay");var r="visible";if(difference_two=0,"off"===c.showbar&&(r="hidden",199,difference_two=99),""!==preloader_settings.loader_logo&&"style_eight"!==preloader_settings.style&&"text_draw"!==preloader_settings.style&&"text_background_animation"!==preloader_settings.style&&e("<div id='ut-loader-logo'><img src='"+preloader_settings.loader_logo+"'></div>").appendTo(a.children(".ut-inner-overlay")),"style_one"===preloader_settings.style&&"on"===c.showbar&&(o=e("<div id='qLbar'></div>").css({height:c.barHeight+"px",backgroundColor:c.barColor,width:"0%",marginTop:"20px",marginBottom:"20px",visibility:r}).appendTo(a.children(".ut-inner-overlay"))),"style_two"===preloader_settings.style&&e("<div class='ut-loading-bar-style2'><div class='ut-loading-bar-style2-ball-effect'></div></div><div class='ut-loading-text'><p>"+preloader_settings.loader_text+"</p></div>").appendTo(a.children(".ut-inner-overlay")),"style_three"===preloader_settings.style&&e("<div class='ut-loading-bar-style3'><span class='ut-loading-bar-style3-outer'><span class='ut-loading-bar-style-3-inner'></span></span></div><div class='ut-loading-text'><p>"+preloader_settings.loader_text+"</p></div>").appendTo(a.children(".ut-inner-overlay")),"style_four"===preloader_settings.style&&(e("#ut-loader-logo").addClass("ut-style4-active"),e("<div class='ut-loading-bar-style4'><div class='ut-loader__bar4'></div><div class='ut-loader__bar4'></div><div class='ut-loader__bar4'></div><div class='ut-loader__bar4'></div><div class='ut-loader__bar4'></div><div class='ut-loader__ball4'></div></div><div class='ut-loading-text'><p>"+preloader_settings.loader_text+"</p></div>").appendTo(a.children(".ut-inner-overlay"))),"style_five"===preloader_settings.style&&e("<div class='ut-loading-bar-style5'><div class='ut-loading-bar-style5-inner'><label>    ●</label><label>    ●</label><label>    ●</label><label>    ●</label><label>    ●</label><label>    ●</label></div></div><div class='ut-loading-text'><p>"+preloader_settings.loader_text+"</p></div>").appendTo(a.children(".ut-inner-overlay")),"style_six"===preloader_settings.style&&e('<div class="sk-cube-grid"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div><div class="sk-cube sk-cube3"></div><div class="sk-cube sk-cube4"></div><div class="sk-cube sk-cube5"></div><div class="sk-cube sk-cube6"></div><div class="sk-cube sk-cube7"></div><div class="sk-cube sk-cube8"></div><div class="sk-cube sk-cube9"></div><p></p></div>').appendTo(a.children(".ut-inner-overlay")),"style_seven"===preloader_settings.style&&e('<div class="ut-page-loader-spinner"><div class="ut-double-bounce1"></div><div class="ut-double-bounce2"></div></div>').appendTo(a.children(".ut-inner-overlay")),"style_eight"===preloader_settings.style&&e(preloader_settings.text_logo).appendTo(a.children(".ut-inner-overlay")),"text_draw"===preloader_settings.style&&(e(window).utresize(function(){i()}),e(window).load(function(){i(),e(".ut-overlay-svg-text","#ut-overlay-svg").delay(400).queue(function(){e("#ut-overlay-svg").addClass("loaded"),(v=anime.timeline({autoplay:!0,complete:function(){u=!0}})).add({targets:".ut-overlay-svg-text",fill:{value:[preloader_settings.text_start_color,preloader_settings.text_end_color],duration:800,easing:"easeOutBack",delay:1e3}})})}),i()),"text_background_animation"===preloader_settings.style){var n=e("#ut-overlay-animated-text-wrap"),l=e("#ut-overlay-animated-text"),d=e("#ut-overlay-animated-text > div"),g=e("#ut-overlay-animated-background-text");e(window).load(function(){n.height(g.height()).addClass("calculated"),l.height(g.height()),d.height(g.height());var e=g.width();l.delay(800).animate({now:e},{duration:1600,step:function(t){l.css("width",e-t),d.css("left",-1*t)},complete:function(){u=!0}})})}"on"===preloader_settings.loader_percentage&&"style_one"===preloader_settings.style&&(s=e("<div id='qLpercentage'></div>").text("0%").css({textAlign:"center",marginTop:"20px",color:c.textColor}).appendTo(a.children(".ut-inner-overlay"))),t.length||y()},m=function(i){r="";if("none"!=e(i).css("background-image"))r=e(i).css("background-image");else if(void 0!==e(i).attr("src")&&"img"==i.nodeName.toLowerCase())var r=e(i).attr("src");if(-1==r.indexOf("gradient"))for(var n=(r=(r=(r=(r=r.replace(/url\(\"/g,"")).replace(/url\(/g,"")).replace(/\"\)/g,"")).replace(/\)/g,"")).split(", "),a=0;a<n.length;a++)if(n[a].length>0&&-1==t.indexOf(n[a])&&!n[a].match(/^(data:)/i)){var o="";e.browser.msie&&e.browser.version<9&&(o="?"+Math.floor(3e3*Math.random())),t.push(n[a]+o)}};e.fn.queryLoader2=function(t){return t&&e.extend(c,t),this.each(function(){m(this),1==c.deepSearch&&e(this).find("*:not(script)").each(function(){m(this)})}),function(){var e=new Date;d=e.getTime(),p(),f()}(),this};var _={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser",this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version",this.OS=this.searchString(this.dataOS)||"an unknown OS"},searchString:function(e){for(var t=0;t<e.length;t++){var i=e[t].string,r=e[t].prop;if(this.versionSearchString=e[t].versionSearch||e[t].identity,i){if(-1!=i.indexOf(e[t].subString))return e[t].identity}else if(r)return e[t].identity}},searchVersion:function(e){var t=e.indexOf(this.versionSearchString);if(-1!=t)return parseFloat(e.substring(t+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};_.init(),jQuery.browser.version=_.version}(jQuery);