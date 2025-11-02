const number = [1, 5, 8, 20, 40, 3, 15, 7, 12, 30];
const name = ['Baby Yoda', 'Grogu', 'darth Vader', 'Luke Skywalker', 'Princess Leia', 'Han Solo', 'Obi-Wan Kenobi', 'Yoda', 'R2-D2', 'C-3PO'];


console.log(number.sort((a, b) => a - b)); // ascending order
console.log(number.sort((a, b) => b - a)); // descending order

// ekhne case sensitive sort hoche tai age capital letter thn small letter.
console.log(name.sort());

// without case sensitive sort 
console.log(name.sort((a, b) => a.localeCompare(b)));



// *** use flat case in array ***
// flat method use nested array ke single array.

const courses = [
    'javaScript', 'html & css', 'react js',
    ['node js', 'express js', 'mongoDB'],
    ['python', 'javaScript', 'monogoDB'],
]
// ekhne set use kora hoice duplicate value remove korar jono.

const sortedCourses = new Set(courses.flat(Infinity).sort((a, b) => a.localeCompare(b)))
console.log(sortedCourses);


