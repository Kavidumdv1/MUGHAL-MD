//--------------------------------------------------------------------------------------------------------------//
/*created by MR ZAIN 🕵
contact dev1 +923244404347 ♻️
contact dev2 +923144247057 ♻️
© Copy coder alert ⚠
*/
//--------------------------------------------------------------------------------------------------------------//



const axios = require("axios");
const yts = require("yt-search");
const { youtube } = require("btch-downloader");
const { cmd } = require("../command");

cmd({
  pattern: "spotify",
  alias: ["spotify", "ytmusic", "music"],
  react: "🎵",
  desc: "Fetch audio from Spotify or YouTube",
  category: "music",
  filename: __filename,
}, async (conn, mek, m, { from, args, q, reply }) => {
  if (!q) return reply("Please provide a title or link (Spotify/YouTube)!");

  reply("*_UPLOADING AUDIO... 🎧_*");

  try {
    // Try Spotify first
    const spotifySearch = await axios.get(`https://spotifyapi.caliphdev.com/api/search/tracks?q=${encodeURIComponent(q)}`);
    const track = spotifySearch.data[0];
    if (track && track.url) {
      const spotifyDownload = await axios({
        url: `https://spotifyapi.caliphdev.com/api/download/track?url=${encodeURIComponent(track.url)}`,
        method: "GET",
        responseType: "stream"
      });

      if (spotifyDownload.headers["content-type"] === "audio/mpeg") {
        return await conn.sendMessage(from, {
          audio: spotifyDownload.data,
          mimetype: "audio/mpeg",
          contextInfo: {
            externalAdReply: {
              title: track.title,
              body: "Artist: " + track.artist,
              mediaType: 1,
              sourceUrl: track.url,
              renderLargerThumbnail: true
            }
          }
        }, { quoted: mek });
      }
    }
  } catch (e) {
    console.error("Spotify Error:", e.message);
  }

  // Fallback to YouTube
  try {
    const ytResults = await yts(q);
    const ytVideo = ytResults.videos[0];
    if (!ytVideo || ytVideo.seconds > 3600) return reply("No suitable YouTube results found.");

    const ytAudio = await youtube(ytVideo.url);
    if (ytAudio && ytAudio.mp3) {
      return await conn.sendMessage(from, {
        audio: { url: ytAudio.mp3 },
        mimetype: "audio/mpeg",
        contextInfo: {
          externalAdReply: {
            title: ytVideo.title,
            body: "Fetched from YouTube",
            mediaType: 1,
            sourceUrl: ytVideo.url,
            renderLargerThumbnail: true
          }
        }
      }, { quoted: mek });
    } else {
      reply("Failed to fetch audio from YouTube.");
    }
  } catch (err) {
    console.error("YouTube Error:", err.message);
    reply("An error occurred while fetching from YouTube.");
  }
});
