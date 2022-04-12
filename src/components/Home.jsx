import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

/* Components */
import Products from './Products';

// Framer Motion
import { motion } from 'framer-motion';

/* Images */
import logo from '../assets/logo.png';

const Home = ({ products, addProduct }) => {

    return (
        <>
            <div className="bg-[#F8F9FD] min-h-[90vh]">
                <div className="home__container flex max-w-7xl w-full custom:flex-col-reverse w-[90%]">
                    {/* Left Side */}
                    <div className="mt-32 custom:mt-0">
                        <motion.div
                            className="text-[#829536]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ type: 'spring', duration: 1, delay: 0.25 }}>
                            <h1 className="home__container--title text-5xl font-bold tracking-wide custom:text-center text-3xl 2xl:text-5xl">Start your day with a cup of</h1>
                            <br />
                            <h1 className="home__container--title text-5xl font-bold tracking-wide custom:text-center text-3xl 2xl:text-5xl">positiviTEA</h1>
                        </motion.div>
                        <br />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ type: 'spring', duration: 1.05, delay: 1 }}
                            className="home__container--subtitle text-lg text-gray-600 font-semibold custom:text-center text-md"
                        >
                            FrappeTeaLicious Shop is in Concepcion, Tarlac. It was established on September 28, 2018. The products sold are not only milk tea, there are also floats, frappe and other refreshing drinks. This business was started by the Arceo family to provide a drink that would give freshness to all and satisfy cravings of every customer...
                        </motion.p>
                        {/* Buttons */}
                        <motion.div
                            className="home__buttons flex gap-4 mt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ type: 'spring', duration: 1.05, delay: 1.25 }}
                        >
                            <a href="" className="home__btn--1 tracking-wide border-[1px] border-[#829536] uppercase font-semibold text-[#829536] duration-700 hover:bg-[#829536] hover:text-white">know more</a>
                            <a href="" className="home__btn--2 tracking-wide border-[1px] border-[#829536] uppercase font-semibold text-[#829536] duration-700 hover:bg-[#829536] hover:text-white">more info</a>
                        </motion.div>
                    </div>

                    {/* Right Side */}
                    <motion.div
                        initial={{ marginTop: '-55px', opacity: 0 }}
                        animate={{ marginTop: '0px', opacity: 1 }}
                        transition={{ type: 'spring', bounce: 0.75, duration: 1.05, delay: 0.25 }}
                    >
                        {/* Image */}
                        <LazyLoadImage
                            alt="logo image"
                            src={logo}
                            className="mt-24 custom:mt-0"
                        />
                    </motion.div>
                </div>
            </div>

            <br /><br /><br /><br />

            <Products products={products} addProduct={addProduct} />
        </>
    )
}

export default Home
