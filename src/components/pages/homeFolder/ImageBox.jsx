import { SocialMediaIcons } from "."

function ImageBox() {
  return (
    <div className=' w-full md:w-1/2 flex justify-center items-center pt-6 md:pt-0'>
      <div className=' w-[50vw] h-[50vw] sm:w-[45vw] sm:h-[45vw] md:w-[30vw] md:h-[30vw] lg:w-[25vw] lg:h-[25vw] rounded-imgBubble flex justify-center items-center bg-gradient-to-br from-[#fd3682] to-[#2a1cf7] animate-bubble transition-all border'>
        <div className='relative w-full h-full rounded-imgBubbleB animate-bubble transition-all bg-[url("src/assets/ankitsahu.png")] bg-cover bg-transparent '>
          <SocialMediaIcons
            url="src/assets/gitHub.svg"
            position={'left-[100%] top-[0%]'} />
          <SocialMediaIcons
            url="src/assets/linkedinicon.png"
            position={'right-[90%] bottom-[100%]'} />
          <SocialMediaIcons
            url="src/assets/Instagram.png"
            position={'right-[105%] bottom-[-5%]'} />
        </div>
      </div>
    </div>)
}

export default ImageBox