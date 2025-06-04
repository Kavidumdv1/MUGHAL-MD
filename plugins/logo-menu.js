const axios = require("axios");
const { cmd } = require("../command");


cmd({
    pattern: "logo",
    alias: ["logomenu"],
    desc: "menu the bot",
    category: "menu",
    react: "🎀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `*╭───❍「 LOGO 𝖫𝖨𝖲𝖳 」❍*
‎*├⬡ .ɴᴇᴏɴʟɪɢʜᴛ*
‎*├⬡ .ʙʟᴀᴄᴋᴘɪɴᴋ*
‎*├⬡ .ᴅʀᴀɢᴏɴʙᴀʟʟ*
‎*├⬡ .𝟹ᴅᴄᴏᴍɪᴄ*
‎*├⬡ .ᴀᴍᴇʀɪᴄᴀ*
‎*├⬡ .ɴᴀʀᴜᴛᴏ*
‎*├⬡ .sᴀᴅɢɪʀʟ*
‎*├⬡ .ᴄʟᴏᴜᴅs*
‎*├⬡ .ғᴜᴛᴜʀɪsᴛɪᴄ*
‎*├⬡ .𝟹ᴅᴘᴀᴘᴇʀ*
‎*├⬡ .ᴇʀᴀsᴇʀ*
‎*├⬡ .sᴜɴsᴇᴛ*
‎*├⬡ .ʟᴇᴀғ*
‎*├⬡ .ɢᴀʟᴀxʏ*
‎*├⬡ .sᴀɴᴅ*
‎*├⬡ .ʙᴏᴏᴍ*
‎*├⬡ .ʜᴀᴄᴋᴇʀ*
‎*├⬡ .ᴅᴇᴠɪʟᴡɪɴɢs*
‎*├⬡ .ɴɪɢᴇʀɪᴀ*
‎*├⬡ .ʙᴜʟʙ*
‎*├⬡ .ᴀɴɢᴇʟᴡɪɴɢs*
‎*├⬡ .ᴢᴏᴅɪᴀᴄ*
‎*├⬡ .ʟᴜxᴜʀʏ*
‎*├⬡ .ᴘᴀɪɴᴛ*
‎*├⬡ .ғʀᴏᴢᴇɴ*
‎*├⬡ .ᴄᴀsᴛʟᴇ*
‎*├⬡ .ᴛᴀᴛᴏᴏ*
‎*├⬡ .ᴠᴀʟᴏʀᴀɴᴛ*
‎*├⬡ .ʙᴇᴀʀ*
‎*├⬡ .ᴛʏᴘᴏɢʀᴀᴘʜʏ*
‎*├⬡ .sᴜᴘᴇʀᴍᴀɴ*
‎*├⬡ .ʙɪʀᴛʜᴅᴀʏ*
‎*╰───────────────❍*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/pBgs9G7z/a003501a28842714.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '0029VabL2NpC1Fu7SCJ1o71w@newsletter',
                        newsletterName: "𝚳𝐔𝐆𝚮𝚫𝐋 𝚳𝐃 𝐒𝐔𝚸𝚸𝚯𝚪𝚻⚜",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
