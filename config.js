global.owner = ['62887436568613'] // Put your number here
global.mods = [] // Want some help?
global.prems = ['62887436568613'] // Premium user has unlimited limit
global.wait = "[❗]  ```Sabar ya tod...```"
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'unx77'
}

// Sticker WM
global.packname = 'Ciel'
global.author = 'Kuro'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
