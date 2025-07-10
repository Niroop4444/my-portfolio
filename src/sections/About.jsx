import { useInView } from "react-intersection-observer";

function About() {
  const workExperience = [
    {
      role: "Mobile application developer",
      company: "Tekzen Systems",
      date: "May 2024 - present",
      description: [
        "Redesigned mobile app UI in Kotlin (XML) to modernize UX and improve navigation; integrated DocuSign SDK with GraphQL for secure in-app signing (online/offline), including authentication, templates, and signature capture.",
        "Built a Kotlin-based Android widget for tasks, approvals, and invites using WorkManager for background updates and BroadcastReceiver for real-time refresh.",
        "Developed a full-featured LMS app in Flutter with Riverpod and MVVM architecture, using Dio for scalable API communication.",
      ],
    },
    {
      role: "Flutter Developer",
      company: "Sweken IT Solutions Pvt Ltd",
      date: "July 2022 - March 2024",
      description: [
        "Developed responsive mobile and web applications using Flutter and FlutterFlow by translating UI/UX wireframes in collaboration with design teams.",
        "Delivered secure, maintainable code with MVVM architecture and Provider for efficient state management; integrated RESTful APIs for real-time updates.",
        "Ensured version control with Git and maintained alignment with cross-functional teams to meet project goals and timelines.",
      ],
    },
    {
      role: "Flutter Developer",
      company: "Center For Excellence In Postal Technology",
      date: "Nov 2020 - June 2022",
      description: [
        "Designed responsive neuromorphic interfaces using Flutter Neumorphic, implementing clear visual hierarchy, adaptive UI scaling and accessibility-complaint contrast levels throughout the app.",
        "Developed features like tracking, post office search, financial calculations & offline capabilities.",
      ],
    },
    {
      role: "Android Application Developer",
      company: "Entity Vibes",
      date: "April 2018 - Oct 2020",
      description: [
        "Built custom UI, Implemented RESTful APIs and third-party libraries(Volley) to enhance application functionality.",
        "Git Retrofit Volley Rest APIs Dart JAVA Firebase Mixpannel",
      ],
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    "FLutter",
    "Kotlin",
    "ReactJS",
    "Firebase",
    "GraphQl",
    "RESTApis",
    "State Management",
    "FlutterFlow",
  ];

  return (
    <section
      ref={ref}
      id='about'
      className='min-h-screen font-mono flex items-center justify-center py-20'
    >
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center'>
          About Me{" "}
        </h2>

        <div className='p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all'>
          <p className='text-gray-300 mb-5 text-xl text-center'>
            Passionate Developer with expertise in building mobile & web
            applications and creating innovative solutions
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
            <h3 className='text-2xl text-center font-bold mb-8'> 💼 Skills</h3>
            <div className='flex justify-center flex-wrap gap-2'>
              {skills.map((skill, index) => (
                <span
                  className='bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition'
                  key={index}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className='p-6 hover:-translate-y-1 transition-all'>
            <h3 className='text-2xl text-center font-bold mb-8'>
              📚 Education
            </h3>
            <ul className='pl-5 list-disc list-inside text-lg text-gray-300'>
              <li>
                <strong>
                  <em>B.E. in E&C (2014 - 2017)</em>
                </strong>
                <div className='text-gray-400'>
                  Ekalavya Institute of Technology (VTU)
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='p-6'>
          <h3 className='text-2xl text-center font-bold mb-12'>
            💻 Work Experience
          </h3>
          <div className='relative timeline-container'>
            <div className='timeline-line'></div>
            {workExperience.map((job, index) => (
              <div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? "timeline-item-left" : "timeline-item-right"} ${inView ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className='timeline-dot'></div>
                <div className='timeline-content bg-gray-800/20 p-6 rounded-lg shadow-lg border-white/10 border-2'>
                  <time className='text-sm text-gray-400'>{job.date}</time>
                  <h4 className='text-xl font-bold text-teal-400 my-2'>
                    {job.role}
                  </h4>
                  <h5 className='text-lg font-semibold mb-4'>{job.company}</h5>
                  <ul className='list-disc pl-5 space-y-2 text-gray-300'>
                    {job.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
