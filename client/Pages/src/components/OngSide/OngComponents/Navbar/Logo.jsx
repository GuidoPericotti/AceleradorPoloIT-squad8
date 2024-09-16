import React from 'react';
import { NavLink } from 'react-router-dom';

export const Logo = () => {
    return (
        <NavLink to="/" className="mb-4 me-5 ms-2 mt-3 flex items-center lg:mb-0 lg:mt-0">
            <img
                src="https://media.licdn.com/dms/image/v2/C4E0BAQF7uvigqKkweg/company-logo_200_200/company-logo_200_200/0/1630570162567/polo_it_de_buenos_aires_logo?e=2147483647&v=beta&t=s4wtzh9g-uMs5Lv1h-dmdvXytqhqCMkh1L314tzUc4Q"
                alt="Polo-it icon"
                style={{ height: '50px' }}
                loading="lazy"
            />
        </NavLink>
    );
};
