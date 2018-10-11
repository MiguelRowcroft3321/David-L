const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'david sucks') {
    	message.reply('ew your a FUCKING PROBLEM YOU TIT FACE BASTARD ASS LICKING BITCH FUCK LICKING PUSSY LIKE YOUR FATHER AND A DOLL YOU FUCKING DOLL');
    });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
