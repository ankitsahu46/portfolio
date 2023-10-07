import { ProfSkill } from "./"

function ProfSkillsDiv() {
  return (
    <div className="w-full md:w-2/5 flex flex-col items-center mt-14 md:mt-0">
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
    </div>
  )
}

export default ProfSkillsDiv