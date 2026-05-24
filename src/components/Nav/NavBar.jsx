import { useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { LuShoppingCart } from "react-icons/lu";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const NavBar = ({ cart, setIsActive }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="shadow-sm sticky top-0 z-50 bg-base-100">
      <div className="navbar w-full container mx-auto">
        {/* Start */}
        <div className="navbar-start">
          <button
            className="btn btn-ghost btn-circle lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <RiCloseLine className="text-xl" />
            ) : (
              <RiMenu3Line className="text-xl" />
            )}
          </button>
          <button className="btn btn-ghost text-3xl p-4 border-0 shadow-none font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </button>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  [&>li>button]:text-lg">
            <li>
              <button>Products</button>
            </li>
            <li>
              <button>Feature</button>
            </li>
            <li>
              <button>Pricing</button>
            </li>
            <li>
              <button>Testimonial</button>
            </li>
            <li>
              <button>FAQ</button>
            </li>
          </ul>
        </div>

        {/* End */}
        <div className="navbar-end">
          <div className="flex gap-2 items-center">
            {/* Cart */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div onClick={() => setIsActive("cart")} className="indicator">
                <LuShoppingCart className="text-xl" />
                {cart != 0 ? (
                  <span className="badge badge-sm indicator-item bg-red-500 w-6 h-6 rounded-full text-white">
                    {cart.length}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>

            {/* Nav Buttons */}
            <div className="hidden lg:flex">
              <button className="btn rounded-full border-0">Login</button>
              <button className="btn btn-primary rounded-full">
                Get Started
              </button>
            </div>

            {/* Theme switcher */}
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="theme-controller"
                value="dark"
              />
              <HiOutlineSun className="swap-off h-6 w-6" />
              <HiOutlineMoon className="swap-on h-6 w-6" />
            </label>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-base-100 px-4 pb-4">
          <ul className="menu [&_button]:w-full w-full [&_button]:text-lg [&_button]:">
            <li>
              <button>Products</button>
            </li>
            <li>
              <button>Feature</button>
            </li>
            <li>
              <button>Pricing</button>
            </li>
            <li>
              <button>Testimonial</button>
            </li>
            <li>
              <button>FAQ</button>
            </li>
          </ul>
          <div className="flex flex-col gap-2 mt-2">
            <button className="btn w-full btn-primary">Login</button>
            <button className="btn w-full btn-primary">Get Started</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
