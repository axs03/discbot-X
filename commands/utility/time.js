const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data:
    new SlashCommandBuilder()
    .setName("play")
    .setDescription("Will resume currently playing music"),

    async execute(interaction) {
        await interaction.reply("Placeholder for resume playing");
    },
};