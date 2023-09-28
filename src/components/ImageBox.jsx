import img from '../assets/ankitsahu2.png'

function ImageBox() {
  return (
    <div className='relative w-full md:w-1/2 flex justify-center items-center pt-6 md:pt-0'>
      <div className='border w-[50vw] h-[50vw] md:w-[35vw] md:h-[35vw] lg:w-[25vw] lg:h-[25vw] rounded-imgBubble flex justify-center items-center bg-gradient-to-br from-[#fd3682] to-[#2a1cf7] animate-bubble transition-all'>
      </div>
      <div className='absolute bg-transparent'>
        <img src={img} alt="nothing" className='w-[50vw] h-[50vw] md:w-[35vw] md:h-[35vw] lg:w-[25vw] lg:h-[25vw] bg-transparent rounded-imgBubbleB animate-bubbleB transition-all' />
      </div>
    </div>  )
}

export default ImageBox