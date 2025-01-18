const { SlashCommandBuilder } = require("discord.js")
const { execute } = require("./play")
const { searchAPI, searchEngine } = require("../../config.json")


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
            let url = `https://www.googleapis.com/customsearch/v1?key=${searchAPI}&cx=${searchEngine}&q=${encodeURIComponent(keyword)}`; 

            fetch(url) 
            .then(response => { 
                if (!response.ok) { 
                    throw new Error('Network response was not ok ' + response.statusText); 
                } 
                return response.json(); 
            }) 
            .then(data => { 
                interaction.reply(data);
            }) 
            .catch(error => { 
                interaction.reply('There was a problem with the fetch operation:', error); 
            });
        } catch (error) {
            await interaction.reply(`An error occurred when searching: ${error}`)
        }
    }

}





{/* <script async src="https://cse.google.com/cse.js?cx=829c991025815404a">
</script>
<div class="gcse-search"></div> */}