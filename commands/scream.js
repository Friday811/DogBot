module.exports = {
    name: 'scream',
    description: 'AAAAAAAAAAAHHHHHHHHHHHHHHHHHHH',
    execute(message, args) {
        message.channel.send('', {
            files: [
                "./200.gif"
            ]
        });
    },
};