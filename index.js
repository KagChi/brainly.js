const axios = require("axios")
const { author, version } = require("./package.json")

const baseUrl = "https://brainly.hanifdwyputra.xyz"

let searchFunction = brainlyData(query) {
  const getData = axios.get(baseUrl + '?q=' + query)
  return getData;
}
let search = searchFunction(query)

search.then(brainlyData(query){
return query;
}

module.exports = { version, author, search}
