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
client.login("NzkyMzQwNTQxNzc3NTEwNDIw.X-cSog.HH2vo1xBdaBE85FysR5pCQk8LIY");
client.on("ready", () => {
  client.user.setStatus("idle");
  client.user.setActivity(`by ➹〖فتحي〗👑#0444`, { type: "playing" });
});
client.on ('message', async (Fathy) => {
  if (!Fathy.guild || Fathy.author.bot) return false;
  var prefix = '#';
  if (Fathy.content == prefix + 'ping') {
    const msg = await Fathy.channel.send ("pong");
    msg.delete ();
    Fathy.channel.send (`\`\`\`javascript\nDiscord API: ${Math.round (client.ping)}ms\nTime taken: ${msg.createdTimestamp - Fathy.createdTimestamp}\n\`\`\` `)
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
