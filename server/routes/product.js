//importation du module express
const express = require('express')
const router = express.Router()
const productCtl = require('../controllers/product')

router.post('/',productCtl.createProduct)
router.get('/',productCtl.readAllProduct)
router.delete('/:id',productCtl.deleteProduct)
module.exports=router;