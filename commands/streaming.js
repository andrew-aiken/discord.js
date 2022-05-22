module.exports = {
  name: 'streaming',
  description: 'streaming status',
  guildOnly: true,
  devRole: true,
  args: true,
  usage: '<url>',
  execute(message, args) {
    console.log(`Setting streaming status to: ${args.join(' ')}`);
    message.client.user.setPresence({
      activities: [{
        name: args.join(' '),
        type: 'STREAMING',
        url: args.join(' ')
      }]
    });
  },
};
