const config = require('../config');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');
const axios = require('axios');

function isEnabled(value) {
    // Function to check if a value represents a "true" boolean state
    return value && value.toString().toLowerCase() === "true";
}

cmd({
    pattern: "env",
    alias: ["setting", "allvar"],
    desc: "Settings of bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        // Define the settings message with the correct boolean checks
        let envSettings = `╭━━━〔 *𝚳𝐔𝐆𝚮𝚫𝐋 𝚳𝐃* 〕━━┈⊷
┃▸╭───────────···๏
┃▸├❒ *⚙️ENV SETTINGS⚙️*
┃▸└───────────···๏
╰────────────────┈⊷
╭━━〔 *Enabled Disabled* 〕━┈⊷
├❒ *Status View:* ${isEnabled(config.AUTO_STATUS_SEEN) ? "Enabled ✅" : "Disabled ❌"}
├❒ *Status Reply:* ${isEnabled(config.AUTO_STATUS_REPLY) ? "Enabled ✅" : "Disabled ❌"}
├❒ *Auto Reply:* ${isEnabled(config.AUTO_REPLY) ? "Enabled ✅" : "Disabled ❌"}
├❒ *Auto Sticker:* ${isEnabled(config.AUTO_STICKER) ? "Enabled ✅" : "Disabled ❌"}
├❒ *Auto Voice:* ${isEnabled(config.AUTO_VOICE) ? "Enabled ✅" : "Disabled ❌"}
├❒ *Custom Reacts:* ${isEnabled(config.CUSTOM_REACT) ? "Enabled ✅" : "Disabled ❌"}
├❒ *Auto React:* ${isEnabled(config.AUTO_REACT) ? "Enabled ✅" : "Disabled ❌"}
├❒ *Anti-Link:* ${isEnabled(config.ANTI_LINK) ? "Enabled ✅" : "Disabled ❌"}
├❒ *Anti-Bad Words:* ${isEnabled(config.ANTI_BAD) ? "Enabled ✅" : "Disabled ❌"}
├❒ *Auto Typing:* ${isEnabled(config.AUTO_TYPING) ? "Enabled ✅" : "Disabled ❌"}
├❒ *Auto Recording:* ${isEnabled(config.AUTO_RECORDING) ? "Enabled ✅" : "Disabled ❌"}
├❒ *Always Online:* ${isEnabled(config.ALWAYS_ONLINE) ? "Enabled ✅" : "Disabled ❌"}
├❒ *Status React:* ${isEnabled(config.AUTO_STATUS_REACT) ? "Enabled ✅" : "Disabled ❌"}
├❒ *Public Mode:* ${isEnabled(config.PUBLIC_MODE) ? "Enabled ✅" : "Disabled ❌"}
├❒ *Read Message:* ${isEnabled(config.READ_MESSAGE) ? "Enabled ✅" : "Disabled ❌"}
╰━━━━━━━━━━━━──┈⊷
> ${config.DESCRIPTION}`;

        // Send message with an image
        await conn.sendMessage(
            from,
            {
                image: { url: 'https://i.ibb.co/pBgs9G7z/a003501a28842714.jpg' }, // Image URL
                caption: envSettings,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '0029VabL2NpC1Fu7SCJ1o71w@newsletter',
                        newsletterName: "𝚳𝐔𝐆𝚮𝚫𝐋 𝚳𝐃 𝐒𝐔𝚸𝚸𝚯𝚪𝚻 ⚜",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

               // Send an audio file
        await conn.sendMessage(from, {
            audio: { url: 'https://i.imgur.com/3Txf6tP.mp4' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.log(error);
        reply(`Error: ${error.message}`);
    }
});


   
