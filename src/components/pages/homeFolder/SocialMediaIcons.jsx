/* eslint-disable react/prop-types */

function SocialMediaIcons({ url, position }) {
  return (
    <>
      <a href='https://instagram.com/mister_2.0?igshid=NGVhN2U2NjQ0Yg==' target='_blank' rel='noreferrer'>
        <div className={`absolute flex justify-center items-center ${position} w-[70px] h-[70px] bg-[#dccefa] rounded-[50%] hover:scale-105 transition-all`}>
          <div className="flex justify-center items-center w-[55px] h-[55px] bg-white rounded-[50%] ">
            {/* <div className={`w-[25px] h-[25px]  bg-transparent flex justify-center items-center`}> */}
              <img src={url} alt="mediaIcon" className="w-[22px] h-[22px] rounded-sm bg-transparent" />
            {/* </div> */}
          </div>
        </div>
      </a>
    </>
  )
}

export default SocialMediaIcons