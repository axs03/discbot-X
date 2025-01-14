const {SlashCommandBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("pause")
    .setDescription("Will pause the music"),

    async execute(interaction) {
        await interaction.reply("Placeholder for pausing music");
    }
};