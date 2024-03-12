// append a node (empty or existing list)


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

    append(value){
        let node= new Node(value)
        if(this.Empty()){
            this.head=node
        }else{
            let prev= this.head
            while(prev.next){
                prev= prev.next
            }
            prev.next= node
        }
        this.size++
    }

    print(){
        if(this.Empty()){
            console.log("list is empty")
        }else{
            let curr= this.head
            while(curr){
                console.log(curr.value)
                curr=curr.next
            }
        }
    }
}
let list= new LinkedList()
list.print()
list.append(10)
list.append(20)
list.print()