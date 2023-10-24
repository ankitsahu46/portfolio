/* eslint-disable react/no-unescaped-entities */
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

function Intro() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Developer', 'Front-End Developer', 'Back-End Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [])

  return (
    <div className='w-full md:w-[50%] flex justify-center  items-start mt-16 md:mt-0 md:items-center md:justify-start min-h-[60px] '>
      <div>
        <div className='animate-translateLeft'>
          <span className='text-[40px] md:text-[45px] lg:text-[60px] font-bold text-center flex justify-center '>
            <span className='absolute text-[#c8afff] textShadow scale-[1.005] '>Hello! I'm Ankit</span>
            <span className='relative bg-transparent text-[var(--blue)]'>Hello! I'm Ankit</span>
          </span>
        </div>
        <p className='font-bold text-base sm:text-lg md:text-xl xl:text-2xl animate-translateRight'>I'm a <span ref={el} /></p>
      </div>
    </div>
  )
}

export default Intro