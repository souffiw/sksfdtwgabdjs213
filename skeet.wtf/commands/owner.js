const { MessageEmbed } = require("discord.js");

module.exports = async(client, message) => {
    // message.delete();

    message.channel.send({
        embeds: [
            new MessageEmbed()
            .setColor("#FF0000")
            .setDescription("**Moim panem i władcą jest** <@801789038448869438>")
        ]
    });
};