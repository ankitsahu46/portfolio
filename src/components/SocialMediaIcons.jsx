/* eslint-disable react/prop-types */

function SocialMediaIcons({ url, position }) {
  return (
    <>
    <div className={`absolute flex justify-center items-center ${position} w-[70px] h-[70px] bg-[#dccefa] rounded-[50%]`}>
        <div className="flex justify-center items-center w-[55px] h-[55px] bg-white rounded-[50%] ">
          {/* <div className={`w-[25px] h-[25px] bg-[url('${url}')] bg-cover bg-transparent`}>

          </div> */}
          <div className={`w-[25px] h-[25px] bg-transparent flex justify-center items-center`}>
          <img src={url} alt="" className="w-[22px] h-[22px] rounded-sm bg-transparent"/>

          </div>
        </div>
      </div>
          </>
  )
}

export default SocialMediaIcons