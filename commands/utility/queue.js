const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("q")
    .setDescription("Will queue a track"),

    async execute(interaction) {
        await interaction.reply("Placeholder for the queue function")
    },
};