import { useState } from "react";
import { Nav } from './';

function Header() {
  const [active, setActive] = useState('home');
  let state = {
    active,
    setActive
  }

  return (
    <>
      <header className="relative top-0 w-full h-[56px] flex justify-between items-center px-6 py-1 text-base text-white shadow-lg ">
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