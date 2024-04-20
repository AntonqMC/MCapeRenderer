const puppeteer = require('puppeteer');
const fs = require('fs-extra');

console.log('process started!');
(async() => {  

	console.log('doing cleanup...');
	fs.remove('cape.png');
	fs.remove('elytra.png');
    const browser = await puppeteer.launch({args:["--disable-web-security"]});
    const page = await browser.newPage(); 
    const url = `file://${process.cwd()}/render/preview.html`
    const url2 = `file://${process.cwd()}/render/preview2.html`
    await page.goto(url)
    setTimeout(async () => {
        const imageBuffer = await page.screenshot({ omitBackground: true, clip: { x: 0, y: 0, width: 1024, height: 1024 } });
        fs.writeFileSync('elytra.png', imageBuffer)
        console.log('elytra render completed! saved as elytra.png');
        await page.goto(url2)
        const imageBuffer2 = await page.screenshot({ omitBackground: true, clip: { x: 0, y: 0, width: 1024, height: 1024 } });
        fs.writeFileSync('cape.png', imageBuffer2)
        await browser.close();    
        console.log('cape render completed! saved as cape.png');
        console.log('made for Cloaks+ by notfelixmax_');
        console.log('forked to work better by groszik');
      }, 100)
})();
    