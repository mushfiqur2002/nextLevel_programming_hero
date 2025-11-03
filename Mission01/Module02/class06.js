import rawData from './data.js';
// *** create look up table from array of object ***
// using reduce method
const lookUpTable = rawData.reduce((acc, current) => {
    acc[current.id] = current;
    return acc;
}, {})
console.log(lookUpTable);

// using for loop method
const lookUpTableObj = {}
for (let i = 0; i < rawData.length; i++) {
    lookUpTableObj[rawData[i].id] = rawData[i]
}
console.log(lookUpTableObj);

// *** count occurrences of items in an array ***
const array = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'];

// using reduce method
const countArrayItems = array.reduce((acc, current) => {
    acc[current] = (acc[current] || 0) + 1;
    return acc;
}, {})

console.log(countArrayItems);
