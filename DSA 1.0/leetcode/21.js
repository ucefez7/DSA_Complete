const ps= require("prompt-sync")
const prompt=ps()


//Merge two sorted list

let limit1= parseInt(prompt("enter the limit: "))
let list1 = Array(limit1)
for(var i=0; i<limit1; i++){
    let values1= parseInt(prompt("Enter the values: "))
    list1[i]=values1
}

let limit2= parseInt(prompt("enter the limit: "))
let list2= Array(limit2)
for(var i=0; i<limit2; i++){
    let values2= parseInt(prompt("enter the values: "))
    list2[i]=values2
}

// console.log(list1)
// console.log(list2)

if(!list1){
    console.log(list2)
}else if(!list2){
    console.log(list1)
}else if(list1.val <=list2.val){
    list1.next = mergeTwoLists(list1.next,list2)
    console.log(list1)
}else{
    list2.next = mergeTwoLists(list1,list2.next)
    console.log(list2)
}