const { Client, Intents } = require('discord.js');
const { token, filterList } = require('../config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS] });

const res = "### Please don't ask to ask, just ask ###\n" +
    "https://dontasktoask.com/\n" +
    "https://xyproblem.info/\n"+
    "https://stackoverflow.com/help/how-to-ask\n" +
    "http://catb.org/~esr/faqs/smart-questions.html\n"+
    "https://www.nohello.com/"

client.on('ready', c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('messageCreate', (message) => {
    if(message.content.includes("!d") || message.content.includes("!data")) message.channel.send(res)
    for (let i = 0; i < filterList.length; i++) {
        if(filterList[i].includes(message.content.toLowerCase())) message.channel.send(res)
    }
});

client.login(token);