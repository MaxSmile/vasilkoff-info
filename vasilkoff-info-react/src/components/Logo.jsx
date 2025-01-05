// src/components/Logo.jsx

import React from 'react';

const Logo = ({className, chain=true}) => {
    return (
        <a href="/" className={`leading-0 inline-block ${className ?? ""}`}>
                <img
                    alt="Vasilkoff logo"
                    width={60}
                    height={60}
                    src={'/logo-vasilkoff.webp'}
                    loading="lazy"
                />
        </a>
    );
};


export default Logo;
