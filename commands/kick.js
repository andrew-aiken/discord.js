module.exports = {
  name: 'kick',
  description: 'kick',
  aliases: ['hammer', 'slap'],
  guildOnly: true,
  adminRole: true,
  args: true,
  usage: '<user>',
  execute(message, args) {
    if (!message.mentions.users.size) {
      return message.reply('you need to tag a user in order to kick them!');
    }
    const taggedUser = message.mentions.users.first();
    message.channel.send(`You wanted to kick: ${taggedUser.username}`);
    message.react('😈');
    const member = message.mentions.members.first();
    member.kick();
  },
};