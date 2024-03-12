Reverse=(input)=>{
    let rev=''
    for(var i=input.length-1; i>=0; i--){
        rev +=input[i]
    }
    return rev
}

palindrome=(input)=>{
    let rev = Reverse(input)
    return rev==input

}

console.log(palindrome("mmm"))


