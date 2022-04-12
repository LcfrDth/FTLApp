import React, { useState, useEffect } from 'react';

/* Icons */
import { AddtoCartIcon } from '../subComponents/AllSVG';

const Products = ({products}) => {

    console.log({ products });

    return (
        <>
            <h1 className="font-bold text-4xl text-center uppercase text-[#57ADAD]">Our products</h1>
            <br /><br /><br /><br />
            <div className="products__container max-w-7xl w-full grid grid-cols-4 gap-4 text-center justify-items-center custom:grid-cols-2 w-[90%]">
                {products.map((item) => (
                    <div className="flex flex-col">
                        <div>
                            <img src={item.image.url} alt="product image" />
                        </div>
                        <h2 className="capitalize font-[750] mt-4 text-xl text-gray-800 tracking-wide">{item.name}</h2>
                        <br />
                        <span className="font-semibold text-gray-700 text-xl">{item.price.formatted_with_symbol}</span>
                        <br />
                        <div
                            onClick={{}}
                            className="add__cart__products--btn flex justify-center align-items-center gap-4 cursor-pointer"
                        >
                            <AddtoCartIcon /> <span className="font-semibold text-lg text-gray-700">Add to Cart</span>
                        </div>
                        <br />
                    </div>
                ))}
            </div>
            <br /><br /><br /><br />
        </>
    )
}

export default Products
