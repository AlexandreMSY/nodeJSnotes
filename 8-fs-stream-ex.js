const {createReadStream} = require('fs')

const stream = createReadStream('./file/file.txt')

stream.on('data', (chunk) => {
    console.log(chunk)
})