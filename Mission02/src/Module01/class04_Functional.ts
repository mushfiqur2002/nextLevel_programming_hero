function add(num1: number, num2: string) : string {
    return num1 + num2
}

console.log(add(1, '1'));

const addArrowFun = (num1: number, num2: string) : string => num1 + num2


console.log(addArrowFun(1, '2'));
