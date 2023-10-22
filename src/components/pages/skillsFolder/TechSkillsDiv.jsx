import { TechSkill } from "./";
import { techSkillsData } from '../../../constants';

function TechSkillsDiv() {

  return (
    <div id='techSkills' className="w-full md:w-3/5 flex flex-col items-center justify-center">
      <h2 >Technical Skills</h2>
      <div className="mt-8 grid grid-cols-3 xs:grid-cols-4 gap-x-9 gap-y-4 justify-center items-center">
        {
          techSkillsData.map(([skill, src]) => (
            <TechSkill key={skill} skillName={skill} img={src} />
          ))
        }
      </div>
    </div>
  )
}

export default TechSkillsDiv