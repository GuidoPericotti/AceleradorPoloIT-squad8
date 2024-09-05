import React from 'react';
import { NavLink } from 'react-router-dom';

export const Logo = () => {
    return (
        <NavLink to="/" className="mb-4 me-5 ms-2 mt-3 flex items-center lg:mb-0 lg:mt-0">
            <img
                src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
                style={{ height: '15px' }}
                alt="TE Logo"
                loading="lazy"
            />
        </NavLink>
    );
};
