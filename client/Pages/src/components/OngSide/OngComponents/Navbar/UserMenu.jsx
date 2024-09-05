import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const UserMenu = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="relative flex items-center">
            
            <img
                src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                className="rounded-full"
                style={{ height: '25px', width: '25px' }}
                alt=""
                loading="lazy"
                aria-expanded={isDropdownOpen ? "true" : "false"}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            <ul
                className={`absolute z-[1000] float-left m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white text-left text-base shadow-lg dark:bg-gray-900 ${isDropdownOpen ? "block" : "hidden"}`}
                aria-labelledby="dropdownMenuButton1"
            >
                <li>
                    <NavLink
                        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 focus:bg-neutral-100 active:bg-neutral-200 dark:bg-gray-900 dark:text-neutral-200 dark:hover:bg-white/30 dark:focus:bg-white/30"
                        to="#"
                    >
                        Action
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 focus:bg-neutral-100 active:bg-neutral-200 dark:bg-gray-900 dark:text-neutral-200 dark:hover:bg-white/30 dark:focus:bg-white/30"
                        to="#"
                    >
                        Another action
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 focus:bg-neutral-100 active:bg-neutral-200 dark:bg-gray-900 dark:text-neutral-200 dark:hover:bg-white/30 dark:focus:bg-white/30"
                        to="#"
                    >
                        Something else here
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};
