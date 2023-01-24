const express = require('express')
const app = express()
const {people} = require('./data')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json(people)
})

app.post('/api/add', (req, res) => {
    const {name} = req.body

    if(!name){
        return res.status(400).json({success: false, msg: 'no name inputted'})
    }

    res.status(200).json({ success: true, response: name})
})

app.put('/put/edit/:id', (req, res) => {
    const id = req.params
    const {name} = req.body

    const newPeople = people.map((person) => {
        if (person.id === Number(id)){
            person.name = name
        }

        return person
    })

    res.status(200).json({success: true, response: newPeople})
})

app.delete('/put/delete/:id', (req, res) => {
    const id = req.params

    const newPeople = people.filter((person) => person.id !== Number(id))

    res.status(200).json({success: true, data: newPeople})
})

app.listen(5000, () => {console.log('Connected on port 5000')})