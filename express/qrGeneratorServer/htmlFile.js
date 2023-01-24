const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(__dirname + '/public'))

/*app.get('/', (req, res) => {
    let htmlPath = path.resolve(__dirname, './index.html')
    res.sendFile(htmlPath)
})*/

app.listen(5000, () => {
    console.log('Connected on port 5000');
})