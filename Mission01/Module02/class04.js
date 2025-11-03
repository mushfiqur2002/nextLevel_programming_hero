const arr = [];
for (let i = 0; i < 5; i++) { arr.push(i * 2); }
console.log(arr);

const arr2 = [];
Array.from({ length: 5 }, (v, i) => arr2.push(i * 2))
console.log(arr2);

const arr3 = [];
const range = (start, end, step) => (
    Array.from({ length: Math.ceil((end - start) / step) },
        (v, i) => (start + i * step)
    )
)
console.log(range(0, 10, 2));


