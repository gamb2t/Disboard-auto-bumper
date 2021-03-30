const config = require("./config.json");
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`봇 로그인 성공!`);
});

client.on("ready", () => {
      setInterval(() => { 
       let autobmp = client.channels.get(config.channelid)


        autobmp.send("!d bump")


      }, 7220000);
})

client.login(config.token)
