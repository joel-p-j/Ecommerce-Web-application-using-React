import React, { useContext } from 'react'
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const Navbar = () => {
  const { LogoutUser, currentUser } = useContext(AuthContext)

  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-[#6C4FE0] to-[#8E7CFD] py-2 text-center text-white text-sm font-medium">
        🎁 UP TO 60% OFF + FREE SURPRISE GIFT ON ORDERS ABOVE ₹2.5K
      </div>

      <nav className="flex items-center justify-between px-6 md:px-10 py-3 bg-white shadow-md sticky top-0 z-50">
        <Link to="/" className="flex items-center">
          <img
            src="/assets/images/logo1.png"
            alt="logo"
            className="h-14 w-auto transition-transform hover:scale-105"
          />
        </Link>

        <ul className="hidden lg:flex space-x-6 xl:space-x-8 text-gray-800 font-medium">
          <li className="hover:text-[#6C4FE0] transition-colors">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-[#6C4FE0] transition-colors">
            <Link to="/category/keyboard">Keyboards</Link>
          </li>
          <li className="hover:text-[#6C4FE0] transition-colors">
            <Link to="/category/mouse">Mouse & Mousepads</Link>
          </li>
          <li className="hover:text-[#6C4FE0] transition-colors">
            <Link to="/category/chair">Ergo Chairs</Link>
          </li>
          <li className="hover:text-[#6C4FE0] transition-colors">
            <Link to="/category/audio">Audio</Link>
          </li>
          <li className="hover:text-[#6C4FE0] transition-colors">
            <Link to="/category/lighting">Lighting</Link>
          </li>
          <li className="hover:text-[#6C4FE0] transition-colors">
            <Link to="/contact">Help</Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4 md:space-x-6 text-gray-700 text-xl">
          {/* Auth Buttons */}
          {currentUser ? (
            <button
              onClick={LogoutUser}
              className="text-sm font-medium bg-[#6C4FE0] text-white px-4 py-1.5 rounded-full hover:bg-[#5a41c5] transition-all"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-gray-700 hover:text-[#6C4FE0] transition-colors"
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="text-sm font-medium bg-[#6C4FE0] text-white px-4 py-1.5 rounded-full hover:bg-[#5a41c5] transition-all"
              >
                Sign Up
              </Link>
            </>
          )}

          
          {/* <FaSearch className="cursor-pointer hover:text-[#6C4FE0] transition-colors" />
          <FaUser className="cursor-pointer hover:text-[#6C4FE0] transition-colors" /> */}
          <Link to={'/cart'}><FaShoppingCart className="cursor-pointer hover:text-[#6C4FE0] transition-colors" />
</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
