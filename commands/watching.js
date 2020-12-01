module.exports = {
	name: 'watching',
    description: 'watcing status',
	guildOnly: true,
	args: true,
	devRole: true,
	usage: '<target>',
	execute(message, args) {
		message.channel.send(`Setting status to: ${args}`);
	},
};