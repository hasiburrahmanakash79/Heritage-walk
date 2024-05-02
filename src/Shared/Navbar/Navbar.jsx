import { Link } from "react-router-dom";

const Navbar = () => {
  const NavItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About us</Link>
      </li>
      <li>
        <Link to="/olympiad">Olympiad</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/about">About us</Link>
      </li>
      <li>
        <Link to="/olympiad">Olympiad</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="flex justify-between items-center container mx-auto">
        <div className="">
          <p className="hidden md:flex">Icon</p>
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
      <div className="hidden md:block">
        <ul className="text-lg flex justify-between items-center px-1">
          {NavItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
