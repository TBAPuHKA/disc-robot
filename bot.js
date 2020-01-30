const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ох ох', () => {

    console.log('что ж ты маленьким не сдох');

});

 

client.on('message', message => {

    if (message.content === 'atma') {

       message.reply('SHAME');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
