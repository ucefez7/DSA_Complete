class Node{
    constructor(){
        this.children={}
        this.isWordEnd= false
    }
}

class Trie{
    constructor(){
        this.root= new Node()
    }
}

let trie= new Trie()