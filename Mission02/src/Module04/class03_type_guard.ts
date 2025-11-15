type A = {
    name: string;
    roll: string;
}
type B = {
    name: string;
}
type X = number | string

function addingNumber(num1: X, num2: X) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2
    } else {
        return `${num1}${num2}`
    }
}
console.log(addingNumber('2', 2));


//  type 'in' guard 
function functionForTypeGurad(user: A | B) {
    if ('roll' in user) {
        console.log(`user name : ${user.name} & user roll : ${user.roll}`);
    } else {
        console.log(`user name : ${user.name}`);
    }
}

functionForTypeGurad({ name: 'mushfik', roll: 'admin' })