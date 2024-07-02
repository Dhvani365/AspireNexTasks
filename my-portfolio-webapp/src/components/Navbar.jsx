import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import './Navbar.css'
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    // Creating A Navbar 
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          {/* Logo  */}
          <Link to="/"
            className='flex items-center gap-2'
            onClick={()=>{setActive(""); window.scrollTo(0,0)}}           
          >
            <img src={logo} alt="can not display logo" className='w-9 h-9 object-contain' style={{borderRadius: "50%"}}/>
            <p className='text-white font-bold cursor-pointer'>Dhvani | <span className='sm:block hidden'>Maktuporia</span></p>
          </Link>
          {/* Nav Links  */}
          <ul className='list-none lg:gap-10 hidden sm:flex flex-row gap-10 md:flex flex-row gap-5'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[16px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>         

        {/* Responsive Navbar  */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle ? close : menu}
              alt="menu"
              className='w-[24px] h-[24px] object-container cursor-pointer'
              onClick={()=> setToggle(!toggle)}
            />

            {/* Display Responsive menu bar items  */}
            <div className={`${!toggle? 'hidden':'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[300px] z-10 rounded-xl`}>
                  {/* Nav Links  */}
                  <ul className='list-none flex justify-center items-center flex-col gap-6'>
                  {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className={`${
                        active === nav.title ? "text-white" : "text-secondary"
                      } font-poppins font-medium cursor-pointer text-[14px]`}
                      onClick={() =>{ setActive(nav.title); setToggle(!toggle)}}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                      <hr style={{minWidth: "250px", color:"gray"}}/>
                    </li>
                  ))}
                </ul>      
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar