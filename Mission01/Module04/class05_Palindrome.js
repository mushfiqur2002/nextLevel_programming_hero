function palindrome(str) {
    let text = str.toLowerCase().replace(/[,;.]/g, "")
    let mid = Math.floor(text.length / 2)

    let left = text.slice(0, mid)
    let right = text.slice(text.length % 2 === 0 ? mid : mid + 1).split('').reverse().join('')

    console.log(left, '||', right);

    if (left === right) {
        console.log('yes palindrome')
    } else {
        console.log('no palindrome')
    }
}

palindrome('le, el.')