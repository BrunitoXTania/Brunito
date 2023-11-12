let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `ღ ${lenguajeGB['smsAddB5']()} ${pesan}`
let teks = `𝑫𝒆𝒔𝒑𝒊𝒆𝒓𝒕𝒆𝒏 𝑴𝒐𝒏̃𝒐𝒔 🐹\n▢︎ 𝑰𝒏𝒕𝒆𝒈𝒓𝒂𝒏𝒕𝒆𝒔: \n\n`
for (let mem of participants) {
teks += `➥︎ 🍔🍟 @${mem.id.split('@')[0]}\n`}
teks += `\n`
teks += `▢︎ 𝑩𝒓𝒖𝒏𝒊𝒕𝒐𝑿𝑻𝒂𝒏𝒊𝒂`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
