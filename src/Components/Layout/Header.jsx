import React from 'react'
import sampleProfile from '../../assets/sampleProfile.jpeg'

export default function Header() {
  return (
    <header className="h-fit w-full xl:pb-2 bg-background text-white">
      <div className='flex justify-between'>
        <div className='my-auto mx-4 text-xl font-semibold ' >
          Benson Gitau
        </div>
        <div className='mx-4'>
          <img 
            src={sampleProfile}
            alt='profile'
            className='w-20 h-25 my-4'
              />
        </div>
      </div>
    </header>
  )
}
