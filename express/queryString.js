/*const {products} = require('./data')
let test = [...products]
let query = test.filter((data) => data.id > Number(1))

console.log(query);*/

const readJSONFile = (path) => {
    const req = readFileSync(path)
    const obj = JSON.parse(req)

    return obj
}

const express = require('express')
const app = express()
const { readFileSync } = require('fs')
const data = readJSONFile('./express/dados.json').pessoas


app.get('/', (req, res) => {
    res.status(200).send(data)
})

app.get('/person/:name', (req, res) => {
    const name = req.params.name
    const foundPerson = data.find((data) => data.nome === name)

    console.log(foundPerson);
    res.status(200).send(foundPerson)
})

app.get('/api/query', (req, res) => {
    const { average, avparcial } = req.query
    let selectedUsers = data

    console.log(req.query);

    if(average){
        selectedUsers = selectedUsers.filter((data) => {
            return data.media > average
        })
    }

    if(avparcial){
        selectedUsers = selectedUsers.filter((data) => {
            return data.avParcial > avparcial
        })
    }

    //console.log(selectedUsers);

    res.status(200).send(selectedUsers)
})

app.listen(5000, () => {console.log('Connected on port 5000')})