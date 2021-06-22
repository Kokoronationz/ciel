let handler  = async (m, { conn }) => {
  
let name = conn.getName(m.sender)
let pesan = ` ${name} Lu mau gw pukul?\n\nGw lagi sibuk, Jadi jangan tag gw !1!1!`
conn.reply(m.chat, pesan, m)
}
handler.customPrefix = /Bot/
handler.command = new RegExp

module.exports = handler