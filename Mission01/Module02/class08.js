import rawData from "./data.js";

const colllections = rawData.reduce((acc, current) => {
    const { category, productName, price, stock } = current;

    if (!acc[category]) {
        acc[category] = {
            porducts: {},
            totalStock: 0,
            totalPrice: 0,
        }
    }

    if (!acc[category].porducts[productName]) {
        acc[category].porducts[productName] = [];
    }
    // acc[category].porducts[productName] = {
    //     price: price,
    //     stock: stock
    // };
    acc[category].porducts[productName].push({
        price: price,
        stock: stock
    });

    
    acc[category].totalStock += stock;
    acc[category].totalPrice += price;

    return acc;
}, {})

// must be JSON.stringify
console.log(JSON.stringify(colllections, null, 2));


// ### -> important note : push use krte hbe, duplicate data overwrite krbe na.
