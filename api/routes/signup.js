const express = require('express')
const router = express.Router()

//localhost:5001/users/signup/
router.get('/', (req, res) => {
    res.status(200).json( {message: 'GET request to /users/signup'} )
})

// We are importing a router to use the below request such as, ppost, patch, delete

router.post('/', (req, res) => {
    //Expecting the userID and UserPassword from the user to write in the DB
    // const variable = req.body.propertyNameFromRequest

    // Note: By default, NodeJS does not have access to request.body

    const userEmail= req.body.email
    const userPassword = req.body.password

    const credentials = {
        email: userEmail, 
        password: userPassword
    }
    res.status(201).json( {message: 'User Created', credentials } )
})

router.patch('/', (req, res) => {
    res.status(200).json( {message: 'PATCH request to /users/signup'} )
})

router.delete('/', (req, res) => {
    res.status(200).json( {message: 'DELETE request to /users/signup'} )
}) 


module.exports = router;