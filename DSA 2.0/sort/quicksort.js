//Quick sort

Quicksort=(arr)=>{
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]
    for(var i=0; i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...Quicksort(left), pivot, ...Quicksort(right)]
}

let arr=[3,2,5,4,1,6]
console.log(Quicksort(arr));