require("events").EventEmitter.defaultMaxListeners = 200;
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#'
client.on('ready', () => {
console.log('[ BOT IS ONLINE ]')
console.log('Brodcast')
console.log('by ➹〖فتحي〗👑#0444')
});
client.login("");
client.on("ready", () => {
  client.user.setStatus("idle");
  client.user.setActivity(`by ➹〖فتحي〗👑#0444`, { type: "playing" });
});
client.on ('message', async (FireKing) => {
  if (!FireKing.guild || FireKing.author.bot) return false;
  var prefix = '#';
  if (FireKing.content == prefix + 'ping') {
    const msg = await FireKing.channel.send ("pong");
    msg.delete ();
    FireKing.channel.send (`\`\`\`javascript\nDiscord API: ${Math.round (client.ping)}ms\nTime taken: ${msg.createdTimestamp - FireKing.createdTimestamp}\n\`\`\` `)
  }
})
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
