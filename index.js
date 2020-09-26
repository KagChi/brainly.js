const axios = require("axios")
const { author, version } = require("./package.json")

const baseUrl = "https://brainly.hanifdwyputra.xyz"
const baseUrlv2 = "https://brainlya.hanifdwyputra.xyz"
async function search(query) {
const data = await axios.get(baseUrl + ?q= + query)
return data;
}
async function searchV2(query) {
const data = await axios.get(baseUrlv2 + ?q= + query)
return data;
}
module.exports = { version, author, search, searchV2 }
