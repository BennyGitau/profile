import React from 'react';
import NavBar from '../NavBar';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function HomeLayout() {
  return (
    <>
      {/*<Header />*/}
      <div className="grid grid-cols-6 h-screen bg-black" >
        <div  className='sm:col-span-1 border-r border-slate-700'>
        <NavBar />
        </div>
        <div className='col-span-4'>
          <Outlet />
        </div>
        <div>
          <Footer className="sm:col-span-1" />
        </div>
      </div>
    </>
  );
}

export default HomeLayout;
