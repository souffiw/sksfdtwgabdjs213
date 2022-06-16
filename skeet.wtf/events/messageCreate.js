const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
    if(message.author.bot) return;
    if(message.content.indexOf(client.config.prefix) !== 0) return;
  
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    message.delete();

    const cmd = client.commands.get(command);
    if(!cmd) return message.channel.send({
        embeds: [
            new MessageEmbed()
            	.setColor("#FF0000")
            	.setTitle("Błąd!")
            	.setDescription("Taka komenda nie istnieje")
                .addField("Użyta komenda:", `\`${message.content}\``)
            	.setFooter(`Wywołane przez: ${message.author.tag}`)
        ]
    }).then(msg => { setTimeout(() => msg.delete(), 5000)});

    cmd(client, message, args);
};