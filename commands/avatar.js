module.exports = {
	name: 'avatar',
	description: 'avatar',
	aliases: ['icon', 'avatar'],
  guildOnly: true,
	args: true,
	usage: '<user/s>',
	async execute(message, args) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `<${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
		});

		if (avatarList.length != 1) {
			thread = await message.startThread({
				name: 'food-talk',
				autoArchiveDuration: 60,
				reason: 'Needed a separate thread for food',
			});

			for (let i = 0; i < avatarList.length; i++) {
				thread.send(avatarList[i]);
			}
		} else {
			message.reply(avatarList[0]);
		}

		// for (let i = 0; i < avatarList.length; i++) {
		// 	message.reply(avatarList[i])
		// }
	},
};