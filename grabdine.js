const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://marketplace.dinetogether.io/#/chef/11787');
  /* await page.screenshot({ path: 'example.png' }); */

  //evaluate    
    const result = await page.evaluate(() => {
        const result = [];
        const elements = document.querySelectorAll('div#__nuxt div#__layout');
        for (let i = 0; i < elements.length; i++) {
            result.push(elements[i].innerText);
        }
        return result;

    });
    console.log(result);
    browser.close();


  await browser.close();
})();