const {SlashCommandBuilder} = require("discord.js")
const { getVoiceConnection } = require('@discordjs/voice');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("s")
    .setDescription("Will stop the music"),

    async execute(interaction) {
        await interaction.reply("discbot-X left the voice channel");

        const connection = getVoiceConnection(interaction.guild.id);

        if (connection) {
            connection.destroy();
        } else {
            await interaction.followUp("No active voice connection found.");
        }
    }
};