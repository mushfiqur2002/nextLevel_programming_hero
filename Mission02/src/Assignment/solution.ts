// ________________________ \\
// _______ problem 01_______ \\
const formatValue = (value: string | number | boolean) => {
    if (typeof value === 'string') {
        return value.toUpperCase()
    } else if (typeof value === 'number') {
        return value * 10
    } else if (typeof value === "boolean") {
        return !value
    }
}
// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));

// ________________________ \\
// _______ problem 02_______ \\
const getLength = (value: string | string[] | number[]): number => {
    if (typeof value === 'string') {
        return value.length
    } else if (Array.isArray(value)) {
        return value.length
    }
    return 0
}
// console.log(getLength('typescript'));
// console.log(getLength(['yoolo', 'boo', 'tho', 'lo', 'do']));

// ________________________ \\
// _______ problem 03_______ \\
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}
// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());

// ________________________ \\
// _______ problem 04_______ \\
type TBooksItems = {
    title: string;
    rating: number;
}
const filterByRating = (arr: TBooksItems[]) => {
    return arr.filter((item) => item.rating >= 4)
}
// const books: booksItems[] = [
//     { title: 'Book A', rating: 4.5 },
//     { title: 'Book B', rating: 3.2 },
//     { title: 'Book B', rating: 4 },
//     { title: 'Book C', rating: 5.0 },
// ];
// console.log(filterByRating(books));

// ________________________ \\
// _______ problem 05_______ \\
type IUser = {
    id: number
    name: string
    email: string
    isActive: boolean
}
const filterActiveUsers = (userArr: IUser[]) => {
    return userArr.filter((user) => user.isActive === true)
}
// const users: IUser[] = [
//     { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//     { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//     { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];
// console.log(filterActiveUsers(users));

// ________________________ \\
// _______ problem 06_______ \\
interface Book {
    title: string
    author: string
    publishedYear: number
    isAvailable: boolean
}
const printBookDetails = (books: Book) => {
    return console.log(`Title: ${books.title}, Author: ${books.author}, Published: ${books.publishedYear}, Available: ${books.isAvailable ? 'Yes' : 'No'}`);
}
// const myBook: Book = {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     publishedYear: 1925,
//     isAvailable: false,
// };
// printBookDetails(myBook);

// ________________________ \\
// _______ problem 07_______ \\
const getUniqueValues = (arr1: number[], arr2: number[]) => {
    let arr = [...arr1, ...arr2]
    return Array.from(new Set(arr))
}
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));

// ________________________ \\
// _______ problem 08_______ \\
type IProduct = {
    name: string
    price: number
    quantity: number
    discount?: number
}
const calculateTotalPrice = (arr: IProduct[]) => {
    let totalPrice = 0
    arr.map((item) => {
        let basePrice = item.price * item.quantity
        let finalPrice = item.discount ? basePrice - (basePrice * (item.discount / 100)) : basePrice
        totalPrice += finalPrice
    })
    return totalPrice
}
// const products: IProduct[] = [
//     { name: 'Pen', price: 10, quantity: 2 },
//     { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
//     { name: 'Bag', price: 50, quantity: 1, discount: 20 },
// ];
// console.log(calculateTotalPrice(products));
