import { Client } from 'discord.js';

const prefix = "%%";
const bot = new Client();

require('dotenv').config();

bot.on('message', (message) => {
    if (message.content.split('')[0] && message.content.split('')[1] != "%") { return; }

    const args = message.content.substr(prefix.length).split(' ');

    switch (args[0]) {
        case "spam":
            const msg = args[1];
            const number = args[2];

            for (var i = 0; i != Number(number); i++) {
                message.channel.send(msg);
            }
        break;
    }
})

bot.on('ready', () => {
    console.log("-------------------");
    console.log(`==== Bot Ready ====`);
    console.log("-------------------\n")

    bot.user?.setPresence({
        status: "idle",

        activity: {
            name: "%% for commands",
            type: "LISTENING",
            url: "https://www.youtube.com/watch?v=W_C5L0DdQHw"
        } 
    })
})
 
bot.login(process.env.TOKEN)