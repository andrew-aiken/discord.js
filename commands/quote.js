module.exports = {
    name: 'q',
    aliases: ['q', 'quote'],
    description: 'Server stats',
    execute(message, args) {
        
        const https = require('https');
        const options = {
            hostname: 'api.tronalddump.io',
            path: '/random/quote',
             headers: {
                'Accept': 'application/hal+json'
            }
        }
        https.get(options, (response) => {
            var result = ''
            response.on('data', function (chunk) {
                result += chunk;
            });
            response.on('end', function () {
                message.channel.send(JSON.parse(result)['value']);
            });
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    },
};