
import fs = require("fs-extra");

export async function getRandomWaifuPath() {
    const waifuImagesPath = './assets/waifu'
    const imagesList = await fs.readdir(waifuImagesPath)
    const randomIndex = Math.floor(Math.random() * imagesList.length);
    return imagesList[randomIndex]
}