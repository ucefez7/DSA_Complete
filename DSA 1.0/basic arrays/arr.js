const ps = require("prompt-sync")
const prompt = ps()

let limit = parseInt(prompt("Enter the limit: "))
let arr = Array(limit)

for(var i=0; i<limit; i++){
    let values= parseInt(prompt("Enter the values: "))
    arr[i]=values
}
console.log(arr)