parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Focm":[function(require,module,exports) {
function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}var a=!1,r=!1,o=parseInt(void 0)||200,s=parseInt(void 0)||150,l=parseInt(void 0)||.01;function i(){for(var t=[],e=0;e<o+0;e++){for(var n=[0],a=0;a<s-1;a++){var r=d3.shuffle([-1,1])[0],l=n[n.length-1];n.push(l+r)}t.push(n)}return t}d3.select("svg").selectAll("*").remove();for(var c=i(),d=[],u=0;u<s;u++){var f=function(t,e){return t+e[u]},g=c.reduce(f,0);d.push(g/o)}for(var p=[],h=0;h<o;h++)p.push(d);var v={top:20,right:0,bottom:30,left:50},m=parseInt(d3.select("svg").style("width"))-v.left-v.right,y=parseInt(d3.select("svg").style("height"))-v.top-v.bottom,x=d3.scaleLinear().range([0,m]),b=d3.scaleLinear().range([y,0]),k=d3.scaleOrdinal().range(d3.schemeCategory10).domain([0,c.length]),w=d3.axisBottom().scale(x),I=d3.axisLeft().scale(b),L=d3.line().curve(d3.curveStep).x(function(t,e){return x(e)}).y(function(t,e){return b(t)}),T=d3.select("svg").attr("width",m+v.left+v.right).attr("height",y+v.top+v.bottom).append("g").attr("transform","translate("+v.left+","+v.top+")");if(T=T.append("g").attr("id","graph"),r){var z=function(){console.log("zoomm?"),d3.select("g#graph ").attr("transform",d3.event.transform)};T.append("rect").attr("width",m+v.left+v.right).attr("height",y+v.top+v.bottom),d3.select("g#graph ").call(d3.zoom().scaleExtent([.5,4]).on("zoom",z))}x.domain([0,c[0].length]),b.domain(d3.extent(c.flat(),function(t,e){return t})),d3.select("body").on("click",B),d3.select("body").on("touchstart",B),T.append("g").attr("class","x axis").attr("transform","translate(0,"+y+")").call(w).append("text").attr("class","label").attr("y",15).attr("x",55).attr("dy",".71em").style("text-anchor","beginning").text("time"),T.append("g").attr("class","y axis").call(I).append("text").attr("class","label").attr("y",25).attr("x",-35).attr("dy",".71em").style("text-anchor","beginning").text("Y");var A=T.selectAll(".trend_g").data(c).enter().append("g").attr("class","trend_g");function E(){var t=parseInt(d3.select("svg").style("width"))-v.left-v.right,e=parseInt(d3.select("svg").style("height"))-v.top-v.bottom;x.range([0,t]),b.range([e,0]),T.select(".x.axis").attr("transform","translate(0,"+e+")").call(w),T.select(".y.axis").call(I),T.selectAll(".line").attr("d",function(t){return L(t)}),a&&C(),w.ticks(Math.max(t/75,2)),I.ticks(Math.max(e/50,2))}A.append("path").attr("class","line").attr("d",function(t){return L(t)}).style("stroke",function(t,e){return k(e)});var S=!1,_=!1;function B(){var t=_?c:p;_=!_,T.selectAll(".trend_g").data(t).transition().duration(2e3).ease(_?d3.easeExp:d3.easeBounce).select("path").attr("d",function(t){return L(t)})}function C(){S||(console.log("animating!"),S=!0,T.selectAll(".line").attr("stroke-dasharray","0 100000").transition().delay(function(t,e){return 1e3*e}).duration(2e4).on("start",function(){d3.active(this).styleTween("stroke-dasharray",j).ease(d3.easeLinear).transition()}))}var M=function(){function e(){t(this,e),this.lookup={}}return n(e,[{key:"cancel",value:function(t){var e=this.lookup[t];e&&(clearTimeout(e),delete this.lookup[e])}},{key:"set",value:function(t,e,n){this.cancel(t);var a=setTimeout(n,e);this.lookup[t]=a}}]),e}(),O=new M;function j(){var t=this.getTotalLength(),e=d3.interpolateString("0,"+t,t+","+t);return function(t){return e(t)}}function P(){var t=this.getTotalLength(),e=d3.interpolateString(t+",0","0,"+t);return function(t){return e(t)}}d3.select(window).on("resize",function(){return O.set("resized",450,E)}),E();
},{}]},{},["Focm"], null)
//# sourceMappingURL=randomwalks.43776eec.map