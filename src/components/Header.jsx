import { useEffect, useState } from "react";
import { Nav } from './';

function Header() {
  const [active, setActive] = useState('home');
  let state = {
    active,
    setActive
  }

  useEffect(() => {
    var sections = document.querySelectorAll('section');

    window.onscroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 60) {
          setActive(section.getAttribute("id"));
          console.log(active);
        }
      });
    };
  }, [])

  return (
    <>
      <header className="fixed top-0 z-10 w-full h-[56px] flex justify-between items-center px-6 py-1 text-base text-white shadow-lg ">
        <div className="font-bold text-2xl flex justify-center items-center">
          Portfolio
        </div>
        <nav className="flex items-center justify-center font-medium [&>*:not(:first-child)]:ml-2">
          {
            ['Home', 'About', 'Skills', 'Projects', 'Contact']
              .map((nav) => (
                <Nav key={nav} navName={nav} {...state} />
              ))
          }
        </nav>
      </header>
    </>
  )
}

export default Header;