const puppeteer = require('puppeteer');
const fs = require('fs-extra');

console.log('process started!');
(async() => {  

	console.log('doing cleanup...');
	fs.remove('output.png');
	fs.remove('render.png');
    const browser = await puppeteer.launch({args:["--disable-web-security"]});
    const page = await browser.newPage(); 
    const url = `file://${process.cwd()}/render/preview.html`
    const url2 = `file://${process.cwd()}/render/preview2.html`
    await page.goto(url)
    setTimeout(async () => {
        const imageBuffer = await page.screenshot({ omitBackground: true, clip: { x: 0, y: 0, width: 1024, height: 1024 } });
        fs.writeFileSync('elytra.png', imageBuffer)
        await page.goto(url2)
        const imageBuffer2 = await page.screenshot({ omitBackground: true, clip: { x: 0, y: 0, width: 1024, height: 1024 } });
        fs.writeFileSync('cape.png', imageBuffer2)
        await browser.close();    
        console.log('cape render completed! saved as output.png');
        console.log('made for Cloaks+ by notfelixmax_');
        console.log('forked for Golden Capes by antonq.');
      }, 100)
})();
    