//--------------------------------------------------------------------------------------------------------------//
/*created by MR ZAIN 🕵
contact dev1 +923244404347 ♻️
contact dev2 +923144247057 ♻️
© Copy coder alert ⚠
*/
//--------------------------------------------------------------------------------------------------------------//z




const axios = require("axios");
const { cmd } = require("../command");

cmd({
  pattern: "stickersearch",
  alias: ["stsearch", "sticksearch"],
  desc: "Search and fetch stickers based on a keyword.",
  category: "fun",
  react: "🔍",
  filename: __filename
}, async (conn, mek, m, { args, reply }) => {
  try {
    if (args.length === 0) {
      return reply(`❗ *Please provide a search term.*\n\nExample:\n.stickersearch funny`);
    }

    const query = args.join(" ");
    const tenorApiKey = "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c"; // Replace with your own key
    const apiUrl = `https://tenor.googleapis.com/v2/search?q=${encodeURIComponent(query)}&key=${tenorApiKey}&client_key=my_project&limit=6&media_filter=gif`;

    const { data } = await axios.get(apiUrl);

    if (!data.results || data.results.length === 0) {
      return reply(`❌ *No stickers found for:* ${query}`);
    }

    for (const result of data.results) {
      const stickerUrl = result.media_formats?.nanowebp?.url || result.media_formats?.mediumgif?.url;

      if (!stickerUrl) continue;

      await conn.sendMessage(m.chat, {
        sticker: { url: stickerUrl }
      }, { quoted: mek });

      await new Promise(res => setTimeout(res, 1000)); // prevent spam
    }

  } catch (error) {
    console.error("Error fetching Tenor stickers:", error.message);
    reply(`⚠️ *An error occurred while fetching stickers.*\n\n${error.message}`);
  }
});

