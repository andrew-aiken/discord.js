module.exports = {
	name: 'streaming',
    description: 'streaming status',
	guildOnly: true,
	args: true,
	devRole: true,
	usage: '<url>',
	execute(message, args) {
		console.log(`Setting streaming status to: ${args.join(' ')}`);
		message.client.user.setPresence({
			status: 'available',
			activity: {
				name: `${args.join(' ')}`,
				type: 'STREAMING',
				url: `${args.join(' ')}`
			}
		});
	},
};
