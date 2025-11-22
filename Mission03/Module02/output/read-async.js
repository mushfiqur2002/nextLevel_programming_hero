const { error } = require('console')
const fs = require('fs')

fs.readFile('../data/entries/text.txt', 'utf-8', (error, data) => {
    if (error) return 'something wrong'
    console.log('start...');
    console.log(data);
    console.log('finish...');
})
console.log('outer');
