// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"index.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// https://bl.ocks.org/josiahdavis/7a02e811360ff00c4eef
var ANIMATE_LINES = false; // ANIMATE_LINES = true;

var SETUP_ZOOM_AND_BG = false;
var n_lines = parseInt(undefined) || 200;
var n_entries = parseInt(undefined) || 150; // let mult = parseInt(process.env.MULT) || 0; // 1 gives us touching grid, 2 gives us spacing  stairs, 0 gives us a tree

var mult = parseInt(undefined) || 0.01; // 1 gives us touching grid, 2 gives us spacing  stairs, 0 gives us a tree
// let n_lines = 3;
// console.log(process.env.DB_HOST);
// reset for hmr in dev

d3.select("#chart").selectAll("*").remove(); // console.log(process.env.MULT)
// generate my data

function create_data() {
  var start_at = -(n_lines / 2); // let start_at = -5;

  var data = [];

  for (var i = start_at; i < n_lines + start_at; i++) {
    //better
    var _line = [i * mult]; // let line = d3.range(-n_lines / 2 + i * mult, n_lines / 2 + i * mult);
    // for simpler debugging
    // let line = d3.range(-5 + i, 5 + i);

    for (var j = 0; j < n_entries; j++) {
      var offset = d3.shuffle([-1, 1])[0];
      var last = _line[_line.length - 1];

      _line.push(last + offset);
    }

    data.push(_line);
  }

  return data;
}

var data = create_data(); // const csv_file_path = require("./giniLine.csv");
// Define margins

var margin = {
  top: 20,
  right: 0,
  bottom: 30,
  left: 50
},
    width = parseInt(d3.select("#chart").style("width")) - margin.left - margin.right,
    height = parseInt(d3.select("#chart").style("height")) - margin.top - margin.bottom; // Define date parser
// var parseDate = d3.timeParse("%Y-%m-%d %H:%M:%S");
// Define scales
// var xScale = d3.scaleTime().range([0, width]);

var xScale = d3.scaleLinear().range([0, width]);
var yScale = d3.scaleLinear().range([height, 0]);
var color = d3.scaleOrdinal().range(d3.schemeCategory10).domain([0, data.length]); // Define axes

var xAxis = d3.axisBottom().scale(xScale);
var yAxis = d3.axisLeft().scale(yScale); // Define lines

var line = d3.line().curve(d3.curveStep) // .curve(d3.curveStepAfter)
// .curve(d3.curveMonotoneX)
.x(function (d, i) {
  return xScale(i); // return xScale(d["date"]);
}).y(function (d, i) {
  return yScale(d); // return yScale(d["concentration"]);
}); // Define svg canvas

var svg = d3.select("#chart").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
svg = svg.append("g").attr("id", "graph");

if (SETUP_ZOOM_AND_BG) {
  var zoomed = function zoomed() {
    console.log("zoomm?");
    d3.select("g#graph ").attr("transform", d3.event.transform);
  };

  svg.append("rect").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom);
  d3.select("g#graph ").call(d3.zoom().scaleExtent([1 / 2, 4]).on("zoom", zoomed));
} // Set the domain of the axes
// hacky, assumes they're all the same length, we use the first one XXX


xScale.domain([0, data[0].length]); // this fits them all

yScale.domain(d3.extent(data.flat(), function (d, i) {
  return d;
})); //  for close up debug
// xScale.domain([0, data[0].length / 2]);
// yScale.domain([0, 25]);

svg.on("click", animate); // Place the axes on the chart

svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis).append("text").attr("class", "label").attr("y", 15).attr("x", 55).attr("dy", ".71em") // .attr("dx", ".71em")
.style("text-anchor", "beginning").text("time");
svg.append("g").attr("class", "y axis").call(yAxis).append("text").attr("class", "label").attr("y", 25).attr("x", -35).attr("dy", ".71em") // .attr("dx", ".71em")
.style("text-anchor", "beginning").text("Y"); // console.log(data);

var lines = svg.selectAll(".trend_g").data(data).enter().append("g").attr("class", "trend_g");
lines.append("path").attr("class", "line").attr("d", function (d) {
  // console.log(d);
  return line(d);
}).style("stroke", function (d, i) {
  return color(i); // return "black";
}); // console.log(JSON.stringify(d3.values(concentrations), null, 2)) // to view the structure
// console.log(d3.values(concentrations)); // to view the structure
// console.log(concentrations);
// console.log(concentrations.map(function()))
// });
// Define responsive behavior

function resize() {
  var width = parseInt(d3.select("#chart").style("width")) - margin.left - margin.right,
      height = parseInt(d3.select("#chart").style("height")) - margin.top - margin.bottom; // Update the range of the scale with new width/height

  xScale.range([0, width]);
  yScale.range([height, 0]); // Update the axis and text with the new scale

  svg.select(".x.axis").attr("transform", "translate(0," + height + ")").call(xAxis);
  svg.select(".y.axis").call(yAxis); // Force D3 to recalculate and update the line

  svg.selectAll(".line").attr("d", function (d) {
    return line(d);
  }); // and do our animation

  if (ANIMATE_LINES) {
    animate();
  } // .on("start", repeat);
  // Update the tick marks


  xAxis.ticks(Math.max(width / 75, 2));
  yAxis.ticks(Math.max(height / 50, 2));
} // hacky flag


var has_run = false;

function animate() {
  if (has_run) {
    return;
  }

  console.log("animating!");
  has_run = true;
  svg.selectAll(".line").attr("stroke-dasharray", "0 100000").transition().delay(function (d, i) {
    return i * 1000;
  }).duration(20000).on("start", function repeat() {
    d3.active(this).styleTween("stroke-dasharray", tweenDash).ease(d3.easeLinear).transition();
  });
}

var Debouncer =
/*#__PURE__*/
function () {
  function Debouncer() {
    _classCallCheck(this, Debouncer);

    this.lookup = {};
  }

  _createClass(Debouncer, [{
    key: "cancel",
    value: function cancel(identifier) {
      var timer_id = this.lookup[identifier];

      if (timer_id) {
        clearTimeout(timer_id);
        delete this.lookup[timer_id];
      }
    }
  }, {
    key: "set",
    value: function set(identifier, ms, cb) {
      this.cancel(identifier);
      var new_timer_id = setTimeout(cb, ms);
      this.lookup[identifier] = new_timer_id;
    }
  }]);

  return Debouncer;
}();

var debounce = new Debouncer(); // Call the resize function whenever a resize event occurs

d3.select(window).on("resize", function () {
  return debounce.set("resized", 450, resize);
}); // need debounce!  XXX
// Call the resize function

resize();

function tweenDash() {
  var l = this.getTotalLength(),
      i = d3.interpolateString("0," + l, l + "," + l);
  return function (t) {
    return i(t);
  };
}

function tweenBack() {
  var l = this.getTotalLength(),
      i = d3.interpolateString(l + ",0", "0," + l);
  return function (t) {
    return i(t);
  };
}
},{}],"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62579" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/randomwalks.e31bb0bc.map