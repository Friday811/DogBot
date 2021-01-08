const { fetch } = require('cross-fetch');
const request = require('request');
const fs = require('fs');

module.exports = {
    name: 'dog',
    description: 'Find me a dog!',
    cooldown: 15,
    async execute(message, args) {
        const run = async() => {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const myJson = await response.json();
            await request.head(myJson.message, function(err, res, body) {
                request(myJson.message).pipe(fs.createWriteStream('dog.jpg'));
            });
        };
        await run();
        message.channel.send('Arf arf!', {
            files: [
                './dog.jpg'
            ]
        });
    },
};