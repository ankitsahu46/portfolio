import { TechSkill } from "./";
import { html5, css3, javascript, react, redux, nodejs, expressjs, mongodb, tailwindcss, git, postman, es6, bootstrap, cpp } from '../../../assets';

function TechSkillsDiv() {

  return (
    <div id='techSkills' className="w-full md:w-3/5 flex flex-col items-center justify-center">
      <h2 >Technical Skills</h2>
      <div className="mt-8 grid grid-cols-3 xs:grid-cols-4 gap-x-9 gap-y-4 justify-center items-center">
        {
          [
            ["HTML5", html5],
            ["CSS3", css3],
            ["JavaScript", javascript],
            ["React.js", react],
            ["Redux", redux],
            ["Node.js", nodejs],
            ["Express.js", expressjs],
            ["MongoDB", mongodb],
            ["Tailwind", tailwindcss],
            ["Git", git],
            ["Postman", postman],
            ["ES6", es6],
            ["Bootstrap", bootstrap],
            ["C++", cpp]
          ].map(([skill, src]) => (
            <TechSkill key={skill} skillName={skill} img={src} />
          ))
        }
      </div>
    </div>
  )
}

export default TechSkillsDiv