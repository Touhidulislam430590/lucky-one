import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [product, setProduct] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, []);


    return (
        <div>
            
        </div>
    );
};

export default Shop;