const { SlashCommandBuilder } = require("discord.js")

const date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day_string = days[date.getDay()];
let month_string = months[date.getMonth()];

let currentDate = `${day_string} ${month_string}, ${year}`;


module.exports = {
    data:
    new SlashCommandBuilder()
    .setName("date")
    .setDescription("Gives the current date"),

    async execute(interaction) {
        await interaction.reply(`The current date is ${currentDate}`);
    },
};