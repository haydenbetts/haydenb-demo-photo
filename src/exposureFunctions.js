define([],function(){var e=function(e){return Math.round(Math.log(e/100)/Math.LN2*3)},t=function(e){var t=Math.pow(2,e/3)*100,n;return t<50?n=5:t<1e3?n=10:t<1600?n=50:n=100,Math.round(t/n)*n},n=function(n,r){return h(n,r,e,t)},r=function(n){return t(e(n))},i=function(e){return Math.round(Math.log(e)/Math.LN2*6)},s=function(e){return Math.round(Math.pow(2,e/6)*10)/10},o=function(e,t){return h(e,t,i,s)},u=function(e){return s(i(e))},a=function(e){return Math.round(Math.log(e)/Math.LN2*3)},f=function(e){return Math.pow(2,e/3)},l=function(e,t){return h(e,t,a,f)},c=function(e){return f(a(e))},h=function(e,t,n,r){var i=[],s=n(e),o=r(s);while(o<=t)i.push(o),s++,o=r(s);return i},p=function(e,t,n){return Math.log(100*t*t/(n*e))/Math.LN2},d=function(e){return Math.round(e*3)},v=function(e){return Math.round(100*e/3)/100},m=function(e){return v(d(e))},g=function(e,t){return h(e,t,d,v)},y=function(e,t){return 10+Math.log(1/(e*e*t*t))/Math.LN2};return{ISOToThirds:e,thirdsToISO:t,ISORange:n,roundISO:r,apertureToThirds:i,thirdsToAperture:s,apertureRange:o,roundAperture:u,shutterToThirds:a,thirdsToShutter:f,shutterRange:l,roundShutter:c,EV:p,roundEV:m,EVRange:g,lightScore:y}})