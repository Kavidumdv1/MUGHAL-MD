//--------------------------------------------------------------------------------------------------------------//
/*created by MR ZAIN 🕵
contact dev1 +923244404347 ♻️
contact dev2 +923144247057 ♻️
© Copy coder alert ⚠
*/
//--------------------------------------------------------------------------------------------------------------//


const axios = require("axios");
const config = require('../config');
const { cmd } = require('../command');

cmd({
  pattern: "ss",
  alias: ["ssweb"],
  react: "🚀",
  desc: "Download screenshot of a given link.",
  category: "other",
  use: ".ss <link>",
  filename: __filename,
},
async (conn, mek, m, {
  from, q, reply
}) => {
  if (!q) {
    return reply("❌ Please provide a valid URL to capture a screenshot.\n\nExample: *.ss https://example.com*");
  }

  try {
    // Clean and encode URL
    const cleanUrl = encodeURIComponent(q.trim());

    // API Request
    const response = await axios.get(`https://bk9.fun/tools/screenshot?device=tablet&url=${cleanUrl}`);
    const screenshotUrl = response?.data?.screenshotUrl;

    if (!screenshotUrl) {
      return reply("⚠️ Screenshot URL not received. The API might be down or the URL is invalid.");
    }

    // Send the screenshot image
    await conn.sendMessage(from, {
      image: { url: screenshotUrl },
      caption: "*MUGHAL SS WEB*\n\n> *© ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍᴜɢʜᴀʟ ᴍᴅ*",
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '0029VabL2NpC1Fu7SCJ1o71w@newsletter',
          newsletterName: "𝚳𝐔𝐆𝚮𝚫𝐋 𝚳𝐃 𝐒𝐔𝚸𝚸𝚯𝚪𝚻⚜",
          serverMessageId: 143,
        },
      },
    }, { quoted: m });

  } catch (error) {
    console.error("Screenshot error:", error);
    reply("❌ Failed to capture the screenshot. Please make sure the URL is correct or try again later.");
  }
});
