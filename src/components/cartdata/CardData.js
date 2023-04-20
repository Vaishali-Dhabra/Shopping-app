import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Typography} from '@mui/material';
import './CardData.css';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../../redux/actions/Action';

    var totalproduct=0;
    function Productcount() {
    totalproduct++;
    }

const CardData = () => {
    
    const dispatch = useDispatch();
    const [item,setitem]=useState([]);

    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then((response)=> setitem(response.data.products))
        .catch((error)=>console.log("Error")) 
    },[]);

    const totalCartItems = useSelector((state) => state.cartItem.productData);
    if(totalCartItems.length===0){
        totalproduct = 0;
    }

    return (
        <>
            <div className='cart-flex'>
                    {item.map((data,index)=>{
                        return( 
                            <div className='product-flex' key={index}>
                            <img className='img' src={data.images[0]} alt="Product Img"></img>
                            <Typography variant='h5'>{data.title}</Typography>
                            <Typography>{data.description}</Typography>
                            <Typography variant='h6'>Price : ${data.price}</Typography>
                            <Button variant='contained' color='secondary' onClick={() =>
                                dispatch(addToCart(data), Productcount())}>
                                Add to cart
                            </Button>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}

export default CardData;
export {totalproduct};
