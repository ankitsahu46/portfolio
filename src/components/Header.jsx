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
        }
      });
    };
  }, [])

  return (
    <>
      <header className="fixed top-0 z-10 w-full h-[56px] flex justify-between items-center px-6 py-1 text-base text-white shadow-lg ">
        <a href="#">
          <div className="font-bold text-3xl flex justify-center items-center animate-translateRight">
            <span>AN</span>
            <span className="font-outline-white-2 text-transparent ">KIT</span>
          </div>
        </a>
        <nav className={`flex items-center justify-center font-medium [&>*:not(:first-child)]:ml-2 `}>
          {
            ['Home', 'About', 'Skills', 'Projects', 'Contact']
              .map((nav, i) => (
                <Nav key={nav} navName={nav} i={i} {...state} />
              ))
          }
          {/* <Nav key="Home" navName="Home" i={0} {...state} />
          <Nav key="About" navName="About" i={1} {...state} />
          <Nav key="Skills" navName="Skills" i={2} {...state} />
          <Nav key="Projects" navName="Projects" i={3} {...state} />
          <Nav key="Contact" navName="Contact" i={4} {...state} /> */}

        </nav>
      </header>
    </>
  )
}

export default Header;