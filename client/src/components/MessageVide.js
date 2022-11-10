import React, { useEffect, useState } from 'react';
import logo3 from '../assets/assiette2.webp'
import {DotLoader} from 'react-spinners';
const MessageVide = () => {
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])
    return (
        <>
            <div className='message-vide'>
               {loading ? (<DotLoader/>) :
                 (<><h1>Votre assiette est vide</h1>
                <img src={logo3} alt='vide'/></>)
                }
               
            </div> 
        </>
    );
};

export default MessageVide;