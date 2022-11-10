//importation du model table
const Product = require('../models/table_product')

exports.createProduct = (req, res, next)=>{
    const product = new Product({
        image:req.body.image,
        nom:req.body.nom,
        description:req.body.description,
        category:req.body.category,
        prix:req.body.prix
    })
    product.save()
    .then(()=>res.status(201).json({message:'objet creer'}))
    .catch((error)=>res.status(400).json({error}))
}

exports.readAllProduct = (req,res,next)=>{
    Product.find()
    .then((products)=>res.status(200).json(products))
    .catch((error)=>res.status(400).json({error}))
}

exports.deleteProduct =(req,res,next)=>{
    Product.deleteOne({id:req.params.id})
    .then(()=>res.status(200).json({message:'product delete'}))
    .catch((error)=>res.status(400).json({error}))
}