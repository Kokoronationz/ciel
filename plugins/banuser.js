let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw 'Ada yang mau di ban?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Gacha ban??'
    let users = global.DATABASE._data.users
    users[who].banned = true
    conn.reply(m.chat, `Mamposs kena ban`, m)
}
handler.help = ['ban @user']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.rowner = true

module.exports = handler