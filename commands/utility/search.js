const { SlashCommandBuilder } = require("discord.js")
const { searchGoogle } = require("../helpers/google.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("search")
    .setDescription("Search the internet for anything")
    .addStringOption((option) => 
        option.setName("keyword")
        .setDescription("Gives search results relating to this keyword")
        .setRequired(true)
    )
    .addStringOption((option) => 
        option.setName("image")
        .setDescription("Optional: returns images relating to the keyword")
        .setRequired(false)
    ),


    async execute(interaction) {
        const keyword = interaction.options.getString("keyword");

        // the search term is present
        try {
            const response = await searchGoogle(keyword);
            let botResponse = ``;
            if (response.items && response.items.length > 0) {
                // displaying only the first item in the response
                // const firstResult = response.items[0];
                // await interaction.reply(`**${firstResult.title}**\n${firstResult.snippet}\n${firstResult.link}`);

                // displaying top 5 items in the search result
                for (let i = 0; i < 6; i++) {
                    const result = response.items[i];
                    botResponse += `**${result.title}**\n${result.snippet}\n${result.link}\n\n`;
                }

                await interaction.reply(botResponse); // final response body

            } else {
                await interaction.reply('No results found.');
            }
        } catch (error) {
            console.log(error);
            await interaction.reply(`An error occurred with the search function: ${error.message}`);
        }
    }
}





{/* <script async src="https://cse.google.com/cse.js?cx=829c991025815404a">
</script>
<div class="gcse-search"></div> */}