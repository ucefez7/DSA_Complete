class Stack{
    constructor(){
        this.item=[]
        this.top=0
    }

    push(element){
        this.item[this.top]=element
        this.top++
    }

    pop(){
        this.top--
        const value= this.item[this.top]
        this.item= this.item.slice(0,this.top)
        return value
    }

    Empty(){
        return this.top==0
    }

    Size(){
        return this.top
    }

    peek(){
        if(this.Empty){
            return null
        }
        return this.item[this.top-1]
    }

    display(){
        for(var i=0; i<this.item.length; i++){
            console.log(this.item[i])
        }
    }
}

let stack= new Stack()
stack.push(10)
stack.push(20)
stack.pop()
stack.display()