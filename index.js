// Require the necessary discord.js classes
const fs = require("node:fs"); // relates to the file system
const path = require("node:path");

const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const { token } = require('./config.json');


// Create a new client instance, manage permissions here as well
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates] });

client.commands = new Collection();

// dynamically getting the command files
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}


// When the client is ready, run this code (only once).
// It makes some properties non-nullable.
// this is the init of the bot
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// interaction listener for executing a command
client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return; // none

	const command = interaction.client.commands.get(interaction.commandName); // gets the command

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	// error handler for command
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
		}
	}
});


// login and start the bot
client.login(token);