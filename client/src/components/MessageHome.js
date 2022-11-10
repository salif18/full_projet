import React from 'react';
import { NavLink } from 'react-router-dom';

const MessageHome = () => {
    return (
        <>
            <div className='message-home'>
                <h1>Bienvenue !!</h1>
                <p>Chez Diary'S Delice, ici vous serrez bien regaler avec nos menus ,<br/>Bon gout moin cher !!. A vous chers clients bon appetit</p>
                <button className='btn btn-dark'><NavLink to='/menu'><a href>Menu</a></NavLink></button>
            </div>
        </>
    );
};

export default MessageHome;