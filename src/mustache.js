define(["src/urlUtils","external/mustache"],function(e,t){var n={},r=function(r,i,s){return s?t.to_html(r,i):(r in n||$.ajax({url:e.getResourceUrl("html/"+r+".mustache"),dataType:"text",success:function(e){n[r]=e},error:function(){console.error("Couldn't fetch mustache template: "+r)},async:!1}),t.to_html(n[r],i))};return{toHtml:r}})