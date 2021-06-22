let handler = async m => m.reply(`
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇                       *「 Manga Link Tensura 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Tensei Shitara Slime : Makoku Gurashi no Trinity」*
┃
┃ ~ https://komikindo.co/tensei-shitara-slime-datta-ken-ibun-makoku-gurashi-no-trinity-chapter-01/
┃ ~ https://komikindo.co/tensei-shitara-slime-datta-ken-ibun-makoku-gurashi-no-trinity-chapter-02/
┃ ~ https://komikindo.co/tensei-shitara-slime-datta-ken-ibun-makoku-gurashi-no-trinity-chapter-03/
┃ ~ https://komikindo.co/tensei-shitara-slime-datta-ken-ibun-makoku-gurashi-no-trinity-chapter-04/
┃ ~ https://komikindo.co/tensei-shitara-slime-datta-ken-ibun-makoku-gurashi-no-trinity-chapter-05/
┃ ~ https://komikindo.co/tensei-shitara-slime-datta-ken-ibun-makoku-gurashi-no-trinity-chapter-06/
┃ ~ https://komikindo.co/tensei-shitara-slime-datta-ken-ibun-makoku-gurashi-no-trinity-chapter-07/
┃ ~ https://komikindo.co/tensei-shitara-slime-datta-ken-ibun-makoku-gurashi-no-trinity-chapter-08/
┃ ~ https://komikindo.co/tensei-shitara-slime-datta-ken-ibun-makoku-gurashi-no-trinity-chapter-09/
┃ ~ https://komikindo.co/tensei-shitara-slime-datta-ken-ibun-makoku-gurashi-no-trinity-chapter-10/
┃ ~ https://komikindo.co/tensei-shitara-slime-datta-ken-ibun-makoku-gurashi-no-trinity-chapter-11/
┃ ~ https://komikindo.co/tensei-shitara-slime-datta-ken-ibun-makoku-gurashi-no-trinity-chapter-12/
┃ ~ https://komikindo.co/tensei-shitara-slime-datta-ken-ibun-makoku-gurashi-no-trinity-chapter-13/
┃ ~ https://komikindo.co/tensei-shitara-slime-datta-ken-ibun-makoku-gurashi-no-trinity-chapter-14/
┃ ~ https://komikindo.co/tensei-shitara-slime-datta-ken-ibun-makoku-gurashi-no-trinity-chapter-15/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇    *「 Tenchura : Tensei Shitara Slime Datta Ken」*
┃
┃ ~ https://komikindo.co/tenchura-tensei-shitara-slime-datta-ken-chapter-01/
┃ ~ https://komikindo.co/tenchura-tensei-shitara-slime-datta-ken-chapter-02/
┃ ~ https://komikindo.co/tenchura-tensei-shitara-slime-datta-ken-chapter-03/
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['tensura-man3']
handler.tags = ['anim']
handler.command = /^tensura-man3$/i
handler.register = true
handler.group = false
handler.private = false
handler.limit = true

module.exports = handler