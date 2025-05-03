const mineflayer = require('mineflayer');

// Create the bot
const bot = mineflayer.createBot({
  host: 'StreamSMPS1.aternos.me',    // Change this to your server IP
  port: 25565,          // Default Minecraft port
  username: 'BotName',  // Minecraft username (for offline servers)
  // password: 'yourpassword' // Uncomment for online mode
});

bot.on('spawn', () => {
  console.log('Bot has spawned!');
  bot.chat('Hello world! I am alive!');
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;

  if (message === 'hello') {
    bot.chat(`Hello ${username}!`);
  }

  if (message === 'come') {
    const player = bot.players[username];
    if (!player || !player.entity) {
      return bot.chat("I can't see you!");
    }
    bot.chat("I'm coming!");
    bot.pathfinder.setGoal(new GoalNear(player.entity.position.x, player.entity.position.y, player.entity.position.z, 1));
  }
});
