module.exports = {
	name: 'status',
    description: 'online status',
	guildOnly: true,
	args: true,
	devRole: true,
	usage: '<status>',
	execute(message, args) {
		if (args.join(' ') == "online") {
			message.client.user.setPresence({
				status: 'online'
			});
			console.log(`Setting status to: ${args.join(' ')}`);
		} else if (args.join(' ') == "dnd") {
			console.log(`Setting status to: ${args.join(' ')}`);
			message.client.user.setPresence({
				status: 'dnd'
			});
		} else if (args.join(' ') == "idle") {
			console.log(`Setting status to: ${args.join(' ')}`);
			message.client.user.setPresence({
				status: 'idle'
			});
		} else if (args.join(' ') == "invisible") {
			console.log(`Setting status to: ${args.join(' ')}`);
			message.client.user.setPresence({
				status: 'invisible'
			});
		} else {
			console.log("error")
		}
	},
};