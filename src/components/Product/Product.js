import React from 'react';
import './Product.css';
import { BsCartPlus } from 'react-icons/bs';

const Product = (props) => {
    const {img, name, price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2>Product Name: {name}</h2>
            <p>Price : ${price}</p>
            <button onClick={ () => props.addToCart(props.product)}>ADD TO CART <BsCartPlus /></button>
        </div>
    );
};

export default Product;