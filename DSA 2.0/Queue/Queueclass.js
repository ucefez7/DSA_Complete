class Queue{
    constructor() {
        this.items=[]
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

    empty(){
        return this.items.length==0
    }

    size(){
        return this.items.length
    }

    peek(){
        if(!this.empty()){
            return this.items[0]
        }
        return null
    }

    print(){
        console.log(this.items.toString())
    }
}

let queue= new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.print()
console.log(queue.peek())
