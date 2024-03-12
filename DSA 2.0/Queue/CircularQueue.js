class CircularQueue {
    constructor(capacity) {
        this.items = [];
        this.capacity = capacity;
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }

    enqueue(element) {
        if (this.isFull()) {
            console.log("Queue is full. Cannot enqueue.");
            return;
        }

        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = element;
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty. Cannot dequeue.");
            return null;
        }

        const removedElement = this.items[this.front];
        this.front = (this.front + 1) % this.capacity;
        this.size--;
        return removedElement;
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.capacity;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty. Cannot peek.");
            return null;
        }
        return this.items[this.front];
    }

    print() {
        let result = "";
        for (let i = 0; i < this.size; i++) {
            const index = (this.front + i) % this.capacity;
            result += this.items[index] + " ";
        }
        console.log(result);
    }
}

let circularQueue = new CircularQueue(3);

