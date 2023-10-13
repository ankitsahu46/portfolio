import Project from "./projectFolder/Project";

function Projects() {
  const projectInfo = [
    [
      'src/assets/LearningCafe.png',
      'Learning Cafe',
      'A platform for posting courses which are designed as per the industry demand with full Career Assistance.',
      'https://github.com/ankitsahu46/portfolio',
      'https://github.com/ankitsahu46/portfolio'
    ],
    [
      'src/assets/Hirely.png',
      'Hirely',
      'Hirely is a platform where condidadates can get hired by the recuiters from different upcoming startups.',
      'https://github.com/ankitsahu46/search-free-images',
      'https://github.com/ankitsahu46/search-free-images'
    ],
    [
      'src/assets/Formify.png',
      'Formify',
      'The fastest and the easiest to create forms and collect submissions on the internet.',
      'https://github.com/ankitsahu46/portfolio',
      'https://github.com/ankitsahu46/portfolio'
    ],
  ]

  return (
    <section id="projects" className="w-full lg:px-20 md:px-14 mb-10 sm:px-8 px-3 ">
      <h1 className="text-[40px] md:text-[45px] lg:text-[50px] text-white font-bold text-center ">Featured Projects</h1>
      {
        projectInfo.map((proj, i) => (
          <Project key={proj[1]} id={`project${i}`} i={i} {...proj} />
        ))
      }
    </section>
  )
}

export default Projects


// import { useState, useEffect } from "react";
// import Project from "./projectFolder/Project";

// function Projects() {
//   const projectInfo = [
//     [
//       'src/assets/LearningCafe.png',
//       'Learning Cafe',
//       'A platform for posting courses which are designed as per the industry demand with full Career Assistance.',
//       'https://github.com/ankitsahu46/portfolio',
//       'https://github.com/ankitsahu46/portfolio'
//     ],
//     [
//       'src/assets/Hirely.png',
//       'Hirely',
//       'Hirely is a platform where condidadates can get hired by the recuiters from different upcoming startups.',
//       'https://github.com/ankitsahu46/search-free-images',
//       'https://github.com/ankitsahu46/search-free-images'
//     ],
//     [
//       'src/assets/Formify.png',
//       'Formify',
//       'The fastest and the easiest to create forms and collect submissions on the internet.',
//       'https://github.com/ankitsahu46/portfolio',
//       'https://github.com/ankitsahu46/portfolio'
//     ],
//   ]


//   const [projNum, setProjNum] = useState("no");
//     var observer = new IntersectionObserver(onIntersection, {
//       root: null,   // default is the viewport
//       threshold: .5 // percentage of target's visible area. Triggers "onIntersection"
//     })
    
//     // callback is called on intersection change
//     function onIntersection(entries){
//       console.log(entries);
//       entries.forEach(entry => {
//         console.log('chal'); 
//         console.log(entry.target.id); 
//         setProjNum(entry.target.id);
//       }
//       )
//     }
    
//     useEffect(() => {
//     // Use the observer to observe an element
//     observer.observe(document.querySelector('#a'))
//     observer.observe(document.querySelector('#aa'))
//     observer.observe(document.querySelector('#aaa'))
//     console.log(document.querySelector('.proj'));
//   }, [projNum])

//   return (
//     <section id="projects" className="w-full lg:px-20 md:px-14 mb-10 sm:px-8 px-3 ">
//       <h1 className="text-[40px] md:text-[45px] lg:text-[50px] text-white font-bold text-center ">Featured Projects</h1>
//       <Project id="a" projNum={projNum == 
//       "a"} {...projectInfo[0]} />
//       <Project id="aa" projNum={projNum == "aa"} {...projectInfo[1]} />
//       <Project id="aaa" projNum={projNum == "aaa"} {...projectInfo[2]} />
//     </section>
//   )
// }

// export default Projects