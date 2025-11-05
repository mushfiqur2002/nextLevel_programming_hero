class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {
        const newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            return console.log('index out of bounds');
        }

        if (index === 0) {
            return this.prepend(value)
        }

        if (index === this.length) {
            return this.append(value)
        }

        let leadingNode = this.head
        console.log('leading node :', leadingNode, index, value);
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
}

const linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
linkedList.append(50);
linkedList.printList();
linkedList.prepend(60);
console.log(',,,,,,,,,,,,,,');
linkedList.insert(2, 70)
linkedList.printList();