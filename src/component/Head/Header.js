import React, { useState } from "react"
import "./header.css"
import logo from "../pic/logo.png"

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <img className="ap" src={logo} alt='' />
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>

              <li>
                <a href='#home'>home</a>
              </li>

              <li>
                <a href='#portfolio'>portfolio</a>
              </li>


              <li>
                <a href='#blog'>blog</a>
              </li>
              <li>
                <a href='#contact'>contact</a>
              </li>

            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
// import React from "react";
// import logo from '../pic/logo.png'
// const Navbar = () => {
//   return (
//     <div>
//       <div className="navbar">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               <li className="font-semibold">
//                 <a href="/">Home</a>
//               </li>
//               <li className="font-semibold" tabIndex={0}>
//                 <a href="#contact" className="justify-between">Contact Me</a>
//               </li>
//               <li className="font-semibold">
//                 <a className="font-semibold">Skill</a>
//               </li>
//               <li className="font-semibold">
//                 <a href="project">Project</a>
//               </li>
//               <li className="font-semibold">
//                 <a href="#blog">Blog</a>
//               </li>
//             </ul>
//           </div>
//           <a  className="btn btn-ghost normal-case text-xl">
//             <img className="w-[120px]" src={logo} alt="" />
//           </a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             <li className="font-semibold">
//               <a>Home</a>
//             </li>
//             <li className="font-semibold" tabIndex={0}>
//               <a href="#contact" className="#contact">Contact Me</a>
//             </li>
//             <li className="font-semibold">
//               <a>Skill</a>
//             </li>
//             <li className="font-semibold">
//               <a>Project</a>
//             </li>
//             <li className="font-semibold">
//               <a href="#blog">blog</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

