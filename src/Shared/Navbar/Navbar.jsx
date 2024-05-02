import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaAngleDown, FaEarthAmericas, FaSearchengin } from "react-icons/fa6";

let countries = [
  {
    code: "bn",
    name: "বাংলা",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];
const Navbar = () => {
  const NavItems = (
    <>
      <li>
        <Link className="hover:underline" to="/">Home</Link>
      </li>
      <li>
        <Link className="hover:underline" to="/about">About us</Link>
      </li>
      <li>
        <Link className="hover:underline" to="/olympiad">Olympiad</Link>
      </li>
      <li>
        <Link className="hover:underline" to="/blog">Blog</Link>
      </li>
      <li>
        <Link className="hover:underline" to="/about">About us</Link>
      </li>
      <li>
        <Link className="hover:underline" to="/olympiad">Olympiad</Link>
      </li>
      <li>
        <Link className="hover:underline" to="/blog">Blog</Link>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="border-b-2 p-3">
        <div className="flex justify-between items-center container mx-auto">
          <div>
            <div className="hidden md:block">
              <Menu
                as="div"
                className=" pl-0 relative flex"
                aria-label="usermenu"
              >
                <Menu.Button
                  className="group w-full  text-lg text-left text-gray-700 focus:outline-none"
                  aria-label="usermenu-button"
                >
                  <span className="flex items-center gap-1">
                    <FaEarthAmericas />
                    <FaAngleDown  className="text-xs"/>

                  </span>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    aria-label="menu-item-container"
                    className="z-10 mx-3 origin-top absolute left-[-36px] sm:left-[-25px] md:left-[-25px] top-[42px] xl:left-[-80px] right-0 min-w-max mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
                  >
                    <div className="px-1 py-1 " aria-label="menu-items">
                      {countries.map((lng) => {
                        return (
                          <Menu.Item key={lng.code}>
                            <button
                              className="flex items-center space-x-2 px-4 py-2 text-lg cursor-pointer"

                              //   onClick={() => i18n.changeLanguage(lng.code)}
                              //   disabled={i18n.language === lng.code}
                            >
                              <span
                                className={`fi fi-${lng.country_code}`}
                              ></span>
                              <span>{lng.name}</span>
                            </button>
                          </Menu.Item>
                        );
                      })}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div className="dropdown  md:hidden">
              <label tabIndex={0} className="btn btn-ghost">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
                  alt=""
                  className="w-10"
                />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-600 rounded-box w-52"
              >
                {NavItems}
              </ul>
            </div>
          </div>
          <div className="">
            <span className="text-center">
              <h1 className="text-5xl font-bold uppercase">Heritage Walk</h1>
              <p>Dhaka, Bangladesh</p>
            </span>
          </div>
          <div className="text-end">
            <h1>search</h1>
          </div>
        </div>
      </div>
      <div className="hidden md:block container mx-auto ">
        <ul className="text-lg flex justify-between items-center p-3">
          {NavItems}
        </ul>
      </div>
      <div className="bg-black"><h1 className="text-xl font-semibold text-center text-white p-2">Lorem ipsum dolor sit, amet consectetur</h1></div>
    </div>
  );
};

export default Navbar;
