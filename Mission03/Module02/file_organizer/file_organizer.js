const fs = require('fs')
const path = require('path')

const files = [
    "hello.txt",
    "report.pdf",
    "photo.jpg",
    "music.mp3",
    "script.js",
    "notes.docx",
    "logo.png",
    "hoga.png"
]

const categories = {
    documents: ['.pdf', '.txt', '.docx'],
    images: ['.jpg', '.png', '.jpeg'],
    audio: ['.mp3', '.wav'],
    code: ['.js', '.ts']
}

const directory = path.join(__dirname, 'random-file')
const organizer = path.join(__dirname, 'organizer')

function initializer() {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true })
    }
    for (const file of files) {
        const filePathLink = path.join(directory, file)
        if (!fs.existsSync(filePathLink)) {
            fs.writeFileSync(filePathLink, `this is the content of ${file}`)
            console.log('new file added');
        }
    }
}
initializer()

console.log('directory: ', directory)
console.log('organizer: ', organizer)

