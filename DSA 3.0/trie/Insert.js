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

    insert(word){
        let curr=this.root
        for(var i=0; i<word.length; i++){
            charToInsert= word[i]
            if(!(charToInsert in curr.children)){
                curr.children[charToInsert]= new Node()
            }
            curr= curr.children[charToInsert]
        }
        curr.isWordEnd=true
    }


}
let trie= new Trie()