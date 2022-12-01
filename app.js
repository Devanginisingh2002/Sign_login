//Responsible for handling all your request and responses
//Express Application
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const monggose = require('mongoose')

const loginRoute = require('./api/routes/login')
const signupRoute = require('./api/routes/signup')
const { default: mongoose } = require('mongoose')

//MIDDLEWARES: Any piece of code which will be executed after the server and before managing the routes.
//Eg -> DB connection. 
// 1. Nodemon: A middleware which is a development middleware.
// 2. Body-Parser: Give you an access to req.body objecte
// Extended: false --> only work on string and array type data
// Extended: true --> Any type of data

app.use( bodyParser.urlencoded( {extended: false} ) )
app.use( bodyParser.json() )

// 3. Morgan --> Dev DEP --> Logger middleware --> Any request made on the API, will be logged in the console

app.use( morgan('dev'))

//4. Mongoose --> make a dp connection before the routes are managed --> .connect( connection string )
mongoose.connect('mongodb+srv://Devangini:Devang_123@cluster0.bri1x.mongodb.net/cu_21?retryWrites=true&w=majority')
    .then(console.log('Connection to DB Successful !'))
    .catch(error => console.log(err) )
    // .catch( err => console.error(err))


/* try{
    async() => await mongoose.connect('mongodb+srv://Devangini:Devang_123@cluster0.bri1x.mongodb.net/?retryWrites=true&w=majority')
}catch{
    console.log('Error occured while connecting')
} */

//Syntax: app.use('path',(request, response) => {...} )
//request and response give by: Express

//Managing my route
// localhost:5001/users
// app.use('/users', (req, res) => {
//     res.status(200).json( {message: 'GET request to /users'} )
// } )

//Syntax: app.use('path', nameofFile)
app.use('/users/login', loginRoute)
app.use('/users/signup', signupRoute)

//Throwing an error for this base('/')route
//localhost:5001/ --> Home route
app.use( (req, res) => {
    //res.status().json ( {JS object})
    res.status(404).json ( {message: 'Seems like you are lost, please try with a route'})
})

module.exports = app;