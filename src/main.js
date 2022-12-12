/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

define("src/cameraEngine",[],function(){var e=function(e,t,n){var r=new Array(256),i=32;for(var s=0;s<256;s++)r[s]=Math.pow(2,s/i);typeof n=="undefined"&&(n=t),n=Math.abs(n);var o=Math.floor(n),u=Math.round(16*(n-o)),a=16-u,f=e.width,l=e.height,c=document.createElement("canvas");c.width=f,c.height=l;var h=e.getContext("2d"),p=c.getContext("2d"),d=h.getImageData(0,0,f,l),v=p.getImageData(0,0,f,l),m=1/Math.log(2);for(var g=0;g<f;g++){var y=0,b=-1,w=0,E=0,S=0,x=0,T,N,C;for(var k=0;k<l;k++){while(b<k+o+1&&b<l)b>-1&&(T=d.data[(g+f*b)*4+3]*a,T>0&&(x+=T,w+=r[d.data[(g+f*b)*4+0]]*T,E+=r[d.data[(g+f*b)*4+1]]*T,S+=r[d.data[(g+f*b)*4+2]]*T)),b++,b<l?(C=u,T=d.data[(g+f*b)*4+3]*u,T>0&&(x+=T,w+=r[d.data[(g+f*b)*4+0]]*T,E+=r[d.data[(g+f*b)*4+1]]*T,S+=r[d.data[(g+f*b)*4+2]]*T)):C=0;y<k-o-1&&(T=d.data[(g+f*y)*4+3],y>0?(N=u,T*=u):(N=0,T*=16),T>0&&(x-=T,w-=r[d.data[(g+f*y)*4+0]]*T,E-=r[d.data[(g+f*y)*4+1]]*T,S-=r[d.data[(g+f*y)*4+2]]*T),y++,T=d.data[(g+f*y)*4+3]*a,T>0&&(x-=T,w-=r[d.data[(g+f*y)*4+0]]*T,E-=r[d.data[(g+f*y)*4+1]]*T,S-=r[d.data[(g+f*y)*4+2]]*T));var L=16*(b-y-1)+N+C;x>0&&(v.data[(g+f*k)*4+0]=i*Math.log(w/x)*m,v.data[(g+f*k)*4+1]=i*Math.log(E/x)*m,v.data[(g+f*k)*4+2]=i*Math.log(S/x)*m),v.data[(g+f*k)*4+3]=x/L}}var A=document.createElement("canvas");A.width=f,A.height=l;var O=A.getContext("2d"),M=O.getImageData(0,0,f,l);t=Math.abs(t),o=Math.floor(t),u=Math.round(16*(t-o)),a=16-u;for(var k=0;k<l;k++){var _=0,D=-1,w=0,E=0,S=0,x=0,T,P,H;for(var g=0;g<f;g++){while(D<g+o+1&&D<f)D>-1&&(T=v.data[(D+f*k)*4+3]*a,T>0&&(x+=T,w+=r[v.data[(D+f*k)*4+0]]*T,E+=r[v.data[(D+f*k)*4+1]]*T,S+=r[v.data[(D+f*k)*4+2]]*T)),D++,D<f?(H=u,T=v.data[(D+f*k)*4+3]*u,T>0&&(x+=T,w+=r[v.data[(D+f*k)*4+0]]*T,E+=r[v.data[(D+f*k)*4+1]]*T,S+=r[v.data[(D+f*k)*4+2]]*T)):H=0;_<g-o-1&&(T=v.data[(_+f*k)*4+3],_>0?(P=u,T*=u):(P=0,T*=16),T>0&&(x-=T,w-=r[v.data[(_+f*k)*4+0]]*T,E-=r[v.data[(_+f*k)*4+1]]*T,S-=r[v.data[(_+f*k)*4+2]]*T),_++,T=v.data[(_+f*k)*4+3]*a,T>0&&(x-=T,w-=r[v.data[(_+f*k)*4+0]]*T,E-=r[v.data[(_+f*k)*4+1]]*T,S-=r[v.data[(_+f*k)*4+2]]*T));var L=16*(D-_-1)+P+H;x>0&&(M.data[(g+f*k)*4+0]=i*Math.log(w/x)*m,M.data[(g+f*k)*4+1]=i*Math.log(E/x)*m,M.data[(g+f*k)*4+2]=i*Math.log(S/x)*m),M.data[(g+f*k)*4+3]=x/L}}return O.putImageData(M,0,0),A},t=function(e,t,n,r,i){var s=t.getImageData(0,0,e.width,e.height),o=9,u=-128*(i-1)+256*n/o,a=!1;$.browser.opera&&(a=!0);var f,l,c,h,p,d,v,m,g;console.time("loop");for(var y=0;y<e.width*e.height*4;y+=4)v=i*e.data[y],m=i*e.data[y+1],g=i*e.data[y+2],v-=r*(Math.random()-.5),m-=r*(Math.random()-.5),g-=r*(Math.random()-.5),a?(s.data[y]=Math.max(0,Math.min(255,v+u)),s.data[y+1]=Math.max(0,Math.min(255,m+u)),s.data[y+2]=Math.max(0,Math.min(255,g+u)),s.data[y+3]=e.data[y+3]):(s.data[y]=v+u,s.data[y+1]=m+u,s.data[y+2]=g+u,s.data[y+3]=e.data[y+3]);console.timeEnd("loop"),t.putImageData(s,0,0)};return{drawPhoto:t,fastBlur:e}}),define("src/exposureFunctions",[],function(){var e=function(e){return Math.round(Math.log(e/100)/Math.LN2*3)},t=function(e){var t=Math.pow(2,e/3)*100,n;return t<50?n=5:t<1e3?n=10:t<1600?n=50:n=100,Math.round(t/n)*n},n=function(n,r){return h(n,r,e,t)},r=function(n){return t(e(n))},i=function(e){return Math.round(Math.log(e)/Math.LN2*6)},s=function(e){return Math.round(Math.pow(2,e/6)*10)/10},o=function(e,t){return h(e,t,i,s)},u=function(e){return s(i(e))},a=function(e){return Math.round(Math.log(e)/Math.LN2*3)},f=function(e){return Math.pow(2,e/3)},l=function(e,t){return h(e,t,a,f)},c=function(e){return f(a(e))},h=function(e,t,n,r){var i=[],s=n(e),o=r(s);while(o<=t)i.push(o),s++,o=r(s);return i},p=function(e,t,n){return Math.log(100*t*t/(n*e))/Math.LN2},d=function(e){return Math.round(e*3)},v=function(e){return Math.round(100*e/3)/100},m=function(e){return v(d(e))},g=function(e,t){return h(e,t,d,v)},y=function(e,t){return 10+Math.log(1/(e*e*t*t))/Math.LN2};return{ISOToThirds:e,thirdsToISO:t,ISORange:n,roundISO:r,apertureToThirds:i,thirdsToAperture:s,apertureRange:o,roundAperture:u,shutterToThirds:a,thirdsToShutter:f,shutterRange:l,roundShutter:c,EV:p,roundEV:m,EVRange:g,lightScore:y}}),define("src/cameraControls",["src/exposureFunctions"],function(e){var t=[],n=[],r=[],i=[],s=[],o,u,a,f,l,c,h,p=!0,d=function(i){$("#ISOAmount").val(c.ISO+" ISO"),$("#apertureAmount").val("f"+c.aperture),c.shutter<.5?$("#shutterAmount").val("1/"+Math.round(1/c.shutter)+" s"):$("#shutterAmount").val(Math.round(c.shutter*10)/10+" s");var l="";c.EVComp>0?l="+":c.EVComp<0&&(l="-"),$("#exposureAmount").val(l+Math.abs(Math.round(100*e.roundEV(c.EVComp))/100)),o.slider({value:t.indexOf(e.roundISO(c.ISO))}),u.slider({value:n.indexOf(e.roundAperture(c.aperture))}),a.slider({value:r.indexOf(e.roundShutter(c.shutter))});var h=Math.min(s[s.length-1],Math.max(s[0],e.roundEV(c.EVComp)));f.slider({value:s.indexOf(h)}),$("#simulationError").text(c.error)},v=function(e,n){c.ISO=t[n.value],d(),p||l(["ISO"])},m=function(e,t){c.aperture=n[t.value],d(),p||l(["aperture"])},g=function(e,t){c.shutter=r[t.value],d(),p||l(["shutter"])},y=function(e,t){c.EVComp=s[t.value],d(),p||l(["EVComp"])},b=function(){var e=$("input[name=focus]:checked").val();console.log("focus plane: "+e),$("label[data-focus]").removeClass("selected"),$("label[data-focus="+e+"]").addClass("selected"),e==="fore"?c.focusLayer=1:c.focusLayer=0,l(["focus"])},w=function(){var e=$("input[name=mode]:checked").val();$("label[data-mode]").removeClass("selected"),$("label[data-mode="+e+"]").addClass("selected"),console.log("Mode : "+e),c.mode=e,p||l(["aperture","ISO","shutter"]);switch(e){case"A":o.slider("disable"),u.slider("disable"),a.slider("disable"),f.slider("enable");break;case"Av":o.slider("disable"),u.slider("enable"),a.slider("disable"),f.slider("enable");break;case"Tv":o.slider("disable"),u.slider("disable"),a.slider("enable"),f.slider("enable");break;case"M":o.slider("enable"),u.slider("enable"),a.slider("enable"),f.slider("disable");break;default:console.log("Mode not recognised")}},E=function(e,t){var n=e.changedTouches,r=n[0],i="";switch(e.type){case"touchstart":i="mousedown";break;case"touchmove":i="mousemove";break;case"touchend":i="mouseup";break;default:return}var s=document.createEvent("MouseEvent");s.initMouseEvent(i,!0,!0,window,1,r.screenX,r.screenY,r.clientX,r.clientY,!1,!1,!1,!1,0,null),r.target.dispatchEvent(s),e.preventDefault()},S=function(i,h,d){c=i,l=h,o=$("#ISOSlider"),u=$("#apertureSlider"),a=$("#shutterSlider"),f=$("#exposureSlider"),console.log("cam spec = "+JSON.stringify(c.cameraSpec)),t=e.ISORange(c.cameraSpec.minISO,c.cameraSpec.maxISO),n=e.apertureRange(c.maxApertureAtFocalLength(d),c.cameraSpec.minAperture),r=e.shutterRange(c.cameraSpec.minShutter,c.cameraSpec.maxShutter),s=e.EVRange(-3,3),console.log("ap vals = "+JSON.stringify(n)),o.slider({value:t.indexOf(e.roundISO(c.ISO)),min:0,max:t.length-1,step:1,slide:v}),u.slider({value:n.indexOf(e.roundAperture(c.aperture)),min:0,max:n.length-1,step:1,slide:m}),a.slider({value:r.indexOf(e.roundShutter(c.shutter)),min:0,max:r.length-1,step:1,slide:g}),f.slider({value:s.indexOf(e.roundEV(c.EVComp)),min:0,max:s.length-1,step:1,slide:y}),$(".ui-slider-handle").each(function(e,t){t.addEventListener("touchstart",E,!0),t.addEventListener("touchmove",E,!0),t.addEventListener("touchend",E,!0),t.addEventListener("touchcancel",E,!0)}),p&&($("input[name=focus][value=fore]").prop("checked",!0),$("input[name=focus]").change(b),b(),$("input[name=mode][value=A]").prop("checked",!0),$("input[name=mode]").change(w),w()),x(),p=!1},x=function(){var e=c.ISO,i=c.aperture,s=c.shutter;c.ISO=Math.min(Math.max(c.ISO,t[0]),t[t.length-1]),c.aperture=Math.min(Math.max(c.aperture,n[0]),n[n.length-1]),c.shutter=Math.min(Math.max(c.shutter,r[0]),r[r.length-1]);var o=[];e!==c.ISO&&o.push("ISO"),i!==c.aperture&&o.push("aperture"),s!==c.shutter&&o.push("shutter"),d(),p||l(o.concat(["cropFactor"]))};return{setup:S,restrictSettings:x,updateDisplay:d}}),define("src/getUrl",{load:function(e,t,n,r){n(t.toUrl(e))}}),define("src/urlUtils",["src/getUrl"],function(e){var t=function(e,t){var n;return require(["src/getUrl!"+e],function(e){n=e}),typeof t!="undefined"&&$.each(t,function(e,t){n+="&"+e+"="+t}),n};return{getResourceUrl:t}});var Mustache;(function(e){typeof module!="undefined"&&typeof module.exports!="undefined"?module.exports=e:typeof define=="function"?define("external/mustache",[],e):Mustache=e})(function(){function u(e,t){return RegExp.prototype.test.call(e,t)}function a(e){return!u(r,e)}function c(e){var t=e.replace(l,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)});return'"'+t+'"'}function h(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function d(e){return String(e).replace(/[&<>"'\/]/g,function(e){return p[e]})}function v(e){this.string=e,this.tail=e,this.pos=0}function m(e,t){this.view=e,this.parent=t,this.clearCache()}function g(){this.clearCache()}function y(e,t){var n=['""'],r,i,s;for(var o=0,u=e.length;o<u;++o){r=e[o];switch(r.type){case"#":case"^":i=r.type==="#"?"_section":"_inverted",n.push("r."+i+"("+c(r.value)+", c, function (c, r) {\n"+"  "+y(r.tokens,!0)+"\n"+"})");break;case"{":case"&":case"name":s=r.type==="name"?"true":"false",n.push("r._name("+c(r.value)+", c, "+s+")");break;case">":n.push("r._partial("+c(r.value)+", c)");break;case"text":n.push(c(r.value))}}return n="return "+n.join(" + ")+";",t?n:new Function("c, r",n)}function b(e){if(e.length===2)return[new RegExp(h(e[0])+"\\s*"),new RegExp("\\s*"+h(e[1]))];throw new Error("Invalid tags: "+e.join(" "))}function w(e){var t=[],n=t,r=[],i,s;for(var o=0;o<e.length;++o){i=e[o];switch(i.type){case"#":case"^":i.tokens=[],r.push(i),n.push(i),n=i.tokens;break;case"/":if(r.length===0)throw new Error("Unopened section: "+i.value);s=r.pop();if(s.value!==i.value)throw new Error("Unclosed section: "+s.value);r.length>0?n=r[r.length-1].tokens:n=t;break;default:n.push(i)}}s=r.pop();if(s)throw new Error("Unclosed section: "+s.value);return t}function E(e){var t;for(var n=0;n<e.length;++n){var r=e[n];t&&t.type==="text"&&r.type==="text"?(t.value+=r.value,e.splice(n--,1)):t=r}}function S(r,u){u=u||e.tags;var f=b(u),l=new v(r),c=[],p=[],d=!1,m=!1,g=function(){if(d&&!m)while(p.length)c.splice(p.pop(),1);else p=[];d=!1,m=!1},y,S,x;while(!l.eos()){S=l.scanUntil(f[0]);if(S)for(var T=0,N=S.length;T<N;++T)x=S.charAt(T),a(x)?p.push(c.length):m=!0,c.push({type:"text",value:x}),x==="\n"&&g();if(!l.scan(f[0]))break;d=!0,y=l.scan(o)||"name",l.scan(t);if(y==="=")S=l.scanUntil(i),l.scan(i),l.scanUntil(f[1]);else if(y==="{"){var C=new RegExp("\\s*"+h("}"+u[1]));S=l.scanUntil(C),l.scan(s),l.scanUntil(f[1])}else S=l.scanUntil(f[1]);if(!l.scan(f[1]))throw new Error("Unclosed tag at "+l.pos);c.push({type:y,value:S});if(y==="name"||y==="{"||y==="&")m=!0;y==="="&&(u=S.split(n),f=b(u))}return E(c),w(c)}function T(){x.clearCache()}function N(e,t){return x.compile(e,t)}function C(e,t,n){return x.compilePartial(e,t,n)}function k(e,t,n){if(n)for(var r in n)C(r,n[r]);return x.render(e,t)}var e={};e.name="mustache.js",e.version="0.5.2",e.tags=["{{","}}"],e.parse=S,e.clearCache=T,e.compile=N,e.compilePartial=C,e.render=k,e.Scanner=v,e.Context=m,e.Renderer=g,e.to_html=function(e,t,n,r){var i=k(e,t,n);if(typeof r!="function")return i;r(i)};var t=/\s*/,n=/\s+/,r=/\S/,i=/\s*=/,s=/\s*\}/,o=/#|\^|\/|>|\{|&|=|!/,f=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},l=/[\x00-\x2F\x3A-\x40\x5B-\x60\x7B-\xFF\u2028\u2029]/gm,p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};e.isWhitespace=a,e.isArray=f,e.quote=c,e.escapeRe=h,e.escapeHtml=d,v.prototype.eos=function(){return this.tail===""},v.prototype.scan=function(e){var t=this.tail.match(e);return t&&t.index===0?(this.tail=this.tail.substring(t[0].length),this.pos+=t[0].length,t[0]):""},v.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.pos+=this.tail.length,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n),this.pos+=n}return t},m.make=function(e){return e instanceof m?e:new m(e)},m.prototype.clearCache=function(){this._cache={}},m.prototype.push=function(e){return new m(e,this)},m.prototype.lookup=function(e){var t=this._cache[e];if(!t){if(e===".")t=this.view;else{var n=this;while(n){if(e.indexOf(".")>0){var r=e.split("."),i=0;t=n.view;while(t&&i<r.length)t=t[r[i++]]}else t=n.view[e];if(t!=null)break;n=n.parent}}this._cache[e]=t}return typeof t=="function"&&(t=t.call(this.view)),t},g.prototype.clearCache=function(){this._cache={},this._partialCache={}},g.prototype.compile=function(e,t){typeof e=="string"&&(e=S(e,t));var n=y(e),r=this;return function(e){return n(m.make(e),r)}},g.prototype.compilePartial=function(e,t,n){return this._partialCache[e]=this.compile(t,n),this._partialCache[e]},g.prototype.render=function(e,t){var n=this._cache[e];return n||(n=this.compile(e),this._cache[e]=n),n(t)},g.prototype._section=function(e,t,n){var r=t.lookup(e);switch(typeof r){case"object":if(f(r)){var i="";for(var s=0,o=r.length;s<o;++s)i+=n(t.push(r[s]),this);return i}return r?n(t.push(r),this):"";case"function":var u=n(t,this),a=this,l=function(e){return a.render(e,t)};return r.call(t.view,u,l)||"";default:if(r)return n(t,this)}return""},g.prototype._inverted=function(e,t,n){var r=t.lookup(e);return r==null||r===!1||f(r)&&r.length===0?n(t,this):""},g.prototype._partial=function(e,t){var n=this._partialCache[e];return n?n(t):""},g.prototype._name=function(e,t,n){var r=t.lookup(e);typeof r=="function"&&(r=r.call(t.view));var i=r==null?"":String(r);return n?d(i):i};var x=new g;return e}()),define("src/mustache",["src/urlUtils","external/mustache"],function(e,t){var n={},r=function(r,i,s){return s?t.to_html(r,i):(r in n||$.ajax({url:e.getResourceUrl("html/"+r+".mustache"),dataType:"text",success:function(e){n[r]=e},error:function(){console.error("Couldn't fetch mustache template: "+r)},async:!1}),t.to_html(n[r],i))};return{toHtml:r}}),define("src/scene",["src/cameraEngine","src/cameraControls","src/mustache","src/urlUtils"],function(e,t,n,r){var i=[{name:"Tree Bear",layers:[{name:"background",source:"content/treeDog/tree-dog-24-back-540.jpg",focalDistance:15},{name:"foreground",source:"content/treeDog/tree-dog-24-fore-540.png",focalDistance:1.3}],hdrToLdrMultiplier:1.8,sceneEV:9,EVOffset:3,width:540,height:360,focalLength:24,location:"Retiro Park, Madrid",description:"Poor little bear."},{name:"Tree Bear",layers:[{name:"background",source:"content/treeDog/tree-dog-50-back-540.jpg",focalDistance:15},{name:"foreground",source:"content/treeDog/tree-dog-50-fore-540.png",focalDistance:1.3}],hdrToLdrMultiplier:1.8,sceneEV:9,EVOffset:3,width:540,height:360,focalLength:50,location:"Retiro Park, Madrid",description:"If we zoom in while keeping the aperture constant, the background becomes more blurred."},{name:"Tree Bear",layers:[{name:"background",source:"content/treeDog/tree-dog-80-back-540.jpg",focalDistance:15},{name:"foreground",source:"content/treeDog/tree-dog-80-fore-540.png",focalDistance:1.3}],hdrToLdrMultiplier:1.2,sceneEV:9,EVOffset:0,width:540,height:360,focalLength:80,location:"Retiro Park, Madrid",description:"At 80mm we're in the telephoto range, and at a distance of only 1.3m from our subject we can acheive a very shallow depth of field effect by using a large aperture. Remember a larger aperture means lower f-stop.",notes:"With a very large aperture the tree in the foreground should start to become blurred, even when the dog is in focus, this shows a weakness of the simulation method, which simplifies the scene into only two layers"},{name:"Church",layers:[{name:"",source:"content/cathedral/cathedral-540.jpg",focalDistance:40}],hdrToLdrMultiplier:1.4,sceneEV:11,EVOffset:0,width:540,height:360,focalLength:35,description:"Taken while the sun was setting. At this focal range and distance the whole image stays in focus, even when using a large aperture."},{name:"Lounge",layers:[{name:"background",source:"content/loungeScene/lounge-hdr-background.jpg",focalDistance:8},{name:"foreground",source:"content/loungeScene/lounge-hdr-foreground.png",focalDistance:1.5}],hdrToLdrMultiplier:2,sceneEV:3,EVOffset:2.3,width:540,height:360,focalLength:50,description:"This is a low-light scene. The scene is static, so you can improve the quality by using a slower shutter speed."},{name:"Lounge, moving dog",layers:[{name:"background",source:"content/loungeScene/lounge-hdr-background.jpg",focalDistance:8},{name:"foreground",source:"content/loungeScene/lounge-hdr-foreground.png",focalDistance:1.5,horizontalMotionBlur:8}],hdrToLdrMultiplier:2,sceneEV:3,EVOffset:2.3,width:540,height:360,focalLength:50,description:"This is a low-light scene and the dog is moving on a conveyor belt just out of shot, so the shutter speed needs to be kept reasonably fast to avoid motion blur. This makes it impossible to get a sharp, low noise image with a typical compact camera and shows the advantage of having a camera with a large aperture."}],s,o,u,a,f,l,c,h,p,d,v=100,m=[],g,y=!0,b=function(e){console.log("loading image "+e),o++;var t=new Image;return t.onload=w,t.src=r.getResourceUrl(e),t},w=function(){console.log("image loaded"),o--,o===0&&E()},E=function(){$("#loading").hide(),$.each(a,function(e,t){N(t,e),N(t,e)}),c.width=s.width,c.height=s.height,g.focusLayer=s.layers.length-1,s.layers.length>1?$("input[name=focus][value=back]").attr("disabled",!1):($("input[name=focus][value=back]").attr("disabled",!0),$("input[name=focus][value=fore]").prop("checked",!0)),$("input[name=focus]:checked").change(),C(["scene"])},S=0,x=function(t,n,r){r=r||0,n=Math.abs(n);var i;n<1?i=.25:n<6?i=.5:i=1,n=Math.round(n/i)*i;var s="l:"+t+", "+"r:"+n;if(!(s in p)||r>0)p[s]=e.fastBlur(f[t],n+r,n),S++,console.log("cache miss, cache size: "+S);return p[s]},T=function(e){console.time("focus");var t=c.getContext("2d");$.each(f,function(n,r){var i,o,u,a=s.layers[Math.min(e.focusLayer,s.layers.length-1)].focalDistance;i=Math.abs(1/a-1/s.layers[n].focalDistance)/(e.aperture*e.cameraSpec.cropFactor)*s.focalLength*s.focalLength/160,o=s.layers[n].horizontalMotionBlur||0,console.log("hblur for layer "+n+" = "+o),u=x(n,i,o*e.shutter),t.drawImage(u,0,0)}),console.timeEnd("focus")},N=function(e,t){f[t]=document.createElement("canvas"),f[t].width=s.width,f[t].height=s.height,l[t]=f[t].getContext("2d"),l[t].drawImage(e,0,0)},C=function(e){m=m.concat(e);if(o>0){console.log("drawScene cancelled, still loading");return}clearTimeout(d),d=setTimeout(function(){var e=m;m=[],k(e)},Math.min(v,100))},k=function(n){if(n.indexOf("cameraSpec")>-1||n.indexOf("scene")>-1){console.log("cameraSpec changed"),g.supportsFocalLength(s.focalLength/g.cameraSpec.cropFactor)?$("#simulationStatus").text(""):$("#simulationStatus").text("Note: the selected camera/lens combination doesn't support this photo's focal length of "+s.focalLength+"mm (full frame equivalent)."),t.setup(g,C,s.focalLength/g.cameraSpec.cropFactor);return}var r=g.aperture;g.calculate(s.sceneEV,s.focalLength/g.cameraSpec.cropFactor),t.updateDisplay(),r!==g.aperture&&n.push("aperture"),console.log("f"+g.aperture+"  "+g.focus+"m  "+Math.floor(g.ISO)+"ISO   "+g.shutter+"s  "+g.cameraSpec.cropFactor+"x"),T(g);var i=c.getContext("2d"),o=(new Date).getTime();console.time("drawPhoto"),console.log("camera EV = "+g.EV()),e.drawPhoto(i.getImageData(0,0,s.width,s.height),h,s.sceneEV-g.EV()+s.EVOffset,g.cameraSpec.cropFactor*Math.sqrt(g.ISO)*256/600,s.hdrToLdrMultiplier),console.timeEnd("drawPhoto"),v=(new Date).getTime()-o},L=function(e,t){g=e,u=document.getElementById("largeCanvas"),c=document.createElement("canvas");if(!u||!u.getContext){O();return}h=u.getContext("2d");if(!h){O();return}var r=1;A(r),t.html(n.toHtml("sceneSelector",{scenes:i})),t.change(function(){var e=t.find("option").index(t.find("option:selected"));console.log("change scene: ",e),A(e)}),t.find("option").eq(r).prop("selected",!0)},A=function(e){o=0,a=[],f=[],l=[],p={},s=i[e],console.log("loading scene "+e+": "+s.name),$("#sceneInfo").html(n.toHtml("sceneInfo",s)),$("#loading").fadeIn(400),$.each(s.layers,function(e,t){a[e]=b(t.source)})},O=function(){CFInstall.check({mode:"overlay",destination:"http://bethecamera.com"})};return{init:L,drawScene:C,cache:function(){return p},getFocalLength:function(){return s.focalLength}}}),define("src/CameraSettings",["src/exposureFunctions"],function(e){var t=function(e,t,n,r,i){this.mode=e||"Auto",this.ISO=t||800,this.aperture=n||2,this.shutter=r||1/16,this.EVComp=0,this.focusLayer=1,this.cameraSpec=i||this.DEFAULT_CAMERA_SPEC,this.error=""};return t.prototype.DEFAULT_CAMERA_SPEC={cropFactor:1,minISO:100,maxISO:6400,minAperture:32,minShutter:1/2048,maxShutter:2,lens:[{focalLength:24,maxAperture:4},{focalLength:105,maxAperture:4}]},t.prototype.maxApertureAtFocalLength=function(t){var n=this.cameraSpec.lens[0].focalLength,r=this.cameraSpec.lens[0].maxAperture,i=this.cameraSpec.lens[this.cameraSpec.lens.length-1].focalLength,s=this.cameraSpec.lens[this.cameraSpec.lens.length-1].maxAperture,o;return r===s?o=r:t<n?o=r:t>i?o=s:o=r+(s-r)*(t-n)/(i-n),console.log("max ap at "+t+"mm = "+o),e.roundAperture(o)},t.prototype.calculate=function(t,n){var r=this.cameraSpec.minISO||100,i=this.cameraSpec.maxISO||3200,s=this.cameraSpec.minAperture,o=this.maxApertureAtFocalLength(n),u=this.cameraSpec.minShutter,a=this.cameraSpec.maxShutter,f=t-this.EVComp;this.error="";switch(this.mode){case"A":break;case"Av":console.log("Av calculate"),s=this.aperture,o=this.aperture;break;case"Tv":u=this.shutter,a=this.shutter;break;case"M":this.EVComp=t-this.EV();return}var l=e.EV(r,s,u),c=e.EV(i,o,a);if(f<=c)this.ISO=i,this.aperture=o,this.shutter=a;else if(f>=l)this.ISO=r,this.aperture=s,this.shutter=u;else{var h=Math.min(Math.max(1/128,u),a),p=Math.min(Math.max(.5,u),a),d=Math.min(Math.max(400,r),i);console.log("target ISO = "+d),console.log("max ISO = "+i),console.log("target shutter = "+h);var v=e.EV(i,o,p),m=e.EV(d,o,h),g=e.EV(r,o,h),y=e.EV(r,o,u),b;if(f<=v)this.ISO=i,this.aperture=o,this.shutter=a/Math.pow(2,f-c);else if(f<=m)this.aperture=o,b=(m-f)/(m-v),console.log("fraction = "+b),this.ISO=e.thirdsToISO(b*e.ISOToThirds(i)+(1-b)*e.ISOToThirds(d)),this.shutter=e.thirdsToShutter(b*e.shutterToThirds(p)+(1-b)*e.shutterToThirds(h));else if(f<=g)this.aperture=o,this.shutter=h,b=(g-f)/(g-m),this.ISO=e.thirdsToISO(b*e.ISOToThirds(d)+(1-b)*e.ISOToThirds(r));else if(f<=y)this.aperture=o,this.ISO=r,b=(y-f)/(y-g),this.shutter=e.thirdsToShutter(b*e.shutterToThirds(h)+(1-b)*e.shutterToThirds(u));else{this.ISO=r,this.shutter=u;var b=(l-f)/(l-y);this.aperture=e.thirdsToAperture(b*e.apertureToThirds(o)+(1-b)*e.apertureToThirds(s))}}console.log("EV: "+this.EV()+" / "+f),e.roundEV(this.EV())>e.roundEV(f)?this.error="Scene too dark":e.roundEV(this.EV())<e.roundEV(f)&&(this.error="Scene too light")},t.prototype.EV=function(){return e.EV(this.ISO,this.aperture,this.shutter)},t.prototype.supportsFocalLength=function(e){console.log("checking focal length: "+e);var t=this.cameraSpec.lens[0].focalLength,n=this.cameraSpec.lens[this.cameraSpec.lens.length-1].focalLength;return e*.98<=n&&e*1.02>=t},t}),define("src/cameraData",[],function(){var e=[{name:"Full Frame DSLR",cropFactor:1,ISO:{extraMin:50,min:100,max:6400,extraMax:25600},lens:[{focalLength:50,maxAperture:1.8}]},{name:"Full Frame DSLR",cropFactor:1,ISO:{extraMin:50,min:100,max:25600,extraMax:102400},lens:[{focalLength:24,maxAperture:4},{focalLength:105,maxAperture:4}]},{name:"1.6X Crop DSLR",cropFactor:1.6,ISO:{min:100,max:6400,extraMax:12800},lens:[{focalLength:50,maxAperture:1.8}]},{name:"1.6X Crop DSLR",cropFactor:1.6,ISO:{min:100,max:6400,extraMax:12800},lens:[{focalLength:18,maxAperture:3.5},{focalLength:55,maxAperture:5.6}]},{name:"Micro Four Thirds",cropFactor:2,ISO:{min:160,max:6400},lens:[{focalLength:14,maxAperture:3.5},{focalLength:42,maxAperture:5.6}]},{name:"Typical Compact",cropFactor:6.1,ISO:{min:100,max:1600},lens:[{focalLength:5,maxAperture:2.8},{focalLength:25,maxAperture:6.9}]},{name:"Decent Phone",cropFactor:7.64,ISO:{min:80,max:1e3},lens:[{focalLength:3.85,maxAperture:2.8}]}];return{cameras:e}}),define("src/cameraSelector",["src/exposureFunctions","src/cameraData"],function(e,t){var n,r,i,s=function(e,s,u){n=e,r=s,i=u;var a={cameras:[]},f={};$.each(t.cameras,function(e,t){var n=t.cropFactor+", ",i=[t.name],s="f"+t.lens[0].maxAperture;t.lens.length>1?(i.push(t.lens[0].focalLength+"-"+t.lens[1].focalLength+"mm"),t.lens[1].maxAperture!==t.lens[0].maxAperture&&(s+="-"+t.lens[1].maxAperture)):i.push(t.lens[0].focalLength+"mm"),i.push(s),r.append($("<option>").attr("data-index",e).text(i.join(", ")))}),r.change(function(){var e=r.find("option:selected").attr("data-index");console.log("selected ",e),o(e)}),o(0)},o=function(e){var r=t.cameras[e];r.focalLength50=Math.round(500/r.cropFactor)/10,r.cropFactor===1&&(r.fullFrame=!0),"ISO"in r&&(n.cameraSpec.minISO=r.ISO.min,n.cameraSpec.maxISO=r.ISO.max),"cropFactor"in r?n.cameraSpec.cropFactor=r.cropFactor:n.cameraSpec.cropFactor=categories[0].cropFactor,n.cameraSpec.lens=r.lens,console.log("cameraSpec = "+JSON.stringify(n.cameraSpec)),typeof i!="undefined"&&i(["cameraSpec","cropFactor"])};return{setup:s}}),define("src/main",["src/cameraEngine","src/cameraControls","src/scene","src/CameraSettings","src/cameraSelector"],function(e,t,n,r,i){var s=new r;$(document).ready(function(){$.browser.chrome!==!0&&$("#browserWarning").css("display","block"),n.init(s,$("#sceneSelector")),t.setup(s,n.drawScene,n.getFocalLength()),i.setup(s,$("#cameraSelector"),n.drawScene)})})