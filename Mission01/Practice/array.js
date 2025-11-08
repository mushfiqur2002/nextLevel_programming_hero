let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i)
}
console.log(arr);

// insert in last in an array
arr.push(11)
console.log(arr);

// insert in first in an array
arr.unshift(0)
console.log(arr);

// inset in any place 
// method 01
function insertInArrForLoop(index, value, a) {
    for (let i = a.length; i > index; i--) {
        a[i] = a[i - 1]
    }
    a[index] = value
    return a
}
console.log(insertInArrForLoop(5, 500, arr));
// method 02
arr.splice(6, 0, 600);
console.log(arr);

// method 03
function insertInArraySlice(index, value) {
    let newArray = [
        ...arr.slice(0, index), value, ...arr.slice(index)
    ]
    return newArray
}
console.log(insertInArraySlice(7, 700));








