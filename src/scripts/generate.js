const Constants = require("../config/constants.js");
const login  = require("./login.js");
const puppeteer = require("puppeteer");

module.exports.generateReport = async (reportOptions) => {
  try {
    const browser = await puppeteer.launch({
      args: ["--disable-dev-shm-usage"],
    });
    const page = await browser.newPage();
    page.on("console", (msg) => {
      for (let i = 0; i < msg.args().length; ++i)
        console.log(`${i}: ${msg.args()[i]}`);
    });
    await page.goto(`${Constants.ROCKVAL_URL}${reportOptions.reportUrl}`,
      { waitUntil: "networkidle2" }
    );
    //Check if we need to log in
    let clientUrl = "";
    clientUrl = await page.evaluate(() => window.location.href);
    console.log(clientUrl);
    if (clientUrl.includes("rockval.auth0")) {
      await login.login(page, clientUrl);
    }
    await page.goto(`${Constants.ROCKVAL_URL}${reportOptions.reportUrl}`,
      { waitUntil: "networkidle2" }
    );
    console.log(clientUrl);
    await page.waitFor(5000);
    await page.waitForSelector("img");
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
    });
    await page.pdf({
      path: `../Exports/${reportOptions.reportTypeName}/${reportOptions.reportTypeName}-${reportOptions.id}.pdf`, // path (relative to CWD) to save the PDF to.
      scale: 0.5,
    });
    await browser.close();
  } catch (err) {
    console.log(err);
  }
};
