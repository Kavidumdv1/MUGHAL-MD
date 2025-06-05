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
  category: "convert",
  use: ".ss <link>",
  filename: __filename,
},
async (conn, mek, m, {
  from, args, q, reply
}) => {
  if (!q) {
    return reply("Please provide a URL to capture a screenshot.");
  }

  try {
    const api = `https://api.davidcyriltech.my.id/ssweb?url=${encodeURIComponent(q)}`;
    const response = await axios.get(api);

    const screenshotUrl = response.data?.result?.url;

    if (!screenshotUrl) {
      return reply("❌ Screenshot URL not found in API response.");
    }

    await conn.sendMessage(from, {
      image: { url: screenshotUrl },
      caption: "> *© 𝚸𝚯𝐖𝚵𝚪𝚵𝐃 𝚩𝐘 𝚳𝐔𝐆𝚮𝚫𝐋 𝚳𝐃⚜*"
    }, { quoted: m });

  } catch (error) {
    console.error("❌ Screenshot error:", error);
    reply("❌ Failed to capture the screenshot. Please try again.");
  }
});

