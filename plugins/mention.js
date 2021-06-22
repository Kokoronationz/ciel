let handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukin teksnya, ntar gw tiru'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['mention','say'].map(v => v + ' <text>')
handler.tags = ['fun']
handler.group = true
handler.register = true

handler.command = /^mention|say$/i

module.exports = handler
