import React, { useEffect, useState } from 'react'

export default function Portfolio() {
  const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);
  return (
    <div class={`container mx-auto p-4 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div class="text-center">
          <h1 class="text-4xl sm:text-6xl font-bold text-gray-800">MY <span class="text-yellow-500">PORTFOLIO</span></h1>
          <div class="mt-4 flex justify-center space-x-4">
              <a href="#" class="text-yellow-500">ALL</a>
              <a href="#" class="text-gray-800">LOGO</a>
              <a href="#" class="text-gray-800">VIDEO</a>
              <a href="#" class="text-gray-800">GRAPHIC DESIGN</a>
              <a href="#" class="text-gray-800">MOCKUP</a>
          </div>
      </div>
      <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="flex justify-center">
              <img src="path_to_image1.jpg" alt="Image 1" class="w-full sm:w-48 h-auto" />
          </div>
          <div class="flex justify-center">
              <img src="path_to_image2.jpg" alt="Image 2" class="w-full sm:w-48 h-auto" />
          </div>
          <div class="flex justify-center">
              <img src="path_to_image3.jpg" alt="Image 3" class="w-full sm:w-48 h-auto" />
          </div>
      </div>
    </div>

  )
}
