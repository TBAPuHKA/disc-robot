const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = "at.";
let comm=[ma,test];

client.on('message', message => {
  
  for(i=0;i<comm.length;i++) {
   if (message.content == prefix+(comm[i])) {


  if (message.content.startsWith(prefix)) {
    if (message.content ===prefix+'ma') {
      message.channel.send(':regional_indicator_s: :regional_indicator_h: :regional_indicator_a: :regional_indicator_m: :regional_indicator_e:');
    } 

    if (message.content.startsWith(prefix + 'test')) {
     message.channel.send('```we invading the world, comrade!``` :duck:');
    }
  }
   

  }
  else { message.channel.send('```wrong command, comrade``` :duck:')
  }
}

});

 



client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
