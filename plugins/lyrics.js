//--------------------------------------------------------------------------------------------------------------//
/*created by MR ZAIN 🕵
contact dev1 +923244404347 ♻️
contact dev2 +923144247057 ♻️
© Copy coder alert ⚠
*/
//--------------------------------------------------------------------------------------------------------------//

const axios = require('axios');
const { cmd } = require('../command');

/*
cmd({
    pattern: "lyrics",
    alias: ["lyric"],
    desc: "Get the lyrics of a song by artist and title.",
    react: "🎵",
    category: "utility",
    use: ".lyrics <artist> <song title>",
    filename: __filename,
}, async (conn, mek, m, { args, reply }) => {
    try {
        if (args.length < 2) {
            return reply("❌ Please provide the artist and song title.\nExample: `.lyrics Ed Sheeran - Shape of You`");
        }

        // Parsing input using delimiter
        let artist, title;
        if (args.includes('-')) {
            const delimiterIndex = args.indexOf('-');
            artist = args.slice(0, delimiterIndex).join(' ').trim();
            title = args.slice(delimiterIndex + 1).join(' ').trim();
        } else if (args[0].startsWith('"') && args[args.length - 1].endsWith('"')) {
            artist = args.slice(0, -1).join(' ').replace(/"/g, '').trim();
            title = args.slice(-1).join(' ');
        } else {
            artist = args[0];
            title = args.slice(1).join(' ');
        }

        if (!artist || !title) {
            return reply("❌ Please specify both the artist and the song title.\nExample: `.lyrics \"Joe Dwé Filé\" Shape of You`");
        }

        // Notify the user that the lyrics are being fetched
        reply(`🎵 Searching for lyrics of "${title}" BY ${artist}...`);

        // Fetch lyrics using an API
        const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`);
        const lyrics = response.data.lyrics;

        if (!lyrics) {
            return reply(`❌ Sorry, no lyrics found for "${title}" by ${artist}.`);
        }

        // Send the lyrics back to the chat
        reply(`> 🍓MUGHAL LYRICS RESULT🍓\n\nTitle🎧 *${title}*\nArtist🗣️ *${artist}*\n\n${lyrics}`);
    } catch (error) {
        console.error("Error fetching lyrics:", error.message);

        if (error.response && error.response.status === 404) {
            reply("❌ Sorry, no lyrics found for the specified artist and song title.");
        } else {
            reply("❌ An error occurred while fetching the lyrics. Please try again later.");
        }
    }
});
*/

const axios = require("axios");

cmd({
    pattern: "lyrics",
    alias: ["lyric"],
    desc: "Get the lyrics of a song by artist and title.",
    react: "🎵",
    category: "utility",
    use: ".lyrics <artist> <song title>",
    filename: __filename,
}, async (conn, mek, m, { args, reply }) => {
    try {
        if (args.length < 2) {
            return reply("❌ Please provide the artist and song title.\nExample: `.lyrics Ed Sheeran - Shape of You`");
        }

        let artist, title;
        if (args.includes('-')) {
            const i = args.indexOf('-');
            artist = args.slice(0, i).join(' ').trim();
            title = args.slice(i + 1).join(' ').trim();
        } else {
            artist = args[0];
            title = args.slice(1).join(' ');
        }

        if (!artist || !title) {
            return reply("❌ Please provide both artist and song title.");
        }

        reply(`🎵 Searching lyrics for "${title}" by ${artist}...`);

        const { data } = await axios.get(`https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`);
        const lyrics = data.lyrics;

        const maxLength = 4000;
        const safeLyrics = lyrics.length > maxLength ? lyrics.slice(0, maxLength) + '...\n\n[Truncated]' : lyrics;

        await conn.sendMessage(from, {
            text: `> 🍓 *MUGHAL LYRICS RESULT* 🍓\n\n🎧 *Title:* ${title}\n🗣️ *Artist:* ${artist}\n\n${safeLyrics}`
        }, { quoted: mek });

    } catch (error) {
        console.error("Lyrics error:", error.message);
        if (error.response?.status === 404) {
            reply("❌ No lyrics found for the given song.");
        } else {
            reply("❌ An error occurred while fetching lyrics.");
        }
    }
});
