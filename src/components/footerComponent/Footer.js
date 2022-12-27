import React from 'react'
import NewsLetterForm from '../assetsComponents/NewsLetterForm';
import NavUnderline from '../assetsComponents/NavUnderline';
import IconContainer from '../assetsComponents/IconContainer';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-socials'>
                    <h1 className='footer-socials-title'>Wan't to See More</h1>
                    <p className='footer-socials-summary'>Check Out my Socials</p>
                    <NewsLetterForm />
                    <IconContainer />
                </div>
                <div className="footer-navbar">
                    <h1 className='footer-navbar-title'>Resources</h1>
                    <ul className='footer-nav-list'>
                        <li>
                            <Link to='/' className='home'>Home</Link>
                            <NavUnderline />
                        </li>
                        <li>
                            <Link to='/articals' className='artical'>Artical</Link>
                            <NavUnderline />
                        </li>
                        <li>
                            <Link to='/about' className='about'>About</Link>
                            <NavUnderline />
                        </li>
                        <li>
                            <Link to='/contact' className='contact'>Contact</Link>
                            <NavUnderline />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer