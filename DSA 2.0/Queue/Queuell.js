class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    enqueue(value) {
      const newNode = new Node(value);
      if (this.isEmpty()) {
        this.front = newNode;
        this.rear = newNode;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
      }
      this.size++;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
  
      const removedNode = this.front;
      this.front = this.front.next;
  
      if (!this.front) {
        this.rear = null;
      }
  
      this.size--;
      return removedNode.value;
    }
  
    peek() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
  
      return this.front.value;
    }
  
    print() {
      let current = this.front;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  
  const queue = new Queue();
  
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log("Peek:", queue.peek()); // Output: 1
  
  console.log("Dequeue:", queue.dequeue()); // Output: 1
  
  console.log("Queue after dequeue:");
  queue.print();
  