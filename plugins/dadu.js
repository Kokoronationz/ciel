let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
ðŸŽ² Angka Dadu Lu : ${pickRandom(['1','2','3','4','5','6','7','8','9','10','11','12'])}
ðŸŽ² Angka Dadu Gw : ${pickRandom(['1','2','3','4','5','6','7','8','9','10','11','12'])}
`.trim(), m)
}
handler.help = ['dadu']
handler.tags = ['game']
handler.command = /^dadu/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

