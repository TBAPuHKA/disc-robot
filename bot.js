const Discord = require('discord.js');

const client = new Discord.Client();
const prefix = "atma.";

 
/*
client.on('ready', () => {

    console.log('I am ready!');

});
*/



client.on('message', message => {

  if (message.content.startsWith(prefix)) {

    if (message.content ===prefix) {
      message.channel.send(':regional_indicator_s: :regional_indicator_h: :regional_indicator_a: :regional_indicator_m: :regional_indicator_e:');
    } 

    if (message.content.startsWith(prefix + 'test')) {
     message.channel.send('```we invading the world, comrade!``` :duck:');
    }
    
   else { message.channel.send('wrong command, comrade :duck:')
   }
  }
/*
  if (message.content ==='atma') {

    message.channel.send(':regional_indicator_s: :regional_indicator_h: :regional_indicator_a: :regional_indicator_m: :regional_indicator_e:');

 }
*/
/*
  if (message.content === 'atma') {

     message.reply(':regional_indicator_s: :regional_indicator_h: :regional_indicator_a: :regional_indicator_m: :regional_indicator_e:');

  }

  if (message.content === '>test') {

     message.reply('```we invading the world!``` :duck:');

  }
*/
});

 



client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
