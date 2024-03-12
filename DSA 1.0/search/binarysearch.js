binary=(arr,x)=>{

    let start=0, end= arr.length-1;

    while(start<=end){
        let mid= Math.floor((start+end)/2)
        if(arr[mid]==x){
            return mid+1
        }
        if(arr[mid]<x){
            start=mid+1
        }else{
            end=mid-1
        }
    }
    return -1
}
console.log("element found at: ",binary([1,2,3,4,5],2))