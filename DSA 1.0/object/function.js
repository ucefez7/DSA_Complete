//function in object


let obj={
    name:"ucefez",
    fn: function(){
        console.log(this.name)
        console.log("its ucefez")
    }
}

obj.fn()