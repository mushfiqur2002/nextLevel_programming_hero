const functionWithArray = (value: number[]) => {
    return value
}
const functionWithObject = (value: { id: number, name: string }) => {
    return value
}
const functionWithString = (value: string) => {
    return value
}
const functionWithNumber = (value: number) => {
    return value
}

console.log(functionWithArray([1, 2, 3, 4]));
console.log(functionWithObject({
    id: 123,
    name: 'nasim'
}));
console.log(functionWithString('hello world'));
console.log(functionWithNumber(1234));

// generic method
const genericFunction = <value>(value: value) => { return value }
interface UserInfo {
    id: string,
    name: string,
    roll: string
}

interface OwnInfo {
    id: string,
    name: string,
    handsome: boolean,
    friends: string[]
}

const myInfo: OwnInfo = {
    id: 'cs2203045',
    name: 'md mushfiqur rahman',
    handsome: true,
    friends: ['riad', 'shuvo', 'sadia', 'masrur']
}

const array: UserInfo[] = []
for (let i = 0; i < 10; i++) {
    array.push({
        id: `${i}`,
        name: `user${i}`,
        roll: `cs2201${i}`
    })
}

const stringWithGenericFun = genericFunction<string>('hello world')
const numberWithGenericFun = genericFunction<number>(123)
const booleanWithGenericFun = genericFunction<boolean>(true)
const objectWithGenericFun = genericFunction<object>(myInfo)
console.log(genericFunction(array));
console.log(stringWithGenericFun);
console.log(numberWithGenericFun);
console.log(booleanWithGenericFun);
console.log(objectWithGenericFun);
