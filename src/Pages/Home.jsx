import React from 'react';
import logo from '../assets/sampleLogo.jpg';
import profile1 from "../assets/p1.jpeg";
import profile2 from "../assets/p2.jpeg";
export default function Home() {
    return (
        <section className={`flex flex-col mb-20 md:fixed top-0 left-0 md:max-h-screen md:flex-row justify-between gap-2`}>
            <div className="flex flex-col md:flex-row items-center md:w-[35%] md:top-[-50%] md:left-[-83%]">
                <div className="md:fixed md:h-[200%] md:w-full md:rotate-[-15deg] md:left-[-83%] md:top-[-50%] md:bg-orange-500 z-0"></div>
                
                <img 
                    src={profile2} 
                    alt="profile" 
                    className="bg-cover object-cover w-[50%] aspect-square rounded-full md:bg-no-repeat md:h-[calc(100vh-80px)] md:w-[85%] z-10 md:rounded-[30px] md:m-[35px] shadow-xl shadow-black" 
                />
            </div>
            <div className='flex flex-col mt-10 md:w-[45%] py-2 md:ml-[1.5rem] justify-center md:m-auto font-light'>
                <h1 className="name text-center text-3xl md:text-5xl md:text-start font-sans text-orange-500 pb-1 font-medium"> - I'M BENSON GITAU. </h1>
                <h1 className="name text-center text-3xl md:text-5xl md:text-start pb-8 font-thin">FULL-STACK DEV</h1>
                <p className="border-l-4 ml-8 md:ml-0 border-orange-500 pl-2 z-10"> 
                    I am a full-stack developer AI enthusiast.
                    I specialize in creating innovative digital solutions, from AI powered apps to community driven platforms.<br/>
                    <br/>
                    I'm passionate about leveraging technology to solve real-world challenges. 
                    Whether developing robust backend systems or creating seamless user experience,
                    I'm driven by vision to build tools that make a difference.
                </p>
            </div>
        </section>
    );
}


