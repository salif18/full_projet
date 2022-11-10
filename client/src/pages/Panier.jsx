import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MessageVide from '../components/MessageVide';
import {DotLoader} from "react-spinners"


const Panier = ({panier , deL}) => {
    const [derPanier , setDerPanier] = useState([])

    useEffect(()=>{
        setDerPanier(panier)
    },[panier])

    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])
   
    return (
        <> 
          <div className='menu'> 
              {  loading ? (<DotLoader loading={loading} color={'#000'} />)
              : (derPanier.map((plat , idB) => (
                  <div className='card' key={plat.idB}>
                    <div className='card-img'>
                      <img className='img' src={plat.image} alt={plat.nom} />
                    </div>
                    <div className='card-body'>
                      <h1 className='card-name'>{plat.nom}</h1>
                      <p className='card-desc'>{plat.description}</p>
                      <h2 className='card-prix'>{plat.prix*plat.qty}</h2>
                    </div>
                   <button className='btn btn-danger' onClick={()=>deL(plat.id)} ><i class="fa-solid fa-trash"></i></button>
                    <div className='btn-increment'>
                        <button className='btn btn-success' onClick={()=>{
                            const PANIER = derPanier.map((platB,idA) => idA === idB ?
                            {...platB , qty : platB.qty + 1} : platB)
                            setDerPanier(PANIER)
                        }}>+</button>
                        <span className='SPAN'>{plat.qty}</span>
                        <buton className='btn btn-warning' onClick={()=>{
                            const PANIER = derPanier.map((platB, idA)=> idA === idB ? 
                            {...platB , qty : platB.qty - 1} : platB)
                            setDerPanier(PANIER)
                        }}>-</buton>
                    </div>
                  </div>
                )))
           }
            
            </div>
             { derPanier.length === 0 ? <MessageVide/> : ""}
            <div className='total'>
               <h1>Total : {derPanier.map((platB)=> platB.qty * platB.prix).reduce((x,y)=>x + y , 0)} Fcfa</h1>
               <button className='btn'>Passer votre Commande</button>
             </div>
        </>
    );
};

export default Panier;