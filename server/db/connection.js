//importation du module mongoose
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()
const Key_connection = mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('Connectee a mongo DB'))
.catch(()=>console.log('Connection echouee'))

module.exports = mongoose;