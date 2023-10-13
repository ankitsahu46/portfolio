/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';

function TechSkill({ img, skillName }) {
  const animateSkills = useSelector(state => state.animateSkills.value)
  
  return (
    <div className="flex flex-col justify-center items-center min-w-[4rem] min-h-[4rem]">

      <div className={`flex justify-center items-center  bg-white rounded-[50%] ${animateSkills ? 'w-16 h-16 min-w-[50px] min-h-[50px] animate-appearSkill' : 'max-w-0 max-h-0'}`}>

        <img src={img} alt="skill" className={`${animateSkills ? 'w-8 h-8 min-w-[28px] min-h-[28px]' : 'max-w-0 max-h-0'} rounded-sm bg-transparent opacity-100`} />

      </div>

      <p className='text-[10px] mt-1'>{skillName}</p>
    </div>
  )
}

export default TechSkill