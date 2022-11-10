import React, { useContext } from 'react';
import AuthContext from '../store/authContext';

const Logout = () => {
    const authCtx = useContext(AuthContext)
    
    return (
        <div className='logout'>
            <button className='btn btn-dark' onClick={authCtx.logout}>Logout<i class="fa-solid fa-right-from-bracket"></i></button>
        </div>
    );
};

export default Logout;