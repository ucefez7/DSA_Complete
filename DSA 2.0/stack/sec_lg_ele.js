strRev=(str)=>{
    let stack=[]
    for(var char of str){
        stack.push(char)
    }

    let rev=''
    while(stack.length>0){
        rev+= stack.pop()
    }
    return rev.charAt(1)
}

console.log(strRev("ucefez"));