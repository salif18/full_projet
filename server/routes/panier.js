//importation du module express 
const express = require('express')
const router = express.Router()
const panierCtrl = require('../controllers/panier')

router.post('/',panierCtrl.createPanier);
router.get('/',panierCtrl.readAllPanier);
router.delete('/:id',panierCtrl.deletePanier);

module.exports = router;