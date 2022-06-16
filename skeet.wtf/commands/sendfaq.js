const { MessageEmbed } = require("discord.js");

module.exports = async(client, message) => {
    // message.delete();

    message.channel.send({
        embeds: [
            new MessageEmbed()
            .setColor("#FF0000")
            .setTitle("💎 ― About Skeet.wtf")
            .setDescription("Skeet.wtf it's same gamesense.pub forum (it's 1 - 1 forum) . Our forum has a small number of users at the moment, just wait for the first wave of invitations that will take place soon!")
        ]
    }).then(msg => { setTimeout(() => msg.delete(), 60000)});
};