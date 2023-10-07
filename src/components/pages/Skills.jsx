import { ProfSkillsDiv, TechSkillsDiv } from "./skillsFolder"

function Skills() {
  return (
    <section id='skills' className="w-full lg:px-20 md:px-14 sm:px-8 flex flex-col mb-16 md:mb-16 px-3 text-white">
  
      <h1 className="text-[40px] md:text-[45px] lg:text-[50px] text-white font-bold text-center ">Skills</h1>

      <div className="flex flex-col md:flex-row justify-center mt-16 font-medium">
        <TechSkillsDiv />
        <ProfSkillsDiv />
        {/* <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <h2 >Technical Skills</h2>
          <div className="mt-8 grid grid-cols-3 xs:grid-cols-4 gap-x-9 gap-y-4 justify-center items-center">
            {
              [
                ['HTML5', 'src/assets/html5.svg'],
                ['CSS3', 'src/assets/css3.svg'],
                ['JavaScript', 'src/assets/javascript.svg'],
                ['React.js', 'src/assets/react.svg'],
                ['Redux', 'src/assets/redux.svg'],
                ['Node.js', 'src/assets/nodejs.svg'],
                ['Express.js', 'src/assets/expressjs.svg'],
                ['MongoDB', 'src/assets/mongodb.svg'],
                ['Tailwind', 'src/assets/tailwindcss.svg'],
                ['Git', 'src/assets/git.svg'],
                ['Postman', 'src/assets/postman.svg'],
                ['ES6', 'src/assets/es6.svg'],
                ['Bootstrap', 'src/assets/bootstrap.svg'],
                ['C++', 'src/assets/cpp.svg'],
              ].map(([skill, src]) => (
                <TechSkill key={skill} skillName={skill} img={src} />
              ))
            }
          </div>
        </div> */}

        {/* <div className="w-full md:w-1/2 flex flex-col items-center mt-14 md:mt-0">
          <h2>Soft Skills</h2>
          <div className="mt-8 grid grid-cols-2 gap-x-14 gap-y-6 ">
            {
              [
                ['Team Work', '86%'],
                ['Self Motivated', '90%'],
                ['Communication', '75%'],
                ['Fast Learner', '70%'],
              ]
              .map(([skill, percent]) => (
                <ProfSkill key={skill} skillName={skill} percent={percent} />
              ))
            }
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Skills