const path = require('path')
const fs = require('fs')

const filePath = path.join('file', 'file.txt')
const text = fs.readFileSync(filePath, 'utf8')

console.log(text);

fs.writeFileSync(
    './file/newfile.txt',
    `TEXT STRING 2`
)

