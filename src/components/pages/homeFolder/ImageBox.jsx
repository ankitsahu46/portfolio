import { SocialMediaIcons } from ".";
import { ankit, gitHub, linkedinicon, x } from '../../../assets';

function ImageBox() {
  return (
    <div className=' w-full md:w-1/2 flex justify-center items-center pt-6 md:pt-0'>
      <div className=' w-[50vw] h-[50vw] sm:w-[45vw] sm:h-[45vw] md:w-[30vw] md:h-[30vw] lg:w-[25vw] lg:h-[25vw] rounded-imgBubble flex justify-center items-center animate-bubble transition-all '>
        <div className='relative w-full h-full'>
          <img src={ankit} className="overflow-hidden rounded-imgBubbleB animate-bubble transition-all border" />
          <SocialMediaIcons
            img={gitHub}
            url="https://github.com/ankitsahu46"
            position={'left-[100%] top-[0%]'} />
          <SocialMediaIcons
            img={linkedinicon}
            url="https://www.linkedin.com/in/ankit-sahu-680813280"
            position={'right-[90%] bottom-[100%]'} />
          <SocialMediaIcons
            img={x}
            url="https://twitter.com/ankitsahu4659"
            position={'right-[105%] bottom-[-5%]'} />
        </div>
      </div>
    </div>)
}

export default ImageBox