interface UserInfo<T> {
    name: string,
    age: number,
    salary: number,
    married: boolean,
    smartPhone: T
}

interface SmartPhone {
    name: string,
    model: string,
    eSim: boolean,
    price: number
}

const user1: UserInfo<SmartPhone> = {
    name: 'md mushfiqur rahman',
    age: 23,
    salary: 0,
    married: false,
    smartPhone: {
        name: 'realme narzo 50',
        model: 'narzo 50',
        eSim: false,
        price: 12000
    }
}

console.log(user1);
