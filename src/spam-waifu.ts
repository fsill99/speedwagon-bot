import { TelegrafContext } from 'telegraf/typings/context'
import { getRandomWaifuPath } from './common/waifu';

export const spamWaifu = async (ctx: TelegrafContext) => {
    const randomWaifu = await getRandomWaifuPath()
    console.log(`sending ${randomWaifu}...`)
    ctx.replyWithPhoto({ source: `./assets/waifu/${randomWaifu}` })
}