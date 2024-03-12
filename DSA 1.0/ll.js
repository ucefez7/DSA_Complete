class Node{
    constructor(value){
        this.value=value
        this.next= null
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
    append(value){
        let node = new Node(value)
        if(this.Empty()){
            this.head=node
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }

    insert(value,index){
        if(index<0 || index>this.size){
            return
        }
        if(index==0){
            this.prepend(value)
        }else{
        let node=new Node(value)
        let prev= this.head
        for(var i=0; i<index-1; i++){
            prev= prev.next
        }
        node.prev=this.head
        this.head=node
        this.size++
        }
    }

    middleman(){
        if(this.head==null){
            console.log("list is empty")
        }
        let one= this.head
        let two= this.head
        if(two && two.next){
            one=one.next
            two=two.next.next
        }
        console.log("middle value is: ",one.value)
    }

    removemiddleman(){
        if(this.head==null){
            console.log("list is empty")
        }
        let one=this.head
        let two=this.head
        let prev=null
        if(two && two.next!=null){
            prev=one
            one=one.next
            two=two.next.next
        }
        if(prev==null){
            this.head=one.next
        }else{
            prev.next=one.next
        }
        this.size--
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


    
    print(){
        if(this.Empty()){
            console.log("this list is empty")
        }else{
            let curr= this.head
            let listvalues=''
            while(curr){
                listvalues+= ` ${curr.value}`
                curr= curr.next
            }
            console.log(listvalues)
        }
    }


    deleteFirst(){
        if(this.head == null){
          console.log('nothing to delete');
          return
        }
        if(this.head.next == null){
          this.head = null
        }
        this.head = this.head.next
      }
    
      
      deleteLast(){
        let curr = this.head
        while(curr.next.next){
            curr = curr.next
          }
          curr.next = null
      }
    

      deleteVal(val){
        if(this.head.data == val){
          this.head =this.head.next
          console.log('value is in head');
          return
        }
        let curr = this.head
        while(curr.next && curr.next.data != val){
          curr = curr.next
        }
        if(curr.next){
          const removed = curr.next
          curr.next = removed.next
        }
      }

    rev(){
        let prev=null
        let curr=this.head
        while(curr){
            let next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
      }


}
let list= new LinkedList()
list.append(10)
list.print()
list.append(30)
list.print()
list.append(50)
list.print()
list.middleman()
//list.insert(60,0)
//list.print()
//list.insert(70,1)
//list.print()
//list.insert(80,2)
//list.print()
// list.removeMiddle()
// list.print()
//console.log(list.search(80))
