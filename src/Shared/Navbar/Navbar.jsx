import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaAngleDown, FaEarthAmericas } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import './Navbar.css'

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
        <Link className="hover:underline font-semibold" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:underline font-semibold" to="/about">
          About
        </Link>
      </li>
      {/* <li>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="hover:underline font-semibold"
          >
            <span className="flex items-center gap-1">
              About us
              <FaAngleDown className="text-xs" />
            </span>
          </div>
          <div
            tabIndex={0}
            className="dropdown-content z-[1] p-2 shadow bg-base-100 w-full"
          >
            <div className="grid grid-cols-6 gap-5">
              <div className="col-span-2">
                <h1>Lorem, ipsum dolor.</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Deleniti vitae voluptate ducimus numquam nisi eveniet autem.
                  Architecto odit adipisci et!
                </p>
              </div>
              <div className="col-span-4">
              <div className="grid grid-cols-3 gap-10">
                <Link>Item 1</Link>
                <Link>Item 2</Link>
                <Link>Item 1</Link>
                <Link>Item 2</Link>
                <Link>Item 1</Link>
                <Link>Item 2</Link>
                <Link>Item 1</Link>
                <Link>Item 2</Link>
                <Link>Item 1</Link>
                <Link>Item 2</Link>
                <Link>Item 1</Link>
                <Link>Item 2</Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </li> */}
      <li>
        <Link className="hover:underline font-semibold" to="/booking">
          Booking Tickets
        </Link>
      </li>
      <li>
        <Link className="hover:underline font-semibold" to="/thing">
          Things to do
        </Link>
      </li>
      <li>
        <Link className="hover:underline font-semibold" to="/traveller">
          Traveller Information
        </Link>
      </li>
      <li>
        <Link className="hover:underline font-semibold" to="/accommodation">
          Accommodation
        </Link>
      </li>
      <li>
        <Link className="hover:underline font-semibold" to="/contact">
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="border-b-2 p-3">
        <div className="grid grid-cols-3 justify-between items-center container mx-auto">
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
                    <FaAngleDown className="text-xs" />
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
                  className="w-6"
                />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content z-50 mt-3 p-2 shadow bg-white rounded-md w-52"
              >
                {NavItems}
              </ul>
            </div>
          </div>
          <div className="">
            <span className="text-center">
              <h1 className="md:text-5xl font-bold uppercase">Heritage Walk</h1>
              <p className="md:text-lg hidden md:block text-sm">Dhaka, Bangladesh</p>
            </span>
          </div>
          <div className="">
            <div className="hidden md:flex justify-end items-end gap-2">
              <input
                type="text"
                className="p-1 rounded-none"
                placeholder="Search"
              />
              <FaSearch className="font-thin" />
            </div>
            <div className="dropdown flex justify-end items-center md:hidden">
              <label tabIndex={0} className="">
                <FaSearch />
              </label>
              {/* <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content dropdown-left z-50 p-4 shadow rounded-md bg-red-600 -ml-40"
              >
                <input type="text" className="input  input-bordered" />
              </ul> */}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block container mx-auto ">
        <ul className="text-lg flex justify-between items-center p-3">
          {NavItems}
        </ul>
      </div>
      <div className="bg-black">
        <h1 className="md:text-xl text-xs font-semibold text-center text-white p-2">
          Lorem ipsum dolor sit, amet consectetur
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
