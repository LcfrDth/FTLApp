import React from 'react';

/* Spinner */
import Spinner from '../Spinner/Spinner';

/* Components */
import Home from '../Home';
import Product from '../Product/Product';

const Products = ({ products, addProduct }) => {

    if (!products.length) return <Spinner />;

    return (
        <>
            {/* Home Component here so that the Spinner is involved */}
            <Home />
            {/* Products Component */}
            <h1 className="font-bold text-4xl text-center uppercase text-[#57ADAD]">Our products</h1>
            <br /><br /><br /><br />
            <div className="products__container max-w-7xl w-full grid grid-cols-4 gap-4 text-center justify-items-center custom:grid-cols-2 w-[90%]">
                {products.map((item) => (
                    <div key={item.id}>
                        <Product
                            product={item}
                            addProduct={addProduct}
                        />
                    </div>
                ))}
            </div>
            <br /><br /><br /><br />
        </>
    )
}

export default Products;
