// maybe add ?
// https://typeitjs.com/

// add legend

// https://bl.ocks.org/josiahdavis/7a02e811360ff00c4eef

let {
  occupations
} = require("./node_modules/corpora/data/humans/occupations.json");
let { verbs } = require("./node_modules/corpora/data/words/verbs.json");
let { colors } = require("./node_modules/corpora/data/colors/crayola.json");

console.log(colors);

let time_units = [
  "nanoseconds",
  "microseconds",
  "milliseconds",
  "seconds",
  "minutes",
  "hours",
  "days",
  "weeks",
  "months",
  "years",
  "decades",
  "centuries",
  "millenia"
];
let job = d3.shuffle(occupations)[0];
let verb = d3.shuffle(verbs)[0]["past"];
let y_title_text = `${job}s ${verb} `;
let x_title_text = d3.shuffle(time_units)[0];
// console.log(y_title_text);
// console.log(corpora("occupations"));

let ANIMATE_LINES = false;
// ANIMATE_LINES = true;

let SETUP_ZOOM_AND_BG = false;
let n_lines = parseInt(process.env.N_LINES) || 120; //200;
let n_entries = parseInt(process.env.N_ENTRIES) || 250; //150;
// let mult = parseInt(process.env.MULT) || 0; // 1 gives us touching grid, 2 gives us spacing  stairs, 0 gives us a tree
let mult = parseInt(process.env.MULT) || 0.01; // 1 gives us touching grid, 2 gives us spacing  stairs, 0 gives us a tree
// let n_lines = 3;

// console.log(process.env.DB_HOST);
// reset for hmr in dev
d3.select("svg")
  .selectAll("*")
  .remove();

// console.log(process.env.MULT)
// generate my data
function create_data() {
  let start_at = 0;
  // let start_at = -(n_lines / 2);
  // console.log(start_at);
  // let start_at = -5;
  let data = [];
  for (var i = start_at; i < n_lines + start_at; i++) {
    // they all now just start at 0, much simple
    // possibly add back in `mult` in the rendering or scale
    let line = [0];
    //better
    // let line = [i * mult];
    // let line = d3.range(-n_lines / 2 + i * mult, n_lines / 2 + i * mult);
    // for simpler debugging
    // let line = d3.range(-5 + i, 5 + i);
    for (var j = 0; j < n_entries - 1; j++) {
      // flip a coin
      let offset = d3.shuffle([-1, 1])[0];
      // get the the previous value
      let last = line[line.length - 1];
      // add the previous value to our new coin flip and push it to the line's array
      line.push(last + offset);
    }
    data.push(line);
  }

  return data;
}

let data = create_data();
let means = [];
// console.log(data);
for (var j = 0; j < n_entries; j++) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue[j];
  let totals = data.reduce(reducer, 0);
  means.push(totals / n_lines);
}

let all_means = [];
for (var i = 0; i < n_lines; i++) {
  all_means.push(means);
}
// console.log(all_means);
// console.log(means.length);

// const csv_file_path = require("./giniLine.csv");
// Define margins
// var margin = { top: 20, right: 0, bottom: 30, left: 50 };
var margin = { top: 20, right: 0, bottom: 85, left: 85 };
let width =
  parseInt(d3.select("svg").style("width")) - margin.left - margin.right;
let height =
  parseInt(d3.select("svg").style("height")) - margin.top - margin.bottom;

// Define date parser
// var parseDate = d3.timeParse("%Y-%m-%d %H:%M:%S");

// Define scales
// var xScale = d3.scaleTime().range([0, width]);
var xScale = d3.scaleLinear().range([0, width]);
var yScale = d3.scaleLinear().range([height, 0]);
// var color = d3
//   .scaleOrdinal()
//   .range(d3.schemeCategory10)
//   .domain([0, data.length]);

let color = i => {
  // console.log(x);
  // return "red";
  return colors[i]["hex"];
};

// Define axes
var xAxis = d3.axisBottom().scale(xScale);
var yAxis = d3.axisLeft().scale(yScale);

// Define lines
var line = d3
  .line()
  .curve(d3.curveStep)
  // .curve(d3.curveStepAfter)
  // .curve(d3.curveMonotoneX)
  .x(function(d, i) {
    return xScale(i);
    // return xScale(d["date"]);
  })
  .y(function(d, i) {
    return yScale(d);
    // return yScale(d["concentration"]);
  });

// Define svg canvas
var svg = d3
  .select("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg = svg.append("g").attr("id", "graph");

if (SETUP_ZOOM_AND_BG) {
  svg
    .append("rect")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);
  function zoomed() {
    console.log("zoomm?");
    d3.select("g#graph ").attr("transform", d3.event.transform);
  }
  d3.select("g#graph ").call(
    d3
      .zoom()
      .scaleExtent([1 / 2, 4])
      .on("zoom", zoomed)
  );
}

// Set the domain of the axes
// hacky, assumes they're all the same length, we use the first one XXX
xScale.domain([0, data[0].length]);

// this fits them all
yScale.domain(
  d3.extent(data.flat(), function(d, i) {
    return d;
  })
);

//  for close up debug
// xScale.domain([0, data[0].length / 2]);
// yScale.domain([0, 25]);
// d3.select("body").on("click", animate);
d3.select("body").on("click", animate_to_mean);
d3.select("body").on("touchstart", animate_to_mean);
// Place the axes on the chart
svg
  .append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis)
  .append("text")
  .attr("class", "label")
  .attr("y", 35)
  .attr("x", width / 2)
  .attr("dy", ".71em")
  .attr("dx", ".71em")
  .style("text-anchor", "middle")
  .attr("font-size", "20px")
  .style("text-transform", "capitalize")
  // .text("Time");
  .text(x_title_text);

svg
  .append("g")
  .attr("class", "y axis")
  .call(yAxis)
  .append("text")
  .attr("class", "label")
  // x and y are reversed because we rotate it
  .attr("y", -55)
  .attr("x", -height / 2)
  .attr("font-size", "20px")
  .attr("dy", ".71em")
  .attr("dx", ".71em")
  .style("text-transform", "capitalize")
  .style("text-anchor", "middle")
  .text(y_title_text)
  .attr("transform", "rotate(-90)");

// console.log(data);
var lines = svg
  .selectAll(".trend_g")
  .data(data)
  .enter()
  .append("g")
  .attr("class", "trend_g");

lines
  .append("path")
  .attr("class", "line")
  .attr("d", function(d) {
    // console.log(d);
    return line(d);
  })
  .style("stroke", function(d, i) {
    return color(i);
    // return "black";
  });

// console.log(JSON.stringify(d3.values(concentrations), null, 2)) // to view the structure
// console.log(d3.values(concentrations)); // to view the structure
// console.log(concentrations);
// console.log(concentrations.map(function()))

// });

// Define responsive behavior
function resize() {
  var width =
      parseInt(d3.select("svg").style("width")) - margin.left - margin.right,
    height =
      parseInt(d3.select("svg").style("height")) - margin.top - margin.bottom;

  // Update the range of the scale with new width/height
  xScale.range([0, width]);
  yScale.range([height, 0]);

  // Update the axis and text with the new scale
  svg
    .select(".x.axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  svg.select(".y.axis").call(yAxis);

  // Force D3 to recalculate and update the line

  svg.selectAll(".line").attr("d", function(d) {
    return line(d);
  });
  // and do our animation

  if (ANIMATE_LINES) {
    animate();
  }

  // .on("start", repeat);

  // Update the tick marks
  xAxis.ticks(Math.max(width / 75, 2));
  yAxis.ticks(Math.max(height / 50, 2));
}

// hacky flag
let has_run = false;
let is_showing_mean = false;

function animate_to_mean() {
  // console.log("animate_to_mean");
  let data_to_use = !is_showing_mean ? all_means : data;
  is_showing_mean = !is_showing_mean;

  let lines = svg
    .selectAll(".trend_g")
    .data(data_to_use)
    .transition()
    .duration(2000)
    // .ease(d3.easeExp);
    // .ease(d3.easeElastic);
    .ease(is_showing_mean ? d3.easeExp : d3.easeBounce);

  // .enter()
  // .append("g")
  // .attr("class", "trend_g");

  lines
    // .append("path")
    .select("path")
    .attr("d", function(d) {
      // console.log(d);
      return line(d);
    });
  // .transition();
}
// run the
function animate() {
  if (has_run) {
    return;
  }
  console.log("animating!");
  has_run = true;
  svg
    .selectAll(".line")
    .attr("stroke-dasharray", "0 100000")
    .transition()
    .delay((d, i) => i * 1000)
    .duration(20000)
    .on("start", function repeat() {
      d3.active(this)
        .styleTween("stroke-dasharray", tweenDash)
        .ease(d3.easeLinear)
        .transition();
    });
}

class Debouncer {
  constructor() {
    this.lookup = {};
  }
  cancel(identifier) {
    let timer_id = this.lookup[identifier];
    if (timer_id) {
      clearTimeout(timer_id);
      delete this.lookup[timer_id];
    }
  }
  set(identifier, ms, cb) {
    this.cancel(identifier);
    let new_timer_id = setTimeout(cb, ms);
    this.lookup[identifier] = new_timer_id;
  }
}

let debounce = new Debouncer();
// Call the resize function whenever a resize event occurs
d3.select(window).on("resize", () => debounce.set("resized", 450, resize));
// need debounce!  XXX

// Call the resize function to make it the size
resize();

function tweenDash() {
  var l = this.getTotalLength(),
    i = d3.interpolateString("0," + l, l + "," + l);
  return function(t) {
    return i(t);
  };
}

function tweenBack() {
  var l = this.getTotalLength(),
    i = d3.interpolateString(l + ",0", "0," + l);
  return function(t) {
    return i(t);
  };
}
