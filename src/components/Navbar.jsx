import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo coil.png'
import{links} from '../data'
import {VscThreeBars} from 'react-icons/vsc'
import {MdOutlineClose} from 'react-icons/md'
import './navbar.css'   



const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);


  return (
   <nav>
    <div className="container nav__container">
       <Link to="/" className='logo' >
        <img src={Logo} alt="CoilSkin" />
       </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
            {
                links.map(({name, path}, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}>{name}</NavLink>
                        </li>
                    )
                })
            }
        </ul>
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
            {
                isNavShowing ? <MdOutlineClose /> : <VscThreeBars />
            }
        </button>
    </div>
   </nav>
  )
}

export default Navbar