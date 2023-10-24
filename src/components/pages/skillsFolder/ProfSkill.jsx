/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';

function ProfSkill({ skillName, percent }) {
  const animateSkills = useSelector(state => state.animateSkills.value);
  return (
    <>
      <div>
        <div className={`percent${percent} flex justify-center items-center w-16 h-16 text-blue-800 font-bold text-center rounded-full ${animateSkills && 'animate-appearSkill'} shadow-2xl`}>
          <div className='flex justify-center items-center bg-white w-14 h-14 min-w-[45px] min-h-[45px] rounded-full'>
            {percent}%
          </div>
          </div>
        <p className='text-[10px] mt-1 text-center'>{skillName}</p>
      </div>
    </>
  )
}

export default ProfSkill