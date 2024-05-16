import React from 'react'
import instagram from '../../assets/instagram.png';
import linkedIn from '../../assets/linkedIn.png';
import github from '../../assets/github.png';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 h-screen flex flex-col justify-between w-full">
      <span className='flex justify-between mx-[3rem]'>
        <a href='https://github.com/BennyGitau'><img className='size-8 rounded' src={github}/></a>
        <a><img className='size-8 rounded' src={instagram} alt='twitter'/></a>
        <a href='www.linkedin.com/in/benson-gitau-b89b6b191'><img className='size-8 rounded' src={linkedIn}/></a>
      </span>
      <span className='text-center' >
        <span className="pb-4 w-full text-center text-xs font-semibold">
          <span>&copy; Benson Gitau. {new Date().getFullYear()}</span>
        </span>
      </span>
    </footer>
  )
}
