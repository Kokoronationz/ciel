let handler = async (m, { conn }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (!(id in conn.siapakahaku)) throw false
    let json = conn.siapakahaku[id][1]
    let nya = json.result.jawaban
    let nyanya = nya.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
    m.reply('```' + nyanya + '```')
}
handler.command = /^sahint$/i
handler.limit = true
module.exports = handlerlet handler = m => m
handler.before = async function (m) {
  let id = m.chatlet handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/「 Siapakah Aku 」/i.test(m.quoted.text)) return !0
  conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
  if (!(id in conn.siapakahaku)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == conn.siapakahaku[id][0].id) {
    let json = JSON.parse(JSON.stringify(conn.siapakahaku[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.result.jawaban.toLowerCase()) {
      global.DATABASE._data.users[m.sender].uang += conn.siapakahaku[id][2]
      m.reply(`*Benar!*\n+Rp${conn.siapakahaku[id][2]}`)
      clearTimeout(conn.siapakahaku[id][3])
      delete conn.siapakahaku[id]
    } else if (m.text.toLowerCase().endsWith(json.result.jawaban.split` `[1])) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
  }
  return !0
}
handler.exp = 0

module.exports = handler

  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/「 Siapakah Aku 」/i.test(m.quoted.text)) return !0
  conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
  if (!(id in conn.siapakahaku)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == conn.siapakahaku[id][0].id) {
    let json = JSON.parse(JSON.stringify(conn.siapakahaku[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.result.jawaban.toLowerCase()) {
      global.DATABASE._data.users[m.sender].uang += conn.siapakahaku[id][2]
      m.reply(`*Benar!*\n+Rp${conn.siapakahaku[id][2]}`)
      clearTimeout(conn.siapakahaku[id][3])
      delete conn.siapakahaku[id]
    } else if (m.text.toLowerCase().endsWith(json.result.jawaban.split` `[1])) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
  }
  return !0
}
handler.exp = 0

module.exports = handler
