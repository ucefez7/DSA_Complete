//to clear the values in  map

let map= new Map([['a',1],['b',2]])
map.clear()

for(var [key,value] of map){
    console.log(`${key}: ${value}`)
}