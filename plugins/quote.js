

const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "quote",
    desc: "Get a random inspiring quote.",
    category: "fun",
    react: "💬",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const response = await axios.get('https://api.quotable.io/random');
        const quote = response.data;
        const message = `
💬 "${quote.content}"
- ${quote.author}
*QUOTES BY MUGHAL TECH*
        `;
        return reply(message);
    } catch (e) {
        console.error("Error fetching quote:", e);
        reply("𝐶𝑜𝑢𝑙𝑑 𝑛𝑜𝑡 𝑓𝑒𝑡𝑐ℎ 𝑎 𝑞𝑢𝑜𝑡𝑒. 𝑃𝑙𝑒𝑎𝑠𝑒 𝑡𝑟𝑦 𝑎𝑔𝑎𝑖𝑛 𝑙𝑎𝑡𝑒𝑟..");
    }
});
