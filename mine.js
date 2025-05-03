const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
    host: '',  // Your Aternos server's IP
    port: 25565,  // Default Minecraft port (can leave as is)
    username: 'BotSteve',  // The bot’s Minecraft username
    version: false  // Auto-detect Minecraft version
});

bot.on('spawn', () => {
    console.log('Bot has spawned and is keeping the server alive!');
});

bot.on('error', (err) => {
    console.log('Bot encountered an error:', err);
});

bot.on('end', () => {
    console.log('Bot has disconnected from the server.');
});
