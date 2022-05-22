const Discord = require('discord.js');
module.exports = {
  name: 'poll',
  aliases: ['vote'],
  guildOnly: true,
  args: true,
  description: 'Create a poll',
  usage: '[<message>] [<option-0>] [<option-1>] [<option-2>] [<option-n>]',
  execute(message, args) {
    workArg = args.join(' ');
    workArg = workArg.slice(1).split('[');
    workedArg = [];
    for (const A of workArg) {
      workedArg.push(A.trim().slice(0,-1));
    }
    const pollMessage = workedArg[0];
    message.delete();
    const alfa = ["🇦","🇧","🇨","🇩","🇪","🇫","🇬","🇭","🇮","🇯","🇰","🇱","🇲","🇳","🇴","🇵","🇶","🇷","🇸","🇹","🇺","🇻","🇼","🇽","🇾","🇿"];
    const emojis = [];
    workedArg.shift();
    pollMSG = "";
    for (const [i, value] of workedArg.entries()) {
        emojis.push(alfa[i]);
      pollMSG += `${alfa[i]}: ${value}\n`;
    }

    const embed_message = new Discord.MessageEmbed({
      title: `**${pollMessage}**`,
      description: pollMSG,
      thumbnail: {
        url: "https://library.kissclipart.com/20200126/wye/kissclipart-election-icon-poll-icon-5d7487edc679ea85.png"
      }
    }).setColor('RANDOM').setTimestamp()

    message.channel.send({embeds: [embed_message]}).then(embedMessage => {
      for (const emoji in emojis) {
        embedMessage.react(emojis[emoji]);
      }
    });
  }
};
