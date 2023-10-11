/* eslint-disable react/prop-types */

function TechSkill({ img, skillName }) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex justify-center items-center w-16 h-16 min-w-[50px] min-h-[50px] bg-white rounded-[50%] animate-appear">
        <img src={img} alt="mediaIcon" className="w-8 h-8 min-w-[28px] min-h-[28px] rounded-sm bg-transparent opacity-100" />
      </div>
      <p className='text-[10px] mt-1'>{skillName}</p>
    </div>
  )
}

export default TechSkill