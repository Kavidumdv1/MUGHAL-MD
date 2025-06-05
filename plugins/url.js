//--------------------------------------------------------------------------------------------------------------//
/*created by MR ZAIN 🕵
contact dev1 +923244404347 ♻️
contact dev2 +923144247057 ♻️
© Copy coder alert ⚠
*/
//--------------------------------------------------------------------------------------------------------------//



System({
    pattern: "url",
    fromMe: isPrivate,
    desc: "make media into url",
    type: "converter",
}, async (message, match) => {
    if (!message.quoted || (!message.reply_message.image && !message.reply_message.video && !message.reply_message.audio && !message.reply_message.sticker)) return await message.reply('*Reply to image,video,audio,sticker*');
    return await sendUrl(message);
});
