/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';

function Project({ id, i, ...props}) {
  const img = props[0];
  const name = props[1];
  const desc = props[2];
  const code = props[3];
  const live = props[4];
  const animateProject = useSelector(state => state.animateProject.value);

  return (
    <div id={id} className={`proj flex flex-col md:flex-row justify-center items-center mt-16 font-medium [&>*]:flex-1 px-10`}>
      <div className="w-4/5 h-auto flex justify-start  hover:scale-[0.98] transition-all  relative group items-stretch">
        <img src={img} alt="project image" className={`rounded-lg ${animateProject[i] ? 'w-full' : 'w-1'} h-full min-h-[170px] transition-all duration-700`} />
      
        <div className=" absolute item bg-transparent w-full h-full">
          <div className="opacity-0 group-hover:opacity-100 absolute w-[75px] h-8 right-2 top-2 border-[1px] border-gray-400  bg-white rounded-full cursor-pointer shadow-lg transition-all duration-500">
            <a href={code} target='_black'>
              <img src="src/assets/gitHub.svg" alt="GitHub" className="bg-transparent p-1 -top-[1px] absolute hover:scale-[0.95]" />
            </a>
            <a href={live} target='_black'>
              <img src='src/assets/arrow.svg' alt='arrow' className="bg-transparent  hover:-rotate-45 transition-all absolute left-10 top-1" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-white flex flex-col text-start w-4/5 pt-3 md:pl-9">
        <h1 className="text-2xl lg:text-3xl font-bold cursor-pointer">
          {name}
        </h1>
        <p className="pt-2 opacity-90 font-light md:pt-0 ">
          {desc}
        </p>
      </div>
    </div>
  )
}

export default Project