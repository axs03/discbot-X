# discbot-X
Welcome to the discbot-x repository! This discord bot is a small project of mine in which I am trying to make a discord bot for a variety of use cases.

<br><br>

## Prerequisites 

### 1. Setup
To get started, you will need to have <code><a href='https://nodejs.org/en/download'>node</a></code> installed on your machine.
**Check if node is installed by running <code>node -v</code>**. <br><br>
Once <code>node</code> installed, make a local directory 
``` bat
mkdir discbot-X
```
and clone this repository using
``` gitignore
git clone https://github.com/axs03/discbot-X.git
```
go into your local repo directory using
``` bat
cd ./discbot-X
```
and run
``` bat
npm install
```
<br>

### 2. config.js
Now, we need to setup a <code>config.json</code> file for the bot to function with the necessary secrets. Create a <code>config.json</code> file in the parent directory. Copy the template below:
``` json
{
  "token": "YOUR_BOT_TOKEN",
  "clientId": "YOUR_CLIENT_ID",
  "guildId": "YOUR_GUILD_ID",
  "searchAPI": "YOUR_SEARCH_API_KEY",
  "searchEngine": "YOUR_SEARCH_ENGINE_ID"
}
```

| ID | Description       | Link                                                                 |
|---------|--------------|----------------------------------------------------------------------|
| <code>token</code><br><code>clientId</code><br><code>guildId</code> | Grabbed from the discord developer portal appliactions panel | <a href='https://discord.com/developers/applications'>Discord Developer Portal - Applications</a>|
| <code>searchAPI</code><br><code>searchEngine</code> | Grabbed from Google Cloud Console | <a href='https://developers.google.com/custom-search/v1/introduction'>Programmable Search Engine</a> |

Once you have all the neccesary secrets, you can now run the bot by following the next section!

<br><br>

## Running the bot
Great, we are almost done! Now, we need to deploy the commands for the bot
``` javascript
node deploy-commands.js
```

Next, to start the bot, use
``` javascript
node index.js
```

## Commands
| Slash Command | Description | Returns |
|---------------|-------------|---------|
| <code>/ping</code> | Test Command | Returns response <code>pong</code> |
| <code>/search</code> | Search Command | Returns top 5 search results for your query |
| <code>/date</code> | Date Command | Returns current date in format <br> <code> **Sunday** the **12th**, <br>January 2025</code> |
| <code>/p</code> | Play Command | **Not Functional** <br> Will play a song |
| <code>/pause</code> | Pause Command | **Not Implemented** <br> Will pause the current playing song |
| <code>/q</code> | Queue Command | **Not Implemented** <br> Will queue a song for playing next | 
| <code>/r</code> | Resume Command | **Not Implemented** <br> Will resume the song if paused |
| <code>/s</code> | Stop Command | Will stop the bot playing music |
