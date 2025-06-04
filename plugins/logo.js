//---------------------------------------------
//           MUGHAL-MD  
//---------------------------------------------
//  ⚠️ DO NOT MODIFY THIS FILE ⚠️  
//---------------------------------------------
const { cmd, commands } = require('../command');
const axios = require('axios');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, sleep, fetchJson } = require('../lib/functions2');

cmd({
    pattern: "3dcomic",
    desc: "Create a 3D Comic-style text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: 3dcomic Zain");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-online-3d-comic-style-text-effects-817.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "dragonball",
    desc: "Create a 3D Comic-style text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: 3dcomic Ahmed");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "deadpool",
    desc: "Create a Deadpool logo-style text image",
    category: "logo",
    react: "🎯",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: `.deadpool Zain`");
        }

        const name = args.join(" ");

        // API endpoint with the Deadpool template and user-provided name
        const apiUrl = `https://api.pink-venom.repl.co/api/logo?url=https://en.ephoto360.com/create-text-effects-in-the-style-of-the-deadpool-logo-818.html&name=${encodeURIComponent(name)}`;

        const response = await fetch(apiUrl);
        const result = await response.json();

        if (!result?.result?.download_url) {
            return reply("❌ Failed to generate image. Please try again later.");
        }

        // Send the image with the caption showing the name
        await conn.sendMessage(from, {
            image: { url: result.result.download_url },
            caption: `🖼️ *𝚸𝚯𝐖𝚵𝚪𝚵𝐃 𝚩𝐘 𝚳𝐔𝐆𝚮𝚫𝐋 𝚳𝐃*\n\n👤 Name: *${name}*`
        }, { quoted: m });

    } catch (e) {
        console.error(e);
        reply(`❌ *An error occurred while generating the image:*\n${e.message}`);
    }
});


cmd({
    pattern: "blackpink",
    desc: "Create a blackpink text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: 3dcomic Ahmed");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "neonlight",
    desc: "Create a neon light text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: neonlight Zain");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "cat",
    desc: "Create a cat text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: cat Ahmed");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "sadgirl",
    desc: "Create a Sad Girl-style text logo",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: `.sadgirl Zain`");
        }

        const name = args.join(" ");

        const apiUrl = `https://api.pink-venom.repl.co/api/logo?url=https://en.ephoto360.com/write-text-on-wet-glass-online-589.html&name=${encodeURIComponent(name)}`;

        const response = await fetch(apiUrl);
        const result = await response.json();

        if (!result?.result?.download_url) {
            return reply("❌ Image could not be generated. Try again later.");
        }

        await conn.sendMessage(from, {
            image: { url: result.result.download_url }
        }, { quoted: m });

    } catch (e) {
        console.error("Error in .sadgirl command:", e);
        return reply(`❌ *An error occurred:*\n${e.message}`);
    }
});



cmd({
    pattern: "pornhub",
    desc: "Create a Pornhub-style text logo",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: `.pornhub MUGHAL MD`");
        }

        const name = args.join(" ");

        const apiUrl = `https://api.pink-venom.repl.co/api/logo?url=https://en.ephoto360.com/create-pornhub-style-logos-online-free-549.html&name=${encodeURIComponent(name)}`;

        const response = await fetch(apiUrl);
        const result = await response.json();

        if (!result?.result?.download_url) {
            return reply("❌ Could not generate image. Please try again later.");
        }

        await conn.sendMessage(from, {
            image: { url: result.result.download_url }
        }, { quoted: m });

    } catch (e) {
        console.error(e);
        return reply(`❌ *Error:* ${e.message}`);
    }
});


cmd({
    pattern: "naruto",
    desc: "Create a Naruto text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: naruto Ahmed");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "thor",
    desc: "Create a Thor-style text logo",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: `.thor Zain`");
        }

        const name = args.join(" ");

        const apiUrl = `https://api.pink-venom.repl.co/api/logo?url=https://en.ephoto360.com/create-thor-logo-style-text-effects-online-for-free-796.html&name=${encodeURIComponent(name)}`;

        const response = await fetch(apiUrl);
        const result = await response.json();

        if (!result?.result?.download_url) {
            return reply("❌ Failed to generate Thor logo. Please try again later.");
        }

        await conn.sendMessage(from, {
            image: { url: result.result.download_url }
        }, { quoted: m });

    } catch (e) {
        console.error("Thor command error:", e);
        return reply(`❌ *An error occurred:*\n${e.message}`);
    }
});


cmd({
    pattern: "america",
    desc: "Create  American text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: America Ahmed");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "eraser",
    desc: "Create a Eraser text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: Eraser Zain");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "3dpaper",
    desc: "Create a 3D Paper text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: 3dpaper Ahmed");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "futuristic",
    desc: "Create a futuristic text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: futuristic Zain");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "clouds",
    desc: "Create a Clouds text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: Clouds Ahmed");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "sand",
    desc: "Create a Sand text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: sand Zain");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "galaxy",
    desc: "Create a Galaxy text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: galaxy Ahmed");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "leaf",
    desc: "Create a Leaf text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: leaf Zain");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "sunset",
    desc: "Create a sunset text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: sunset Ahmed");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-sunset-light-text-effects-online-807.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "nigeria",
    desc: "Create a Nigeria text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: nigeria Zain");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "devilwings",
    desc: "Create a Devil Wings. text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: devilwings Ahmed");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "hacker",
    desc: "Create a Hacker text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: hacker Zain");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "boom",
    desc: "Create a Boom text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: boom Ahmed");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "luxury",
    desc: "Create a Luxury-style text logo",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: `.luxury Zain`");
        }

        const name = args.join(" ");

        const apiUrl = `https://api.pink-venom.repl.co/api/logo?url=https://en.ephoto360.com/floral-luxury-logo-collection-for-branding-616.html&name=${encodeURIComponent(name)}`;

        const response = await fetch(apiUrl);
        const result = await response.json();

        if (!result?.result?.download_url) {
            return reply("❌ Failed to generate image. Please try again later.");
        }

        await conn.sendMessage(from, {
            image: { url: result.result.download_url }
        }, { quoted: m });

    } catch (e) {
        console.error("Luxury command error:", e);
        return reply(`❌ *An error occurred:*\n${e.message}`);
    }
});


cmd({
    pattern: "zodiac",
    desc: "Create a Zodiac-style wallpaper",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: `.zodiac Ahmed`");
        }

        const name = args.join(" ");

        const apiUrl = `https://api.pink-venom.repl.co/api/logo?url=https://en.ephoto360.com/create-star-zodiac-wallpaper-mobile-604.html&name=${encodeURIComponent(name)}`;

        const response = await fetch(apiUrl);
        const result = await response.json();

        if (!result?.result?.download_url) {
            return reply("❌ Failed to generate Zodiac wallpaper. Try again later.");
        }

        await conn.sendMessage(from, {
            image: { url: result.result.download_url }
        }, { quoted: m });

    } catch (e) {
        console.error("Zodiac command error:", e);
        return reply(`❌ *An error occurred:*\n${e.message}`);
    }
});


cmd({
    pattern: "angelwings",
    desc: "Create a Angel Wings text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: angelwings Zain");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/angel-wing-effect-329.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "bulb",
    desc: "Create a Bulb text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: bulb Ahmed");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/text-effects-incandescent-bulbs-219.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "tatoo",
    desc: "Create a Tatoo ext effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: Tatoo Ahmed");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/make-tattoos-online-by-empire-tech-309.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "castle",
    desc: "Create a  Castle text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: castle Zain");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-3d-castle-pop-out-mobile-photo-effect-786.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "frozen",
    desc: "Create a Frozen text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: frozen Ahmed");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-frozen-christmas-text-effect-online-792.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "paint",
    desc: "Create a Paint text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: paint Ahmed");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "birthday",
    desc: "Create a Birthdaytext effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: birthday Zain");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/beautiful-3d-foil-balloon-effects-for-holidays-and-birthday-803.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "typography",
    desc: "Create a Typography text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: Typography Ahmed");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-typography-status-online-with-impressive-leaves-357.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

cmd({
    pattern: "bear",
    desc: "Create a Bear text effect",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: bear Zain");
        }
        
        const name = args.join(" ");
        
        // API URL with user-provided name
        const apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/free-bear-logo-maker-online-673.html&name=${encodeURIComponent(name)}`;

        // Fetch JSON response
        const result = await fetchJson(apiUrl);

        // Check if the download_url is present
        if (!result?.result?.download_url) {
            return;
        }

        // Send the 3D Comic-style text effect image
        await conn.sendMessage(from, {
            image: {
                url: result.result.download_url
            }
        });

    } catch (e) {
        return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${e.message}`);
    }
});

const fetch = require("node-fetch"); // ensure this is imported at the top

cmd({
    pattern: "valorant",
    desc: "Create a Valorant YouTube banner with three text inputs",
    category: "logo",
    react: "🎨",
    filename: __filename
}, async (conn, mek, m, { from, quoted, prefix, args, reply }) => {
    try {
        if (args.length < 3) {
            return reply(`❌ Please provide 3 text inputs. Example:\n${prefix}valorant Text1 Text2 Text3`);
        }

        const text1 = args[0];
        const text2 = args[1];
        const text3 = args.slice(2).join(" ");

        const apiUrl = `https://api.nexoracle.com/ephoto360/valorant-youtube-banner?apikey=MepwBcqIM0jYN0okD&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}&text3=${encodeURIComponent(text3)}`;

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch image from API");

        const imageBuffer = Buffer.from(await response.arrayBuffer());

        await conn.sendMessage(from, {
            image: imageBuffer,
            caption: "✅ Here is your Valorant YouTube banner!"
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in .valorant command:", e);
        return reply(`❌ *An error occurred:*\n${e.message}`);
    }
});

cmd({
    pattern: "superman",
    desc: "Create a superhero-style text effect (Avengers)",
    category: "logo",
    react: "🦸‍♂️",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        if (!args.length) {
            return reply("❌ Please provide a name. Example: `.superman Zain`");
        }

        const name = args.join(" ");

        const apiUrl = `https://api.pink-venom.repl.co/api/textpro?url=https://textpro.me/create-3d-avengers-logo-style-text-effect-online-974.html&text=${encodeURIComponent(name)}`;

        const response = await fetch(apiUrl);
        const result = await response.json();

        if (!result?.result?.url) {
            return reply("❌ Failed to generate superhero-style image. Try again later.");
        }

        const imageResponse = await fetch(result.result.url);
        const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());

        await conn.sendMessage(from, {
            image: imageBuffer
        }, { quoted: mek });

    } catch (e) {
        console.error("Superhero command error:", e);
        return reply(`❌ *An error occurred:*\n${e.message}`);
    }
});
