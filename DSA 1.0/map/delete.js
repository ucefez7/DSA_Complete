//to delete a key value
let map= new Map([['a',1],['b',2]])
map.delete('b')

for(var [key,value] of map){
    console.log(`${key}: ${value}`)
}