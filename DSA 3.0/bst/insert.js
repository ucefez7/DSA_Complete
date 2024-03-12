class Node{
    constructor(value){
      this.value=value
      this.left=null
      this.right=null
    }
  }
  
  class binarySearchTree{
    constructor(){
      this.root=null
    }
  
    isempty(){
      return this.root==null
    }
  
    insert(value){
      let newNode= new Node(value)
      if(this.isempty()){
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
          this.insertNewNode(root.left, newNode)
        }
      }else{
        if(root.right==null){
          root.right==newNode
        }else{
          this.insertNewNode(root.right, newNode)
        }
      }
    }
  
    
  }
  
  let bst= new binarySearchTree()
  bst.insert(10)
  console.log("Empty anno? ",bst.isempty());