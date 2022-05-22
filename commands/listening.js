module.exports = {
  name: 'listening',
  description: 'listening status',
  guildOnly: true,
  devRole: true,
  args: true,
  usage: '<target>',
  execute(message, args) {
    console.log(`Setting listening status to: ${args.join(' ')}`);
    message.client.user.setPresence({
      activities: [{
        name: args.join(' '),
        type: 'LISTENING',
      }]
    });
  },
};
