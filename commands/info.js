module.exports = {
    name: 'info',
    description: "Info zu mir, dem Kochbot!",
    execute(message, args, Discord){

      const newEmbed = new Discord.MessageEmbed()
      .setColor('YELLOW')
      .setTitle('Infos')
      .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Messagebox_info.svg/800px-Messagebox_info.svg.png")
      .setDescription('Infos zu allen Commands')
      .addFields(
        {name: 'Prefix', value: 'Dies ist der Prefix: F.'},
        {name: 'Coder', value: '^^Violet#0461'},
        {name: 'Für wen ist dieser Bot?', value: "Dieser Bot ist für Fouldeer und seinen Koch Discord."},
        {name: 'Commands', value: "F.info (Dieser Embed wird angezeigt)\nF.spaghetti (Rezept für Spaghetti wird angezeigt!)\nF.obatzten (Selbst erklärend was dann passiert :))\nF.play {liedname/youtube URL} => Lässt den Bot in einen Channel joinen und spielt das Lied ab.\nF.leave => Lässt den Bot aus dem Channel leaven."}
      )
      message.channel.send(newEmbed)

      }
}