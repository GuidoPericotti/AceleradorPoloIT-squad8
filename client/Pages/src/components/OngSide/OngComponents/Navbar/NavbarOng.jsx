
import React from 'react';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { SearchInput } from './SearchInput';
import { UserMenu } from './UserMenu';

export const NavbarOng = () => {
    return (
        <nav className="relative flex w-full items-center justify-between bg-zinc-50 py-2 shadow dark:bg-gray-900 lg:flex-wrap lg:justify-start lg:py-4">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                {/* Logo */}
                <Logo />
                
                {/* Search Input */}
                <div className="flex-grow flex justify-center">
                    <SearchInput />
                </div>
                
                {/* Navigation Links */}
                <div className="flex">
                    <NavLinks />
                </div>
                
                {/* User Menu */}
                <UserMenu />
            </div>
        </nav>
    );
};
