const express = require('express')
const { products } = require('./data')
const app = express()

app.get('/', (req, res) => {
    res.json(products)
})

//route param
app.get('/products/:productID', (req, res) => {
    const productId = parseInt(req.params.productID)
    const productFound = products.filter((product) => product.id === productId)

    if(!productFound){
        res.status(404).send('404')
    }else{
        res.json(productFound)
    }
})

app.listen(5000, () => {
    console.log('Connected on port 5000');
})