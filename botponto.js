// console.log("olamundo")
// dvREP = "teste fabrica"
// dvMsg = "111111"
// login(dvREP,dvMsg) 
// submitMainForm(4, 32, 0);
// onclick(downloadData(1,32,0));


const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0); 
  await page.goto('http://192.168.32.21');
  await page.type('#lblLogin',"teste fabrica")
  await page.type('#lblPass','111111')
 
  
  await page.click('.primary');
  
  // class="tile fg-white topMenuItems"
  page.waitForNavigation(1200)
  await page.waitForSelector('#divMenuEvents');
  await page.click('[class="tile-content iconic bg-orange fg-white"]')
  
  
  await page.waitForSelector('#downloadEvents');
  await page.click('[class="button primary"]')
  
})();