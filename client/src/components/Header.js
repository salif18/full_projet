import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo2.png';
import AuthContext from '../store/authContext';
import Logout from './Logout';
const Header = () => {
    const authCtx = useContext(AuthContext)
    const isLoggin = authCtx.isLoggin
    console.log(isLoggin)
    return (
        <>
            <div className='header'>
               <h1>Diary's Delice <img className='logo' src={logo} alt='logo'/></h1>
               <div className='header-addr'>
                <i className="fa-solid fa-phone"></i><span>78 30 32 08 Size</span><i class="fa-solid fa-location-dot"></i><span>ATTbougou</span><i class="fa-solid fa-city"></i> <span>320 logts Rue : 597</span>
               </div>
               <div className='log'>
                {!isLoggin && <button className='btn btn-dark'><NavLink to='/login'><a href>Log in<i class="fa-solid fa-right-to-bracket"></i></a></NavLink></button>}
                {!isLoggin && <button className='btn btn-dark'><NavLink to='/signup'><a href>Signup<i class="fa-solid fa-right-from-bracket"></i></a></NavLink></button>}
                {isLoggin && <p className='user'><i class="fa-solid fa-user"></i> : {authCtx.userId}</p>}
                {isLoggin && <Logout/>}
               </div>
            </div>
        </>
    );
};

export default Header;