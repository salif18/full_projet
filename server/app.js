//importation du module express
const express = require('express');
const app = express();
const cors = require('cors')
const connection = require('./db/connection')
const productRter = require('./routes/product');
const panierRter =require('./routes/panier');
const clientsRter= require('./routes/clients')
//configuration
app.use(cors())
app.use(express.json());

app.use('/product',productRter);
app.use('/panier',panierRter);
app.use('/auth',clientsRter)
module.exports = app;
