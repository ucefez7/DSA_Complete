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
    let curr= this.root
    for(var i=0; i<word.length; i++){
        let charToInsert= word[i]
        if(!(charToInsert in curr.children)){
            curr.children[charToInsert]= new Node()
        }
        curr= curr.children[charToInsert]
    }
    curr.isWordEnd=true
   }

   contains(word){
    let curr= this.root
    for(var i=0; i<word.length; i++){
        let charToFind= word[i]
        if(!(charToFind in curr.children)){
            return false
        }
        curr= curr.children[charToInsert]
    }
    return curr.isWordEnd
   }


}
let trie= new Trie()