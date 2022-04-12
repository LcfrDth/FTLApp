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
                <button
                    className="mt-1 text-white add__cart--btn flex justify-center gap-4"
                >
                    <AddtoCartIcon className="" />
                    <span className="-mt-4 text-lg bg-[#57ADAD] font-semibold rounded-[50%] px-4 py-1">{cartData.total_items}</span>
                </button>
            </header>
        </>
    )
}

export default Header
