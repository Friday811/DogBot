const { fetch } = require('cross-fetch');
const request = require('request');
const fs = require('fs');

module.exports = {
    name: 'cat',
    description: 'Find me a cat!',
    cooldown: 15,
    async execute(message, args) {
        const run = async() => {
            await request.head('https://cataas.com/cat', function(err, res, body) {
                request('https://cataas.com/cat').pipe(fs.createWriteStream('cat.jpg'));
            });
        };
        await run();
        message.channel.send('Me-wow!', {
            files: [
                './cat.jpg'
            ]
        });
    },
};