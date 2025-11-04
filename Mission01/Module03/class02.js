const createCounter = () => {
    let count = 0;
    return (amount) => {
        count += amount;
        return count;
    }
}

const counter = createCounter();
console.log(counter(5));
console.log(counter(10));

// function as a state full example

// amra portektar jono object banaite parbo na, and 
// function use krle ekta state maintain krte hbe.

class Counter {
    constructor(count) { this.count = count }
    add(amount) { this.count += amount }
    print() { console.log('using class ', this.count) }
}

const counter1 = new Counter(0)
counter1.add(5);
counter1.add(10);
counter1.print();
