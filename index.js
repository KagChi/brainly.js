const axios = require("axios")
const { author, version } = require("./package.json")

const baseUrl = "https://brainly.hanifdwyputra.xyz"

async function search(query){
const data = axios.get(baseUrl + '?q=' + query).then(x => x.data.data.questionSearch.edges)
let jawabanContent;
for (let i=0; i < data.length; i++) {
       jawabanContent += `${[i+1]} - Soal : ${answer[i].node.content}\nJawaban:\n${answer[i].node.answers.nodes[0].content}\n\n` 
      }
  return jawabanContent;
}

async function brainlyData(query){
 console.log("brainlyData() will removed soon use search() instead")
const data = axios.get(baseUrl + '?q=' + query).then(x => x)
  return getData;
}

module.exports = { version, author, search, brainlyData}
