import { useState } from "react";

import testLogo from "../assets/testLogo.svg";
import nav from "../assets/nav.svg";
import close from "../assets/close.svg";
import HeaderCard from "../components/HeaderCard";
import NavigationList from "./Navigation";

/**
 * @function Header component
 * Will render different in mobile and big screens
 * for mobile with hamburger and expanded on after screen
 * for this state @constant showNave is used.
 */

const Header = () => {
  const [showNave, setShowNav] = useState(false);
  const onNavClick = () => {
    setShowNav((preState) => {
      return !preState;
    });
  };

  return (
    <header className="mb-8 relative">
      {/* For nav in mobile screens */}
      {showNave && (
        <div className="bg-white absolute w-full rounded-2xl shadow-2xl flex flex-col">
          <div className="p-2">
            <img
              src={close}
              alt="Page Logo"
              className="w-6 xl:hidden float-right"
              onClick={onNavClick}
            />
          </div>
          <img src={testLogo} alt="Page Logo" className="w-50 m-auto mb-4" />
          <NavigationList />
        </div>
      )}
      <div className=" h-16 px-4 py-2 sm:py-3 sm:px-8 w-full shadow bg-white sm:h-[72px] rounded-[70px] flex justify-between">
        <img src={testLogo} alt="Page Logo" className="hidden xl:block" />
        <img
          src={nav}
          alt="Page Logo"
          className="w-6 xl:hidden"
          onClick={onNavClick}
        />
        <div className="hidden xl:flex">
          <NavigationList />
        </div>
        <HeaderCard />
      </div>
    </header>
  );
};

export default Header;
