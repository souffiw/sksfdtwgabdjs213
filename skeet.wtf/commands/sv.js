const { MessageEmbed } = require("discord.js");

module.exports = async(client, message) => {
    // message.delete();

    message.channel.send({
        embeds: [
            new MessageEmbed()
            .setColor("#FF0000")
            .setTitle("💎 ― Skeet.wtf official discord")
            .setDescription("Join ==> https://discord.gg/rJfNPn8PD5")
        ]
    });
};