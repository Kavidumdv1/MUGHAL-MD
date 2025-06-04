/*created by MR ZAIN 🕵
contact dev1 +923244404347 ♻️
contact dev2 +923144247057 ♻️
© Copy coder alert ⚠
*/







const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');


cmd({
  pattern: 'fluxpro',
  alias: 'flux',
  react: '🧩',
  desc: 'Generate an image using Flux',
  category: 'image',
  filename: __filename
}, async (conn, mek, m, {
  body,
  from,
  quoted,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    const text = body.trim().replace(command, '').trim();
    if (!text) {
      return reply(`*Usage:* ${command} <prompt>\n\n*Example:* ${command} cat`);
    }

    await reply('> *𝚳𝐔𝐆𝚮𝚫𝐋 𝚳𝐃  PROCESSING IMAGE...*');

    const apiUrl = `https://apis.davidcyriltech.my.id/flux?prompt=${encodeURIComponent(text)}`;

    await conn.sendMessage(m.chat, { image: { url: apiUrl }, caption: `🎨 *FLUX IMAGE GENERATOR*\n\n📄 *PROMPT:* ${text}\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚳𝐔𝐆𝚮𝚫𝐋 𝚳𝐃 ⚜` }, { quoted: m });
  } catch (error) {
    console.error('Error in Flux command:', error);
    reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
  }
});


