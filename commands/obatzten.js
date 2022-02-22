module.exports = {
    name: 'obatzten',
    description: `Rezept für Obatzten`,
    execute(message, args, Discord){

      const newEmbed = new Discord.MessageEmbed()
      .setColor('GREEN')
      .setTitle('Rezept für Obatzten')
      .setDescription('Hier alles aufgelistet')
      .setFooter('Rezept von lynx#1728')
      .addFields(
        {name: 'Zutaten', value: 'Eine Packung Frischkäse\n ein Camembert\n eine Zwiebel\n Paprikapulver '},
        {name: 'Schritt 1', value: 'Camembert kleinschneiden und zusammen mit dem Frischkäse in eine Schüssel geben.'},
        {name: 'Schritt 2', value: "Man nimmt sich 2 Gabeln und zerdrückt das ganze, bis es nur noch wenige Stückchen sind und es eine cremige Masse gibt."},
        {name: 'Schritt 3', value: "  Man schneidet sich ein paar zwiebelwürfel, so viele man halt mag, und gibt es in die Schüssel"},
        {name: "Schritt 4", value: "Man gibt Paprikapulver hinzu und vermischt es solange, bis das ganze eine rosa-orange Farbe annimt"},
        {name: "Fertig!", value: "Dies kann man nun auf Brot oder Brezeln schmieren. \nGuten Appetit!"}
      )
      message.channel.send(newEmbed)

      }
}