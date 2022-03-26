import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
    const [products, setProduct] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);



    return (
        <div className='shop'>

            <div className="product-container">
                {
                    products.map( product => <Product key = {product.id} product = {product}></Product>)
                }
            </div>

            <div className='cart-container'>
                <h3>Selected Item</h3>
                <Cart></Cart>
                <div className='btn-section'>
                    <button>CHOOSE 1 FOR ME</button>
                    <button>CHOOSE AGAIN</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;