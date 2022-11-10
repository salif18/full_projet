//importation du module mongoose
const mongoose = require('mongoose')
const uniqueValidator =require('mongoose-unique-validator')
const users = mongoose.Schema({
    prenom:{type:String, required:true},
    nom:{type:String,required:true},
    address:{type:String,required:true},
    numero:{type:Number,required:true, unique:true},
    email:{type:String,required:true, unique:true},
    password:{type:String,required:true}
})
users.plugin(uniqueValidator)
module.exports= mongoose.model('Clients',users)