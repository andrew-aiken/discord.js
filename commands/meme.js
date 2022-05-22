module.exports = {
    name: 'meme',
    aliases: ['thing', 'memes'],
    description: 'Get meme',
    execute(message, args) {
		//https://github.com/D3vd/Meme_Api
		message.delete();
		if (args.length > 0) {
			args = `/${args}`
		} else {
			args = ''
		}
		const https = require('https');
		const options = {
			hostname: 'meme-api.herokuapp.com',
			path: `/gimme${args}`
		}
		https.get(options, (response) => {
			var result = ''
			response.on('data', function (chunk) {
				result += chunk;
			});
			response.on('end', function () {
				if (JSON.parse(result)['nsfw'] == true) {
					message.channel.send('**NSFW Content Detected**');
				} else {
					message.channel.send(JSON.parse(result)['url']);
				};
			});
		}).on("error", (err) => {
			console.log("Error: " + err.message);
		});
    },
};