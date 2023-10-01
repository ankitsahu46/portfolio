import { Intro, ImageBox } from "./homeFolder"

function Home() {
  return (
    <>
      <section id='home' className="lg:mx-20 md:mx-14 sm:mx-8 mb-16">
        <div className='w-full pt-8 h-10'>
          <span className='float-right text-white font-medium before:content-["––––"] mr-2 text-sm sm:text-base md:text-lg lg:text-xl'><span className='ml-2'>Available For Work</span></span>
        </div>

        <div className='text-white flex flex-col-reverse md:flex-row w-full pt-5 md:pt-24'>
          <Intro />
          <ImageBox />
        </div>
      </section>
    </>
  )
}

export default Home