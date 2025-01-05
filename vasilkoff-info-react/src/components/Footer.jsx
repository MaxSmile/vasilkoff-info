// src/components/Footer.jsx
import Logo from './Logo'
import { IoIosArrowUp } from 'react-icons/io'
import version from '../version.js'
import { FaGithub } from 'react-icons/fa6'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    let year = ''+currentYear;
    if (currentYear !== 2024) {
        year = `2024 - ${currentYear}`;
    }
    return (
        <footer className="bg-white pt-10 md:pt-14 lg:pt-5 pb-5 relative hcard" role="contentinfo">
            <div className="container">
                <div className="text-center lg:text-left lg:flex justify-between items-center">
                    <div className="flex justify-between items-center">
                        <Logo chain={false} className={'pr-4'} />
                        <p>
                            about.name
                            <a
                                href="https://github.com/MaxSmile/2ulink"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <FaGithub className="inline ml-2" />&nbsp;<span
                                    className="text-xs text-gray-500 hover:underline">
                                    v.{version}</span>
                            </a>
                            <br />
                            &copy; {year} <span className="org">2ul Ltd</span>. All rights reserved.
                            <br/>
                            20 Wenlock Road, London, England, N1 7GU 
                            <br/>
                            (Reg.#16072411, DUNS#232653132)
                        </p>
                    </div>

                    <p className="text-gray-500 mt-4 lg:mt-0">
                        Contacts: <a href="mailto:support@ul.top" className="email hover:underline">support@ul.top</a>
                        <br />
                        <a
                            href="https://vasilkoff.com"
                            target="_blank" rel="noopener noreferrer"
                            className="hover:underline url"
                        >
                            Tech and Design by Vasilkoff Ltd
                        </a>
                    </p>
                </div>
            </div>

            
        </footer>
    )
}

export default Footer
