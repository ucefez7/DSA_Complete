binaryrec=(arr,x, start=0, end=arr.length-1)=>{
    if(start>end){
        return -1
    }
    let mid= Math.floor((start+end)/2)

    if(arr[mid]==x) return mid+1
    if(arr[mid]<x){
        return binaryrec(arr,x,start=mid+1, end)
    }else{
        return binaryrec(arr,x,start,end=mid-1)
    }
}
console.log("Element found at:",binaryrec([1,2,3,4,5],4))