import { Intro, ImageBox } from "./homeFolder"

function Home() {
  return (
    <>
      <section id='home' className="w-full lg:px-20 md:px-14 sm:px-8 mb-16 md:mb-24">
        <div className="pt-8">
          <div className='w-full animate-translateLeft'>
            <span className='float-right text-white font-medium before:content-["|"] pb-2 pr-9 sm:pr-2  text-sm sm:text-base md:text-lg'><span className='pl-2'>Available For Work</span></span>
          </div>

          <div className='text-white flex flex-col-reverse md:flex-row w-full pt-5 md:pt-24 '>
            <Intro />
            <ImageBox />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home