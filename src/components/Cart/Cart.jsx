import React, { useState } from "react";

import { NavLink } from "react-router-dom";

/* Components */
import Spinner from "../Spinner/Spinner";
import CustomCard from "./CustomCard";
import EmptyCart from "./EmptyCart";


const Cart = ({ cartData, updateData, handleEmptyData, removeItem }) => {

    /* State Management */
    const [showSpinner, setShowSpinner] = useState(true);

    const loading = () => {
        setTimeout(() => {
            setShowSpinner(false);
        }, 2000);
        if (showSpinner) {
            return <Spinner />;
        }
        return <EmptyCart />;
    };

    if (!cartData.line_items || !cartData.line_items.length) return loading();

    return (
        <>
            <br /><br /><br /><br />
            <h1 className="font-bold text-4xl text-center uppercase text-[#57ADAD]">Your Cart</h1>
            <br /><br /><br /><br />
            <div className="products__container max-w-7xl flex flex-grow-[1] flex-wrap items-center justify-center gap-4">
                {cartData.line_items.map((item) => {
                    return (
                        <div key={item.id}>
                            <CustomCard
                                cart
                                product={item}
                                updateData={updateData}
                                removeItem={removeItem}
                            />
                        </div>
                    )
                })}
            </div>
            <br /><br />
            <div className="products__container actions max-w-7xl flex justify-center gap-8">
                <button
                    onClick={handleEmptyData}
                    className="bg-[#953636] border-[1px] border-[#953636] text-white text-xl font-semibold p-4 duration-500 hover:bg-transparent hover:text-[#953636]"
                >
                    Empty Cart
                </button>
                <NavLink
                    to="/checkout"
                    className="bg-[#829536] border-[1px] border-[#829536] text-white text-xl font-semibold p-4 duration-500 hover:bg-transparent hover:text-[#829536]"
                >
                    Checkout
                </NavLink>
            </div>
            <br /><br /><br /><br />
        </>
    );
}

export default Cart;
