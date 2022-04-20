import React from 'react';

/* Icons */
import { AddtoCartIcon, DeletetoCartIcon } from '../../subComponents/AllSVG';

const CustomCard = ({ cart, product, addProduct, updateData, removeItem }) => {

    console.log({ product });

    return (
        <>
            <div className="flex flex-col">
                <div>
                    <img src={product.image.url} alt="product image" className="w-[300px]" />
                </div>
                <h2 className="capitalize font-[750] mt-4 text-xl text-gray-800 tracking-wide mb-2">{product.name}</h2>
                {cart && (
                    <>
                        <span className="mt-2 font-semibold text-gray-700 text-xl">{product.price.formatted_with_symbol}</span>
                    </>
                )}
                <div>
                    {!cart && (
                        <>
                            <span className="mt-2 font-semibold text-gray-700 text-xl">{product.price.formatted_with_symbol}</span>
                            <br />
                            <div
                                onClick={() => {
                                    addProduct(product, 1);
                                }}
                                className="add__cart__products--btn mt-2 flex justify-center align-items-center gap-4 cursor-pointer"
                            >
                                <AddtoCartIcon />
                                <span className="font-semibold text-lg text-gray-700">
                                    Add to Cart
                                </span>
                            </div>
                            <br />
                        </>
                    )}
                    {cart && (
                        <>
                            <div className="flex gap-4 mt-4">
                                <div
                                    onClick={() => {
                                        removeItem(product.id);
                                    }}
                                    className="remove__cart__products--btn cursor-pointer duration-100 mt-1"
                                >
                                    <DeletetoCartIcon />
                                </div>
                                <div className="flex text-center justify-center items-center gap-4">
                                    <button
                                        onClick={() => {
                                            updateData(product.id, product.quantity + 1);
                                        }}
                                        className="border-[1px] border-[#829536] px-4 rounded font-bold text-xl"
                                    >
                                        +
                                    </button>
                                    <span className="text-xl font-bold">{product.quantity}</span>
                                    <button
                                        onClick={() => {
                                            updateData(product.id, product.quantity - 1);
                                        }}
                                        className="border-[1px] border-[#829536] px-4 rounded font-bold text-xl"
                                    >
                                        -
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <br />
            </div>
        </>
    );
}

export default CustomCard;
