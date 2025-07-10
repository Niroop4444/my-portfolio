import { useState } from "react";
import dashboard from "../assets/dashboard-app.webp";
import ecommerce from "../assets/e-commerce-app.png";
import food from "../assets/food-app.jpg";

function Projects() {
  const [projects] = useState([
    {
      image: dashboard,
      name: "Dashboard App",
      description:
        "Scalable dashboard application with CRUD operations manages all the adding and deleting of questionnaires",
    },
    {
      image: ecommerce,
      name: "E-commerce App",
      description:
        "Scalable dashboard application with CRUD operations manages all the adding and deleting of questionnaires",
    },
    {
      image: food,
      name: "Food App",
      description:
        "Scalable dashboard application with CRUD operations manages all the adding and deleting of questionnaires",
    },
  ]);
  return (
    <section
      id='projects'
      className='min-h-screen flex items-center font-mono justify-center py-20'
    >
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center'>
          Projects{" "}
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='p-6 round-xl flex flex-col items-center text-center border-2 border-white/10 hover:-border-blue-500/30 hover:shadow-[9_8px_2px_rgba(59, 130, 246, 0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900'
            >
              <h3 className='text-xl font-semibold mb-4'>{project.name}</h3>
              <p className='text-gray-300 mb-4'>{project.description}</p>
              <div className='flex flex-wrap sm:items-center gap-2 mb-4'>
                {["Flutter, Firebase"].map((tech, index) => (
                  <span
                    key={index}
                    className='bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59, 130, 22.46, 0.2)] transition'
                  >
                    {tech}
                  </span>
                ))}
                <div className='flex flex-col text-center my-5 py-3 justify-center gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59, 130, 22.46, 0.2)] cursor-pointer rounded-xl'>
                  <p className='text-gray-200'>View Project</p>
                  <a className='flex justify-between items-center font-bold text-blue-400 transition-colors hover:text-white'>
                    {" "}
                    <img src={project.image} alt={`${project.name} Image`} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
