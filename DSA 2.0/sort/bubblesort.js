//Bubble sort

bubble=(arr)=>{
    let swapped;
    do{
        swapped=false;
        for(var i=0; i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped=true
            }
        }
    }while(swapped)
}

let arr=[3,5,2,1,7,6,4]
bubble(arr)
console.log(arr)