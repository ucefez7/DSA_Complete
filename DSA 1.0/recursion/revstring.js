recursion=(input, i=input.length-1)=>{
    if(i<0){
        return ''
    }
    return input[i] + recursion(input,i-1)
}
console.log(recursion("hello"))