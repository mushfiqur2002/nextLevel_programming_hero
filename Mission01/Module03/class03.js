// stack using an array class method

class Stack {
    constructor() {
        this.array = [];
    }
    push(value) {
        this.array.push(value)
    }
    pop() {
        if (this.isEmpty()) {
            return this.print('stack is empty at first push some value.')
        }
        return this.array.pop()
    }
    peek() {
        if (this.isEmpty()) {
            return this.print('stack is empty')
        }
        return this.print(`the peek value ${this.array[this.array.length - 1]}`)
    }
    isEmpty() {
        if (this.array.length === 0) {
            return this.print('stack is empty')
        }
    }
    print(msg) {
        console.log(msg);
    }
    printArry() {
        return this.print(this.array)
    }
}

const stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.printArry()
stack.pop();
stack.printArry()
stack.peek()

