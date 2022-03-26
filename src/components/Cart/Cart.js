import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // const {carts} = props.cart;
    const {cart} = props;
    
    
    return (
        <div className='cart'>
            
            
            <p className='cart-item'>{cart.name}</p>
                
            
            {/* { carts.map( cart => <p>{cart.name}</p> ) } */}
        </div>
    );
};

export default Cart;