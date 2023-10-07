/* eslint-disable react/prop-types */

function ProfSkill({ skillName, percent }) {
  return (
    <>
      <div>
        <div className="flex justify-center items-center w-16 h-16 min-w-[50px] min-h-[50px] bg-white text-black font-bold text-center border-[3px] border-blue-500 shadow-lg rounded-[50%] ">
          {percent}</div>
        <p className='text-[10px] mt-1 text-center'>{skillName}</p>
      </div>
    </>
  )
}

export default ProfSkill