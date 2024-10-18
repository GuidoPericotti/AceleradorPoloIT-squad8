import React from 'react';

const FooterNav = ({ title, links, darkMode }) => {
  return (
    <nav className="w-full admlg:w-[120px] adms:w-[400px]">
      <h6 className={`text-lg font-semibold mb-4 dark:text-white ${darkMode ? 'text-white' : 'text-black'}`}>{title}</h6>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className={`hover:text-gray-400 transition-colors dark:text-white ${darkMode ? 'text-white' : 'text-black'}`}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNav;
