const axios = require("axios")
const { author, version } = require("./package.json")

const baseUrl = "https://brainly.hanifdwyputra.xyz"

async function searchSoal(query){
const getData = axios.get(baseUrl + '?q=' + query).then(res => res)
  return getData;
}

module.exports = { version, author, searchSoal }
