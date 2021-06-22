let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Trus kenapa kalo gw wibu HAH !1!1!
Apa kau ingin bergelud?
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /IH WIBU|ih wibu|Ih wibu|wibu|dasar wibu/i
handler.command = new RegExp

module.exports = handler