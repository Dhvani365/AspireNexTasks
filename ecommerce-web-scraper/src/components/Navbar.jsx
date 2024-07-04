import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import search from '../assets/icons/search.svg';
import blackHeart from '../assets/icons/black-heart.svg';
import user from '../assets/icons/user.svg';
import logo from '../assets/icons/logo.svg';
import './Navbar.css';

const navIcons = [
  { src: search, alt: 'search' },
  { src: blackHeart, alt: 'heart' },
  { src: user, alt: 'user' },
]

function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    // Creating A Navbar 
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 navbar`}
      style={{backgroundColor: "white"}}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          {/* Logo  */}
          <Link href="/" className="flex items-center gap-1">
          <img 
            src={logo}
            width={27}
            height={27}
            alt="logo"
          />

          <p className="nav-logo">
            Search<span className='text-primary'>Product</span>
          </p>
        </Link>
          {/* Nav icons  */}
          <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <img 
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain"
            />
          ))}
        </div>  
        </div>     
    </nav>
  )
}

export default Navbar