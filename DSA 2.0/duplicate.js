//duplicates

duplicates=(arr)=>{
    let dupes=[]
    let exist=new Set()
    for(var num of arr){
        if(exist.has(num)){
            dupes.push(num)
        }else{
            exist.add(num)
        }
    }
    let flag=0;
    for(var i=0; i<dupes.length-1; i++){
        for(var j=i+1; j<dupes.length; j++){
            if(dupes[i]==dupes[j]){
                flag=1;
                break;
            }
        }
    }
    if(flag==0){
        return true
    }else{
        return false
    }
}
console.log(duplicates([1,3,3,2,6,4,7,2]))



//remove duplicates
removedupe=(arr)=>{
    return [...new Set(arr)]
}
//console.log(removedupe([1,2,3,4,2,1,4]))