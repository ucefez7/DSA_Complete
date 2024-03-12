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
        let node = new Node(value)
        if(this.Empty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    print(){
        if(this.Empty()){
            console.log("list empty")
        }else{
            let curr=this.head
            let listvalues=''
            while(curr){
                listvalues+= ` ${curr.value}`
                curr=curr.next
            }
            console.log(listvalues)
        }
    }

    append(value){
        let node = new Node(value)
        if(this.Empty()){
            this.head=node
        }else{
            let prev=this.head
            while(curr){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }



    search(value){
        if(this.Empty()){
            return -1
        }
        let i=0;
        let curr=this.head
        while(curr){
            if(curr.value==value){
                return i+1
            }
            curr=curr.next
            i++
        }
        return -1
    }
}
let list= new LinkedList()
console.log("size is:",list.getSize())
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.print()
list.removemiddle()
list.print()
console.log("position of the val is: ",list.search(20))
