const express = require('express')
const router = express.Router()

const Signup = require('../model/signup')

// URL --> /users/login
router.get('/',(req, res) => {
    res.status(200).json( {message: 'GET request to users/login'})
})

//PATH --> /users/login/userId
//Request Parameters or Query parameter-> Parameters which are passed in the URL for the API
router.get('/:userId',(req, res) => {
    // res.status(200).json( {message: `GOT a request for /users/login/${req.params.userId}`} )
})

/* We are importing a router to use the below request
router.post()

router.patch()

router.delete() */

router.post('/', (req, res) => {
    const userEmail = req.body.userEmail
    const userPassword = req.body.password
    
    Signup.find()
        // .then(result => res.status(200).json( { message: 'Entries Found', entries: result}))
        .then (result => {
            const userNames = []
            for(let i=0; i < result.length; i++){
                userNames.push(result[i].email)
            }
            res.status(200).json( {entries: userNames} )
        })
        .catch(err => res.status(500).json( {message: 'DB error', error: err}))
})

router.patch('/', (req, res) => {
    res.status(200).json( {message: 'PATCH request to /users/signup'} )
})

router.delete('/', (req, res) => {
    res.status(200).json( {message: 'DELETE request to /users/signup'} )
}) 


module.exports = router;