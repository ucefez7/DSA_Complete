class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root==null
    }

    insert(value){
        let newNode= new Node(value)
        if(this.isEmpty()){
            this.root= newNode
        }else{
            this.insertnewNode(this.root, newNode)
        }
    }

    insertnewNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left==null){
                root.left=newNode
            }else{
                this.insertnewNode(root.left,newNode)
            }
        }else{
            if(root.right==null){
                root.right=newNode
            }else{
                this.insertnewNode(root.right, newNode)
            }
        }
    }


    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }


}
let bst = new BinarySearchTree()

bst.insert(4)
bst.insert(7)
bst.insert(3)
bst.preOrder(bst.root)