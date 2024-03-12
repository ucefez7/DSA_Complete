class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return console.log("Size:", this.size);
    }

    append(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
        } else {

            this.tail.next = node;
            node.prev = this.tail;
        }
        this.size++;
        this.tail = node;
    }

    print() {
        if (this.isEmpty()) {
            return console.log("Node is empty");
        }
        let curr = this.head;
        while (curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }


    printReverse() {
        if (this.isEmpty()) {
            return console.log("Node is empty");
        }
        let curr = this.tail;
        while (curr) {
            console.log(curr.value);
            curr = curr.prev;
        }
    }

    deleteAfter(value) {
        if (this.isEmpty()) {
            return console.log("Node is empty");
        }
        if (this.tail.value == value && !this.tail.next) {
            return console.log("NO after value");

        }
        if (this.head.value === value && this.head.next) {

            let deleteNode = this.head.next;
            this.head.next = deleteNode.next;
            if (deleteNode.next) {
                deleteNode.next.prev = this.head;
            }
        } else {

            let curr = this.head;
            while (curr.value !== value && curr.next) {
                curr = curr.next;
            }
            let deleteNode = curr.next;
            curr.next = deleteNode.next;
            if (deleteNode.next) {
                deleteNode.next.prev = curr;
            }
        }

        this.size--;
    }

    deleteBefore(value) {
        if (this.isEmpty()) {
            return console.log("Node is empty");
        }
        if (this.head.value === value && !this.head.prev) {
            return console.log("No before value");

        } else if (this.tail.value === value && this.tail.prev) {
            let deleteNode = this.tail.prev;
            deleteNode.prev.next = this.tail;
            this.tail.prev = deleteNode.prev
        } else {
            let curr = this.head;
            while (curr.value !== value && curr.next) {
                curr = curr.next;
            }
            let deleteNode = curr.prev;
            curr.prev = deleteNode.prev;
            deleteNode.prev.next = curr;
        }
        this.size--;
    }

}

const list = new linkedList;

list.append(10);
list.append(12);
list.append(14);
list.append(16);
list.append(18);
list.append(24);
list.print();
list.getSize();
list.printReverse()
// list.deleteAfter(12);
list.deleteBefore(18);
list.print()
list.getSize();