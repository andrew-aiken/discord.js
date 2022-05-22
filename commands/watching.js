module.exports = {
  name: 'watching',
  description: 'watching status',
  guildOnly: true,
  devRole: true,
  args: true,
  usage: '<target>',
  execute(message, args) {
    console.log(`Setting watching status to: ${args.join(' ')}`);
    message.client.user.setPresence({
      activities: [{
        name: args.join(' '),
        type: 'WATCHING',
      }]
    });
  },
};
