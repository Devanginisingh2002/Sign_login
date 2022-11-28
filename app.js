const express = require('express')
const app = express()

const loginRoute = require('./api/routes/login')
const signupRoute = require('./api/routes/signup')

app.use('/users/login', loginRoute)
app.use('/users/signup', signupRoute)

//Throwing an error for this base('/')route
app.use( (req, res) => {
    res.status(200).json ( {message: 'It works!'})
})

module.exports = app;