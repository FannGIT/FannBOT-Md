let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  await m.reply(global.wait)
  let res = await fetch(global.API('https://github.com/FannGIT/data/blob/main/doaharian'))
  let json = await res.json()
  if (res.status != 200) throw json
  if (json.result.error) throw json.result.message
  let {
    surah,
    latin,
    arab,
    arti
  } = json.result
  let caption = `
*「 Doa Harian 」*
${surah}
${arab}
${latin}
Artinya:
_"${arti}"_
`.trim()
  await m.reply(caption)
}
handler.help = ['doaharian']
handler.tags = ['internet']
handler.command = /^(doaharian)$/i

module.exports = handler
