import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
    const [products, setProduct] = useState([]);

    const [cart, setCart] = useState([]);


    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);

    // handle cart event listener here
    const addToCart = (selectedProduct) => {
        const newCart = [...cart, selectedProduct];
        if (newCart.length >= 5) {
            alert("Max is 4")
        } else {
            setCart(newCart);
        }
    }

    const randomSelect = () => {
        const randProduct = Math.ceil((Math.random() * cart.length));
        cart.map( (car, index) =>  {
            if ( index === randProduct ) {
                alert(car.name);
            }
            return car.name;
        })
    }

    const resetCart = () => {
        const removeCart = [];
        setCart(removeCart);
    }



    return (
        <div className='shop'>

            <div className="product-container">
                {
                    products.map( product => <Product key = {product.id} product = {product} addToCart={addToCart}></Product>)
                }
            </div>

            <div className='cart-container'>
                <h3>Selected Item</h3>
                    { cart.map( car => <Cart key = {car.id} cart = {car}></Cart> )}

                <div className='btn-section'>
                    <button onClick={() => randomSelect(cart.id)}>CHOOSE 1 FOR ME</button>
                    <button onClick={resetCart}>CHOOSE AGAIN</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;