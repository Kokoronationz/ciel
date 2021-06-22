let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw 'Siapa yang mau di unban?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Gacha unban ahh'
    let users = global.DATABASE._data.users
    users[who].banned = false
    conn.reply(m.chat, `Selamat anda bebas`, m)
}
handler.help = ['unban @user']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.rowner = true

module.exports = handler