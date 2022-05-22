const Discord = require('discord.js');
module.exports = {
  name: 'message',
  guildOnly: true,
  devRole: 'true',
  description: 'Embedded Message',
  execute(message, args) {
    const embed_message = new Discord.MessageEmbed({
      title: "Join Us!",
      description: "description",
      thumbnail: {
        url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FaBP3Fv0zpa4%2Fmaxresdefault.jpg"
      }
    }).setColor('RANDOM').setTimestamp()
    message.channel.send({embeds: [embed_message]})
  },
};