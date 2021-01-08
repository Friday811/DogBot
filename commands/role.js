module.exports = {
    name: 'role',
    description: 'Information about the user\'s role.',
    args: true,
    usage: '<user> <role>',
    execute(message, args) {
        if (args[0] === 'foo') {
            return message.channel.send('bar');
        }

        message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
    },
};
