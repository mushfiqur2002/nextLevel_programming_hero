// Queue using an array class method
// Queue follow FIFO (First in first out) principle
class Stack {
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

const stack = new Stack();
stack.enqueue(1)
stack.enqueue(2)
stack.enqueue(3)
stack.enqueue(4)
stack.printArry()
stack.dequeue();
stack.printArry()
stack.peek()

