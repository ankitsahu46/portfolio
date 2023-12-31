/* eslint-disable react/prop-types */
import { Nav } from './';

function Header({ active, setActive }) {
  let state = {
    active,
    setActive
  }

  return (
    <>
      <header className="fixed top-0 z-10 w-full h-[56px] flex justify-between items-center px-6 py-1 text-base text-white shadow-lg ">
        <a href="#">
          <div className="font-bold text-3xl flex justify-center items-center animate-translateRight">
            <span>AN</span>
            <span>
              <span className='absolute text-[#e4dbf7] textShadow'>KIT</span>
              <span className='relative bg-transparent text-[var(--blue)] scale-[0.995]'>KIT</span>
            </span>
          </div>

        </a>
        <nav className={`flex items-center justify-center font-medium [&>*:not(:first-child)]:ml-2 `}>
          {
            ['Home', 'About', 'Skills', 'Projects', 'Contact']
              .map((nav, i) => (
                <Nav key={nav} navName={nav} i={i} {...state} />
              ))
          }
        </nav>
      </header>
    </>
  )
}

export default Header;