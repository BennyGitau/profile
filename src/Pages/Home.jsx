/*import React from 'react';
import logo from '../assets/sampleLogo.jpg'
export default function Home() {
  return (
    <>
    <section className='flex flex-col fixed top-0 left-0 max-h-screen md:flex-row justify-between gap-2'>
      <div className="flex flex-row w-[35%] top-[-50%] left-[-83%] rotate-15">
        <div className="fixed h-[200%] w-full rotate-[-15deg] left-[-83%] top-[-50%] bg-orange-500"></div>
        
        <img src={logo}
          alt="profile"
          className="bg-cover bg-no-repeat bg-top h-[calc(100vh-80px)] w-[85%] z-10 rounded-[30px] m-[40px] shadow-sm shadow-black"
          />
      </div>
      <div className='flex flex-col w-[45%] py-2 ml-[1.5rem] justify-center m-auto font-light'>
        <h1 className="name text-5xl font-sans text-orange-500 pb-1 font-medium"> - I'M BENSON GITAU. </h1>
        <h1 className="name text-5xl pb-8 font-thin">FULL-STACK DEVELOPER</h1>
        <p className=" border-l-4 border-orange-500 pl-2 z-10"> I am a full-stack developer based in Kenya.
            I specialize in delivering clean and efficient code across a range of projects.<br/>
        <br/>
        My goal is to consistently deliver clean, high-quality code while prioritizing an exceptional user experience.
        </p>
      </div>
      
    </section>
    
    </>
  )
}
*/
import React, { useState, useEffect } from 'react';
import logo from '../assets/sampleLogo.jpg';

export default function Home() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <section className={`flex flex-col fixed top-0 left-0 max-h-screen md:flex-row justify-between gap-2 transition-transform duration-1000 ease-out transform ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="flex flex-row w-[35%] top-[-50%] left-[-83%] rotate-15">
                <div className="fixed h-[200%] w-full rotate-[-15deg] left-[-83%] top-[-50%] bg-orange-500"></div>
                
                <img 
                    src={logo} 
                    alt="profile" 
                    className="bg-cover bg-no-repeat bg-top h-[calc(100vh-80px)] w-[85%] z-10 rounded-[30px] m-[40px] shadow-sm shadow-black" 
                />
            </div>
            <div className='flex flex-col w-[45%] py-2 ml-[1.5rem] justify-center m-auto font-light'>
                <h1 className="name text-5xl font-sans text-orange-500 pb-1 font-medium"> - I'M BENSON GITAU. </h1>
                <h1 className="name text-5xl pb-8 font-thin">FULL-STACK DEVELOPER</h1>
                <p className="border-l-4 border-orange-500 pl-2 z-10"> 
                    I am a full-stack developer based in Kenya.
                    I specialize in delivering clean and efficient code across a range of projects.<br/>
                    <br/>
                    My goal is to consistently deliver clean, high-quality code while prioritizing an exceptional user experience.
                </p>
            </div>
        </section>
    );
}

