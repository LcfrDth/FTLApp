import React from 'react';

/* Components */
import { list } from '../subComponents/ProductList';

const Products = () => {
    return (
        <>
            <h1 className="font-bold text-4xl text-center uppercase text-[#57ADAD]">Our products</h1>
            <br /><br /><br /><br />
            <div className="products__container max-w-7xl w-full grid grid-cols-4 gap-4 text-center justify-items-center custom:grid-cols-2 w-[90%]">
                {list.map((item) => (
                    <div className="flex flex-col">
                        <div>
                            <img src={item.image} alt="product image" />
                        </div>
                        <h2 className="capitalize font-[750] mt-4 text-xl text-gray-800 tracking-wide">{item.name}</h2>
                        <br />
                        <p className="category__name bg-[#829536] text-white font-semibold w-1/2 rounded-lg text-lg text-center">{item.category}</p>
                        <br />
                        <span className="font-semibold text-gray-700 text-xl">{item.price}</span>
                    </div>
                ))}
            </div>
            <br /><br /><br /><br />
        </>
    )
}

export default Products
