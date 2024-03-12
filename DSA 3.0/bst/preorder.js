class Node{
    constructor(value){
      this.value= value
      this.left=null
      this.right=null
    }
  }
  
  class BinarySearchTree{
    constructor(){
      this.root==null
    }
  
    isEmpty(){
      return this.root==null
    }
  
  
  
  
    insert(value){
      let newNode= new Node(value)
      if(this.isEmpty()){
        this.root=newNode
      }else{
        this.insertNewNode(this.root,newNode)
      }
    }
  
    insertNewNode(root,newNode){
      if(newNode.value<root.value){
        if(root.left==null){
          root.left=newNode
        }else{
          this.insertNewNode(root.left,newNode)
        }
      }else{
        if(root.right==null){
          root.right=newNode
        }else{
          this.insertNewNode(root.right,newNode)
        }
      }
    }
  
  
  
    search(root,value){
      if(!root){
        return false
      }else{
        if(root.value==value){
          return true
        }else if(value<root.value){
          return this.search(root.left,value)
        }else{
          return this.search(root.right,value)
        }
      }
    }
  
    preOrder(root){
      if(root){
        console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right)
      }
    }
  
  }
  let bst= new BinarySearchTree()
  bst.insert(10)
  bst.insert(5)
  bst.insert(15)
  bst.insert(3)
  bst.insert(7)
  
  console.log("empty anno?",bst.isEmpty())
  console.log(bst.search(bst.root,10))
  
  bst.preOrder(bst.root)