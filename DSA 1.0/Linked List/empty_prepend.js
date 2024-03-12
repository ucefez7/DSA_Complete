//prepend node in to empty list

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    Empty(){
        return this.size==0
    }

    getSize(){
        return this.size
    }

   prepend(value){
    let node= new Node()
    if(this.Empty()){
        this.head=node
    }
    this.size++
   }


}

const list = new LinkedList()
console.log("empty annel", list.Empty())
console.log("size", list.getSize())