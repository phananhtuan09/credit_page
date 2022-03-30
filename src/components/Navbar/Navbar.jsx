import { BsFillSunFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import React, { useState } from "react";
import useDarkMode from "../../useDarkMode";

function Navbar(props) {
  const { isMobile } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="flex items-center ">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-2">Nerd Card</div>
        {isDarkMode ? (
          <BsFillSunFill
            size="24px"
            color="#e9c46a"
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        ) : (
          <FaMoon
            size="24px"
            color="#e9c46a"
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        )}
      </div>
      <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold">
        {openMenu && isMobile ? (
          <MdOutlineClose
            size="24px"
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu
            size="24px"
            className="cursor-pointer"
            onClick={handleMenu}
          />
        ) : (
          <>
            <li className="li-hover">Features</li>
            <li className="li-hover">Menu</li>
            <li className="li-hover">Our Story</li>
            <li className="li-hover ml-28">Contact</li>
          </>
        )}
        {openMenu && (
          <div className="absolute right-8 bg-white p-8 text-black text-center text-13 z-10">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Menu</li>
            <li className="cursor-pointer">Our Story</li>
            <li className="cursor-pointer">Contact</li>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
