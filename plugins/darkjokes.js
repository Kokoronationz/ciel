let handler = async(m, { conn }) => {
conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'), '', 'drag joles',m)
}
handler.help = ['darkjokes']
handler.tags = ['fun']
handler.command = /^darkjokes$/i
handler.disabled = false
handler.register = true
handler.limit = false
handler.group = false
handler.private = true
module.exports = handler
