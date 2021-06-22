const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Ga Gitu Njirr\n*${usedPrefix}daftar nama.umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama jangan di kosongin (Alphanumeric)'
  if (!age) throw 'Umur jangan di kosongin (Angka)'
  age = parseInt(age)
  if (age > 40) throw 'Bau tanah, saya ga suka'
  if (age < 18) throw 'Pendaftaranmu saya tolak'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
Daftar berhasil!

┏ ┅ ━━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 INFORMATION 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃
┃ *Nama:* ${name}
┃ *Umur:* ${age} tahun
┃ *Gift:* Rp10000
┃ *Registered:* ${rtotalreg}
┃ *SN:* 
┃ ${sn}
┗ ┅ ━━━━━━━━━━━━━━━━━━━━━ ┅ ━

 _Simpan Serial Number anda!_
`.trim()
await conn.reply(m.chat, caption, { 
  key: { 
    remoteJid: 'status@broadcast', 
    participant: '0@s.whatsapp.net', 
    fromMe: false const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Ga Gitu Njirr\n*${usedPrefix}daftar nama.umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama jangan di kosongin (Alphanumeric)'
  if (!age) throw 'Umur jangan di kosongin (Angka)'
  age = parseInt(age)
  if (age > 40) throw 'Bau tanah, saya ga suka'
  if (age < 18) throw 'Pendaftaranmu saya tolak'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
Daftar berhasil!
┏ ┅ ━━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 INFORMATION 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃
┃ *Nama:* ${name}
┃ *Umur:* ${age} tahun
┃ *Gift:* Rp10000
┃ *Registered:* ${rtotalreg}
┃ *SN:* 
┃ ${sn}
┗ ┅ ━━━━━━━━━━━━━━━━━━━━━ ┅ ━

global.DATABASE._data.users[m.sender].uang += 10000

`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler


  }, message: { 
    "imageMessage": { 
      "mimetype": "image/jpeg", 
      "caption": `Registration Successful!`, 
      "jpegThumbnail": tnbot} } }, { contextInfo: { mentionedJid: [m.sender] } })
global.DATABASE._data.users[m.sender].uang += 10000
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler
