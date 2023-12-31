import React, { useState, useEffect } from 'react'
import logo from '../assets/gomaxoo-logo.png'
import { FaXmark, FaBars } from "react-icons/fa6";


import { Link } from 'react-scroll'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    // Set toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, [])


    const navitems = [
        { link: 'Home', path: 'home' },
        { link: 'Service', path: 'service' },
        { link: 'About', path: 'about' },
        { link: 'Product', path: 'product' },
        { link: 'Testimonial', path: 'testimonial' },
        { link: 'FAQ', path: 'faq' },
    ]
    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0  right-0 border-b bg-white duration-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href="/" className='space-x-3'><img src={logo} alt="" className='bg-black h-10 w-35 rounded' /></a>
                    {/* nav for large device  */}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navitems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-grey900 hover:text-brandPrimary first:font-medium cursor-pointer'>{link}</Link>)
                        }
                    </ul>
                    {/* btn for large device  */}

                    <div className='space-x-12 hidden lg:flex items-center'>
                        <a href="" className='hidden lg:flex items-center text-brandPrimary'>Login</a>
                        <button className='bg-brandPrimary text-black py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey hover:text-white'>Sign up</button>
                    </div>
                    {/* Mobile Device  */}

                    <div className='md:hidden'>
                        <button
                            onClick={toggleMenu}>
                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6 text-neutralDGrey' />) : (<FaBars className='h-6 w-6' />)
                            }
                        </button>
                    </div>
                </div>

                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navitems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-grey900 hover:text-black
                    first:font-medium cursor-pointer'>{link}</Link>)
                    }

                </div>
            </nav>
        </header>
    )
}

export default Navbar
