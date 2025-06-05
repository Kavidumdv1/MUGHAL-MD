//--------------------------------------------------------------------------------------------------------------//
/*created by MR ZAIN 🕵
contact dev1 +923244404347 ♻️
contact dev2 +923144247057 ♻️
© Copy coder alert ⚠
*/
//--------------------------------------------------------------------------------------------------------------//








const { cmd } = require("../command"); const yts = require("yt-search"); const axios = require("axios");

cmd({ pattern: "ong", alias: ["musiic", "mp04"], desc: "Search and download a song from YouTube", category: "media", react: "🎵", filename: __filename }, async (conn, mek, m, { from, args, q, reply }) => { try { if (!q) return reply("Please provide a song name or YouTube link to download.");

let videoUrl = q;
    if (!q.includes("youtube.com") && !q.includes("youtu.be")) {
        reply("*🎐 ᗰᑌGᕼᗩᒪ ᗰᗪ ᔕEᗩᖇᑕᕼIᑎG ᔕOᑎG...*");
        const searchResults = await yts(q);
        if (!searchResults.videos.length) return reply("No results found for your query.");
        videoUrl = searchResults.videos[0].url;
    }
    
    const apiUrl = `https://apis.davidcyriltech.my.id/youtube/mp4?url=${videoUrl}`;
    const response = await axios.get(apiUrl);
    if (!response.data || !response.data.status || !response.data.result.url) {
        return reply("Failed to fetch the video. Try again later.");
    }
    
    await conn.sendMessage(from, {
        video: { url: response.data.result.url },
        caption: `🎶 *Title:* ${response.data.result.title}\n🔗 *Link:* ${videoUrl}`
    }, { quoted: mek });
    
} catch (e) {
    console.error("Error in song command:", e);
    reply("An error occurred while processing your request.");
}

});

cmd({ pattern: "music", alias: ["play2", "song2"], desc: "Search and download audio from YouTube", category: "media", react: "🎧", filename: __filename }, async (conn, mek, m, { from, args, q, reply }) => { try { if (!q) return reply("*𝑃𝑙𝑒𝑎𝑠𝑒 𝑝𝑟𝑜𝑣𝑖𝑑𝑒 𝑎 𝑠𝑜𝑛𝑔 𝑛𝑎𝑚𝑒..*");

let videoUrl = q;
    if (!q.includes("youtube.com") && !q.includes("youtu.be")) {
        reply("*🎐 ᗰᑌGᕼᗩᒪ ᗰᗪ ᔕEᗩᖇᑕᕼIᑎG ᔕOᑎG...*");
        const searchResults = await yts(q);
        if (!searchResults.videos.length) return reply("No results found for your query.");
        videoUrl = searchResults.videos[0].url;
    }
    
    const apiUrl = `https://apis.davidcyriltech.my.id/youtube/mp3?url=${videoUrl}`;
    const response = await axios.get(apiUrl);
    if (!response.data || !response.data.success || !response.data.result.downloadUrl) {
        return reply("Failed to fetch the audio. Try again later.");
    }
    
    await conn.sendMessage(from, {
        audio: { url: response.data.result.downloadUrl },
        mimetype: "audio/mpeg",
        ptt: false,
        caption: `🎵 *Title:* ${response.data.result.title}\n🔗 *Link:* ${videoUrl}`
    }, { quoted: mek });
    
} catch (e) {
    console.error("Error in play command:", e);
    reply("An error occurred while processing your request.");
}

});
