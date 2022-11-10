import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import {DotLoader} from "react-spinners"
import {v4 as uuidv4} from 'uuid'
import Category from '../components/Category';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import AuthContext from '../store/authContext';
const Menu = ({ filtermenus , adjOut, all, drink , plat , berguer ,pizza,sandwich}) => {
  
  //etat de spinner
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
       setLoading(true)
       setTimeout(()=>{
        setLoading(false)
       },1000)
  },[])

  const authCtx = useContext(AuthContext)
  const isLoggin = authCtx.isLoggin

  return (
        <>
            <Header/>
            <Navbar/>
            {!isLoggin && <Navigate to='/login' replace={true}/>}
            <div className='title'><h1>Menu</h1> <Category all={all} drink={drink} plat={plat}
             berguer={berguer} pizza={pizza} sandwich={sandwich} /></div>
            <div className='menu'>
                
               { loading ? <DotLoader/>:(
                 filtermenus.sort().map((plat) => (
                  <div className='card' key={uuidv4()}>
                    <div className='card-img'>
                    {loading ? (<DotLoader loading={loading} className='clip' size={30}/>) : (<img className='img' src={plat.image} alt={plat.nom} />)}
                    </div>
                    <div className='card-body'>
                      <h1 className='card-name'>{plat.nom.toUpperCase()}</h1>
                      <p className='card-desc'>{plat.description}</p>
                      <h2 className='card-prix'>{plat.prix} Fcfa</h2>
                    </div>
                    <button className='btn btn-primary' onClick={()=>adjOut(plat)} >Add cart <i className='fa-solid fa-cart-shopping'></i></button>
                  </div>
                )))
               }
           
            </div>

        </>
    );
};

export default Menu;