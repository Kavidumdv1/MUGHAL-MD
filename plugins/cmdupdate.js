//--------------------------------------------------------------------------------------------------------------//
/*created by MR ZAIN 🕵
contact dev1 +923244404347 ♻️
contact dev2 +923144247057 ♻️
© Copy coder alert ⚠
*/
//--------------------------------------------------------------------------------------------------------------//



const fs = require('fs');
const path = require('path');
const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
  pattern: "updatecmd",
  react: "💡",
  desc: "Update commands.",
  category: "owner",
  filename: __filename
},
async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!isOwner) return reply("Only my owner can use this command.");
    
    const pluginsDir = path.join(__dirname, '../plugins');
    const files = fs.readdirSync(pluginsDir);
    
    for (const file of files) {
      if (file.endsWith('.js')) {
        const filePath = path.join(pluginsDir, file);
        require(filePath);
        console.log(`Loaded ${file}`);
      }
    }
    
    reply("Commands updated successfully.");
  } catch (e) {
    console.log(e);
    reply(`Error updating commands: ${e.message}`);
  }
});
