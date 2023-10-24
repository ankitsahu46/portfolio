/* eslint-disable react/prop-types */

function SocialMediaIcons({ img, url, position }) {
  return (
    <>
      <a href={url} target='_blank' rel='noreferrer'>
        <div className={`absolute flex justify-center items-center ${position} w-[50px] h-[50px] md:w-[70px] md:h-[70px] bg-[#dccefa] rounded-[50%] hover:scale-105  animate-appear transition-all select-none`}>
          <div className=" flex justify-center items-center w-[40px] h-[40px] md:w-[55px] md:h-[55px] bg-white rounded-[50%] animate-appear2 transition-all">
            <img src={img} alt="mediaIcon" className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] rounded-sm bg-transparent animate-appear3 transition-all"/>
          </div>
        </div>
      </a>
    </>
  )
}

export default SocialMediaIcons