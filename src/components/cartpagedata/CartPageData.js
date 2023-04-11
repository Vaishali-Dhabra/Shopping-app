import React from 'react';
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from '../../redux/reducer/Reducer'

const CartPageData = () => {

    const CartItems = useSelector((state) => state.cartItems.productData);
    const dispatch = useDispatch(); 
    return (
        <>
        <div>
            {
            CartItems.length === 0 && (
                <div>
                    <h4> No Items Added</h4>
                </div>
            )
            }
            {CartItems.map((productDetail, index) => {
            return (
                <div key={index}>
                <div>
                    <img
                    src={productDetail.images[0]}
                    alt="ProductImage"
                    />
                </div>
                <Typography variant="h4">{productDetail.title}</Typography>
                <Typography variant="h4">${productDetail.price}</Typography>
                <Typography variant="h4">x1</Typography>
                </div>
            );
            })}
            {CartItems.length >= 1 && (
            <div className="cartButtons">
                <Button variant="contained" onClick={() => dispatch(EmptyCart())}>
                Clear Cart
                </Button>
            </div>
            )}
        </div>
        </>
    );
    };


export default CartPageData;
