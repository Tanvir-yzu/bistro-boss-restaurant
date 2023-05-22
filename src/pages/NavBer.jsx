import React from "react";
import { Link } from "react-router-dom";

const NavBer = () => {
  const navOption = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>CONTACT US</Link>
      </li>
      <li>
        <Link>DASHBOARD</Link>
      </li>
      <li>
        <Link>Our Menu</Link>
      </li>
      <li>
        <Link>Our Shop</Link>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 max-w-7xl  bg-black text-white mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navOption}
          </ul>
        </div>
        <Link>
          <div className="ml-5">
            <h1>BISTRO BOSS</h1>
            <h2>Restaurant</h2>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>
      <div className="navbar-end">
        {/* <ul className="menu menu-horizontal px-12">
          <li>shop</li>
          <li>Login</li>
          <li>icon</li>
        </ul> */}
      </div>
    </div>
  );
};

export default NavBer;
