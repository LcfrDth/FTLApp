import React from 'react';
import { NavLink } from 'react-router-dom';

/* Icons */
import { AddtoCartIcon } from '../subComponents/AllSVG';

const Header = ({ cartData }) => {

    console.log({ cartData });

    return (
        <>
            <header className="flex justify-around bg-[#829536] p-7">
                {/* logo */}
                <NavLink to="/" className="text-white font-bold text-4xl">FrappeTeaLicious</NavLink>
                <button className="text-white">
                    Menu Icon
                </button>
                {/* Add to Cart Icon */}
                <button className="text-white add__cart--btn">
                    <AddtoCartIcon cartItems={cartData.total_items} />
                </button>
            </header>
        </>
    )
}

export default Header
