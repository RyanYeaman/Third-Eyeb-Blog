import React from 'react'
import AboutContactTemp from '../assetsComponents/AboutContactTemp'
import IconContainer from '../assetsComponents/IconContainer'
import ResponsiveNavbar from '../navComponents/ResponsiveNavbar'
import Navbar from "../navComponents/Navbar"

const contactPage = (props) => {
    return (
        <>
            <Navbar navStyle={props.navStyle} setNavStyle={props.setNavStyle} />
            <div className='about-contact-page'>
                <AboutContactTemp />
                <div className='contact-container'>
                    <div className='contact-content'>
                        <p className='contact-title'>Contact</p>
                        <p className='contact-summary'>If you have any questions. please feel  free to send me an email. I’ll get back to you as soon as I can!</p>
                        <p className='contact-summary'><b>Email:</b> ryan.northern.dev@gmail.com</p>
                        <div>
                            <p className='contact-summary'><b>Social Media:</b></p>
                            <IconContainer />
                        </div>
                    </div>
                    <ResponsiveNavbar navStyle={props.navStyle} setNavStyle={props.setNavStyle}/>
                </div>
            </div>
        </>
    )
}

export default contactPage