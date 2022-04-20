import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// SVG
import emptyCartSvg from '../../assets/svg/emptyCartSvg.svg';

const EmptyCart = () => {
    return (
        <>
            <br /><br /><br /><br />
            <div className="empty__cart--container max-w-7xl w-full flex justify-center items-center gap-20 custom:flex-col gap-4">
                <div>
                    <h1 className="text-4xl font-bold -mt-4 mb-4 tracking-wide">Your Cart is Empty</h1>
                    <p className="text-2xl text-gray-600 font-bold">Looks like you havent's added <br /> anything to your cart yet </p>
                </div>
                <LazyLoadImage
                    className="w-[500px]"
                    alt="empty cart svg"
                    src={emptyCartSvg}
                />
            </div>
            <br /><br /><br /><br />
        </>
    )
}

export default EmptyCart
