const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    const text = fs.createReadStream('./file/file.txt', 'utf-8')
    text.on('open', () => {
        text.pipe(res)
    })

    text.on('error', (error) => {
        res.end(error)
    })
}).listen(8000)