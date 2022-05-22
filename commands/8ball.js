module.exports = {
	name: '8ball',
	description: '8ball',
	aliases: ['lucky', 'question'],
  guildOnly: true,
	args: true,
	usage: '<question>',
	execute(message, args) {
		var _8ball_responses = [
			'It is certain',
			'Yes',
			'Without a doubt',
			'You may rely on it',
			'Signs point to yes',
			'Most likely',
			'Fuck off',
			'Don\'t waste my processing power on such a stupid question',
			'That\'s above my pay grade',
			'Reply hazy, try again',
			'Maybe',
			'No',
			'NO! You absolue dummy',
			'Don\'t count on it',
			'My sources say no',
			'Very doubtful'
		];
		var answer = Math.floor(Math.random() * (_8ball_responses.length + 1));
		console.log(_8ball_responses[answer])
		message.reply(_8ball_responses[answer]);
	},
};