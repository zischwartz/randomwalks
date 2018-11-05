const puppeteer = require("puppeteer");

function print_time() {
  // console.log(`${new Date().getHours()}:${new Date().getMinutes()}`);
  let d = new Date();
  console.log(d.toTimeString().substr(0, 5));
}

(async () => {
  print_time();
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // trying this with jpg, didn't work with png too big?
  // 25 seems to be the max
  let scale = 30;
  await page.setViewport({ width: 500 * scale, height: 200 * scale });
  console.log("goto page!");
  print_time();
  await page.goto("http://localhost:1234/", {
    // await page.goto("http://localhost:1234/#/2018/origin/C00502906/paused/", {
    // await page.goto("http://localhost:8000/#/2018/paused/", {
    waitUntil: "networkidle0",
    timeout: 0
  });
  console.log("nav done, wait for #graph");
  print_time();
  // wait for selector
  await page.waitFor("#graph", { timeout: 0 });
  // wait for 4s
  // console.log("wait some time");
  // await page.waitFor(4000);
  console.log("done now write img");
  print_time();
  // await page.screenshot({ path: "fb2018-50e2xD6co.png" });
  let date = new Date();
  await page.screenshot({ path: `trend_no${+date}.png` });
  print_time();
  // await page.screenshot({ path: "2018.jpg", type: "jpeg", quality: 50 });
  // console.log("wait more");
  // await page.waitFor(2500);
  console.log("✅Done!");
  print_time();
  console.log("\007");
  await browser.close();
})();
