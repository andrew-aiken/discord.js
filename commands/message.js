const Discord = require('discord.js');
module.exports = {
        name: 'message',
        guildOnly: true,
        devRole: 'true',
        description: 'Embedded Message',
        execute(message, args) {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Join Us!')
                .setDescription('description')
                .setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FaBP3Fv0zpa4%2Fmaxresdefault.jpg')
                .setTimestamp()
            message.channel.send(exampleEmbed)
        },
};