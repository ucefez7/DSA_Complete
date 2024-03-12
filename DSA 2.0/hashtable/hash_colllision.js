class Hashtable{
    constructor(size){
        this.table= new Array(size)
        this.size= size
    }

    hash(key){
        let total=0
        for(var i=0; i<key.length; i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }

   set(key,value){
    let index= this.hash(key)
    let bucket= this.table[index]
    if(!bucket){
        this.table[index]=[[key,value]]
    }else{
        let sameitemkey= bucket.find(item=> item[0]==key)
        if(sameitemkey){
            sameitemkey[1]=value
        }else{
            bucket.push[[key,value]]
        }
    }
   }


    get(key){
        let index= this.hash(key)
        //return this.table[index]
        let bucket= this.table[index]
        if(bucket){
            let sameitemkey= bucket.find(item=>item[0]==key)
            if(sameitemkey){
                return sameitemkey[1]
            }
        }
        return undefined
    }


    remove(key){
        let index= this.hash(key)
        //this.table[index]= undefined
        let bucket= this.table[index]
        if(bucket){
            let sameitemkey=bucket.find(item=>item[0]==key)
            if(sameitemkey){
                bucket.splice(bucket.indexOf(sameitemkey),1)
            }
        }
    }

    display(){
        for(var i=0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }
        }
    }
}

let table= new Hashtable(50)
table.set("name","ucefez")
table.set("mane","dhoni")
table.set("player","Yousafali")
table.display()
//table.remove("name")
console.log(table.get("player"))