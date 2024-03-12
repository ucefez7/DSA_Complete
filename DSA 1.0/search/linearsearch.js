//linear search

const ps= require("prompt-sync")
const prompt=ps()

let flag=0;
let limit = parseInt(prompt("Enter the limit: "))
let arr= Array(limit)

for(var i=0; i<limit; i++){
    let values= parseInt(prompt("enter the values: "))
    arr[i]=values
}

let search= parseInt(prompt("Enter the value to search: "))
for(var i=0; i<limit; i++){
    if(search== arr[i]){
        flag=1
        break;
    }
}
if(flag==1){
    console.log(`Value is found at position: ${i+1}`)
}else{
    console.log("Value not found")
}