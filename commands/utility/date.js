const { SlashCommandBuilder } = require("discord.js")

const date = new Date();
let weekday = date.getDay();
let date_number = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const ordinal = ["st", "nd", "rd", "th"];

let day_string = weekdays[weekday];
let month_string = months[month];


function getOrdinalSuffix(n) {
    if (n > 3 && n < 21) return 'th'; // covers 11th to 19th
    switch (n % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

let ordinal_suffix = getOrdinalSuffix(date_number);

let currentDate = `**${day_string}** the **${date_number}${ordinal_suffix}**, \n${month_string} ${year}`;

// exporting slash command
module.exports = {
    data:
    new SlashCommandBuilder()
    .setName("date")
    .setDescription("Returns the current date"),

    async execute(interaction) {
        await interaction.reply(`The date is: \n ${currentDate}`);
    },
};