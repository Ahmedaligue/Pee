let handler = async (m, { conn, command, text }) => {
let love = `
*لدعم البوت تستطيع ان تفعل:-*
*1_تستطيع دخول قروب دعم البوت لدعمه.↯↯*
*سيتم اضافته قريبا...*

*2_وتستطيع ان تتابع البوت على الانستا:-*
** 

*3_وتستطيع دعم المطور من هنا:-*
*الصلاة على النبي صل الله عليه وسلم وعدم نسيانه فالدعاء*

*وشكرا لكم يا افضل مستخدمين 👾👑*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['estupidez']
handler.tags = ['fun']
handler.command = /^(الدعم|دعم)$/i
export default handler
