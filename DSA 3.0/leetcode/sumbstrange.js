//here we are using preorder traversal

let sum=0
 let Sum=function(root, left, right){
     if(root==null){
         return
     }
     if(root.val>=left && root.val<=right){
         sum+= root.val
     }
     Sum(root.left, left, right)
     Sum(root.right, left, right)
 }
var rangeSumBST = function(root, left, right) {
    sum=0
    Sum(root, left, right)
    return sum
};