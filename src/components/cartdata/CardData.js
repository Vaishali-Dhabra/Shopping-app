import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Typography} from '@mui/material';
import './CardData.css';
import { AddToCart } from '../../redux/action/action';
import { useDispatch } from 'react-redux';

const CardData = () => {
    
    const [item,setitem]=useState([]);
    const dispatch = useDispatch()

    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then((response)=> setitem(response.data.products))
        .catch((error)=>console.log("Error")) 
    },[]);

    const sentToReducer = (data) => {
        dispatch(AddToCart(data))
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
                            <Button variant='contained' color='secondary' onClick={()=> sentToReducer(data)}>Add to cart</Button>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}

export default CardData;
