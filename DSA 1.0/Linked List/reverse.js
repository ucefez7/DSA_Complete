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
            node.next=this.head
            this.head=node
        }
        this.size++
    }


    insert(value,index){
        if(index<0||index>this.size){
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
            node.prev=this.head
            this.head=node
            this.size++
        }
    }

    print(){
        if(this.Empty()){
            console.log("list is empty")
        }else{
            let curr=this.head
            let listvalues= ''
            while(curr){
                listvalues+= ` ${curr.value}`
                curr=curr.next
            }
            console.log(listvalues)
        }
    }

    rev(){
        let prev=null
        let curr=this.head
        while(curr){
            let next= curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }

    middle(){
        if(this.head==null){
            console.log("empty list")
            return
        }
        let one= this.head
        let two= this.head
        if(two && two.next!=null){
            one=one.next
            two=two.next.next
        }
        console.log("middle value is:",one.value)
    }

    middleremove(){
        if(this.head==null){
            console.log("list empty")
            return
        }
        let prev=null
        let one=this.head
        let two=this.head
        if(two&&two.next!=null){
            prev=one
            one=one.next
            two=two.next.next
        }
        if(prev==null){
            this.head=one.next
        }else{
            prev.next=one.next
        }
    }

    search(value){
        if(this.Empty()){
            return -1
        }
            let i=0
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
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.print()
list.rev()
list.print()
//list.middleremove()
//list.print()
console.log("value is found at:",list.search(30))
