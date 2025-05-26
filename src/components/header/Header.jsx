import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";         // telefon ikona
import { MdEmail } from "react-icons/md";          // email ikona
import { FaFileAlt } from "react-icons/fa";         // fayl/hujjat ikona
import { Link, NavLink } from 'react-router-dom';
import { IoChevronBackSharp } from "react-icons/io5";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => setShowMenu(true);
  const handleHideMenu = () => setShowMenu(false);

  return (
    <header className="z-20 border-b border-gray-700 bg-black text-white">
      {
        showMenu &&
        <div className={`header_menu_bar ${showMenu ? 'slide-down' : 'slide-up'} bg-black text-white`}>
          <Link onClick={handleHideMenu} to={0} className='flex items-center gap-1 p-4 text-white hover:text-gray-300'>
            <span className='text-[20px] rounded-md border border-transparent hover:border-gray-500 active:bg-gray-800 flex items-center justify-center p-1'>
              <IoChevronBackSharp />
            </span>
            Orqaga
          </Link>
          <ul className='h-full flex flex-col items-center justify-start pt-[150px] gap-4 text-white'>
            <li>
              <NavLink onClick={handleHideMenu} to={'/'} className='flex items-center gap-2 text-2xl font-semibold hover:text-gray-300'>
                StarShop USA
              </NavLink>
            </li>
            {['dashboard', 'recipes', 'posts', 'users', 'signin'].map((path) => (
              <li key={path}>
                <NavLink
                  onClick={handleHideMenu}
                  to={`/${path}`}
                  className='block border-b border-transparent text-center py-2 hover:border-gray-500 hover:text-gray-300'
                  activeclassname="border-gray-500 text-gray-300"
                >
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      }

      <div className="container mx-auto">
        <nav className='flex items-center justify-between gap-6 h-[70px] relative'>
          <Link to={'/'} className='flex items-center gap-3 text-white hover:text-gray-300 select-none'>
            <span className='text-3xl font-extrabold tracking-wide'>StarShop</span>
            <span className='text-lg font-light text-gray-400 uppercase'>USA</span>
          </Link>

          <div className='flex items-center gap-12'>
            <ul className='hidden md:flex items-center text-[16px] gap-8 font-semibold'>
              <li><NavLink to='/dashboard' className={({isActive}) => isActive ? "border-b-2 border-white text-white" : "border-b-2 border-transparent hover:border-gray-500 hover:text-gray-300"}>Dashboard</NavLink></li>
              <li><NavLink to='/recipes' className={({isActive}) => isActive ? "border-b-2 border-white text-white" : "border-b-2 border-transparent hover:border-gray-500 hover:text-gray-300"}>Recipes</NavLink></li>
              <li><NavLink to='/posts' className={({isActive}) => isActive ? "border-b-2 border-white text-white" : "border-b-2 border-transparent hover:border-gray-500 hover:text-gray-300"}>Posts</NavLink></li>
              <li><NavLink to='/users' className={({isActive}) => isActive ? "border-b-2 border-white text-white" : "border-b-2 border-transparent hover:border-gray-500 hover:text-gray-300"}>Users</NavLink></li>
            </ul>




            <div className="flex items-center gap-6">
              {[IoMdCall, MdEmail, FaFileAlt].map((Icon, i) => (
                <button
                  key={i}
                  className='hidden sm:flex items-center justify-center w-11 h-11 rounded-full border border-gray-600 bg-gray-800 text-white hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white transition duration-300 cursor-pointer shadow-md'
                  aria-label="contact-icon"
                >
                  <Icon className='text-2xl' />
                </button>
              ))}

              <button
                onClick={handleShowMenu}
                className='flex md:hidden items-center justify-center w-11 h-11 rounded-full border border-gray-600 bg-gray-800 text-white hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white transition duration-300 cursor-pointer shadow-md'
                aria-label="menu-button"
              >
                <AiOutlineMenu className='text-2xl' />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default React.memo(Header);
