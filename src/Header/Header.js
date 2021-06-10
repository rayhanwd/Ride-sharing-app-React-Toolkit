import React from 'react';
import HeaderContent from './HeaderContent';
import Navbar from './Navbar';
const Header = () => {
    return (
        <div className="header___bg">
            <Navbar/>
            <HeaderContent/>
        </div>
    );
};

export default Header;