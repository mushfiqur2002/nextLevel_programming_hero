import Stack from "../Module03/class03_StackArr.js";

const bracketChecker = (str) => {
    const stack = new Stack()
    const list = {
        ')': '(',
        '}': '{',
        ']': '['

    }
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char)
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.isEmpty() || stack.pop() !== list[char]) {
                return false
            }
        }
    }
    return stack.isEmpty()
}

console.log(bracketChecker('([[]})'));
