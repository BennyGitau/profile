import React from 'react';
import logo from '../assets/sampleLogo.jpg';

export default function Home() {
  return (
    <div className='flex flex-row text-white h-screen gap-1 rounded z-10'>
      <div className='py-2 ml-[1.5rem] justify-center m-auto font-extralight z-10'>
        <h1 className="text-9xl pb-8 font-thin">Welcome.</h1>
        <p className="border-l-4 border-orange-500 pl-2">I'm <span className="font-medium text-lg">Benson Gitau</span>, a Full-Stack Developer based in Nairobi, Kenya.
           With expertise in both front-end and back-end development,
            I specialize in delivering clean and efficient code across a range of projects.<br/>
        <br/>
        My goal is to consistently deliver clean, high-quality code while prioritizing an exceptional user experience.
        </p>
      </div>
      <div className="m-auto">
        <img src={logo}
          alt="profile"
          className="h-fit w-full z-0 pr-3 rotate-90"
          />
      </div>
    </div>
  )
}
