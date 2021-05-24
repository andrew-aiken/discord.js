module.exports = {
	name: 'playing',
    description: 'playing status',
	guildOnly: true,
	args: true,
	devRole: true,
	usage: '<target>',
	execute(message, args) {
		console.log(`Setting playing status to: ${args.join(' ')}`);
		message.client.user.setPresence({
			status: 'available',
			activity: {
				name: `${args.join(' ')}`,
				type: 'PLAYING',
			}
		});
	},
};
