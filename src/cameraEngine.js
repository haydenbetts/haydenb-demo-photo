define([],function(){var e=function(e,t,n){var r=new Array(256),i=32;for(var s=0;s<256;s++)r[s]=Math.pow(2,s/i);typeof n=="undefined"&&(n=t),n=Math.abs(n);var o=Math.floor(n),u=Math.round(16*(n-o)),a=16-u,f=e.width,l=e.height,c=document.createElement("canvas");c.width=f,c.height=l;var h=e.getContext("2d"),p=c.getContext("2d"),d=h.getImageData(0,0,f,l),v=p.getImageData(0,0,f,l),m=1/Math.log(2);for(var g=0;g<f;g++){var y=0,b=-1,w=0,E=0,S=0,x=0,T,N,C;for(var k=0;k<l;k++){while(b<k+o+1&&b<l)b>-1&&(T=d.data[(g+f*b)*4+3]*a,T>0&&(x+=T,w+=r[d.data[(g+f*b)*4+0]]*T,E+=r[d.data[(g+f*b)*4+1]]*T,S+=r[d.data[(g+f*b)*4+2]]*T)),b++,b<l?(C=u,T=d.data[(g+f*b)*4+3]*u,T>0&&(x+=T,w+=r[d.data[(g+f*b)*4+0]]*T,E+=r[d.data[(g+f*b)*4+1]]*T,S+=r[d.data[(g+f*b)*4+2]]*T)):C=0;y<k-o-1&&(T=d.data[(g+f*y)*4+3],y>0?(N=u,T*=u):(N=0,T*=16),T>0&&(x-=T,w-=r[d.data[(g+f*y)*4+0]]*T,E-=r[d.data[(g+f*y)*4+1]]*T,S-=r[d.data[(g+f*y)*4+2]]*T),y++,T=d.data[(g+f*y)*4+3]*a,T>0&&(x-=T,w-=r[d.data[(g+f*y)*4+0]]*T,E-=r[d.data[(g+f*y)*4+1]]*T,S-=r[d.data[(g+f*y)*4+2]]*T));var L=16*(b-y-1)+N+C;x>0&&(v.data[(g+f*k)*4+0]=i*Math.log(w/x)*m,v.data[(g+f*k)*4+1]=i*Math.log(E/x)*m,v.data[(g+f*k)*4+2]=i*Math.log(S/x)*m),v.data[(g+f*k)*4+3]=x/L}}var A=document.createElement("canvas");A.width=f,A.height=l;var O=A.getContext("2d"),M=O.getImageData(0,0,f,l);t=Math.abs(t),o=Math.floor(t),u=Math.round(16*(t-o)),a=16-u;for(var k=0;k<l;k++){var _=0,D=-1,w=0,E=0,S=0,x=0,T,P,H;for(var g=0;g<f;g++){while(D<g+o+1&&D<f)D>-1&&(T=v.data[(D+f*k)*4+3]*a,T>0&&(x+=T,w+=r[v.data[(D+f*k)*4+0]]*T,E+=r[v.data[(D+f*k)*4+1]]*T,S+=r[v.data[(D+f*k)*4+2]]*T)),D++,D<f?(H=u,T=v.data[(D+f*k)*4+3]*u,T>0&&(x+=T,w+=r[v.data[(D+f*k)*4+0]]*T,E+=r[v.data[(D+f*k)*4+1]]*T,S+=r[v.data[(D+f*k)*4+2]]*T)):H=0;_<g-o-1&&(T=v.data[(_+f*k)*4+3],_>0?(P=u,T*=u):(P=0,T*=16),T>0&&(x-=T,w-=r[v.data[(_+f*k)*4+0]]*T,E-=r[v.data[(_+f*k)*4+1]]*T,S-=r[v.data[(_+f*k)*4+2]]*T),_++,T=v.data[(_+f*k)*4+3]*a,T>0&&(x-=T,w-=r[v.data[(_+f*k)*4+0]]*T,E-=r[v.data[(_+f*k)*4+1]]*T,S-=r[v.data[(_+f*k)*4+2]]*T));var L=16*(D-_-1)+P+H;x>0&&(M.data[(g+f*k)*4+0]=i*Math.log(w/x)*m,M.data[(g+f*k)*4+1]=i*Math.log(E/x)*m,M.data[(g+f*k)*4+2]=i*Math.log(S/x)*m),M.data[(g+f*k)*4+3]=x/L}}return O.putImageData(M,0,0),A},t=function(e,t,n,r,i){var s=t.getImageData(0,0,e.width,e.height),o=9,u=-128*(i-1)+256*n/o,a=!1;$.browser.opera&&(a=!0);var f,l,c,h,p,d,v,m,g;console.time("loop");for(var y=0;y<e.width*e.height*4;y+=4)v=i*e.data[y],m=i*e.data[y+1],g=i*e.data[y+2],v-=r*(Math.random()-.5),m-=r*(Math.random()-.5),g-=r*(Math.random()-.5),a?(s.data[y]=Math.max(0,Math.min(255,v+u)),s.data[y+1]=Math.max(0,Math.min(255,m+u)),s.data[y+2]=Math.max(0,Math.min(255,g+u)),s.data[y+3]=e.data[y+3]):(s.data[y]=v+u,s.data[y+1]=m+u,s.data[y+2]=g+u,s.data[y+3]=e.data[y+3]);console.timeEnd("loop"),t.putImageData(s,0,0)};return{drawPhoto:t,fastBlur:e}})