const {SlashCommandBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("p")
    .setDescription("Will play music from a link"),

    async execute(interaction) {
        await interaction.reply("Placeholder for playing music");
    }
};