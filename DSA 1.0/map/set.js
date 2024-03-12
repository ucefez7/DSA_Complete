//to add value in to set

let map= new Map([['a',1],['b',2]])
map.set('c',3)

for(var [key,value] of map){
    console.log(`${key}: ${value}`)
}