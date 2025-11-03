const players = [
    { name: 'messi', score: 90 },
    { name: 'ronaldo', score: 95 },
    { name: 'neymar', score: 85 },
    { name: 'mbappe', score: 80 },
    { name: 'salah', score: 70 },
]

// using reduce method  O(n)
const topPlayer = players.reduce((acc, current) => {
    if (current.score > acc.score) return current
    return acc;
}, players[0])
console.log('reduce method', topPlayer);

// using reduce method short code  O(n)
const topestPlayer = players.reduce((acc, current) => current.score > acc.score ? current : acc)
console.log('reduce method in one line pass', topestPlayer);

// using for loop   O(n)
let bestScore = players[0];
for (let i = 0; i < players.length; i++) {
    if (players[i].score > bestScore.score) bestScore = players[i]
}
console.log('loop method', bestScore);

// using sort method    O(n*logn)
const sortedBestPlayer = players.sort((a, b) => b.score - a.score).slice(0, 1);
console.log('sort method', sortedBestPlayer[0]);

// using map method   O(2n)/O(n)
const bestPlayer = Math.max(...players.map(p => p.score));
console.log('map method', players.find(p => p.score === bestPlayer));




