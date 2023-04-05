import React from 'react';
import Logo from '../../assets/images/Logo.svg'
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header flex items-center justify-between bg-primary text-white px-44' >
            <img src={Logo} alt="" />
            <nav className='flex list-none gap-8'>
                <li><NavLink
                    to='/'
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >Shop
                </NavLink></li>
                <li><NavLink
                    to='/order'
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >Order
                </NavLink></li>
                <li><NavLink
                    to='/inventory'
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >Manage Inventory
                </NavLink></li>
                <li><NavLink
                    to='/login'
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >Login
                </NavLink></li>
            </nav>
        </div>
    );
};

export default Header;