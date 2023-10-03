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
        <span className='text-[40px] md:text-[45px] lg:text-[60px] text-transparent font-outline-2 font-bold text-center '>Hello! I'm <span>Ankit</span></span>
        <p className='font-bold text-base sm:text-lg md:text-xl xl:text-2xl'>I'm a <span ref={el} /></p>
      </div>
    </div>
  )
}

export default Intro