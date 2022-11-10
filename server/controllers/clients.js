//importation du module bcrypt
const bcrypt = require('bcrypt');

//importation du table client
const Clients = require('../models/table_client');

exports.signup = (req,res,next)=>{
    bcrypt.hash(req.body.password,10)
    .then(hash =>{
        const clients = new Clients({
            prenom:req.body.prenom,
            nom:req.body.nom,
            address:req.body.address,
            numero:req.body.numero,
            email:req.body.email,
            password:hash
        })
        clients.save()
        .then(()=>res.status(201).json({message:'clients enregistrer'}))
        .catch((error)=>res.status(400).json({error}))
    }).catch((error)=>res.status(500).json({error}))
}

exports.login = (req, res, next) => {
    Clients.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: 'TOKEN'
                    });
                    
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
 };