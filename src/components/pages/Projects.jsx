import Project from "./projectFolder/Project";
import projectInfo from '../../constants/projectInfo.json';
import { ImageHubImg, MusifyImg, SociofyImg } from '../../assets'

function Projects() {
  const projImg = [SociofyImg, ImageHubImg, MusifyImg];

  return (
    <section id="projects" className="w-full lg:px-20 md:px-14 mb-10 sm:px-8 px-3 ">
      <h1 className="text-[40px] md:text-[45px] lg:text-[50px] text-white font-bold text-center ">Featured Projects</h1>
      {
        projectInfo.map((proj, i) => (
          <Project key={proj[0]} i={i} img={projImg[i]} {...proj} />
        ))
      }
    </section>
  )
}

export default Projects