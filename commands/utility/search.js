const { SlashCommandBuilder } = require("discord.js")
const { execute } = require("./play")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("search")
    .setDescription("Search the internet for anything"),

    async execute(interaction) {
        await interaction.reply("Placeholder for searching on the web")
    }

}