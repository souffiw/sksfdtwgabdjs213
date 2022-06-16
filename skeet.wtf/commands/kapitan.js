const { MessageEmbed } = require("discord.js");

module.exports = async(client, message, args) => {
    // message.delete();

    if(!message.member.roles.cache.has(client.config.staff)) return message.channel.send({
        embeds: [
            new MessageEmbed()
                .setColor("#FF0000")
                .setTitle("Błąd!")
                .setDescription("Nie posiadasz wymaganych permisji")
                .addField("Użyta komenda:", `\`${message.content}\``)
                .setFooter(`Wywyołane przez: ${message.author.tag}`)
        ]
    }).then(msg => { setTimeout(() => msg.delete(), 5000)});

    let member = await message.mentions.members.first();
    if(!member) return message.channel.send({
        embeds: [
            new MessageEmbed()
                .setColor("#FF0000")
                .setTitle("Błąd!")
                .setDescription("Nie oznaczyłeś żadnego użytkownika")
                .addField("Użyta komenda:", `\`${message.content}\``)
                .setFooter(`Wywołane przez: ${message.author.tag}`)
        ]
    }).then(msg => { setTimeout(() => msg.delete(), 5000)});
    await member.send({
        embeds: [
            new MessageEmbed()
            .setColor("#FF0000")
            .setTitle("Gratulacje!")
            .setDescription("**Właśnie zostałeś awansowany na rangę** `kapitan`!")
            .setFooter(`✅ Mokotów awanse | awans nadany przez: ${message.author.tag}`, `https://cdn.discordapp.com/attachments/900317453526114304/900342205389111296/Mokto.png`)
            .setTimestamp()
        ]
    }).catch(() => null);
};