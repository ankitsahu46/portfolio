
/* eslint-disable react/prop-types */
function Nav({ navName, i, active, setActive }) {
  const nav = navName.toLowerCase();
  
  return (
    <div
      className={`h-7 flex justify-center items-center animate-translateDown animation-delay-${i}`}
      onClick={() =>  setActive(nav)}
    >
      <a href={`#${nav}`}
        className={`${active === nav && 'text-[#69ffff]'} w-26 h-9 px-1 hover:text-[#69ffff] transition-all flex justify-center items-center ${nav}`}
      >
        {navName}
      </a>
    </div>
  )
}

export default Nav




// function Nav({ navName, i, active, setActive }) {
  
//   const nav = navName.toLowerCase();
//   const el = document.getElementById(nav);

//   return (
//     <div
//       className={`h-7 flex justify-center items-center animate-translateDown animation-delay-${i}`}
//       onClick={() => { setActive(nav); el.scrollIntoView();}}
//     >
//       <div 
//         className={`${active === nav && 'text-[#69ffff]'} w-26 h-9 px-1 hover:text-[#69ffff] transition-all flex justify-center items-center ${nav}`}
//       >
//         {navName}
//       </div>
//     </div>
//   )
// }

// export default Nav