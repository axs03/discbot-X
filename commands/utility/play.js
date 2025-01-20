const { SlashCommandBuilder } = require("discord.js")
const { joinVoiceChannel, createAudioPlayer, createAudioResource, StreamType } = require("@discordjs/voice")
// const { QueryType } = require("discord-player")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("p")
    .setDescription("Will play music from a link")
    .addSubcommand(subcommand =>
        subcommand.setName("song")
        .setDescription("Use URL of a song")
        .addStringOption((option) => option.setName("url").setDescription("URL for song").setRequired(true))
    )
    .addSubcommand(subcommand =>
        subcommand.setName("playlist")
        .setDescription("Use Playlist URL of Songs")
        .addStringOption((option) => option.setName("url").setDescription("URL for playlist").setRequired(true))
    ),

    async execute(interaction) {
        let member_voice_channel = interaction.member.voice.channel;

        // user not in voice channel
        if (!member_voice_channel) {
            await interaction.reply("Please join a voice channel first\n User current channel: " + member_voice_channel);
            return;
        }

        try {
            // connection for the bot to join
            const connection = joinVoiceChannel({
                channelId: member_voice_channel.id,
                guildId: member_voice_channel.guild.id,
                adapterCreator: member_voice_channel.guild.voiceAdapterCreator,
                selfDeaf: true,
            });

            // if subcommand is song, otherwise it is playlist
            if (interaction.options.getSubcommand() == "song") {
                let url = interaction.options.getString("url");
                
                // audio player and play the resource
                const player = createAudioPlayer();
                const resource = createAudioResource(url, { inputType: StreamType.Arbitrary });
                player.play(resource);
                connection.subscribe(player);
            }

        } catch (error) {
            await interaction.reply(`An error occurred:\n ${error}`);
            return;
        }

        
    }
};