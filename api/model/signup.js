// Model: A file which conttains the structure and type of the data to be written in the DB (Schema)
// created schema: for how many files are required
const mongoose = require('mongoose')

//created object for monggose.schema
const signupSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String  
})

module.exports = mongoose.model('Signup', signupSchema)