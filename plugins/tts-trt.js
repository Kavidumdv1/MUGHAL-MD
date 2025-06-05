//--------------------------------------------------------------------------------------------------------------//
/*created by MR ZAIN 🕵
contact dev1 +923244404347 ♻️
contact dev2 +923144247057 ♻️
© Copy coder alert ⚠
*/
//--------------------------------------------------------------------------------------------------------------//




const axios = require('axios');
const config = require('../config')
const {cmd , commands} = require('../command')
const googleTTS = require('google-tts-api')

System({
    pattern: "trt",
    fromMe: isPrivate,
    desc: "Translate messages to another language",
    type: "converter",
  }, async (message, match) => {
    try {
      const langMap = {
        urdu: "ur",
        hindi: "hi",
        english: "en",
        arabic: "ar",
        spanish: "es",
        french: "fr",
        german: "de",
        chinese: "zh-CN",
        japanese: "ja",
        korean: "ko",
        russian: "ru",
        tamil: "ta",
        telugu: "te",
        bengali: "bn",
        portuguese: "pt",
        turkish: "tr",
        malayalam: "ml",
        // Add more if needed
      };
  
      match = message.reply_message?.text || match;
      if (message.quoted && message.reply_message?.text && match)
        match = message.reply_message.text + ";" + match;
  
      if (!match)
        return await message.reply("_Please provide text to translate. Example: `I am fine;ur` or reply to a message with `.trt urdu`_");
  
      const [text, rawLang] = match.split(";");
      const langCode = langMap[rawLang?.trim()?.toLowerCase()] || rawLang?.trim() || config.LANG;
  
      if (!langCode || langCode.length > 5)
        return await message.reply("❌ Invalid or missing language. Use a code like `ur`, or name like `urdu`, etc.");
  
      const result = await translate(text, langCode);
      const translated = result?.text || result;
  
      return await message.reply(`> *Original:* ${text}\n> *Translated:* ${translated}\n> *To:* ${langCode.toUpperCase()}`);
    } catch (e) {
      console.error("Translation Error:", e);
      return await message.reply("⚠️ An error occurred while translating. Try again later.");
    }
  });
  

//____________________________TTS___________________________
const googleTTS = require('google-tts-api'); // Make sure this is added

cmd({
  pattern: "tts",
  desc: "Convert text to voice message",
  category: "download",
  react: "👧",
  filename: __filename
},
async (conn, mek, m, {
  from, q, reply
}) => {
  try {
    if (!q) return reply("❗ Please provide some text to convert to voice.\nExample: `.tts Hello world`");

    const url = googleTTS.getAudioUrl(q, {
      lang: 'hi-IN', // You can change this to 'en', 'ur', etc.
      slow: false,
      host: 'https://translate.google.com',
    });

    await conn.sendMessage(from, {
      audio: { url },
      mimetype: 'audio/mpeg',
      ptt: true, // true = push-to-talk (voice note style)
    }, { quoted: mek });

  } catch (err) {
    console.error("TTS Error:", err);
    reply("⚠️ Failed to convert text to speech. Try again.");
  }
});

