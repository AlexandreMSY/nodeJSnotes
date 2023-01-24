const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Homepage')
    }else if(req.url === '/about'){
        res.end('About')
    }else{
        res.end('error')
    }
})

server.listen(8080)