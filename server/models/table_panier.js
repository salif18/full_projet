//importation du module mongoose
const mongoose = require('mongoose')
const panier = mongoose.Schema({
    image:{type:String,required:true},
    nom:{type:String,required:true},
    description:{type:String},
    category:{type:String,required:true},
    prix:{type:Number,required:true},
    qty:{type:Number}
    
})
 module.exports = mongoose.model('Panier',panier)