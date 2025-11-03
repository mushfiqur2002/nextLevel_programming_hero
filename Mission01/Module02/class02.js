import rawData from './data.js';

const categoryArr = rawData.map(item => item.category);

// brute force method
const uniqueCategories = [];
categoryArr.map(category => {
    if (!uniqueCategories.includes(category)) {
        uniqueCategories.push(category);
    }
})
console.log(uniqueCategories);

// using Set method
const categorySet = new Set(categoryArr);
console.log(Array.from(categorySet));

const topRatedProducts = rawData
    .filter(item => item.rating >= 4.7)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)
    .map(item => item.productName);
console.log(topRatedProducts);


