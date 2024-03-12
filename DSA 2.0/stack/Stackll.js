class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    push(value) {
      const newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
    }
  
    pop() {
      if (this.isEmpty()) {
        console.log("Stack underflow");
        return null;
      }
  
      const poppedItem = this.top.value;
      this.top = this.top.next;
      this.size--;
      return poppedItem;
    }
  
    peek() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
      }
  
      return this.top.value;
    }
  
    print() {
      let current = this.top;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  
  const stack = new Stack();
  
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log("Stack after pushing elements:");
  stack.print();
  
  console.log("\nPeek: " + stack.peek());
  
  console.log("\nPopped item: " + stack.pop());
  console.log("Stack after popping one element:");
  stack.print();
  