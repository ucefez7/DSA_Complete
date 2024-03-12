position=(input,char)=>{
    for(var i=0; i<input.length; i++){
        if(input[i]==char){
            return i
        }
    }
    return -1
}
console.log(position("ucefez","z"))