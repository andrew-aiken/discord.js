module.exports = {
  name: 'status',
  description: 'online status',
  guildOnly: true,
  devRole: true,
  args: true,
  usage: '<status>',
  execute(message, args) {
    console.log(`Setting status to: ${args[0]}`);
    if (['online', 'dnd', 'idle', 'invisible'].includes(args[0])) {
      message.client.user.setStatus(args[0]);
    } else {
      console.log("[!] Error")
    }
    // try {
    //   message.client.user.setStatus(args[0]);
    // } catch {
      
    // }
    // if (args[0] == "online") {
    //   message.client.user.setStatus('online');
    // } else if (args[0] == "dnd") {
    //   message.client.user.setStatus('dnd');
    // } else if (args[0] == "idle") {
    //   message.client.user.setStatus('idle');
    // } else if (args[0] == "invisible") {
    //   message.client.user.setStatus('invisible');
    // } else {
    //   console.log("[!] Error")
    // }
  },
};