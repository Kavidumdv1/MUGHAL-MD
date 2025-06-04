/*created by MR ZAIN 🕵
contact dev1 +923244404347 ♻️
contact dev2 +923144247057 ♻️
© Copy coder alert ⚠
*/





const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "menu2",
    react: "💋",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `*┋* ${commands[i].pattern}\n`;
 }
}

let madeMenu = `*-ˏˋ⋆ ᴡ ᴇ ʟ ᴄ ᴏ ᴍ ᴇ ⋆ˊˎ-⁠*

*⇆ ʜɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*

     *${pushname}*

*─────────୨ৎ─────────*

┏━━━━━━━━━━━━━━━━━━━━━━━━━━
   *ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ 𝚳𝐔𝐆𝚮𝚫𝐋 𝚳𝐃 ⚜ ғᴜʟʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━

*ᴄʀᴇᴀᴛᴇᴅ ʙʏ 𝚳𝐔𝐆𝚮𝚫𝐋 ⚜*


*D͜͡o͜͡w͜͡n͜͡l͜͡o͜͡a͜͡d͜͡  C͜͡o͜͡m͜͡m͜͡a͜͡n͜͡d͜͡s͜͡*

*╭──────────●●►*
${menu.download}
*╰──────────●●►*

*M͜͡a͜͡i͜͡n͜͡ C͜͡o͜͡m͜͡m͜͡a͜͡n͜͡d͜͡s͜͡*

*╭──────────●●►*
${menu.main}
*╰──────────●●►*

*G͜͡r͜͡o͜͡u͜͡p͜͡ C͜͡o͜͡m͜͡m͜͡a͜͡n͜͡d͜͡s͜͡*

*╭──────────●●►*
${menu.group}
*╰──────────●●►*

*O͜͡w͜͡n͜͡e͜͡r͜͡ C͜͡o͜͡m͜͡m͜͡a͜͡n͜͡d͜͡s͜͡*

*╭──────────●●►*
${menu.owner}
*╰──────────●●►*

*C͜͡o͜͡n͜͡v͜͡e͜͡r͜͡t͜͡ C͜͡o͜͡m͜͡m͜͡a͜͡n͜͡d͜͡s͜͡*

*╭──────────●●►*
${menu.convert}
*╰──────────●●►*

*S͜͡e͜͡a͜͡r͜͡c͜͡h͜͡ C͜͡o͜͡m͜͡m͜͡a͜͡n͜͡d͜͡s͜͡*

*╭──────────●●►*
${menu.search}
*╰──────────●●►*

*🖤ﾟ･｡🖤｡･ﾟ♡ﾟ･｡｡･ﾟ♡*⁠⁠⁠⁠

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚳𝐔𝐆𝚮𝚫𝐋 ⚜*

╚══════✮❁•°♛°•❁✮ ══════╝
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
