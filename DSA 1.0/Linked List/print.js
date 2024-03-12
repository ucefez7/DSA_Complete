//print list

class Node{
    constructor(value){
        this.value= value
        this.next= null
    }
}

class LinkedList{
    constructor() {
        this.head= null
        this.size=0
    }

    Empty(){
        return this.size==0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        let node= new Node(value)
        if(this.Empty()){
            this.head=node
        }else{
            node.next= this.head
            this.head= node
        }
        this.size++
    }

    print(){
        if(this.Empty()){
            console.log("list is Empty")
        }else{
            let curr= this.head
            while(curr){
                console.log(curr.value)
                curr= curr.next
            }
        }
    }
}
let list = new LinkedList()
list.print()
list.prepend(10)
list.prepend(50)
list.print()
