import React, { useState, useEffect } from "react";
// import Header from '../Header'
import CustomCart from '../Cart/CustomCart'


const Cart = ({setCartData, updateData, handleEmptyData, removeItem }) => {

    const [lineItems, setLineItems] = useState([]);
    

    useEffect(() => {
        setLineItems(JSON.parse(localStorage.getItem("cartItem")))
    }, []);
    
    console.log(lineItems);
    return ( 
        <>
        {/* <Header /> */}
        <div id="basket">
            <CustomCart 
                lineItems={lineItems}
                updateData={updateData}

            />
            <div className="actions">
                <button
                    onClick={handleEmptyData}
                >
                    Empty Cart
                </button>
                <button>
                    Checkout
                </button>
            </div>
        </div>
        </>
    );   
}

export default Cart;
