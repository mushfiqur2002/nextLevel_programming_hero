const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'huge-files')
fs.mkdirSync(sourceDir, { recursive: true })
fs.writeFileSync('file_organizer.txt','hello')
