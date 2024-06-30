import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['201030947624', '🌩️ ẉa.me//𓆩🕸️S𝑷𝑰𝑫𝑬𝑹🕸️𓆪‖.peị!‽ 👑', true], ['5217294888993'], ['573155428601'], ['5214531287294'], ['51906662557'], ['5492266466080'], ['593968585383'], ['573026191480'], ['5492266613038'], ['573106040746'], ['5215610314499']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.animxscans = ['201030947624']
global.suittag = ['201030947624']
global.mods = []
global.prems = []

global.packname = '『 +201030947624 』'
global.author = '『  𓆩🕸️S𝑷𝑰𝑫𝑬𝑹🕸️𓆪 』'
global.wm = '『𓆩🕸️S𝑷𝑰𝑫𝑬𝑹🕸️𓆪  』'
global.wm2 = '『 𓆩🕸️S𝑷𝑰𝑫𝑬𝑹🕸️𓆪 』'
global.azami = '『 𓆩🕸️S𝑷𝑰𝑫𝑬𝑹🕸️𓆪 』'
global.cb = '『 𓆩🕸️S𝑷𝑰𝑫𝑬𝑹🕸️𓆪 』'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '© 𓆩🕸️S𝑷𝑰𝑫𝑬𝑹🕸️𓆪'
global.devnum = '+201030947624'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
