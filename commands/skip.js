const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if (!message.member.voice.channel) return message.channel.send(new Discord.MessageEmbed()
        .setColor("fff100")
        .setDescription('🥂・。Vous devez être dans un canal vocal pour utiliser cette commande.'));

    let queue = await client.distube.getQueue(message);

    if (queue) {
        client.distube.skip(message)

        message.channel.send('DONE!')
    } else if (!queue) {
        return
    };
}

module.exports.config = {
    name: "skip",
    aliases: ["s"]
}