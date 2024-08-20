import React, { useState, useEffect } from 'react';
import { BiX } from 'react-icons/bi';
import { useTheme } from '../Context/ThemeContext';
import aiblog from "../assets/AIblog.jpg";
import tailwind from '../assets/tailwind.png'
import djangovsflask from '../assets/DjangoVSflask.jpeg'

export default function Blog() {
  const { isDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [modal, setModal] = useState({ open: false, post: null });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const posts = [
    {
      title: "Is AI taking software Engineers place?",
      description: "Today many software engineers are using AI to help them solve their problems. Here is a quick overview...",
      image: aiblog,
      date: "August 01, 2024",
      content: (
        <>
        <p>The fast-paced evolution of technology has always driven the world forward. In recent years, one innovation has completely transformed software development: artificial intelligence (AI). 
          While coding has traditionally been a labor-intensive and highly specialized skill, AI has emerged as a powerful ally, fundamentally changing the development process and revealing new opportunities for innovation. 
          Here's a detailed look at how AI is enhancing coding and why this collaborative partnership is leading a new era of development.
        </p>
        <br></br>
        <p>AI is completely revolutionizing the coding landscape through the automation of repetitive tasks,
             significant enhancement of code quality, and the efficient streamlining of bug detection. 
             Cutting-edge tools like GitHub Copilot deliver intelligent, precise code suggestions, 
             while AI-driven code reviews and debugging tools guarantee the creation of high-quality software.
              Personalized learning platforms expedite the acquisition of skills, and natural language processing seamlessly breaks down barriers for aspiring coders. 
            This empowers developers to focus on innovation and creativity, propelling a new era in software development.
        </p>
        <p className='m-3 text-xl font-thin italic'>
          The relationship between AI and coding is symbiotic, pushing the boundaries of software development and ushering in a new era of innovation in the tech industry.
        </p>

      </>)
    },
    {
      title: '"The Secret Weapon: How Semantic CSS Can Supercharge Your Coding Workflow"',
      description: "In the fast-paced world of web development, Semantic CSS offers a revolutionary approach that can enhance your coding workflow and design skills.",
      image: tailwind,
      date: "June 15, 2024",
      content: (      
        <>
        <h2 className='mt-2 mb-2 text-xl font-poppins'>Here are the key benefits:</h2>
        <h3 className=''>1. Meaningful Class Names</h3>
        <p> Semantic CSS uses clear and descriptive class names, simplifying code readability and maintenance.
        </p>
        <h3 className='mt-2'>2.  Reusability and Scalability</h3>
        <p>It promotes reusability and scalability in stylesheets, reducing redundancy in CSS.
        </p>
        <h3 className='mt-2'>3.  Accessibility</h3>
        <p>It enhances accessibility by providing meaningful labels and accessible attributes.</p>
        <h3 className='mt-2'>4.  Improved Collaboration</h3>
        <p>Provides a shared language for collaboration and makes onboarding new team members easier.</p>
        <h3 className='mt-2'>5.  Future-Proofing</h3>
        <p>It offers a stable foundation for future enhancements and code adaptability.</p>
        <h3 className='mt-2'>6.  Seamless Integration</h3>
        <p>It works well with modern development tools and methodologies, ensuring seamless code development.</p>
        <h3 className='mt-2'>7.  Faster debugging and maintainace</h3>
        <p>It reduces the time and effort required for debugging and maintenance, making it more efficient.</p>
        <p className='m-2 italic text-xl font-thin'>Incorporating Semantic CSS into your workflow helps streamline maintenance, enhance collaboration, and deliver high-quality designs with ease.</p>
        </>
      )
    },
    {
      title: `“Why Django Reigns over Flask: The Ultimate Web Framework Showdown”`,
      description: "When choosing between Python web frameworks, developers often face the decision: Django or Flask? Despite the strengths of both, many developers prefer Django. Here's why Django is often seen as the superior choice.",
      image: djangovsflask,
      date: "August 01, 2024",
      content: (
        <>
        <h3 className='mt-2 text-center font-medium'>Django VS Flask</h3>
        <p>Django and Flask are two popular Python web frameworks with distinct approaches. 
          Django offers a comprehensive set of tools out-of-the-box, making it ideal for complex applications. 
          Meanwhile, Flask provides essential components for simplicity and flexibility, allowing developers to choose their own tools and libraries.
        </p>
        <p className='text-xl font-thin italic m-3'>In conclusion, Flask's flexibility may appeal to those who prefer a hands-on approach to building web applications; 
          however, Django's extensive built-in features and structured framework make it the superior choice for most developers.
           Its comprehensive toolkit accelerates development, reduces the need for repetitive coding tasks, and facilitates easier maintenance and scaling of applications. 
           For projects that demand a full-featured solution with less configuration, Django stands out as the framework that truly enhances productivity and streamlines the development process.
        </p>
        </>
      )
    },
  ];

  const openModal = (post) => {
    setModal({ open: true, post });
  };

  const closeModal = () => {
    setModal({ open: false, post: null });
  };

  return (
    <div className={`container mx-auto h-screen ml-8 p-4 transition-transform duration-1000 ease-out transform ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-500">
          MY <span className="text-yellow-500">BLOG</span>
        </h1>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div 
            key={index} 
            className="rounded-lg shadow-lg overflow-hidden cursor-pointer"
            onClick={() => openModal(post)}
          >
            <img src={post.image} alt={`Image ${index + 1}`} className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 " />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{post.title}</h2>
              <p className="text-gray-500">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
      {modal.open && (
        <div className="fixed inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center z-50">
          <div className="relative flex items-end justify-end w-[80%]">
            <button
              className={` ${isDarkMode ? 'text-white border border-white' : 'text-black border border-black'} text-4xl hover:text-gray-400 rounded-full`}
              onClick={closeModal}
            >
              <BiX />
            </button>
          </div>
          <div className={`relative rounded-lg w-full max-w-4xl ${isDarkMode ? 'bg-gray-100 text-gray-600' : 'bg-black text-gray-600'}`}>
            <div className={`flex flex-col max-h-[80vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600  ${isDarkMode ? 'scrollbar-track-gray-100' :"scrollbar-track-gray-900"}`}>
              <div className='flex-grow p-8 '>
                <h3 className='text-sm italic'>{modal.post.date}</h3>
                <h2 className="text-2xl font-medium mb-4 mt-2 text-center capitalize ">{modal.post.title}</h2>
                <img src={modal.post.image} alt={`Image ${modal.post.title}`} className="w-full h-full rounded object-cover mb-4" />
                <p className="text-lg">{modal.post.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
