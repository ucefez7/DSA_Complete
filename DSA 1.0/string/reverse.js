Reverse=(input)=>{
    op=''
    for(i=input.length-1; i>=0; i--){
        op += input[i]
    }
    return op
}
console.log(Reverse("hello"))