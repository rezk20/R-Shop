import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { MenuLinks, DropDownLinks } from "../constants";
import SearchBar from "./../SearchBar/SearchBar";
// import ToggleButton from "./../Button/ToggleButton";
import DarkMode from "./DarkMode";
import { LuMenu, LuX } from "react-icons/lu";
import { useState } from "react";
import Logo from "../shared/Logo";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function mobileToggle() {
    setIsOpen(!isOpen);
  }

  const [DropOpen, setDropOpen] = useState(false);
  function DropDownOpen() {
    setDropOpen(!DropOpen);
  }
  return (
    <div className="fixed min-w-full top-0 right-0 z-50 backdrop-blur-2xl dark:bg-neutral-900/80 transition-all duration-500">
      <div className="container py-2 flex justify-between items-center relative">
        {/* Logo  */}
        <div>
          <Logo />
        </div>
        {/* MenuLink */}
        <div className="hidden lg:flex">
          <ul className="flex items-center justify-between gap-8 text-neutral-700 dark:text-white">
            {MenuLinks.map((data, index) => (
              <li key={index}>
                <a
                  className="hover:text-cyan-600 duration-200"
                  href={data.link}
                >
                  {data.name}
                </a>
              </li>
            ))}
            {/* dropdown  */}
            <li className="group relative cursor-pointer ">
              <a
                href="#"
                className="flex items-center gap-1 font-semibold  py-2"
              >
                Quick Links
                <span>
                  <FaCaretDown className="group-hover:rotate-180 duration-300" />
                </span>
              </a>

              <div className="fixed hidden group-hover:block duration-200 z-40 text-neutral-600 dark:text-white backdrop-blur-2xl dark:bg-neutral-900/80 rounded-md w-[150px] p-4">
                <ul className="  space-y-3 ">
                  {DropDownLinks.map((data, index) => (
                    <li key={index}>
                      <a
                        href={data.link}
                        className="duration-200 hover:text-cyan-600 "
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/* searchBar */}
        <div className="flex justify-between items-center gap-4">
          <div className="text-sm">
            <SearchBar />
          </div>

          {/* shopping cart  */}
          <button className="relative p-3">
            <FaCartShopping className="text-xl dark:text-white" />
            <div className="w-4 h-4 bg-red-600 text-white rounded-full flex justify-center items-center text-xs absolute top-0 right-0">
              0
            </div>
          </button>

          {/* darkmode  */}
          <DarkMode />
          <div className="lg:hidden">
            <button onClick={mobileToggle} className="dark:text-white text-3xl">
              {isOpen ? <LuX /> : <LuMenu />}
            </button>

            {isOpen && (
              <div className="bg-white backdrop-blur-2xl dark:bg-neutral-900/80 fixed right-0 mt-3 w-full duration-200 ">
                <ul className="flex flex-col py-4 items-center space-y-6 text-neutral-700 dark:text-white">
                  {MenuLinks.map((data, index) => (
                    <li key={index}>
                      <a href={data.link}>{data.name}</a>
                    </li>
                  ))}
                  {/* dropdown  */}
                  <li className="group relative cursor-pointer ">
                    <button
                      onClick={DropDownOpen}
                      href="#"
                      className="flex items-center gap-1 font-semibold  py-2"
                    >
                      Quick Links
                      <span>
                        <FaCaretDown className=" duration-300" />
                      </span>
                    </button>

                    {DropOpen && (
                      <div className=" duration-200 z-40  rounded-md w-[150px] p-5 flex flex-col items-center ">
                        <ul className="  space-y-3 ">
                          {DropDownLinks.map((data, index) => (
                            <li key={index}>
                              <a
                                href={data.link}
                                className="duration-200 dark:hover:text-neutral-600 "
                              >
                                {data.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* mobile button  */}
      </div>
    </div>
  );
};

export default Navbar;
