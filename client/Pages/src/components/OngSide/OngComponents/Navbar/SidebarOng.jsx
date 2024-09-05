import React from 'react';
import logo from "../../../../assets/logo.svg";

const navItems = ["home", "settings", "build", "cloud", "mail", "bookmark"];

export const SidebarOng = ({ isOpen, setIsOpen }) => {
  return (
    <section className="bg-[#17132a]">
      <aside className={`fixed top-0 left-0 h-full transition-[width] duration-400  ${isOpen ? "w-[120px] bg-[#4f2cd4]" : "w-[56px]"}`}>
        <div className="absolute top-0 left-0 w-[120px]">
          <header className="flex items-center h-[64px] px-[6px]  pt-14">
            <button
              type="button"
              className="w-[44px] h-[72px] grid place-items-center text-[#f9f9f9]"
              onClick={() => setIsOpen(!isOpen)}
            >
              
            </button>
          </header>
          <nav className="grid gap-[2px] p-[6px] pt-12">
            <img src={logo} className={`pl-8 ${isOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-450`} />
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                className={`flex gap-[12px] items-center h-[44px] w-[44px] text-[16px] capitalize leading-[1] px-[12px] rounded-[8px] text-[#f9f9f9] font-poppins transition-opacity duration-300 ${
                  isOpen ? "w-24 opacity-100" : "opacity-0"
                } hover:bg-[rgba(0,0,0,0.3)]`}
              >
                <span className="material-symbols-outlined"></span>
                <p>{item}</p>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </section>
  );
};
