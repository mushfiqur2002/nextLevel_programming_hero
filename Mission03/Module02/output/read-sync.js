const fs = require('fs');
try {
    console.log('start...');
    const data = fs.readFileSync('../data/entries/text.txt', 'utf-8')
    console.log(data);
    console.log('finish...');
} catch (error) {
    console.error(error.message)
}
console.log('outer');


