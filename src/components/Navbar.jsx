import React, { useState, useEffect } from 'react';
import Login from './Login';
import { useAuth } from "../context/AuthProvider";
import Logout from "./Logout";
import { Link } from "react-router-dom";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li><a href="/" className="text-lg font-bold">Home</a></li>
      <li><a href="/course" className="text-lg font-bold">Course</a></li>
      <li><Link to="/contact" className="text-lg font-bold">Contact</Link></li>
      <li><Link to="/about" className="text-lg font-bold">About</Link></li>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50 ${sticky ? "shadow-md bg-base-300 duration-300" : ""
        }`}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a href="/" className="text-lg font-bold">Home</a></li>
              <li><a href="/course" className="text-lg font-bold">Course</a></li>
              <li><Link to="/contact" className="text-lg font-bold">Contact</Link></li>
              <li><Link to="/about" className="text-lg font-bold">About</Link></li>
            </ul>
          </div>
          <a className="text-2xl font-bold"><span className='text-pink-500'>Book Bazar</span></a>
        </div>
        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <label className="px-3 py-2 border rounded-md flex items-center gap-2">
            <input
              type="text"
              className="grow outline-none rounded-md px-1 dark:bg-slate-900 dark:text-white"
              placeholder="Search"
            />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
              <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
            </svg>
          </label>

          {authUser ? (
            <Logout />
          ) : (
            <div className="">
              <a
                className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </a>
              <Login />
            </div>
          )}

          {/*<div> 
            <a className="bg-white text-black px-5 py-3 rounded-md hover:bg-slate-800 duration-300 cursor-pointer" onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</a> <Login />
          </div>*/}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
