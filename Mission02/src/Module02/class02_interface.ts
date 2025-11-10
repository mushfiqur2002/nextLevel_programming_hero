interface IUser {
    name: string;
    age: number;
    nolla: boolean;
}

const user1 = {
    name: 'mushfik',
    age: 20,
    nolla: false
}

const user2 = {
    name: 'korim',
    age: 18,
    nolla: true
}

type IArray = IUser[]  // not only asign array also need object because argument is object
let users = [user1, user2]
function isNolla(array: IArray) {
    let nolla = array.find(u => u.nolla === true)
    return nolla
}

console.log(isNolla(users));
