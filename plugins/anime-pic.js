import fetch from 'node-fetch'
let handler = async (m, {
    conn,
    usedPrefix
}) => {
    await conn.sendMessage(m.chat, {
        react: {
            text: '🔥',
            key: m.key,
        }
    })
    let res = await fetch('')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    await conn.sendFile(m.chat, json.url, null, "*『🔥┇𓆩🕸️S𝑷𝑰𝑫𝑬𝑹🕸️𓆪』*", m)
}
handler.help = ['waifu']
handler.tags = ['internet']
handler.command = /^(مراتي)$/i
export default handler
