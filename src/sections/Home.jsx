import profileImg from "../assets/profileImg.jpeg";
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import resume from "../assets/resume.pdf";

function Home() {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center bg-gray-900 text-white font-mono'
    >
      <div className='container mx-auto px-20'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
          {/* Text Content */}
          <div className='lg:w-1/2 text-center lg:text-left'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>
              Hi, I'm <span className='text-teal-400'>Niroop N</span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-6'>
              A passionate Front-end Developer
            </p>
            <p className='text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0'>
              I'm a Front-end developer with 6+ years’ experience in Flutter,
              Kotlin & ReactJS. Skilled in native integrations, state management
              & responsive UI. Passionate, adaptable, and focused on clean code.
            </p>

            <div className='flex justify-center lg:justify-start items-center space-x-6 mb-8'>
              <a
                href='https://github.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-teal-400 transition-colors'
              >
                <FaGithub size={28} />
              </a>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-teal-400 transition-colors'
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-teal-400 transition-colors'
              >
                <FaTwitter size={28} />
              </a>
            </div>

            <div className='flex justify-center lg:justify-start items-center space-x-4'>
              <a
                href='#contact'
                className='bg-gradient-to-r from-teal-500 to-indigo-600 text-white py-3 px-6 rounded-md font-semibold hover:opacity-90 transition-opacity'
              >
                Contact Me
              </a>
              <a
                href={resume}
                download
                className='bg-gray-700 text-white py-3 px-6 rounded-md font-semibold hover:bg-gray-600 transition-colors flex items-center gap-2'
              >
                Resume <FiDownload />
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className='lg:w-1/3'>
            <div className='relative w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] mx-auto'>
              <div className='absolute inset-0 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full blur-xl'></div>
              <img
                className='relative w-full h-full rounded-full object-cover border-4 border-gray-800'
                src={profileImg}
                alt='Profile Image'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
