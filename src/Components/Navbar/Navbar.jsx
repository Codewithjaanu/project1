import React, { useEffect, useState } from "react";
import './Navbar.css'
import logo from '../../Img/logo.png'
import { Link } from 'react-scroll';
import menu_icon from '../../Img/menu-icon.png'
function Navbar() {

    const [sticky, setsticky] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 550 ? setsticky(true) : setsticky(false);
        })
    }, []);

    const [moileMenu,setMobileMenu]=useState(false)

    const toggleMenu=()=>{
        moileMenu?setMobileMenu(false):setMobileMenu(true)
    }

    return (
        <>
            <nav className={`container ${sticky ? 'dark-nav':''}`}>
                <img src={logo} alt="" className="logo" />
                <ul className={moileMenu?'':'hide-mobile-menu'}>
                    <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                    <li><Link to='program' smooth={true} offset={-26} duration={500}>Program</Link></li>
                    <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
                    <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
                    <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                    <li><Link to='testimonials' smooth={true} offset={-260} duration={500} className="btn">Contact us</Link></li>
            
                </ul>
                <img src={menu_icon} className="menu-icon" onClick={toggleMenu}/>
            </nav>
        </>
    )
}
export { Navbar }