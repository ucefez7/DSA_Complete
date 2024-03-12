class Heap{
  constructor(){
    this.arr=[]
  }


  getParent(i){
    return Math.floor((i-1)/2)
  }


  getLeftChild(i){
    return 2*i+1
  }

  getRightChild(i){
    return 2*i+2
  }

  swap(i,j){
    let temp=this.arr[i]
    this.arr[i]=this.arr[j]
    this.arr[j]=temp
  }

  insert(value){
    this.arr[this.arr.length]=value
    this.heapifyUp()
  }

  heapifyUp(){
    let index= this.arr.length-1
    if(this.arr[index]>this.arr[this.getParent(index)]){
      this.swap(index,this.getParent(index))
      index=this.getParent(index)
    }
  }


  heapifyDown(index,heapSize) {
    let largest = index
    let left = 2*largest+1
    let right = 2*largest+2

    if(left < heapSize && this.arr[left] > this.arr[largest]){
        largest = left
    }

    if(right < heapSize && this.arr[right] > this.arr[largest]){
        largest = right
    }

    if(largest != index){
        this.swap(index,largest)
        this.heapifyDown(largest,heapSize)
    }
}

buildHeap(){
    let n = this.arr.length
    for(let i = Math.floor(n/2)-1; i >= 0; i--){
        this.heapifyDown(i,n)
    }
}

heapSort(){
    this.buildHeap()
    for (let i = this.arr.length-1; i >= 0; i--) {
        this.swap(0,i)
        this.heapifyDown(0,i)
        }
    }


  removeroot(){
    if(this.arr.length==0){
      return null
    }
    let root= this.arr[0]
    let last= this.arr.pop()
    if(this.arr.length>0){
      last=this.arr[0]
      this.heapifyDown()
    }
    return root
  }



}

const heap= new Heap()
heap.insert(30)
heap.insert(20)
heap.insert(4)
heap.removeroot(4)
heap.heapifyDown()
console.log(heap.arr);