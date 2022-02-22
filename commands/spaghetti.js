module.exports = {
    name: 'spaghetti',
    description: `Rezept für Spaghetti`,
    execute(message, args, Discord){

      const newEmbed = new Discord.MessageEmbed()
      .setColor('BLURPLE')
      .setTitle('Rezept für Spaghetti')
      .setDescription('Hier alles aufgelistet')
      .setFooter('Rezept von David,#8802')
      .setAuthor("Zeit ca. 25 Minuten")
      .addFields(
        {name: 'Zutaten für 4 Portionen', value: '500 g Spaghetti\n 1 Zwiebel(n)\n 1 EL Olivenöl\n 500 g  Tomaten, passiert\n 1 TL Gemüsebrühe\n 1 TL Oregano, Basilikum, Rosmarin (getrocknet)\n Paprikapulver, Salz und Pfeffer, Zucker.'},
        {name: 'Schritt 1', value: 'Die Spaghetti in reichlich Salzwasser bissfest kochen.'},
        {name: 'Schritt 2', value: "Die Zwiebel abziehen und fein hacken."},
        {name: 'Schritt 3', value: "Das Öl in einem Topf erhitzen und die Zwiebel darin unter Rühren anbraten."},
        {name: "Schritt 4", value: "Die Tomaten dazugeben, die Gemüsebrühe darin auflösen und 10 Minuten bei geringer Hitze kochen lassen. Die Kräuter hinzufügen und weitere 5 Minuten garen."},
        {name: "Fertig!", value: "Die Sauce mit Paprika, Pfeffer und Zucker abschmecken und mit den gut abgetropften Spaghetti zusammen servieren. Guten Appetit!"}
      )
      message.channel.send(newEmbed)

      }
}