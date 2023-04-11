import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.css';
import { Badge } from '@mui/material';
import CartPage from '../../pages/CartPage';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='flex'>
            <Link to={'/'}>
            <div className='brandname'>
                Let's Shop
            </div>
            </Link>
            <Badge badgeContent={2} color='secondary'>
                <NavLink to={'/cart'}>
                    <ShoppingCartIcon className='cart-icon' onClick={CartPage}/>
                </NavLink>
            </Badge>
        </header>
    )
}

export default Header;
