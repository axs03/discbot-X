const { SlashCommandBuilder } = require('discord.js')

// use interactions if the def is local, else require it if in other files

// this modules exporting the stuff inside so that we can "require" it in other files
module.exports = {
    // this data basically a constructor, or the info about the slash command
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Test Slash Command"),

    // this async function is the executing part of the function, this is where you will write the actual code for the slash command
    async execute(interaction) {
        await interaction.reply("pong");
    },
};