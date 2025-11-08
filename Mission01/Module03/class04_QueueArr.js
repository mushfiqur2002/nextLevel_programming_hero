// Queue using an array class method
// Queue follow FIFO (First in first out) principle
class Queue {
    constructor() {
        this.array = []
    }
    enqueue(value) {
        this.array.push(value)
    }
    dequeue() {
        if (this.isEmpty()) {
            return this.print('stack is empty at first push some value.')
        }
        return this.array.shift()
    }
    peek() {
        if (this.isEmpty()) {
            return this.print('stack is empty')
        }
        return this.print(`the peek value ${this.array[0]}`)
    }
    isEmpty() {
        if (this.array.length === 0) {
            return this.print('stack is empty')
        }
    }
    print(msg) {
        console.log(msg)
    }
    printArry() {
        return this.print(this.array)
    }
}

const queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.printArry()
queue.dequeue();
queue.printArry()
queue.peek()

