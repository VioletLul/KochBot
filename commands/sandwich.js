module.exports = {
    name: 'sandwich',
    description: `Rezept für Sandwich`,
    execute(message, args, Discord){

      const newEmbed = new Discord.MessageEmbed()
      .setColor('BLURPLE')
      .setTitle('Rezept für Sandwich')
      .setDescription('Hier alles aufgelistet')
      .setFooter('Lord Kaktus ˘꒳˘#1744')
      .setAuthor("Zeit ca. 2-5 Minuten")
      .addFields(
        {name: 'Zutaten für ein Sandwich der etwas anderen Art', value: '2 Scheiben Toastbrot\n Tomaten Paste\n 1 grosses Salatblatt\n (Bei Bedarf) 1 Ei'},
        {name: 'Schritt 1', value: '1 Toastscheibe stark mit Tomatenpaste bestreichen'},
        {name: 'Schritt 2', value: "Das gewaschene Salatblatt drauflegen."},
        {name: 'Schritt 3', value: "Das Ei in die Bratpfanne aufschlagen, als Spiegelei auf das Salatblatt legen"},
        {name: "Fertig!", value: "Und die zweite Toast Scheibe drauflegen. Guten Appetit!"}
      )
      message.channel.send(newEmbed)

      }
}