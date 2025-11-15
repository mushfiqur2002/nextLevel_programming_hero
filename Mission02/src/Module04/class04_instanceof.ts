class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    isAdullt() { return this.age >= 18 ? true : false }
}
class Student extends Person {
    constructor(name: string, age: number) {
        super(name, age);
    }
    doStudy(readingHour: number) {
        return readingHour
    }
}
class Teacher extends Person {
    constructor(name: string, age: number) {
        super(name, age);
    }
    takeClass(classHour: number) {
        console.log(`read ${classHour} in a day.`);
    }
}

function infoFunction(user: Person) {
    if (user instanceof Student) {
        console.log(`name:${user.name}, age:${user.age}, adult:${user.isAdullt()}, study:${user.doStudy(8)}`);
    }
}

const student1 = new Student('mushfik', 16)
infoFunction(student1)

