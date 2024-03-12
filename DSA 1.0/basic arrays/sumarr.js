const ps= require("prompt-sync")
const prompt= ps()

let sum=0
let limit= parseInt(prompt("Enter the limit: "))
let arr= Array(limit)

for(var i=0; i<limit; i++){
    let values=parseInt(prompt("Enter the values: "))
    arr[i]=values
    sum+= arr[i]
}
console.log(sum)