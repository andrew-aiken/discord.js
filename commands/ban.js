module.exports = {
	name: 'ban',
    description: 'ban hammer',
    aliases: ['exile', 'hammer'],
	guildOnly: true,
	args: true,
	adminRole: true,
	usage: '<user> <reason>',
	execute(message, args) {
		const user = message.mentions.members.first();
		var reason = args.slice(1).join(' ');
		try {
			message.guild.members.ban(user, { reason });
		} catch (error) {
			message.channel.send(`Failed to ban **${user.tag}**: ${error}`);
			return message.react('⛔');
		}
		message.channel.send(`Successfully banned **${user.tag}** from the server!`);
        message.react('⚒️');
	},
};
