import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoPolo from '../../../../assets/logo_polo_it.png';
export const Logo = () => {
    return (
        <NavLink to="/" className="mb-4 me-5 ms-2 mt-3 flex items-center lg:mb-0 lg:mt-0">
            <img
                src={LogoPolo}
                alt="Polo-it icon"
                className='h-24'
                loading="lazy"
            />
        </NavLink>
    );
};
