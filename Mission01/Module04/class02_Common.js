const userCount = 50
const userA = []
const userB = []

for (let i = 0; i < userCount; i++) {
    userA.push({
        id: i,
        name: `user_${i}`,
        from: 'userA'
    })
    userB.push({
        id: i + 25,
        name: `user_${i}`,
        from: 'userB'
    })
}


const commonUser = []

for (let i = 0; i < userA.length; i++) {
    for (let j = 0; j < userB.length; j++) {
        if (userA[i].id === userB[j].id) {
            commonUser.push(userB[j])
        }
    }
}

const commonUserForEach = []
userA.forEach(a => {
    userB.forEach(b => {
        if (a.id === b.id) {
            commonUserForEach.push(b)
        }
    })
});


// best method O(n)
const commonUserSetArray = []
const set = new Set(userA.map((aList) => aList.id))  //O(1)
for (let i = 0; i < userB.length; i++) {  // O(n)
    if (set.has(userB[i].id)) {
        commonUserSetArray.push(userB[i])
    }
}

console.log('common user array : ', commonUser);
console.log('common user foreach array : ', commonUserForEach);
console.log(set);
console.log('common user set array : ', commonUserSetArray);


// console.log('user A', userA);
// console.log('user B', userB);
