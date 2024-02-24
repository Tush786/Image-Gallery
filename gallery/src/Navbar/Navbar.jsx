import React, { useState } from 'react';
import { FaBeer, FaHome } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='mb-4'>
      <nav className='bg-black border-spacing-6 py-2'>
        <div className="max-w-7xl mx-auto px-4 ">
          <div className="flex justify-between h-8">
            <div className="flex">
        
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavItem >
                    <FaHome className="h-8 w-8 text-white"/>
                    <p>Home</p>
                  </NavItem>
                  <NavItem>
                    <FaHome className="h-8 w-8 text-white" />
                    <p>Gallery</p>
                  </NavItem>
                  <NavItem>
                    <FaHome className="h-8 w-8 text-white"/>
                    <p>Content</p>
                  </NavItem>
                  <NavItem>
                    <FaHome className="h-8 w-8 text-white"/>
                    <p>About</p>
                  </NavItem>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItem>
              <FaHome />
              <p>Home</p>
            </NavItem>
            <NavItem>
              <FaHome />
              <p>Gallery</p>
            </NavItem>
            <NavItem>
              <FaHome />
              <p>Content</p>
            </NavItem>
            <NavItem>
              <FaHome />
              <p>About</p>
            </NavItem>
          </div>
        </div>
      </nav>
      <h2 className='bg-black'>Navbar</h2>
    </div>
  );
}

function NavItem({ children }) {
  return (
    <div className="text-gray-500 flex items-center gap-2 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
      {children}
    </div>
  );
}

export default Navbar;
