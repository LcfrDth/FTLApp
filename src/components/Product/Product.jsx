import React from 'react';

/* Components */
import CustomCard from '../Cart/CustomCard';

const Product = ({ cart, product, addProduct, removeItem }) => {
    return (
        <CustomCard
            cart={cart}
            product={product}
            addProduct={addProduct}
            removeItem={removeItem}
        />
    )
}

export default Product
