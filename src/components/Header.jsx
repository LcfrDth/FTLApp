import React from 'react';
import { NavLink } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';

/* Icons */
import { AddtoCartIcon } from '../subComponents/AllSVG';

const Header = () => {
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
                    <AddtoCartIcon />
                </button>
            </header>
        </>
    )
}

export default Header
