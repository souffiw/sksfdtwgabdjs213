const { MessageEmbed } = require("discord.js");

module.exports = async(client, message) => {
    // message.delete();

    message.channel.send({
        embeds: [
            new MessageEmbed()
            .setColor("#FF0000")
            .setDescription("****")
        ]
    });
};