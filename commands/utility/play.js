const {SlashCommandBuilder} = require("discord.js")
const { joinVoiceChannel, createAudioPlayer, createAudioResource, StreamType } = require("@discordjs/voice");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("p")
    .setDescription("Will play music from a link")
    .addStringOption(option =>
        option.setName("url")
        .setDescription("URL of the audio")
        .setRequired(true)
    ),

    async execute(interaction) {
        const member_voice_channel = interaction.member?.voice?.channel;
        const member = interaction.member;
        const voice = interaction.voice;

        // user not in voice channel
        if (!member_voice_channel) {
            await interaction.reply("Please join a voice channel first");
            return;
        }

        // else, we want to join the voice channel
        try {
            // connection for the bot to join
            const connection = joinVoiceChannel({
                channelId: member_voice_channel.id,
                guildId: member_voice_channel.guild.id,
                adapterCreator: member_voice_channel.guild.voiceAdapterCreator,
                selfDeaf: true,
            });

            // url variable grabbed from the user
            const url = interaction.options.getString("url");

            // placeholder for the actual audio player
            await interaction.reply(`Member: ${member} \n
                Channel: ${voice} \n
                Now playing: ${url}`);


        } catch (error) {
            await interaction.reply(`An error occurred:\n ${error}`);
        }
    }
};