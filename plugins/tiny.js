//--------------------------------------------------------------------------------------------------------------//
/*created by MR ZAIN 🕵
contact dev1 +923244404347 ♻️
contact dev2 +923144247057 ♻️
© Copy coder alert ⚠
*/
//--------------------------------------------------------------------------------------------------------------//


const { cmd } = require("../command");
const fetch = require("node-fetch");
const axios = require("axios");

cmd({
    pattern: "tiny",
    alias: ['short', 'shorturl'],
    react: "🫧",
    desc: "Makes URL tiny.",
    category: "converter",
    use: "<url>",
    filename: __filename,
},
async (conn, mek, m, { from, quoted, isOwner, isAdmins, reply, args }) => {
    console.log("Command tiny triggered"); // Ajoutez ceci pour vérifier si la commande est déclenchée

    if (!args[0]) {
        console.log("No URL provided"); // Ajoutez ceci pour vérifier si l'URL est fournie
        return reply("*🏷️ 𝐏𝐋𝐄𝐀𝐒𝐄 𝐏𝐑𝐎𝐕𝐈𝐃𝐄 𝐀  𝐋𝐈𝐍𝐊.*");
    }

    try {
        const link = args[0];
        console.log("URL to shorten:", link); // Ajoutez ceci pour vérifier l'URL fournie
        const response = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`);
        const shortenedUrl = response.data;

        console.log("Shortened URL:", shortenedUrl); // Ajoutez ceci pour vérifier l'URL raccourcie
        return reply(`*🛡️YOUR SHORTENED URL*\n\n${shortenedUrl}`);
    } catch (e) {
        console.error("Error shortening URL:", e);
        return reply("An error occurred while shortening the URL. Please try again.");
    }
});
