const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = ">>";

client.on('message', message => {
  
  if (message.content.startsWith(prefix)) {

    if (message.content ===prefix+'atma') {
      message.channel.send(':regional_indicator_s: :regional_indicator_h: :regional_indicator_a: :regional_indicator_m: :regional_indicator_e:');
    } 

    if (message.content.startsWith(prefix + 'test')) {
     message.channel.send('```we invading the world, comrade!``` :duck:');
    }
    else { message.channel.send('```wrong command, comrade``` :duck:')
    }
  }
   
});

 



client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
