//print dupes
duplicates=(arr)=>{
    let dupes=[]
    let exist= new Set()
    for(var num of arr){
        if(exist.has(num)){
            dupes.push(num)
        }else{
            exist.add(num)
        }
    }
    return dupes
}
console.log(duplicates([1,2,3,5,2,3,6]))





//remove dupes
dupes=(arr)=>{
    return [...new Set(arr)]
}
console.log(dupes([1,2,4,4,3,5,6,2]))