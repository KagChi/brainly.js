const axios = require("axios")
const { version } = require("./package.json")

const baseUrl = "https://brainly.hanifdwyputra.xyz"

async brainlyData(query) {
const getData = axios.get(baseUrl + '?q=' + query).then(res => res)
return getData
}
