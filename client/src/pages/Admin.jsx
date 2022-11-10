import React, { useEffect, useState } from 'react';
import {DotLoader} from "react-spinners";

const Admin = ({handleSubmit, handleChange, file}) => {
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
          setLoading(false)
      },1000)
  },[])

    return (
        <>
        { loading ? (<DotLoader loading={loading} className='loading-admin'/>)
           : (<div className='admin'>
               <form className='forms' onSubmit={(e)=>handleSubmit(e)}>
                 <div className='mb-3'>
                   <label HtmlFor='image' className='form-label'>Image</label>
                   <input type='text' className='form-control' name='image' id='image' value={file.image} onChange={(e)=>handleChange(e)} placeholder='Photo'/>
                 </div>
                 <div className='mb-3'>
                   <label HtmlFor='nom' className='form-label'>Nom</label>
                   <input type='text' className='form-control' name='nom' id='nom' value={file.nom} onChange={(e)=>handleChange(e)} placeholder='Nom...'/>
                 </div>
                 <div>
                   <label HtmlFor='description' className='form-label'>Description</label>
                   <textarea type='text' className='form-control' name='description' id='description'value={file.description} onChange={(e)=>handleChange(e)}  placeholder='description...' rows='3'></textarea>
                 </div>
                 <div className='mb-3'>
                 <label HtmlFor='category' className='form-label'>Category</label>
                   <select name='category' className='form-control' value={file.category} onChange={(e)=>handleChange(e)}  > 
                    <option value='Drink'>Drink</option>
                    <option value='Berguer'>Berguer</option>
                    <option value='Pizza'>Pizza</option>
                    <option value='Plats'>Plats</option>
                    <option value='Sandwich'>Sandwich</option>
                   </select>
                 </div>
                 <div className='mb-3'>
                    <label HtmlFor='prix' className='form-label'>Prix</label>
                    <input type='number' className='form-control' name='prix' id='prix' value={file.prix} onChange={(e)=>handleChange(e)} placeholder='Votre prix...'/>
                 </div>
                 <button className='btn btn-dark'>Vendre</button>
               </form>
            </div>)
        }
        </>
    );
};

export default Admin;