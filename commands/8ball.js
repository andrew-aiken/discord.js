module.exports = {
	name: '8ball',
	description: '8ball',
	aliases: ['lucky', 'question'],
	args: true,
	usage: '<question>',
	guildOnly: true,
	execute(message, args) {
		var _8ball_responses = [
		'It is certain',
		'No',
		'Without a doubt',
		'You may rely on it',
		'Most likely',
		'Ask the child with one eye',
		'Yes',
		'Signs point to yes',
		'Reply hazy, try again',
		'Better not tell you now',
		'Cannot predict now',
		'Don\'t count on it',
		'Maybe',
		'My sources say no',
		'Very doubtful'
		];
		var answer = Math.floor(Math.random() * (_8ball_responses.length + 1));
		console.log(`${_8ball_responses[answer]}`)
		message.channel.send(`Question: ${args}\n${_8ball_responses[answer]}`);
	},
};