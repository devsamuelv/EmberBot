"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var prefix = "%%";
var bot = new discord_js_1.Client();
require('dotenv').config();
var config = {
    annoucmentChannelID: "633078584520736782"
};
bot.on('guildMemberAdd', function (member) {
});
bot.on('message', function (message) {
    if (message.content.toLowerCase().includes("@everywon")) {
        message.delete();
        console.log('deleted msg');
        message.channel.send('🛑 Please do not spam Everywon! 🛑');
    }
});
bot.on('message', function (message) {
    if (message.content.split('')[0] && message.content.split('')[1] != "%") {
        return;
    }
    var args = message.content.substr(prefix.length).split(' ');
    switch (args[0]) {
        case "spam":
            var msg = message.content.substr(prefix.length + args[0].length + 1);
            var number = message.content.split(':')[1];
            console.log(number);
            if (msg.includes("@")) {
                message.channel.send('🛑 Please do not spam Everywon! 🛑');
                return;
            }
            try {
                for (var i = 0; i != Number(number); i++) {
                    message.channel.send(msg.replace(':', "").replace(String(number), ""));
                }
            }
            catch (err) {
                console.error(err);
            }
            break;
        case "list-channels":
            if (message.author.username != "Developer") {
                message.channel.send("Im Sorry Your Not Allowed to use this command");
                return;
            }
            message.channel.send(' Channels listed in console');
            break;
        case "help":
            message.channel.send('Commands: spam');
            break;
    }
});
bot.on('ready', function () {
    var _a;
    console.log("-------------------");
    console.log("==== Bot Ready ====");
    console.log("-------------------\n");
    (_a = bot.user) === null || _a === void 0 ? void 0 : _a.setPresence({
        status: "dnd",
        game: {
            name: "%%help for commands",
            type: "LISTENING",
            url: "https://www.youtube.com/watch?v=W_C5L0DdQHw"
        }
    });
});
bot.login(process.env.TOKEN);
