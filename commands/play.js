const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if (!message.member.voice.channel) return message.channel.send(new Discord.MessageEmbed()
        .setColor("fff100")
        .setDescription('🥂・。Vous devez être dans un canal vocal pour utiliser cette commande.'));

    const music = args.join(" ");

    client.distube.play(message, music)
}

module.exports.config = {
    name: "play",
    aliases: ['p']
}