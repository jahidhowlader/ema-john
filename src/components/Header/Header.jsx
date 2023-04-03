import React from 'react';
import Logo from '../../assets/images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header flex items-center justify-between bg-primary text-white px-44' >
            <img src={Logo} alt="" />
            <nav className='flex list-none gap-8'>
                <li><Link to="/">Shop</Link></li>
                <li><Link to="/order">Order </Link></li>
                <li><Link to="inventory">Manage Inventory</Link></li>
                <li><Link to="/login">Login</Link></li>
            </nav>
        </div>
    );
};

export default Header;