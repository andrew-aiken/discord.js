module.exports = {
  name: 'playing',
  description: 'playing status',
  guildOnly: true,
  devRole: true,
  args: true,
  usage: '<target>',
  execute(message, args) {
    console.log(`Setting playing status to: ${args.join(' ')}`);
    message.client.user.setPresence({
      activities: [{
        name: args.join(' '),
        type: 'PLAYING',
      }]
    });
  },
};
