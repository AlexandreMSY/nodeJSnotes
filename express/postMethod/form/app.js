const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: false})) //parse form

app.post('/login', (req, res) => {
    const {name} = req.body
    if(name){
        return res.status(200).json({ success: true, name: name})
    }

    res.status(400).json({ success: false, msg: 'please provide a name'})
})

app.listen(5000, () => {console.log('Connected on port 5000')})