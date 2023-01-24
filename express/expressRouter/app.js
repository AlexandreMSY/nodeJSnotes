const express = require('express')
const app = express()
const people = require('./routes/people')

app.use('/api/people', people)

app.listen(5000, () => {console.log('Connected on Port 5000');})
