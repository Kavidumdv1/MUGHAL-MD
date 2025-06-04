//--------------------------------------------------------------------------------------------------------------//
/*created by MR ZAIN 🕵
contact dev1 +923244404347 ♻️
contact dev2 +923144247057 ♻️
© Copy coder alert ⚠
*/
//--------------------------------------------------------------------------------------------------------------//




const { delay } = require("@whiskeysockets/baileys");
const { cmd } = require("../command");

cmd({
  pattern: "squidgame",
  desc: "Launch the Squid Game game in a group",
  category: "fun",
  filename: __filename
}, async (conn, mek, m, { isAdmin, isOwner, participants, reply }) => {
  try {
    if (!m.isGroup) return reply("❌ This command can only be used in groups.");
    if (!isAdmin && !isOwner) return reply("❌ This command can only be used in groups.");

    let groupMembers = participants.filter(p => !p.admin); // Exclure les admins
    if (groupMembers.length < 5) return reply("⚠ It takes at least 5 non-administ members to play.");

    let gameCreator = "@" + m.sender.split("@")[0];

    // Message d'annonce du jeu
    let gameMessage = `🔴 *Squid Game: Red Light,🟢Green Light*\n\n🎭 *Front Man*: (${gameCreator})\n`;
    gameMessage += groupMembers.map(m => "@" + m.id.split("@")[0]).join("\n") + "\n\n";
    gameMessage += "All the other members of the group are added as players! The game begins in 50 seconds.";

    await conn.sendMessage(m.chat, { text: gameMessage, mentions: groupMembers.map(m => m.id) });

    await delay(50000); // Attente de 50s avant de sélectionner les joueurs

    // Sélectionner 50 joueurs aléatoires
    let players = groupMembers.sort(() => 0.5 - Math.random()).slice(0, 5);

    let playersList = players.map((p, i) => `${i + 1}. @${p.id.split("@")[0]}`).join("\n");

    await conn.sendMessage(m.chat, {
      text: `🎮 *List of players: *\n${playersList}\n\n🔔 The game starts now !`,
      mentions: players.map(p => p.id)
    });

    await delay(3000);

    // Explication des règles
    let rulesMessage = `📜 *Squid game rules:*\n\n`
      + `1️⃣ During 🟥 *Red Light *, players who send a message will be eliminated *and *expelled *from the group.\n\n`
      + `2️⃣ During 🟩 *Green Light *, players must send a message. Those who remain silent will be eliminated.\n\n`
      + `3️⃣ The game ends when there is only one player left.\n\n`
      + `🏆 Survised to become the *winning * !`;

    await conn.sendMessage(m.chat, { text: rulesMessage });

    await delay(5000);

    let remainingPlayers = [...players];
    while (remainingPlayers.length > 1) {
      let isGreenLight = Math.random() > 0.5;
      let lightMessage = isGreenLight ? "🟩 *Green Light*" : "🟥 *Red Light*";
      await conn.sendMessage(m.chat, { text: `🔔 ${lightMessage}` });

      await delay(5000); // Délai de 5s entre chaque phase

      let playersToKick = [];
      let spokenPlayers = new Set(); // Stocke ceux qui ont parlé

      conn.ev.on("messages.upsert", (msg) => {
        let sender = msg.messages[0].key.remoteJid;
        if (remainingPlayers.find(p => p.id === sender)) spokenPlayers.add(sender);
      });

      if (isGreenLight) {
        // Vérifier qui ne parle pas
        for (let player of remainingPlayers) {
          if (!spokenPlayers.has(player.id)) {
            playersToKick.push(player);
          }
        }
      } else {
        // Vérifier qui parle
        for (let player of remainingPlayers) {
          if (spokenPlayers.has(player.id)) {
            playersToKick.push(player);
          }
        }
      }

      for (let player of playersToKick) {
        await conn.groupParticipantsUpdate(m.chat, [player.id], "remove");
        let eliminationMessage = isGreenLight
          ? `❌ @${player.id.split("@")[0]} remained silent during 🟩 Green Light and was eliminated and expelled from the group.`
          : `❌ @${player.id.split("@")[0]} wrote during 🟥 Red Light and was eliminated and expelled from the group.`;

        await conn.sendMessage(m.chat, {
          text: eliminationMessage,
          mentions: [player.id]
        });
      }

      remainingPlayers = remainingPlayers.filter(p => !playersToKick.includes(p));
    }

    if (remainingPlayers.length === 1) {
      await conn.sendMessage(m.chat, {
        text: `🏆 *Congratulations* @${remainingPlayers[0].id.split("@")[0]} !*\nYou survived and won the Squid Game! 🎉`,
        mentions: [remainingPlayers[0].id]
      });
    }
  } catch (error) {
    console.error("Error in the command .squidgame:", error);
    reply("❌ An error occurred while starting the Squid Game.");
  }
});

cmd({
    pattern: "konami",
    desc: "Simulate a match between two teams and choose a winner randomly after 30 seconds.",
    category: "game",
    react: "⚽",
    filename: __filename,
    use: ".konami"
}, async (conn, mek, m, { from, sender, reply }) => {
    try {
      // Liste étendue des clubs et équipes internationales avec leurs emojis
        const teams = [
            "Real Madrid 🇪🇸",
            "FC Barcelone 🇪🇸",
            "Manchester United 🇬🇧",
            "Liverpool FC 🇬🇧",
            "Bayern Munich 🇩🇪",
            "Juventus 🇮🇹",
            "Paris Saint-Germain 🇫🇷",
            "Arsenal FC 🇬🇧",
            "AC Milan 🇮🇹",
            "Inter Milan 🇮🇹",
            "Chelsea FC 🇬🇧",
            "Borussia Dortmund 🇩🇪",
            "Cameroun 🇨🇲",
            "Côte D'Ivoire 🇨🇮",
            "Tottenham Hotspur 🇬🇧",
            "Sénégal 🇸🇳",
            "RDC 🇨🇩",
            "Congo 🇨🇬",
            "Ajax Amsterdam 🇳🇱",
            "FC Porto 🇵🇹",
            "SL Benfica 🇵🇹",
            "Olympique Lyonnais 🇫🇷",
            "Olympique de Marseille 🇫🇷",
            "AS Monaco 🇫🇷",
            "Sporting CP 🇵🇹",
            "Everton FC 🇬🇧",
            "West Ham United 🇬🇧",
            "Atletico Madrid 🇪🇸",
            "AS Roma 🇮🇹",
            "Fiorentina 🇮🇹",
            "Napoli 🇮🇹",
            "Celtic FC 🇬🇧",
            "Rangers FC 🇬🇧",
            "Feyenoord 🇳🇱",
            "PSV Eindhoven 🇳🇱",
            "Brazil 🇧🇷",
            "Germany 🇩🇪",
            "Argentina 🇦🇷",
            "France 🇫🇷",
            "Spain 🇪🇸",
            "Italy 🇮🇹",
            "England 🏴",
            "Portugal 🇵🇹",
            "Netherlands 🇳🇱",
            "Belgium 🇧🇪",
            "Mexico 🇲🇽",
            "Uruguay 🇺🇾",
            "USA 🇺🇸"
            // Ajoutez d'autres équipes si nécessaire
        ];

        // Sélection aléatoire de deux équipes différentes
        const team1 = teams[Math.floor(Math.random() * teams.length)];
        let team2 = teams[Math.floor(Math.random() * teams.length)];
        while (team2 === team1) {
            team2 = teams[Math.floor(Math.random() * teams.length)];
        }

        // Annonce du match versus
        const announcement = `⚽ *Match Versus*\n\n${team1} 🆚 ${team2}\n\n@${sender.split("@")[0]}, Choose the winner! You have 30 seconds to think. 🕒`;
        await reply(announcement, { mentions: [sender] });

        // Attendre 30 secondes
        await new Promise(resolve => setTimeout(resolve, 30000));

        // Choix aléatoire du gagnant parmi les deux équipes
        const chosenTeam = Math.random() < 0.5 ? team1 : team2;

        // Message final annonçant le gagnant
        const resultMessage = `🏆 Match Result*\n\nThe winner is 🎉 : ${chosenTeam}🥳\n\n> Here is the result 😎 @${sender.split("@")[0]} !`;
        await reply(resultMessage, { mentions: [sender] });
    } catch (error) {
        console.error("Error in konami command:", error);
        reply("❌ An error occurred while executing the konami command.");
    }
});
