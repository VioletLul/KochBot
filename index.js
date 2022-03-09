const Discord = require("discord.js")
const keepAlive = require("./server")
const fs = require("fs")
const client = new Discord.Client({intents: [ ]});

let prefix = 'F.';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'info'){
        client.commands.get('info').execute(message, args, Discord)
    } else if(command == 'obatzten'){
        client.commands.get('obatzten').execute(message, args, Discord)
    } else if(command == "play"){
      client.commands.get('play').execute(message, args, Discord)
    } else if(command == "leave"){
      client.commands.get("leave").execute(message, args, Discord)
    } else if(command == "spaghetti"){
      client.commands.get("spaghetti").execute(message, args, Discord)
    } else if(command == "sandwich"){
      client.commands.get("sandwich").execute(message, args, Discord)
    }
});

client.once('ready', () => {
    console.log(`${client.user.username} ist jetzt online und bereit zum testen! Ich bin gerade auf ${client.guilds.cache.size} Servern! Um ${client.readyAt} wurden der Bot gestartet! Sollte mehr als 1 Monat vergangen sein, bitte neu starten!`);
    client.user.setStatus('dnd');
    setInterval(() => {
        const statuses = [
            'Jaja Rezepte werden hinzugefügt.',
            'Musik Befehle sind nun verfügbar!',
            "Prefix: F.",
            "Developer: ^^Violet#0461"
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING" })}, 5000)
});


const TOKENSECRET = process.env['BOT_TOKEN']
keepAlive()
client.login(TOKENSECRET)