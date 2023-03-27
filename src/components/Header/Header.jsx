import React from 'react';
import Logo from '../../assets/images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header flex items-center justify-between bg-primary text-white px-44' >
            <img src={Logo} alt="" />
            <nav className='flex list-none gap-8'>
                <li><a href="">Shop</a></li>
                <li><a href="">Order </a></li>
                <li><a href="">Manage Inventory</a></li>
                <li><a href="">Login</a></li>
            </nav>
        </div>
    );
};

export default Header;