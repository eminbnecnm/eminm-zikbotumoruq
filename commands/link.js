const Discord = require('discord.js');

let botid = ('749750974909775933') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} İletişim Bilgileri`)
    .addField('***Jungle Music***')
    .addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=749750974909775933&permissions=8&scope=bot
) **|** [Destek Sunucusu](https://discord.gg/TrFnxq) **|** [Bota Oy Ver ( Yakında )]() **|** [Web Sitesi ( Yakında )]()`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['link'],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: 'bot hakkında bilgi',
  usage: 'davet'
};