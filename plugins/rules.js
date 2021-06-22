let handler  = async (m, { conn, usedPrefix: _p  }) => {
  conn.reply(m.chat, `
Syarat dan Ketentuan dalam menggunakan ciel yang mana adalah *Saya Sendiri*

1. Teks dan nama pengguna WhatsApp anda akan saya simpan di dalam server selama bot aktif
2. Data akan di hapus ketika bot Offline
3. Saya tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Saya tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Jangan menggunakan bot untuk sesuatu berbau dragjokes atau nsfw atau gw pukul lu
7. Apapun yang anda perintah pada bot ini, *Saya ga peduli ASAL GA SPAM*

*Jangan di baca doang, tapi di patuhi juga !*
`.trim(), m)
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i
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
