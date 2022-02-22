module.exports = {
    name: 'leave',
    description: 'stop the bot and leave the channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("Du musst in einem Voice Channel sein um das nutzen zu können!");
        await voiceChannel.leave();
        await message.channel.send('ok. Ich verlasse den Sprachkanal! ')
 
    }
}