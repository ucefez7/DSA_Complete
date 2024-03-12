//Missing number


function missingNumber(nums: number[]): number {
    let ans=nums.sort((a,b)=>a-b)
    for(var i=0; i<ans.length; i++){
        if(ans[i]!=i){            //here the pos not equals the value af sorting
            return ans[i]-1
        }
    }
    return nums.length
};