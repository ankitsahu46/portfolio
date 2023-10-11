import Project from "./projectFolder/Project";

function Projects() {
  const projectInfo = [
    [
      'src/assets/LearningCafe.png',
      'Learning Cafe',
      'A platform for posting courses which are designed as per the industry demand with full Career Assistance.',
      'https://github.com/ankitsahu46/portfolio',
      'https://github.com/ankitsahu46/portfolio'
    ],
    [
      'src/assets/Hirely.png',
      'Hirely',
      'Hirely is a platform where condidadates can get hired by the recuiters from different upcoming startups.',
      'https://github.com/ankitsahu46/search-free-images',
      'https://github.com/ankitsahu46/search-free-images'
    ],
    [
      'src/assets/Formify.png',
      'Formify',
      'The fastest and the easiest to create forms and collect submissions on the internet.',
      'https://github.com/ankitsahu46/portfolio',
      'https://github.com/ankitsahu46/portfolio'
    ],
  ]

  return (
    <section id="projects" className="w-full lg:px-20 md:px-14 mb-10 sm:px-8 px-3 ">
      <h1 className="text-[40px] md:text-[45px] lg:text-[50px] text-white font-bold text-center ">Featured Projects</h1>
      {
        projectInfo.map((proj) => (
          <Project key={proj[1]} {...proj} />
        ))
      }
    </section>
  )
}

export default Projects