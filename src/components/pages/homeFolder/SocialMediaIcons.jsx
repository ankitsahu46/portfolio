/* eslint-disable react/prop-types */

function SocialMediaIcons({ img, url, position }) {
  return (
    <>
      <a href={url} target='_blank' rel='noreferrer'>
        <div className={`absolute flex justify-center items-center ${position} w-[70px] h-[70px] bg-[#dccefa] rounded-[50%] hover:scale-105  animate-appear transition-all`}>
          <div className=" flex justify-center items-center w-[55px] h-[55px] bg-white rounded-[50%] animate-appear2 transition-all">
            <img src={img} alt="mediaIcon" className="w-[22px] h-[22px] rounded-sm bg-transparent animate-appear3 transition-all"/>
          </div>
        </div>
      </a>
    </>
  )
}

export default SocialMediaIcons