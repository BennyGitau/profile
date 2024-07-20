import React, { useEffect, useState } from 'react'
import laxeAura from '../assets/laxeAura.png'
import RideRealm from '../assets/Riderealm.png'
import LetsWrite from "../assets/let'sWrite.png"
import coffeeShop from "../assets/Coffe-Shop.png"

export default function Portfolio() {
  const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);
  return (
    <div class={`container  mx-auto p-4 transition-transform duration-1000 ease-out transform  ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-400">MY <span class="text-yellow-500">PORTFOLIO</span></h1>
          <div class="mt-4 flex justify-center space-x-4">
              <a href="#" class="text-gray-500">ALL</a>
              <a href="#" class="text-gray-500">LOGO</a>
              <a href="#" class="text-gray-500">VIDEO</a>
              <a href="#" class="text-gray-500">GRAPHIC DESIGN</a>
              <a href="#" class="text-gray-500">MOCKUP</a>
          </div>
      </div>
      <div class="mt-8 grid grid-cols-1 spcae-x-3 md:grid-cols-3 md:gap-4 ">
          <div class="flex justify-center">
              <img src={laxeAura} alt="Image 1" className="w-full h-[250px] shadow-lg rounded-lg" />
          </div>
          <div class="flex justify-center">
              <img src={LetsWrite} alt="Image 2" className="w-full h-[250px] shadow-lg rounded-lg" />
          </div>
          <div class="flex justify-center">
              <img src={RideRealm} alt="Image 3" className="w-full h-[250px] shadow-lg rounded-lg" />
          </div>
          <div class="flex justify-center">
              <img src={coffeeShop} alt="Image 3" className="w-full h-[250px] shadow-lg rounded-lg" />
          </div>
      </div>
    </div>

  )
}
