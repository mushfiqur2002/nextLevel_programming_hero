class Person {
    getSleep() {
        return 'normal people sleep 8 hours.';

    }
}

class Student extends Person {
    getSleep() {
        return 'student sleep 12 hours.';
    }
}

class Teacher extends Person {
    getSleep() {
        return 'a teacher never sleep.';
    }
}

const normalPerson = new Person();
const studentPerson = new Student();
const teacherPerson = new Teacher();

console.log(normalPerson.getSleep());
console.log(studentPerson.getSleep());
console.log(teacherPerson.getSleep());
