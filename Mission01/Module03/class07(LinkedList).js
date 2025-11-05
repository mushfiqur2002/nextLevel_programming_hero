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

        const leadingNode = this._traverseToIndex(index)
        const holdingNode = leadingNode.next
        const newNode = new Node(value)

        leadingNode.next = newNode
        newNode.next = holdingNode

        this.length++
    }

    remove(index) {
        if (index < 0 || index >= this.length) return console.log('invalid index');

        if (index === 0) {
            this.head = this.head.next;
            this.length--;
            return;
        }

        const leadingNode = this._traverseToIndex(index);
        const holdingNode = leadingNode.next

        leadingNode.next = holdingNode.next;
        this.length--
    }

    _traverseToIndex(index) {
        let count = 0;
        let leadingNode = this.head
        while (count !== index - 1) {
            leadingNode = leadingNode.next
            count++;
        }
        return leadingNode
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
console.log(',,,,,,,,,,,,,,');
linkedList.remove(4)
linkedList.printList();