import React, { useContext, useState } from 'react';
import Logo from '../../assets/images/Logo.svg'
import './Header.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {

    const { user, logout } = useContext(AuthContext)
    const nevifate = useNavigate()

    const handlerSignout = _ => {
        logout()
        nevifate('signin')
    }

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
                {
                    user ?
                        <li onClick={handlerSignout} className='cursor-pointer'>Signout</li>
                        : <li><NavLink
                            to='/signin'
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >Sign In/Up
                        </NavLink></li>
                }
            </nav>
        </div>
    );
};

export default Header;