import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

/* Icons */
import { AddtoCartIcon } from '../subComponents/AllSVG';

const Header = ({ cartData, subTotal }) => {

    const location = useLocation();

    console.log({ cartData });

    return (
        <>
            <header className="flex justify-around bg-[#829536] p-7">
                {/* logo */}
                <NavLink to="/" className="text-white font-bold text-4xl custom:text-lg">FrappeTeaLicious</NavLink>
                {location.pathname === "/cart" ? (
                    <div className="">
                        <span className="mt-1 text-xl font-bold text-white add__cart--btn flex justify-center custom:text-md mt-0 flex-col lg:flex-row gap-1">Total Price:
                            <span>{subTotal}</span>
                        </span>
                    </div>
                ) : (
                    // Add to Cart Icon
                    <NavLink
                        to="/cart"
                        className="mt-1 text-white add__cart--btn flex justify-center gap-4"
                    >
                        <AddtoCartIcon className="" />
                        <span className="-mt-4 text-lg text-[#99f1f1] font-semibold">{cartData}</span>
                    </NavLink>
                )}
            </header>
        </>
    )
}

export default Header;
