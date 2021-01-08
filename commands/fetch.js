const puppeteer = require('puppeteer');

module.exports = {
    name: 'fetch',
    description: 'Fetch a screenshot of the URL.',
    args: true,
    cooldown: 15,
    usage: '[url to fetch]',
    async execute(message, args) {
        const run = async() => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();

            await page.setViewport({
                width: 1280,
                height: 800,
            });

            let url = args[0];
            if (!url.startsWith('http://') || !url.startsWith('https://')) {
                url = 'http://' + url;
            }

            await page.goto(url);
            await page.screenshot({
                path: 'screencap.png',
                fullPage: true,
            });
            await browser.close();
        };
        await run();
        message.channel.send(`Fetched: ${args[0]}`, {
            files: [
                "./screencap.png"
            ]
        });
    },
};