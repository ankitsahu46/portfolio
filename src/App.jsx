import { Header, Main } from './components';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { set0, set1, set2, setTrue } from './features';
import './App.css';

function App() {
  //To create animations for pages
  const [active, setActive] = useState('home');

  const dispatch = useDispatch();

  useEffect(() => {
    var sections = document.querySelectorAll('section');
    var project0 = document.querySelector('#project0');
    var project1 = document.querySelector('#project1');
    var project2 = document.querySelector('#project2');
    var techSkills = document.querySelector('#techSkills')

    window.onscroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const project0Top = project0.offsetTop;
        const project1Top = project1.offsetTop;
        const project2Top = project2.offsetTop;
        const techSkillsTop = techSkills.offsetTop;

        if (window.scrollY >= sectionTop - 60) {
          setActive(section.getAttribute("id"));
        }
        if (section.getAttribute('id') === 'projects') {
          let scroll = window.scrollY + window.innerHeight - 100;

          if (scroll >= project0Top) dispatch(set0(true));
          if (scroll >= project1Top) dispatch(set1(true));
          if (scroll >= project2Top) dispatch(set2(true));
        }
        if (section.getAttribute('id') === 'skills') {
          let scroll = window.scrollY + window.innerHeight - 200;
          if (scroll >= techSkillsTop) dispatch(setTrue());
        }
      });
    };
  }, [])

  return (
    <>
      <div className='w-full max-w-[100vw] h-[100vh] '>
        <Header active={active} setActive={setActive} />
        <Main />
      </div>
    </>
  )
}

export default App
