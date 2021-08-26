const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if (!message.member.voice.channel) return message.channel.send(new Discord.MessageEmbed()
        .setColor("fff100")
        .setDescription('🥂・。You must be in a voice channel to use this command.'));

    let queue = await client.distube.getQueue(message);

    if (queue) {
        client.distube.stop(message)

        message.channel.send(new Discord.MessageEmbed()
        .setColor("fff100")
        .setDescription('🥂・。Stop !'));
    } else if (!queue) {
        return
    };
}

module.exports.config = {
    name: "stop",
    aliases: ["st"]
}
