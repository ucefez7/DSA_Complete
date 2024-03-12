class Hashtable{
    constructor(size){
        this.table= new Array(size)
        this.size=size
    }

    hash(key){
        let total=0;
        for(var i=0; i<key.length; i++){
            total+= key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value){
        let index= this.hash(key)
        this.table[index]=value
    }

    get(key){
        let index= this.hash(key)
        return this.table[index]
    }

    remove(key){
        let index= this.hash(key)
        this.table[index]= undefined
    }
}