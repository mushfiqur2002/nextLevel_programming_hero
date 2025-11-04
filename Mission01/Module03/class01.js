// function state less example
const counterFun = (amount) => {
    let count = 0;
    return count = count + amount;
}
console.log(counterFun(5));
console.log(counterFun(10));

// object state full
const counterObj = {
    count: 0,
    add(amount) {
        this.count = this.count + amount;
        return this.count;
    },
    print() {
        console.log(this.count);
    }
}

counterObj.add(5);
counterObj.add(10);
console.log(counterObj.print());
