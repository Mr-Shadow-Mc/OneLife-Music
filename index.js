const Discord = require('discord.js');
const client = new Discord.Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const {
  loadCommands
} = require('./utils/loadCommands');
const DisTube = require('distube')

client.distube = new DisTube(client, {
  searchSongs: false,
  emitNewSongOnly: true
});
client.distube
  .on("playSong", (message, queue, song) => message.channel.send(new Discord.MessageEmbed()
    .setColor("fff100")
    .setDescription(`🎧・。joue \`${song.name}\` - \`${song.formattedDuration}\`\ demandé par ${song.user}`)))
  .on("addSong", (message, queue, song) => message.channel.send(new Discord.MessageEmbed()
    .setColor("fff100")
    .setDescription(`➕・。rajouté \`${song.name}\` - \`${song.formattedDuration}\`\ à la file d’attente par ${song.user}`)))
client.on('ready', () => {
  const statuses = [
    () => `${client.guilds.cache.size} serveurs`,
    () => `${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} utilisateurs`
  ]
  let i = 0
  setInterval(() => {
    client.user.setActivity("with depression", {
      type: "STREAMING",
      url: "https://www.twitch.tv/mrshadowsenpai"
    });
    i = ++i % statuses.length
  }, 1e4)
})
require('./utils/loadEvents')(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

loadCommands(client);

client.login(process.env.TOKEN);
