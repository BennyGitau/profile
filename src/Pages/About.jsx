import React, { useState, useEffect} from 'react';
import { useTheme } from '../Context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import mycv from '../assets/downloadables/BensonGitau-cv.pdf';
import { Link } from 'react-router-dom';

const skills = [
  { name: 'HTML', percentage: 80 },
  { name: 'JAVASCRIPT', percentage: 60 },
  { name: 'CSS', percentage: 70 },
  { name: 'PYTHON', percentage: 73 },
  { name: 'FLASK', percentage: 80 },
  { name: 'DJANGO', percentage: 50 },
  { name: 'SQL', percentage: 75 },
  { name: 'REACT', percentage: 45 },
];

const experiences = [
  {
    period: 'Dec 2021 - Jan 2024',
    title: 'Relationship Officer',
    company: 'Equity Bank',
    description: 'I enhanced financial operations and improved customer service, leading to greater client satisfaction and operational efficiency.',
  },
  {
    period: 'June 2021 - Aug 2021',
    title: 'Apprentice',
    company: 'Equity Bank',
    description: 'I assisted with administrative and financial operations, and gained experience in digital banking and customer service.',
  },
  {
    period: '2019 - May 2021',
    title: 'Marketing Agent (Part Time)',
    company: 'Equity Bank',
    description: 'Served as a sales agent, responsible for online banking products.',
  },
];

const educations = [
  {
    period: '2024',
    title: 'SOFTWARE ENGINEERING',
    institution: 'MORINGA SCHOOL',
    description: 'Full-stuck web app development with Python, Flask, Django, React',
  },
  {
    period: '2022',
    title: 'BA Civil Aviation Management',
    institution: 'Moi University',
    description: 'Degree in Civil Aviation Management. Second class upper division',
  },
  {
    period: '2016',
    title: 'SECODARY EDUCATION',
    institution: 'Lenana School',
    description: 'Certificate of Kenya Secondary Education',
  },
];

const SkillCircle = ({ skill }) => (
  <div className='flex flex-col items-center'>
    <div className='w-24 h-24'>
      <CircularProgressbar
        value={skill.percentage}
        text={`${skill.percentage}%`}
        styles={buildStyles({
          textColor: '',
          pathColor: '#FFA500',
          trailColor: '#d6d6d6',
        })}
      />
    </div>
    <p className='text-gray-500 mt-2'>{skill.name}</p>
  </div>
);

const TimelineItem = ({ item, isEducation }) => (
  <div className='flex flex-col md:flex-row items-start mb-6'>
    <div className='flex-shrink-0'>
      <div className='flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white'>
        <FontAwesomeIcon icon={faBriefcase} />
      </div>
    </div>
    <div className='ml-4'>
      <div className='flex items-center space-x-2'>
        <span className='text-sm bg-gray-200 text-gray-700 rounded px-2 py-1'>{item.period}</span>
        <h3 className='text-lg font-semibold'>{item.title} {isEducation ? `— ${item.institution}` : `— ${item.company}`}</h3>
      </div>
      <p className='text-gray-500 mt-2'>{item.description}</p>
    </div>
  </div>
);

export default function About() {
  const [visible, setVisible] = useState(false);

  const { isDarkMode } = useTheme();

    useEffect(() => {
        setVisible(true);
    }, []);
  return (
    <div className={`top-0 left-0 pl-4 w-full mb-10 transition-transform duration-1000 ease-out transform ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className='flex w-full h-40 text-center '>
        <h1 className='text-6xl text-gray-500 font-bold m-auto'>ABOUT <span className='text-orange-500'>ME</span></h1>
      </div>
      <div >
        <div className='flex flex-col md:flex-row space-x-3'>
          <div className='p-4 w-full md:w-[60%] space-y-4'>
            <h2 className='name text-3xl w-full'>PERSONAL INFOS</h2>
            <section className='flex space-x-3 mb-4'>
              <div className='w-1/2 space-y-4'>
                <p>First Name: Benson</p>
                <p>Nationality: Kenya</p>
                <p>Phone: 0795216928</p>
                <p>Freelance: Available</p>
              </div>
              <div className='w-1/2 space-y-4'>
                <p>Last Name: Gitau</p>
                <p>Address: Nairobi</p>
                <p>Email: bensonkgitau138@gmail.com</p>
                <p>Languages: English/Swahili</p>
              </div>
            </section>
            <a href={mycv} target='_blank' className='mt-3'>
            <button className='bg-orange-400 text-white hover:bg-orange-500 rounded-xl mt-4 p-2'>Download CV <FontAwesomeIcon icon={faDownload} className='ml-2'/></button>
            </a>
          </div>
          <div className='grid grid-cols-2 mt-10 md:mt-0 gap-4 md:w-[40%]'>
            <div className='rounded-lg border-2 border-gray-400 flex flex-col justify-center items-center p-6'>
              <h1 className='text-5xl font-bold text-orange-500'>2<span className='text-3xl align-top'>+</span></h1>
              <div className='flex items-center space-x-2 mt-2'>
                <div className='border-t-2 border-gray-300 w-8'></div>
                <p className='text-center'>
                  YEARS OF <br/> EXPERIENCE
                </p>
              </div>
            </div>
            <Link to="/projects">
            <div className='rounded-lg border-2 border-gray-400 flex flex-col justify-center items-center p-6 '>
              <h1 className='text-5xl font-bold text-orange-500'>10<span className='text-3xl align-top'>+</span></h1>
              <div className='flex items-center space-x-2 mt-2'>
                <div className='border-t-2 border-gray-300 w-8'></div>
                <p className='text-center'>
                  COMPLETED <br/> PROJECTS
                </p>
              </div>
            </div>
            </Link>
            <div className='rounded-lg border-2 border-gray-400 flex flex-col justify-center items-center p-6'>
              <h1 className='text-5xl font-bold text-orange-500'>10<span className='text-3xl align-top'>+</span></h1>
              <div className='flex items-center space-x-2 mt-2'>
                <div className='border-t-2 border-gray-300 w-8'></div>
                <p className='text-center'>
                  HAPPY <br/> CUSTOMERS
                </p>
              </div>
            </div>
            <div className='rounded-lg border-2 border-gray-400 flex flex-col justify-center items-center p-6 '>
              <h1 className='text-5xl font-bold text-orange-500'>2<span className='text-3xl align-top'>+</span></h1>
              <div className='flex items-center space-x-2 mt-2'>
                <div className='border-t-2 border-gray-300 w-8'></div>
                <p className='text-center'>
                  AWARDS <br/> WON
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col items-center mt-8'>
          <h2 className='text-2xl font-bold text-gray-500 my-6'>MY SKILLS</h2>
          <div className='grid grid-cols-2 text w-full sm:grid-cols-4 gap-6'>
            {skills.map(skill => (
              <SkillCircle key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col ml-4 mt-8'>
        <h2 className='text-2xl w-full text-center font-bold text-gray-500 my-6'>EXPERIENCE & EDUCATION</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='space-y-5 '>
            {experiences.map((experience, index) => (
              <TimelineItem key={index} item={experience} isEducation={false} />
            ))}
          </div>
          <div className='space-y-5 '>
            {educations.map((education, index) => (
              <TimelineItem key={index} item={education} isEducation={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
