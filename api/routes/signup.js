const express = require('express')
const { default: mongoose } = require('mongoose')
const signup = require('../model/signup')
const router = express.Router()

//import the model
const Signup = require('../model/signup')

//localhost:5001/users/signup/
router.get('/', (req, res) => {
    res.status(200).json( {message: 'GET request to /users/signup'} )
})

// We are importing a router to use the below request such as, ppost, patch, delete

router.post('/', (req, res) => {
    //Expecting the userEmail and UserPassword from the user to write in the DB
    // const variable = req.body.propertyNameFromRequest

    // Note: By default, NodeJS does not have access to request.body

   /*  const userEmail= req.body.email
    const userPassword = req.body.password */
    
    //store the value of userEmail & userPassword in the database
    //Created model object
    const user = new signup({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: req.body.password
    })

    user.save()
        .then(result => res.status(201).json( {message: 'User Created', userDetails: result} ) )
        .catch(error => res.status(500).json({ message: 'error occured in the DB', err: error}))

})
    /* const createdUser = {
        email: userEmail, 
        password: userPassword
    }
    res.status(201).json( {message: 'User Created', credentials: createdUser } ) */


router.patch('/', (req, res) => {
    res.status(200).json( {message: 'PATCH request to /users/signup'} )
})

router.delete('/', (req, res) => {
    res.status(200).json( {message: 'DELETE request to /users/signup'} )
}) 


module.exports = router;