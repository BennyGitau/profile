import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faMapMarker, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";

import { useTheme } from '../Context/ThemeContext';

export default function Contact() {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [visible, setVisible] = useState(false);
    useEffect(() => {
        setVisible(true);
    }, []);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_n129c7t', 
      'template_my1ix9i', 
      formData, 
      'IuxRMN79NNhKxODEK'
    )
    .then((response) => {
      toast.success('Message sent!',
      { style: {
        backgroundColor: '#f97316',
        color: '#fff',
        border: '1px solid #f97316',
        borderRadius: '5px',          
      }, 
      autoClose: 3000, position: 'top-center'});
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      console.log('FAILED...', err);
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className={`font-light mb-16 md:mb-0 ${isDarkMode ? 'dark' : 'light'} transition-transform duration-1000 ease-out transform ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <h1 className='text-3xl md:text-6xl font-semibold text-center m-8'>
        GET IN <span className='text-orange-500'>TOUCH</span>
      </h1>
      <div className='md:grid md:grid-cols-2 mt-10 '>
        <div className='space-y-4 ml-4 mb-8 pl-4'>
          <h1 className='name text-3xl font-bold'>Just Say hi</h1>
          <p>Get in touch to discuss new projects, creative ideas or opportunities.</p>
          <h4 className='name font-semibold'>
            <FontAwesomeIcon icon={faMapMarker} size="2x" className='rounded-lg p-1 text-orange-500'/>ADDRESS
          </h4>
            <p className='font-normal pl-4'>10200, Nairobi, Kenya</p>
          <h4 className='name font-semibold'>
            <FontAwesomeIcon icon={faMailBulk} size="2x" className='rounded-lg p-1 text-orange-500'/>EMAIL ME
          </h4>
            <p className='font-normal pl-4 w-full'> <a href="mailto:bensonkgitau138@gmail">bensonkgitau138@gmail.com</a></p>
          <h4 className='name font-semibold'>
            <FontAwesomeIcon icon={faPhone} size="2x" className='rounded-lg p-1 text-orange-500'/>CALL ME
          </h4>
            <p className='normal font-normal pl-4'>+254795216928</p>
          <footer className=' mt-6'>
            <div className='flex flex-row ml-20 space-x-5'>
            <a 
              href="https://x.com/benny_gitau" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='rounded-lg p-1 hover:bg-orange-500 transition-colors duration-300'
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a 
              href="https://github.com/BennyGitau" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='rounded-lg p-1 hover:bg-orange-500 transition-colors duration-300'
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a 
              href="https://www.linkedin.com/in/benson-gitau-b89b6b191/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='rounded-lg p-1 hover:bg-orange-500 transition-colors duration-300'
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a 
              href="https://www.instagram.com/benny_gitau/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='rounded-lg p-1 hover:bg-orange-500 transition-colors duration-300'
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            </div>
          </footer>
        </div>
        <div>
        <form onSubmit={handleSubmit} className={`flex flex-col space-y-8 ${isDarkMode ? 'dark' : 'light'}`}>
        <div className='flex flex-col space-y-2 md:flex-row  md:gap-4'>
          <input
            type="text"
            name="name"
            placeholder="YOUR NAME"
            className={`rounded-3xl p-3 w-72 ${isDarkMode ? 'bg-gray-950 border-1 text-white' : 'light border-2 border-orange-200'}`}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="YOUR EMAIL"
            className={`rounded-3xl p-3 w-72 ${isDarkMode ? 'bg-gray-950 border-1 text-white' : 'light border-2 border-orange-200'}`}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="SUBJECT"
          className={`rounded-3xl  p-3 w-72 ${isDarkMode ? 'bg-gray-950 border-1 text-white' : 'light border-2 border-orange-200'}`}
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          type="text"
          name="message"
          placeholder="YOUR MESSAGE"
          className={`rounded-3xl text-sm p-3 h-60 w-[100%] text-start ${isDarkMode ? 'bg-gray-950 border-1 text-white' : 'light border-2 border-orange-200'}`}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className='bg-orange-500 w-fit hover:bg-orange-600 text-white p-3 rounded-lg'>SEND MESSAGE</button>
        </form>
        </div>
      </div>
  </div>
  );
}


