import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.css';
import { Badge } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {totalproduct} from '../cartdata/CardData';

const Header = () => {
    
    var counter = totalproduct
    const totalCartItems = useSelector((state) => state.cartItem.productData);
    if(!totalCartItems.length)
    {
        counter = 0;
    }

    return (
        <>
            <header className='flex'>
            <Link to={'/'}>
            <div className='brandname'>
                Let's Shop
            </div>
            </Link>
            <Badge badgeContent={counter} color='secondary'>
                <NavLink to={'/cart'}>
                    <ShoppingCartIcon className='cart-icon' />
                </NavLink>
            </Badge>
            </header>
        </>
    );
}

export default Header;
