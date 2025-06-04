System({
    pattern: 'insta ?(.*)',
    fromMe: isPrivate,
    type: 'download',
    desc: 'instagram downloader',
}, async (message, match) => {
    const url = (await extractUrlsFromText(match || message.reply_message.text))[0];
    if (!url) return await message.reply('Please provide an Instagram *url*'); 
    if (!isUrl(url)) return await message.reply("Please provide a valid Instagram *url*");
    if (!url.includes("instagram.com")) return await message.reply("*Please provide a valid Instagram url*");
    const data = await instaDL(url);
    if (!data || data.length === 0) return await message.reply("*No content found at the provided URL*");
    for (const imageUrl of data) {
        if (imageUrl) await message.sendFromUrl(imageUrl.url, {
            quoted: message.data,
            caption: "𝚸𝚯𝐖𝚵𝚪𝚵𝐃 𝚩𝐘 𝚳𝐔𝐆𝚮𝚫𝐋 𝚳𝐃 ⚜"
        });
    }
});
