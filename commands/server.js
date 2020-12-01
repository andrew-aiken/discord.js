module.exports = {
    name: 'server',
    aliases: ['info', 'members'],
	description: 'Server stats',
	execute(message, args) {
		message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};