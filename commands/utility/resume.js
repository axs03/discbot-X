const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("r")
    .setDescription("Will resume currently playing music"),

    async execute(interaction) {
        await interaction.reply("Placeholder for resume playing");
    },
};