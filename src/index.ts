import { Telegraf } from 'telegraf'
import dotenv = require('dotenv');
import { helpMessage } from './constants';
import { spamWaifu } from './spam-waifu';

dotenv.config();

if (!process.env.BOT_TOKEN) {
    throw "missing env BOT_TOKEN";
}

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply(helpMessage))
bot.help((ctx) => ctx.reply(helpMessage))

bot.command("protecc", (ctx) => {
    console.log(ctx.message)
})

bot.on("message", spamWaifu)

bot.launch();

process.once('SIGINT', () => bot.stop());
process.once('SIGTERM', () => bot.stop());
