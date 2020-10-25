const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!" // change your prefix

client.on("ready", () => {
console.log(`${client.user.username} is Online')
})


client.on('message', message => {
  if(!message.guild || message.author.bot || !message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase()
  if (!client.commands.has(command)) return;

try {
	client.commands.get(command).execute(message, args, client);
} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}
})

client.login(process.env.TOKEN)
