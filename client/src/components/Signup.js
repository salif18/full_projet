import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import AuthContext from '../store/authContext';


const Signup = ({handleSubmit,handleChange, dataSignup}) => {
    const [loading,setLoading]=useState(false)
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
            {isLoggin && <Navigate to='/' />}
            <div className='formulaire'>
                { loading ? (<DotLoader loading={loading} className='loading-signup'/>)
                :(<><h2>Inscription</h2>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='prenom'>Prenom</label>
                        <input className='form-control' type='text' id='prenom' name='prenom'
                         value={dataSignup.prenom} onChange={(e)=>handleChange(e)} placeholder=''/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='nom'>Nom</label>
                        <input className='form-control' type='text' id='nom' name='nom'
                        value={dataSignup.nom} onChange={(e)=>handleChange(e)} placeholder=''/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='address'>Address</label>
                        <input className='form-control' type='text' id='address' name='address'
                        value={dataSignup.address} onChange={(e)=>handleChange(e)} placeholder=''/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='numero'>Telephone</label>
                        <input className='form-control' type='number' id='numero' name='numero'
                        value={dataSignup.numero} onChange={(e)=>handleChange(e)} placeholder=''/>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='email'>Email</label>
                        <input className='form-control' type='email' id='email' name='email'
                        value={dataSignup.email} onChange={(e)=>handleChange(e)} placeholder=''/>
                    </div><div className='mb-3'>
                        <label className='form-label' htmlFor='password'>Password</label>
                        <input className='form-control' type='password' id='password' name='password'
                        value={dataSignup.password} onChange={(e)=>handleChange(e)} placeholder=''/>
                    </div>
                    <button className='btn btn-success'>Signup</button>
                </form></>)
                }
            </div>   
        </>
    );
};

export default Signup;