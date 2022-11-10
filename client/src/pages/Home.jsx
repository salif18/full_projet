import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import MessageHome from '../components/MessageHome';
import Navbar from '../components/Navbar';
import {DotLoader} from 'react-spinners';
import Footer from '../components/Footer';


const Home = () => {
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])
    return (
        <>
            <Header/>
            <Navbar/>
           { loading ? (<DotLoader className='loading-home'loading={loading}/>)
               :(<div className='home'>
               <MessageHome/>
            </div>)
           
           }
          
           <Footer/>
        </>
    );
};

export default Home;