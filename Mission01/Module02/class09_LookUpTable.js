const users = [
    { id: 1, name: "Alice Johnson" },
    { id: 2, name: "Bob Smith" },
    { id: 3, name: "Charlie Brown" },
    { id: 4, name: "Diana Parker" }
];

const posts = [
    { userId: 1, postId: 101, title: "Learning JavaScript Basics" },
    { userId: 1, postId: 102, title: "Understanding Async/Await" },
    { userId: 2, postId: 201, title: "What is Node.js?" },
    { userId: 2, postId: 202, title: "Express.js Crash Course" },
    { userId: 3, postId: 301, title: "Frontend vs Backend" },
    { userId: 4, postId: 401, title: "CSS Grid Tutorial" }
]



// using for loop method

const userPosts = [];
for (let i = 0; i < users.length; i++) {
    userPosts.push({
        userID: users[i].id,
        userName: users[i].name,
        postsInfo:
            posts.filter(post => post.userId === users[i].id)
                .map(post => ({ postId: post.postId, title: post.title }))
    })

}
// console.log('using for loop',JSON.stringify(userPosts, null, 2));
// console.log('********************');

// look up table 
const postLookUpTable = posts.reduce((acc, current) => {
    const { userId, postId, title } = current;
    if (!acc[userId]) {
        acc[userId] = {
            posts: []
        }
    }
    acc[userId].posts.push({  // important note
        postId: postId,
        title: title,
    })
    return acc;
}, {})

const colllections = users.map(user => {
    return {
        userID: user.id,
        userName: user.name,
        postsInfo: postLookUpTable[user.id] ? postLookUpTable[user.id].posts : []
    }
})
console.log(JSON.stringify(colllections, null, 2));

// ### -> important note : push use krte hbe, duplicate data overwrite krbe na.

