import React from 'react'
import {NavLink, Outlet} from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='grid gap-6 rounded-lg py-4 my-6 text-white text-md font-mono h-auto w-full justify-end p-2'>
      
      <NavLink to={'/'}>
        <button className='hover:text-orange-500 p-1 rounded'>About</button>
      </NavLink>
      <NavLink to={'skills'}>
        <button className='hover:text-orange-500 p-1 rounded'>skills</button>
      </NavLink>
      <NavLink to={'services'}>
        <button className='hover:text-orange-500 p-1 rounded'>Services</button>
      </NavLink>
      <NavLink to={'blog'}>
        <button className='hover:text-orange-500 p-1 rounded'>Blog</button>
      </NavLink>
      <NavLink to={'resume'}>
        <button className='hover:text-orange-500 p-1 rounded'>Download CV</button>
      </NavLink>
      <NavLink to={'contact'}>
        <button className='hover:text-orange-500 p-1 rounded'>Hire Me!</button>
      </NavLink>
    </div>
  )
}
