let handler = async (m, { conn, text }) => {
    let name = ('62887436568613@s.whatsapp.net')
    let panggil = `
    @${name.replace(/@.+/, '')}!!! Ada yang ngajak gelud nihh :v
    `.trim()
    let mentionedJid = [name]
  conn.reply(m.chat, panggil, m, { contextInfo: { mentionedJid }})

}
handler.customPrefix = /Unx|unx/i
handler.command = new RegExp

module.exports = handler