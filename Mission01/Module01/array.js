console.time('task');
const array1 = [];
const array2 = [];
for (let i = 0; i < 100; i++) {
    array1.push(i);
    if (i < 30) {
        array2.push(i);
    }
}

const userListArray = array1.map((number) => { return { userId: number } }) // if curly bracket need to return statement
const userListArray1 = array1.map((number) => ({ userId: number })) // if don't use curly bracket don't need return statement
console.log(userListArray);
console.log(userListArray1);

console.timeEnd('task');