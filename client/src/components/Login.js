import React, { useState , useEffect} from 'react';


import {DotLoader} from 'react-spinners'



const Login = ({handleChange,handleSubmit,dataLogin}) => {

    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])
    
    return (
        <>
       
        <div className='formulaire'>
           
               { loading ? (<DotLoader className='loading-signup' />)
               
                :(<><h2>Se Connecter</h2>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className='mb-3'>
                       <label className='form-label' htmlFor='email'>Email</label>
                       <input type='email' className='form-control' id='email' name='email' 
                       value={dataLogin.email} onChange={(e)=>handleChange(e)} placeholder='Example@mail.com...'/>
                    </div>
                    <div className='mb-3'>
                       <label className='form-label'>Password</label>
                       <input className='form-control' type='password' id='password' name='password'
                        value={dataLogin.password} onChange={(e)=>handleChange(e)} placeholder='Votre mot de passe...' />
                    </div>
                    <button className='btn btn-dark'>Login</button>
                </form></>)
               }
            </div>

        </>
    );
};

export default Login;