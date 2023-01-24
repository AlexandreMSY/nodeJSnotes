const express = require('express')
const app = express()

const middlewareFunction = (req, res, next) => {
    const date = new Date().toISOString()
    console.log(date);
    next()
}

//app.use(middlewareFunction) applies middleware to all routes
//you can also use route as a parameter in order to only execute the middleware function on certain paths

//app.use(middleware1, middleware2) using multiple middlewares

app.get('/', middlewareFunction, (req, res) => {
    res.send('Home')
    console.log('ok');
})

app.listen(5000, () => {console.log('Connected on port 5000')})