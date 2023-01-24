const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('home page')
})

app.get('/about', (req, res) => {
    res.status(200).send('about')
})

app.all('*', (req, res) => {
    res.status(404).send('not found')
})

app.listen(5000, () => {
    console.log('connected on port 5000');
})