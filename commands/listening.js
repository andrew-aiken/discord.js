module.exports = {
	name: 'listening',
    description: 'listening status',
	guildOnly: true,
	args: true,
	devRole: true,
	usage: '<target>',
	execute(message, args) {
		console.log(`Setting listening status to: ${args.join(' ')}`);
		message.client.user.setPresence({
			status: 'available',
			activity: {
				name: `${args.join(' ')}`,
				type: 'LISTENING',
			}
		})
	},
};
