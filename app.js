const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.event('app_mention', async ({ event, say }) => {
  await say(`Hello <@${event.user}>! 👋`);
});

(async () => {
  await app.start();
  console.log('⚡️ Slack bot is running!');
})();