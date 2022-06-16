const { MessageEmbed } = require("discord.js");

module.exports = async(client, message) => {
    // message.delete();

    message.channel.send({
        embeds: [
            new MessageEmbed()
            .setColor("#FF0000")
            .setTitle("Status bota")
            .setDescription("Ping Bota - 19 ✅ | Czas reakcji - 0.02s ✅ | Czas pracy bota - 96h ✅ | Restart bota - 23.10.2021 - 18:30 ✅")
        ]
    }).then(msg => { setTimeout(() => msg.delete(), 60000)});
};