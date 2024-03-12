linear=(arr,x)=>{
    for(var i=0; i<arr.length; i++){
        if(arr[i]==x){
            return i+1
        }
    }
    return -1
}
console.log("position is:",linear([1,2,3,4,5],5))