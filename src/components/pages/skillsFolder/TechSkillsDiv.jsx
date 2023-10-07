import { TechSkill } from "./"

function TechSkillsDiv() {
  return (
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
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
    </div>
  )
}

export default TechSkillsDiv