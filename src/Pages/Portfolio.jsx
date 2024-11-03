import React, { useState, useEffect } from 'react';
import laxeAura from "../assets/Laxeaura.webp";
import LetsWrite from "../assets/blog.webp";
import RideRealm from "../assets/riderealm.jpg";
import coffeeShop from "../assets/coffee.jpeg";
import pizza from "../assets/pizza.jpeg";
import recipe from "../assets/recipehaven.jpeg";
import doggie from "../assets/doggie.jpeg";
import recipehaven from "../assets/videos/recipehaven.mp4";
import coffeeshop from "../assets/videos/coffee-shop.mp4";
import laxeaura from "../assets/videos/laxeaura.mp4";
import letswrite from "../assets/videos/letswrite.mp4";
import nadiasgarden from "../assets/videos/nadiasgarden.mp4";
import riderealm from "../assets/videos/riderealm.mp4";
import ata from "../assets/ATA.webp"
import { BiX } from 'react-icons/bi';
import { useTheme } from '../Context/ThemeContext';


const projects = [
  { src: ata, name: 'Air Travel Assistance',
    description: 'An AI-powered travel assistance app that provides flight and hotel booking services. It is built with React, Tailwind CSS, and Django. The app supports both light and dark modes.',
    github: 'https://github.com/BennyGitau/ATA-project',
    preview: "https://www.loom.com/share/f3b0ce37816f4705824233b0b3dca94e?sid=7ea41135-8ced-4499-8681-16f53af7a553",
    technologies: ['React', 'Tailwind', 'Django', 'Python', 'Generative AI'],
    type: 'video'
  },

  { src: laxeAura, name: 'LaxeAura', 
    description: 'An e-commerce website that offers a wide range of beauty products. It is built with react and styled with tailwind css',
    github: 'https://github.com/BennyGitau/laxeAura',
    preview: laxeaura,
    technologies: ['React', 'Tailwind', 'JSON'],
    type: 'video'

   },
  { src: LetsWrite, name: 'Let\'s Write',
     description: 'A blog application where users can create and join channels to post blogs. Built with React, Flask, and SQLAlchemy, featuring JWT authentication and styled with Tailwind CSS. The app supports both light and dark modes.',
     github: 'https://github.com/BennyGitau/Let-s-Write',
     preview: letswrite,
     technologies: ['React', 'Tailwind', 'Flask', 'Python'],
     type: 'video',
    },
  { src: RideRealm, name: 'RideRealm', 
    description: 'App that allow people to post and display their favorite rides',
    github: 'https://github.com/BennyGitau/Ride-Realm',
    preview: riderealm,
    technologies: ['CSS', 'JavaScript', 'HTML', 'JSON'],
    type: 'video'
  },
  { src: coffeeShop, name: 'Coffee Shop', 
    description: 'A CLI app designed to manage the operations of a café. Admins can view sales data and customer comments. Customers can place orders and leave feedback. Built with Python, utilizing ORM for efficient data management.',
    github: 'https://github.com/BennyGitau/phase-3-project--coffee-shop',
    preview: coffeeshop,
    technologies: ['Flask', 'Python', 'Sqlite'],
    type: "video"
  },
  {src: recipe, name: 'RecipeHaven',
    description: "Recipe Haven is a community-driven platform for sharing and exploring recipes. Users can create accounts, upload recipes, and interact with others' recipes through bookmarking, rating, commenting, and sharing on social media. The platform offers advanced search and filtering options for finding recipes easily.",
    github: 'https://github.com/BennyGitau/recipehaven',
    preview: recipehaven,
    technologies: ['React', 'Tailwind', 'Flask', 'PostgreSQL', 'Python'],
    type: "video"
  },
  {src: doggie, name: 'DoggieCare',
    description: 'A pet sitting app specifically designed for dog owners and sitters. Admins can manage bookings and view feedback left by customers. Dog owners can book sitters, make special requests, and leave reviews. Built with a focus on a user-friendly interface and reliable service.',
    github: 'https://github.com/BennyGitau/DoggieCare-project',
    preview: doggie,
    technologies: ['React', 'Tailwind', 'Flask', 'PostgreSQL'],
    type: "image"
  },
  {src: pizza, name: "Nadias' Garden",
    description: 'A meticulously designed application for managing a pizza shop and facilitating customer orders. This superb app is developed with Django and boasts a stylish Bootstrap design.',
    github: 'https://github.com/BennyGitau/nadiasgarden-django-project',
    preview: nadiasgarden,
    technologies: ['Django', 'Bootstrap', 'PostgreSQL',],
    type: "video"
  }
];

function Portfolio() {  
  const { isDarkMode } = useTheme();
  const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState({ open: false, project: null });

  useEffect(() => {
    setVisible(true);
  }, []);

  const openModal = (project) => {
    setModal({ open: true, project });
  };

  const closeModal = () => {
    setModal({ open: false, project: null });
  };

  return (
    <div className={`container mx-auto mb-10 w-[90%] p-4 transition-transform duration-1000 ease-out transform ${visible ? 'translate-y-0' : '-translate-y-full'} ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-400">
          MY <span className="text-yellow-500">PROJECTS</span>
        </h1>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex justify-center"
            onClick={() => openModal(project)}
          >
            <img src={project.src} alt={project.name} className="w-full h-[260px] shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer" />
            <div className="absolute inset-0 flex items-center justify-center bg-orange-500 rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100">
              <span className="text-white text-xl font-bold">{project.name}</span>
            </div>
          </div>
        ))}
      </div>

      {modal.open && (
        <div className={`fixed inset-0 ${isDarkMode ? 'bg-black bg-opacity-70' : 'bg-gray-200 bg-opacity-80'} flex items-center justify-center z-50`}>
          <div className={`p-8 rounded-lg w-full max-w-3xl relative ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <button
            className={`absolute top-2 right-2 ${isDarkMode ? 'text-white border border-white' : 'text-black border border-black'} text-4xl hover:text-gray-400  rounded-full `}
            onClick={closeModal}
          >
            <BiX />
          </button>
            <div className='w-[90%]'>
              <div className='flex flex-row items-center  mb-4 justify-between'>
                <h2 className="text-2xl font-bold">{modal.project.name}</h2>
                <a href={modal.project.github} target="_blank" rel="noopener noreferrer" className="block">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                    View on GitHub
                  </button>
                </a>
              </div>
            </div>
            <p>{modal.project.description}</p>

            <div className='w-[90%] mt-2'>
                <h2 className="text-xl font-medium">Technologies used:</h2>
              <ul className="flex list-none gap-3 flex-row list-inside">
                {modal.project.technologies.map((technology, index) => (
                  <li key={index}>{technology}</li>
                ))}
              </ul>
            </div>
            <div className='w-full mx-auto mt-2'>
                <div className='flex flex-row items-center justify-center'>
                  {modal.project.type === "image" ? (
                    <img src={modal.project.preview} alt={modal.project.name} className="w-full h-[300px] shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer" />
                  ) : (
                    <video controls className="w-full h-[300px] shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                      <source src={modal.project.preview} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}  
                </div>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
}

export default Portfolio;

