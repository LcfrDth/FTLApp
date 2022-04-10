import React from 'react';
import { NavLink } from 'react-router-dom';

/* Icons */
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../subComponents/AllSVG';

const Footer = () => {
    return (
        <footer className="footer__container w-full overflow-hidden">
            {/* Footer Header */}
            <div className="footer__container--header flex flex-col gap-8 bg-[#1F2224]">
                <h2 className="footer__title font-bold text-4xl tracking-wide text-white mt-16 ml-[20%] custom:text-center ml-0 xl:ml-[20%] text-left 2xl:ml-[20%] text-left">FrappeTeaLicious Tarlac</h2>
                <p className="footer__subtitle text-gray-300 font-semibold text-lg ml-[20%] custom:text-center ml-0 xl:ml-[20%] text-left 2xl:ml-[20%] text-left">L. Cortes Streen, San Nicolas Poblacion Conception, beside Enriquez Tres Marias Building second<br /> floor 2315 Tarlac, Philippines</p>
                <h2 className="footer__title font-bold text-4xl tracking-wide text-white ml-[20%] custom:text-center ml-0 xl:ml-[20%] text-left 2xl:ml-[20%] text-left">Contacts</h2>
                <a href="tel:+6309275203507" className="text-gray-300 font-semibold text-lg cursor-pointer duration-75 hover:text-gray-400 ml-[20%] custom:text-center ml-0 xl:ml-[20%] text-left 2xl:ml-[20%] text-left">0927 520 3507</a>
                <NavLink target="_blank"
                    to={{ pathname: "mailto:frappetealicious@gmail.com" }}
                    className="text-gray-300 font-semibold text-lg duration-75 hover:text-gray-400 ml-[20%] custom:text-center ml-0 xl:ml-[20%] text-left 2xl:ml-[20%] text-left"
                >
                    frappetealicious@gmail.com
                </NavLink>
                <br /><br />
            </div>

            {/* Footer Footer */}
            <div className="footer__container--footer flex justify-center items-center gap-4 bg-[#33383C] p-10">
                <a href="https://www.facebook.com/FrappeTealicious-Concepion-698446837183914" target="_blank" className="footer__icons">
                    <FacebookIcon />
                </a>
                <a href="https://twitter.com/frappe_licious/status/1510532414967144453?s=21&t=qtoBbR_AdCzvqR9msbipgw" target="_blank" className="footer__icons">
                    <TwitterIcon />
                </a>
                <a href="https://www.instagram.com/frappetealicous/" target="_blank" className="footer__icons">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer
