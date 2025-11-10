type ArrayObject = {
    char: string | undefined;
    number: number | undefined;
    boolean: boolean | undefined;
}

// 1st method
const char: string[] = ['a', 'b', 'c']
const number: number[] = [1, 2, 3]
const bools: boolean[] = [false, true, false]
const array: ArrayObject[] = []

for (let i = 0; i < char.length; i++) {
    array.push({
        char: char[i],
        number: number[i],
        boolean: bools[i]
    })
}
console.log(array);

// 2nd method
const char2ndM: Array<string> = ['a', 'b', 'c']
const number2ndM: Array<number> = [1, 2, 3]
const boolean2ndM: Array<boolean> = [true, false, true]

// 3rd method generics
type GenericArray<value> = Array<value>

const char3rdM: GenericArray<string> = ['a', 'b', 'c']
const number3rdM: GenericArray<number> = [1, 2, 3]
const boolean3rdM: GenericArray<boolean> = [true, false, true]