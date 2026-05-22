// import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
// import { LuShoppingCart } from "react-icons/lu";

// const NavBar = () => {
//   return (
//     <div className="container mx-auto">
//       {/*       <div className="navbar bg-base-100 shadow-sm">
//         <div className="flex-1">
//           <a className="btn btn-ghost text-xl">daisyUI</a>
//         </div>
//         <div className="flex-none">
//           <div className="dropdown dropdown-end">
//             <div
//               tabIndex={0}
//               role="button"
//               className="btn btn-ghost btn-circle"
//             >
//               <div className="indicator">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   {" "}
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                   />{" "}
//                 </svg>
//                 <span className="badge badge-sm indicator-item">8</span>
//               </div>
//             </div>
//             <div
//               tabIndex={0}
//               className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
//             >
//               <div className="card-body">
//                 <span className="text-lg font-bold">8 Items</span>
//                 <span className="text-info">Subtotal: $999</span>
//                 <div className="card-actions">
//                   <button className="btn btn-primary btn-block">
//                     View cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="dropdown dropdown-end">
//             <div
//               tabIndex={0}
//               role="button"
//               className="btn btn-ghost btn-circle avatar"
//             >
//               <div className="w-10 rounded-full">
//                 <img
//                   alt="Tailwind CSS Navbar component"
//                   src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//                 />
//               </div>
//             </div>
//             <ul
//               tabIndex="-1"
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//             >
//               <li>
//                 <a className="justify-between">
//                   Profile
//                   <span className="badge">New</span>
//                 </a>
//               </li>
//               <li>
//                 <a>Settings</a>
//               </li>
//               <li>
//                 <a>Logout</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div> */}
//       {/* 2nd */}
//       <div className="max-lg:collapse lg:mb-48 w-full rounded-md">
//         <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
//         <label
//           htmlFor="navbar-1-toggle"
//           className="fixed inset-0 hidden max-lg:peer-checked:block"
//         ></label>
//         <div className="collapse-title navbar">
//           <div className="navbar-start">
//             <label
//               htmlFor="navbar-1-toggle"
//               className="btn btn-ghost lg:hidden"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </label>
//             <button className="btn btn-ghost shadow-none text-3xl font-bold py-5 border-0 bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
//               DigiTools
//             </button>
//           </div>
//           <div className="navbar-center hidden lg:flex">
//             <ul className="menu menu-horizontal px-1">
//               <li>
//                 <button>Products</button>
//               </li>
//               <li>
//                 <button>Feature</button>
//               </li>
//               <li>
//                 <button>Pricing</button>
//               </li>
//               <li>
//                 <button>Testimonial</button>
//               </li>
//               <li>
//                 <button>FAQ</button>
//               </li>
//             </ul>
//           </div>
//           <div className="navbar-end">
//             <div className="flex gap-2">
//               {/* Cart */}
//               <div
//                 tabIndex={0}
//                 role="button"
//                 className="btn btn-ghost btn-circle"
//                 // onClick={() => alert("cart")}
//               >
//                 <div className="indicator">
//                   <LuShoppingCart className="text-xl" />
//                   <span className="badge badge-sm indicator-item">8</span>
//                 </div>
//               </div>
//               {/* Buttons */}
//               <div className="">
//                 <button className="btn">Login</button>
//                 <button className="btn">Get Started</button>
//               </div>
//               {/* theme switcher */}
//               <label className="swap swap-rotate">
//                 {/* this hidden checkbox controls the state */}
//                 <input
//                   type="checkbox"
//                   className="theme-controller"
//                   value="dark"
//                 />

//                 {/* sun icon */}
//                 {/* <svg
//                   className="swap-off h-10 w-10 fill-current"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
//                 </svg> */}
//                 <HiOutlineSun className="swap-off h-10 w-10"></HiOutlineSun>

//                 {/* moon icon */}
//                 {/* <svg
//                   className="swap-on h-10 w-10 fill-current"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
//                 </svg> */}
//                 <HiOutlineMoon className="swap-on h-10 w-10"></HiOutlineMoon>
//               </label>
//             </div>
//           </div>
//         </div>

//         <div className="collapse-content lg:hidden z-1">
//           <ul className="menu [&_button]:!text-xl">
//             <li>
//               <button>Products</button>
//             </li>
//             <li>
//               <button>Feature</button>
//             </li>
//             <li>
//               <button>Pricing</button>
//             </li>
//             <li>
//               <button>Testimonial</button>
//             </li>
//             <li>
//               <button>FAQ</button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;

import { useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { LuShoppingCart } from "react-icons/lu";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="shadow-sm">
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
              <div className="indicator">
                <LuShoppingCart className="text-xl" />
                <span className="badge badge-sm indicator-item">8</span>
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
