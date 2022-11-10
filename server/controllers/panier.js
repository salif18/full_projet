//importation du table panier
const Panier = require('../models/table_panier')

exports.createPanier = (req,res,next)=>{
     const panier = new Panier({
        image:req.body.image,
        nom:req.body.nom,
        description:req.body.description,
        category:req.body.category,
        prix:req.body.prix,
        qty:req.body.qty
     })
     panier.save()
     .then(()=>res.status(201).json({message:'ajuot au panier'}))
     .catch((error)=>res.status(400).json({error}))
}

exports.readAllPanier = (req, res ,next)=>{
    Panier.find()
    .then((paniers)=>res.status(200).json((paniers)))
    .catch((error)=>res.status(400).json({error}))
}

exports.deletePanier = (req,res,next)=>{
    Panier.deleteOne({id:req.params.id})
    .then(()=>res.status(200).json({message:'produit effacer'}))
    .catch((error)=>res.status(400).json({error}))
}