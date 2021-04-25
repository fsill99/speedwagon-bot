const { Telegraf } = require('telegraf')

const bot = new Telegraf("1221836399:AAHu63YvxchJhBgpizl-SBIpv6g-9c3STs8")
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
