const { searchAPI, searchEngine } = require("../../config.json");

async function searchGoogle(keyword) {
    let url = `https://www.googleapis.com/customsearch/v1?key=${searchAPI}&cx=${searchEngine}&q=${encodeURIComponent(keyword)}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw new Error('There was a problem with the fetch operation: ' + error.message);
    }
}

module.exports = { searchGoogle }