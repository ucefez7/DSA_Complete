//Selection sort

Selectionsort=(arr)=>{
    for(var i=0;i<arr.length-1;i++){
        for(var j=i+1; j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    }
    
    let arr=[2,1,3,5,4,6]
    Selectionsort(arr)
    console.log(arr)