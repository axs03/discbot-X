# discbot-X

## Running the bot
First, we need to deploy the commands for the bot
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
| <code>/p</code> | Play Command | **Not Implemented** <br> Will play a song |
| <code>/pause</code> | Pause Command | **Not Implemented** <br> Will pause the current playing song |
| <code>/q</code> | Queue Command | **Not Implemented** <br> Will queue a song for playing next | 
| <code>/r</code> | Resume Command | **Not Implemented** <br> Will resume the song if paused |
| <code>/s</code> | Stop Command | **Not Implemented** <br> Will stop the bot playing music |
