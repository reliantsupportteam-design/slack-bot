## ⚡ Quick Start
1. Clone the repo:
   ```bash
   git clone https://github.com/reliantsupportteam-design/slack-bot.git
   cd slack-bot

slack-bot/
├── app.js
├── package.json
├── Procfile
└── README.md

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

{
  "name": "slack-bot",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "@slack/bolt": "^3.17.0"
  },
  "engines": {
    "node": "18.x"
  }
}

worker: node app.js

git init
git add .
git commit -m "Add Slack bot source files"
git branch -M main
git remote add origin https://github.com/reliantsupportteam-design/slack-bot.git
git push -u origin main