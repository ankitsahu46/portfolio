import { ProfSkillsDiv, TechSkillsDiv } from "./skillsFolder"

function Skills() {
  return (
    <section id='skills' className="w-full lg:px-20 md:px-14 sm:px-8 flex flex-col mb-16 px-3 text-white">
      <h1 className="text-[40px] md:text-[45px] lg:text-[50px] text-white font-bold text-center ">Skills</h1>

      <div className="flex flex-col md:flex-row justify-center mt-16 font-medium">
        <TechSkillsDiv />
        <ProfSkillsDiv />
      </div>
    </section>
  )
}

export default Skills