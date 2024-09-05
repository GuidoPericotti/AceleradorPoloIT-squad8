import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavLinks = () => {
    return (
        <ul className="list-style-none me-auto flex flex-col ps-0 lg:flex-row">
            <li className="mb-4 lg:mb-0 lg:pe-2">
            <NavLink
                className="me-4 flex items-center text-secondary-500 transition duration-200 hover:text-secondary-600/70 focus:text-secondary-600/70 active:text-secondary-600/70 dark:text-secondary-500 dark:hover:text-secondary-500/80 dark:focus:text-secondary-500/80 dark:active:text-secondary-500/80"
                to="/notifications"
                id="dropdownMenuButton1"
                role="button"
                aria-expanded="false"
            >
                <span className="[&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 5.73 2 10.27c0 2.39 1.21 4.56 3.26 6.01-.27.98-.96 2.7-1.95 4.42 1.76-.31 3.79-1.01 5.23-1.99C9.8 18.99 10.87 19 12 19c5.52 0 10-3.73 10-8.27S17.52 2 12 2zm-1 10H7v-2h4v2zm6 0h-4v-2h4v2z"/>
                    </svg>
                </span>
                <span className="absolute -mt-4 ms-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white">
                    1
                </span>
            </NavLink>

            </li>
            <li className="mb-4 lg:mb-0 lg:pe-2">
                <NavLink
                className="me-4 flex items-center text-secondary-500 transition duration-200 hover:text-secondary-600/70 focus:text-secondary-600/70 active:text-secondary-600/70 dark:text-secondary-500 dark:hover:text-secondary-500/80 dark:focus:text-secondary-500/80 dark:active:text-secondary-500/80"
                to="/notifications"
                id="dropdownMenuButton1"
                role="button"
                aria-expanded="false"
            >
                <span className="[&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
                <span className="absolute -mt-4 ms-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white">
                    1
                </span>
            </NavLink>
            </li>
            <li className="mb-4 lg:mb-0 lg:pe-2">
                <NavLink
                    className="text-black/60 transition duration-200 hover:text-black/80 focus:text-black/80 active:text-black/80 dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    to="/projects"
                >
                    Nombre ONG
                </NavLink>
            </li>
        </ul>
    );
};
