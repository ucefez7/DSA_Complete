linearRecursive=(arr,x,i=0)=>{
    if (i ==arr.length) {
        return -1;
    }
    if (arr[i] == x) {
        return i + 1; 
    }
    return linearRecursive(arr, x, i+1);
};

console.log("Position is:", linearRecursive([1, 2, 3, 4, 5], 5));