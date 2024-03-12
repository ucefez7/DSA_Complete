//Find All Numbers Disappeared in an Array

function findDisappearedNumbers(nums: number[]): number[] {
    let arr=[]
    let set= new Set(nums)
    for(var i=1; i<nums.length+1; i++){
        if(!set.has(i)){
            arr.push(i)
        }
    }
    return arr
};