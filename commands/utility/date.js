const { SlashCommandBuilder } = require("discord.js")

const date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let currentDate = `${day}-${month}-${year}`;


module.exports = {
    data: // the constructor
    new SlashCommandBuilder()
    .setName("date")
    .setDescription("This will return the current date"),

    async execute(interaction) {
        await interaction.reply(`The current date is ${currentDate}`);
    },
};