import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from '../../redux/actions/Action';
import { Box, Button, Typography } from "@mui/material";
import './CartItem.css';

const CartItem = () => {
    
    const CartItem = useSelector((state) => state.cartItem.productData);
    const dispatch = useDispatch();
    
    return (
        <>
            {CartItem.length === 0 && (
            <div className='empty-cart' >
                <marquee scrollamount="5">
                    <h1> There is nothing in your cart</h1>
                </marquee>
            </div>
            )}
            <div className='flex-cart'>
            {CartItem.map((productDetails, index) => {
            return (
                <div key={index}> 
                    <div className='flex-product'>
                    <img 
                    src={productDetails.images[0]}
                    alt="ProductImage"
                    className="img-cart"
                    />
                    <Typography variant="h4">{productDetails.title}</Typography>
                    <Typography variant="h4">Price : ${productDetails.price}</Typography>
                    <Typography variant="h4">Quantity : x{productDetails.stock}</Typography>
                    </div>
                </div>
            );
            })}</div>
            {CartItem.length >= 1 && (
                <Box textAlign={'center'} margin={2}>
                    <Button variant="contained" color='secondary'  onClick={() => dispatch(clearCart())}>
                    Clear Cart
                    </Button>
                </Box>
            )}
        </>
    );
}

export default CartItem;
