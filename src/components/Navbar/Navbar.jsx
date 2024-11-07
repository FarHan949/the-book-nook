import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        
  <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2">
        <li><NavLink><a>Home</a></NavLink></li>
        <li><NavLink><a>Page To Read</a></NavLink></li>
        <li><NavLink><a>List Book</a></NavLink></li>     
      </ul>
    </div>
    <a className="btn btn-ghost text-black text-5xl font-bold" 
     style={{fontFamily: "Markazi Text, serif", fontWeight: "636"}}
    >The <span className='text-indigo-500'>Book Nook</span></a>
  </div>
  <div className="navbar-center hidden lg:flex" style={{fontFamily: "Markazi Text, serif"}}>
    <ul className="menu menu-horizontal gap-3 text-lg">
        <li><NavLink to='/' className={({isActive})=> `hover:bg-indigo-200 p-2 ${isActive ? "bg-indigo-500 text-white" : ""}`}><a>Home</a></NavLink></li>
        <li><NavLink to='/pageToRead' className={({isActive})=> `hover:bg-indigo-200 p-2 ${isActive ? "bg-indigo-500 text-white" : ""}`}><a>Page To Read</a></NavLink></li>
        <li><NavLink to='/listBook' className={({isActive})=> `hover:bg-indigo-200 p-2 ${isActive ? "bg-indigo-500 text-white" : ""}`}><a>List Book</a></NavLink></li>  
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <button style={{fontFamily: "Markazi Text, serif"}} className="btn text-xl bg-indigo-400">Sing In</button>
    <button style={{fontFamily: "Markazi Text, serif"}}  className="btn text-xl bg-black text-white">Sing Up</button>
  </div>
</div>
    );
};

export default Navbar;