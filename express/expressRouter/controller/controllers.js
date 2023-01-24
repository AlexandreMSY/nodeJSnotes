const {people} = require('../../data')

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people})
}

const searchPeople = (req, res) => {
    const {name} = req.params
    const foundPeople = people.filter((person) => person.name.startsWith(name))

    console.log(foundPeople.length);

    if(foundPeople.length > 0){
        return res.status(200).json({success: true, data: foundPeople})
    }

    res.status(404).json({success: false, msg: 'No people found'})
}

module.exports = {
    getPeople,
    searchPeople
}