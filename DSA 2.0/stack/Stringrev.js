strRev=(str)=>{
    let stack=[]
    for(var char of str){
        stack.push(char)
    }

    let strRev=''
    while(stack.length>0){
        strRev+= stack.pop()
    }
    return strRev
}

console.log(strRev("ucefez"));