//--------------------------------------------------------------------------------------------------------------//
/*created by MR ZAIN 🕵
contact dev1 +923244404347 ♻️
contact dev2 +923144247057 ♻️
© Copy coder alert ⚠
*/
//--------------------------------------------------------------------------------------------------------------//





const {cmd , commands} = require('../command')

cmd({
    pattern: "couplepp",
    desc: "couplepp the bot",
    category: "main",
    react: "⛱️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*ᴍᴜɢʜᴀʟ ᴍᴅ ANIME PHOTOS*`
await conn.sendMessage(from,{image:{url: `https://i.pinimg.com/736x/03/f6/ce/03f6ce638bb6061a1148c2e687749866.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.pinimg.com/736x/50/c4/e9/50c4e9bd4d71d9f10aa659ff50b3a43e.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.pinimg.com/736x/e5/49/ad/e549adbe1d9a7286afe679b06878718c.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.pinimg.com/736x/cf/a7/11/cfa71129c494f053628f7f668facb61c.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.pinimg.com/736x/e0/32/4b/e0324b1fce0b5e71209e798018a639f1.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.pinimg.com/736x/87/59/56/875956e82f5efda30f03dfd230104672.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.pinimg.com/736x/8e/44/e3/8e44e3e21c370d25c53fc8b9c888dbfa.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.pinimg.com/736x/b0/d0/a6/b0d0a6d2c08b038eff4f8e38e2079539.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.pinimg.com/736x/99/42/bb/9942bbda5564f21b6a147030a336830d.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
