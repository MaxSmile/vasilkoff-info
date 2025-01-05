import Logo from "./Logo";
import Navbar from "./Navbar";
import {useState} from "react";
import MobileNavbar from "./MobileNavbar";
import { Divide as Hamburger } from 'hamburger-react';


const Header = () => {
    const [isMobileNavShow, setIsMobileNavShow] = useState(false);

    return (
        <header className={`fixed bg-white/80 text-dark left-0 top-0 w-full z-30 duration-400 py-2`}>

            <div className="container">
                <div className="sm:flex items-center justify-between">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Logo />

                        {/* Mobile Menu Icon */}
                        <span className="sm:hidden">
                            <Hamburger toggled={isMobileNavShow} toggle={setIsMobileNavShow} size={25} color="black"/>
                        </span>
                    </div>

                    {/* Desktop Navbar */}
                    <Navbar/>

                    {/* Mobile Navbar */}
                   <MobileNavbar className={!isMobileNavShow ? "mt-0 h-0":"mt-3 h-[130px]"}/>
                </div>
            </div>


        </header>
    );
};

export default Header;
