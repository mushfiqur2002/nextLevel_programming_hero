class Common {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    status(message: string = '') {
        console.log(`name : ${this.name}, age: ${this.age}, address: ${this.address}, ${message}`);
    }
}

class Student extends Common {
    readInclass: number;
    constructor(name: string, age: number, address: string, readInclass: number) {
        super(name, age, address);
        this.readInclass = readInclass;
    }
    message() {
        console.log(`${this.name} read in class ${this.readInclass}. age ${this.age} live in ${this.address}`);
    }
}

class Teacher extends Common {
    takeClass: number;
    constructor(name: string, age: number, address: string, takeClass: number) {
        super(name, age, address);
        this.takeClass = takeClass
    }
    xyz() {
        super.status(`yes do work in ${this.takeClass}`);
    }
}

const student1 = new Student('mushfik', 22, 'mirpur', 12);
student1.message()

const teacher = new Teacher('alom', 50, 'bonani', 4)
teacher.xyz()