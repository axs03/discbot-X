const {SlashCommandBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("s")
    .setDescription("Will stop the music"),

    async execute(interaction) {
        await interaction.reply("Placeholder for stopping music");
    }
};