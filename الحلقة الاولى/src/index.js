require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
  ],
});
client.on("ready", (c) => {
  console.log(`${c.user.tag} is ready✅`);
});
client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content === "السلام عليكم") {
    message.reply(`<@${message.member.id}>وعليكم السلام`);
  }
});
client.login(process.env.Token);
