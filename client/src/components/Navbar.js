import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../store/authContext';

const Navbar = () => {
      const authCtx = useContext(AuthContext)
      const isLoggin = authCtx.isLoggin
    return (
        <>
            <div className='navbar'>
               <NavLink to='/'><a href><i className="fa-solid fa-house"></i></a></NavLink>
               <NavLink to='/menu'><a href><i className="fa-solid fa-bars"></i></a></NavLink>
              {isLoggin && <NavLink to='/panier'><a href><i class="fa-solid fa-cart-shopping"></i></a></NavLink>}
              {isLoggin && <NavLink to='/admin'><a href><i className="fa-solid fa-lock"></i></a></NavLink>}
            </div>
        </>
    );
};

export default Navbar;