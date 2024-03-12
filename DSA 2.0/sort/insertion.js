//Insertion sort

insertionSort=(arr)=>{
    for(var i=1;i<arr.length;i++){
        let numberToinsert= arr[i]
        let j=i-1
        if(j>=0 && arr[j]> numberToinsert){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]= numberToinsert
    }
}

let arr=[2,1,4,3,6,5]
insertionSort(arr)
console.log(arr);