const Discord = require('discord.js');

const client = new Discord.Client();

 
/*
client.on('ready', () => {

    console.log('I am ready!');

});
*/



client.on('message', message => {

    if (message.content === 'atma') {

       message.reply(':regional_indicator_s: :regional_indicator_h: :regional_indicator_a: :regional_indicator_m: :regional_indicator_e:');

       }
     if (message.content === '>test') {

       message.reply('```'+'online```');
      console.log('HOUSTON!');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
