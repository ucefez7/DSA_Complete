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
        let node= new Node(value)
        if(this.Empty()){
            this.head=node
        }else{
            node.next= this.head
            this.head= node
        }
        this.size++
    }

    insert(value,index){
        if(index<0 || index > this.size){
            return
        }
        if(index==0){
            this.prepend(value)
        }else{
            let node = new Node(value)
            let prev= this.head
            for(var i=0; i<index-1; i++){
                prev=prev.next
            }
            node.prev=prev.next
            prev.next=node
            this.size++
        }
    }


    print(){
        if(this.Empty()){
            console.log("list is empty")
        }else{
            let curr= this.head
            let listvalues= ''
            while(curr){
                listvalues += ` ${curr.value}`
                curr= curr.next
            }
            console.log(listvalues)
        }
    }
}

let list= new LinkedList()

list.insert(30,0)
list.print()

list.insert(20,0)
list.print()
list.insert(40,0)
list.print()

console.log("size is: ", list.getSize())