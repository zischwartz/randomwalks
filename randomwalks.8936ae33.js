parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Focm":[function(require,module,exports) {
function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}var n=!1,r=!1,o=parseInt(void 0)||200,l=parseInt(void 0)||150,i=parseInt(void 0)||.01;function s(){for(var t=-o/2,e=[],a=t;a<o+t;a++){for(var n=[a*i],r=0;r<l;r++){var s=d3.shuffle([-1,1])[0],c=n[n.length-1];n.push(c+s)}e.push(n)}return e}d3.select("#chart").selectAll("*").remove();var c=s(),d={top:20,right:0,bottom:30,left:50},u=parseInt(d3.select("#chart").style("width"))-d.left-d.right,h=parseInt(d3.select("#chart").style("height"))-d.top-d.bottom,f=d3.scaleLinear().range([0,u]),p=d3.scaleLinear().range([h,0]),g=d3.scaleOrdinal().range(d3.schemeCategory10).domain([0,c.length]),m=d3.axisBottom().scale(f),v=d3.axisLeft().scale(p),y=d3.line().curve(d3.curveStep).x(function(t,e){return f(e)}).y(function(t,e){return p(t)}),x=d3.select("#chart").attr("width",u+d.left+d.right).attr("height",h+d.top+d.bottom).append("g").attr("transform","translate("+d.left+","+d.top+")");if(x=x.append("g").attr("id","graph"),r){var b=function(){console.log("zoomm?"),d3.select("g#graph ").attr("transform",d3.event.transform)};x.append("rect").attr("width",u+d.left+d.right).attr("height",h+d.top+d.bottom),d3.select("g#graph ").call(d3.zoom().scaleExtent([.5,4]).on("zoom",b))}f.domain([0,c[0].length]),p.domain(d3.extent(c.flat(),function(t,e){return t})),x.on("click",L),x.append("g").attr("class","x axis").attr("transform","translate(0,"+h+")").call(m).append("text").attr("class","label").attr("y",15).attr("x",55).attr("dy",".71em").style("text-anchor","beginning").text("time"),x.append("g").attr("class","y axis").call(v).append("text").attr("class","label").attr("y",25).attr("x",-35).attr("dy",".71em").style("text-anchor","beginning").text("Y");var k=x.selectAll(".trend_g").data(c).enter().append("g").attr("class","trend_g");function w(){var t=parseInt(d3.select("#chart").style("width"))-d.left-d.right,e=parseInt(d3.select("#chart").style("height"))-d.top-d.bottom;f.range([0,t]),p.range([e,0]),x.select(".x.axis").attr("transform","translate(0,"+e+")").call(m),x.select(".y.axis").call(v),x.selectAll(".line").attr("d",function(t){return y(t)}),n&&L(),m.ticks(Math.max(t/75,2)),v.ticks(Math.max(e/50,2))}k.append("path").attr("class","line").attr("d",function(t){return y(t)}).style("stroke",function(t,e){return g(e)});var I=!1;function L(){I||(console.log("animating!"),I=!0,x.selectAll(".line").attr("stroke-dasharray","0 100000").transition().delay(function(t,e){return 1e3*e}).duration(2e4).on("start",function(){d3.active(this).styleTween("stroke-dasharray",A).ease(d3.easeLinear).transition()}))}var T=function(){function e(){t(this,e),this.lookup={}}return a(e,[{key:"cancel",value:function(t){var e=this.lookup[t];e&&(clearTimeout(e),delete this.lookup[e])}},{key:"set",value:function(t,e,a){this.cancel(t);var n=setTimeout(a,e);this.lookup[t]=n}}]),e}(),z=new T;function A(){var t=this.getTotalLength(),e=d3.interpolateString("0,"+t,t+","+t);return function(t){return e(t)}}function S(){var t=this.getTotalLength(),e=d3.interpolateString(t+",0","0,"+t);return function(t){return e(t)}}d3.select(window).on("resize",function(){return z.set("resized",450,w)}),w();
},{}]},{},["Focm"], null)
//# sourceMappingURL=randomwalks.8936ae33.map