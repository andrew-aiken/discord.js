module.exports = {
	name: 'watching',
    description: 'watcing status',
	guildOnly: true,
	args: true,
	devRole: true,
	usage: '<target>',
	execute(message, args) {
		console.log(`Setting watcing status to: ${args.join(' ')}`);
		message.client.user.setPresence({
			activity: {
				name: `${args.join(' ')}`,
				type: 'WATCHING',
			}
		});
	},
};
