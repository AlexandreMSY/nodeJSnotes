const http = require('http')
const {readFileSync} = require('fs')

http.createServer((req, res) => {
    const htmlFile = readFileSync('./file/index.html')
    console.log('logged');
    
    if(req.url === '/'){
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(htmlFile)
        res.end()
    }else{
        res.writeHead(404, { 'content-type': 'text/plain' })
        res.end('Not Found')
    }
}).listen(5000)
