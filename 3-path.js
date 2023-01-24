const path = require('path')

const txtPath = path.join('file', 'file.txt')
const fileName = path.basename(txtPath)
const absolutePath = path.resolve(__dirname, 'file', 'file.txt')

console.log(`
txt path: ${txtPath}
file name: ${fileName}
absolute path: ${absolutePath}
is absolute? ${path.isAbsolute(absolutePath)}
`);