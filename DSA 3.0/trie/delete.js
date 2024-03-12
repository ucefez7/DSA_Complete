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
        let charToInsert=word[i]
        if(!(charToInsert in curr.children)){
            curr.children[charToInsert]=new Node()
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

   startWithPrefix(prefix){
    let curr= this.root
    for(var i=0; i<prefix.length; i++){
        let charToFind= prefix[i]
        if(!(charToFind in curr.children)){
            return false
        }
        curr=curr.children[charToInsert]
    }
    return true
   }


   delete(word){
    if(!this.contains(word)){
        return false
    }
    let curr= this.root
    for(var i=0; i<word.length; i++){
        let charToDelete= word[i]
        let child= curr.children[charToDelete]

        if(Object.keys(child.children).length==1){
            delete curr.children[charToDelete]
        }else{
            curr= child
        }
    }
    return true
   }


}
let trie= new Trie()