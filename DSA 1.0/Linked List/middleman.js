// middleman find
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

    append(value){
        let node= new Node(value)
        if(this.Empty()){
            this.head=node
        }else{
            let prev= this.head
            while(prev.next){
                prev= prev.next
            }
            prev.next=node
        }
        this.size++
    }

   insert(value,index){
    if(index<0 || index> this.size){
        return
    }
    if(index==0){
        this.prepend(value)
    }else{
        let node =  new Node(value)
        let prev=this.head
        for(var i=0; i<index-1; i++){
            prev=prev.next
        }
        node.prev=this.head
        this.head=node
        this.size++
    }
   }

    print(){
        if(this.Empty()){
            console.log("list is empty")
        }else{
            let curr= this.head
            let listvalues=''
            while(curr){
                listvalues += ` ${curr.value}`
                curr=curr.next
            }
            console.log(listvalues)
        }
    }

    middleman(){
        if(this.head==null){
            console.log("list is empty")
            return
        }
            let one=this.head
            let two=this.head
            while(two && two.next !==null){
                one=one.next
                two=two.next.next
            }
            console.log(one.value,'middleman')
        
    }


    
}

let list= new LinkedList()

list.append(10)
list.append(12)
list.append(13)
list.append(14)
list.append(15)
list.print()

list.middleman()