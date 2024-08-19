import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom'; // Added useLocation for active link checking
import { useTheme } from './Context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faHome, faUser, faBriefcase, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';

export default function Layout() {
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation(); 

  return (
    <div className={`flex m-0 p-0 w-full min-h-screen ${isDarkMode ? 'dark' : 'light'}`}>
      <div className='w-[90%] p-4'>
        <Outlet />
      </div>
      <div className='w-[10%] fixed min-h-screen'>
        <div className='flex flex-col py-4 my-6 text-md font-mono h-full w-full p-2'>
          <div className="w-fit fixed right-10 top-4 mb-4 rounded-full">
            <button
              className={`right-0 rounded-full p-3 text-center ${isDarkMode ? ' bg-slate-900 hover:bg-yellow-300' : 'bg-slate-300 hover:bg-slate-800 hover:text-white'} transition duration-200`}
              onClick={toggleTheme}
            >
              <FontAwesomeIcon className="h-5 w-5" icon={isDarkMode ? faSun : faMoon} />
            </button>
          </div>

          <div className='flex flex-row mx-auto mt-5 w-full md:flex-col bottom-0 fixed md:w-fit md:top-[25%] p-0 md:m-0 md:right-7 z-8'>
            <ul className='flex  w-full md:items-end md:flex-col md:text-left md:h-fit md:space-y-3 list-none md:my-4 md:mx-0'>
              {[
                { name: 'HOME', icon: faHome, path: '/' },
                { name: 'ABOUT', icon: faUser, path: '/about' },
                { name: 'PROJECTS', icon: faBriefcase, path: '/projects' },
                { name: 'CONTACT', icon: faEnvelope, path: '/contact' },
                { name: 'BLOG', icon: faComment, path: '/blog' }
              ].map((item, index) => (
                <li key={index} className='group flex flex-row content-start mr-0 hover:bg-orange-500 transition hover:origin-left p-2 duration-900 w-fit rounded-3xl'>
                  <NavLink
                    to={item.path}
                    className="flex flex-row items-center content-end justify-between right-0 w-full"
                  >
                    <h2 className={`text-white text-xl text-center w-fit opacity-0 pr-2 group-hover:opacity-100 transition-opacity duration-300 hidden md:block`}>
                      {item.name}
                    </h2>
                    <FontAwesomeIcon
                      className={`h-5 w-fit flex items-center justify-center rounded-full p-3 ${
                        location.pathname === item.path ? 'bg-orange-500 text-white' : 'hover:bg-orange-500 hover:text-white'
                      }`}
                      icon={item.icon}
                    />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
