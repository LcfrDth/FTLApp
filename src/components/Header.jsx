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
                <NavLink to="/cart"
                    className="mt-1 text-white add__cart--btn flex justify-center gap-4"
                >
                    <AddtoCartIcon className="" />
                    <span className="-mt-4 text-lg text-[#99f1f1] font-semibold">{cartData.total_items}</span>
                </NavLink>
            </header>
        </>
    )
}

export default Header
