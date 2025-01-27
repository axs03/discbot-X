const { SlashCommandBuilder } = require("discord.js");
const { joinVoiceChannel, createAudioPlayer, createAudioResource, StreamType } = require("@discordjs/voice");
const playdl  = require("play-dl");

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

        // connection for the bot to join
        const connection = joinVoiceChannel({
            channelId: member_voice_channel.id,
            guildId: member_voice_channel.guild.id,
            adapterCreator: member_voice_channel.guild.voiceAdapterCreator,
            selfDeaf: true,
        });

        const subcommand = interaction.options.getSubcommand();

        try {
            // if subcommand is song, otherwise it is playlist
            if (subcommand == "song") {
                let url = interaction.options.getString("url");

                const ytInfo = await playdl.stream(url); // for yt videos
                
                // audio player and play the resource
                const player = createAudioPlayer();
                const resource = createAudioResource(ytInfo.stream, {
                    inputType: StreamType.Arbitrary,
                });
                connection.subscribe(player);
                player.play(resource);

                await interaction.reply(`Now playing **${url}**`);
            }

        } catch (error) {
            console.log(`An error occurred:\n ${error}`);
            return;
        }
    }
};