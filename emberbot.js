"use strict";
exports.__esModule = true;
var discord_js_1 = require("discord.js");
var prefix = "%%";
var bot = new discord_js_1.Client();
require('dotenv').config();
bot.on('message', function (message) {
    if (message.content.split('')[0] && message.content.split('')[1] != "%") {
        return;
    }
    var args = message.content.substr(prefix.length).split(' ');
    switch (args[0]) {
        case "spam":
            var msg = args[1];
            var number = args[2];
            for (var i = 0; i != Number(number); i++) {
                message.channel.send(msg);
            }
            break;
    }
});
bot.on('ready', function () {
    var _a;
    console.log("-------------------");
    console.log("==== Bot Ready ====");
    console.log("-------------------\n");
    (_a = bot.user) === null || _a === void 0 ? void 0 : _a.setPresence({
        status: "idle",
        activity: {
            name: "%% for commands",
            type: "LISTENING",
            url: "https://www.youtube.com/watch?v=W_C5L0DdQHw"
        }
    });
});
bot.login(process.env.TOKEN);
