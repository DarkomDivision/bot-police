const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";

client.login("NjkyODIxMzQ1NTQwNjM2NzYz.Xn0Gxw.vu0TBJ3sq6SqFma0HMnrcKaoCgQ")

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '🌌arrivé🌌');
    if (!channel) return;
    channel.send(`Bienvenue Stagiaire ${member}, nous vous attendions avec impatience.`);
});

client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '🌆départ🌆');
    if (!channel) return;
    channel.send(`L'Agent ${member}, nous quittes pour prendre sa retraite.`);
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "start_service"){
        message.channel.send("``` L'Agent " + message.author.username + " a pris son service ! ```")
    }
});

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "stop_service"){
        message.channel.send("``` L'Agent " + message.author.username + " a pris sa fin de service ! ```")
    }
});
