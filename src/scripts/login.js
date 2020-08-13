const Constants = require("../config/constants.js");

module.exports.login = async (page, clientUrl) => {
    console.log('Waiting for page to load.');
    await page.waitForSelector('input[name="username"]', {
      visible: true,
      timeout: 5000
    });

    console.log('Entering email address...');
    await page.type('input[name="username"]', "test@rockval.com", {delay: 50});

    console.log('Entering password...');
    await page.type('input[name="password"]', "Password1!", {delay: 50});

    console.log('Submit form.');
    await page.click('button[type="submit"]');
    await page.waitForNavigation({ waitUntil: "networkidle2" });
    
    console.log('Waiting to be redirected to the client.');
    while (clientUrl.includes(Constants.ROCKVAL_URL)===false){
      clientUrl = await page.evaluate(() => window.location.href);
      console.log(clientUrl);
      await page.waitFor(1500);
    }    
    console.log(clientUrl);
}