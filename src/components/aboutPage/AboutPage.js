import React from 'react'
import AboutContactTemp from '../assetsComponents/AboutContactTemp'
import ResponsiveNavbar from '../navComponents/ResponsiveNavbar'
import Navbar from "../navComponents/Navbar"

const AboutPage = (props) => {
    return (
        <>
            <Navbar navStyle={props.navStyle} setNavStyle={props.setNavStyle}/>
            <div className='about-contact-page'>
                <AboutContactTemp />
                <div className='about-container'>
                    <div className='about-content'>
                        <p className='about-title'>About Me</p>
                        <p className='about-paragraph'>Hey! My name is Ryan, and welcome to my blog.<br /><br />I developed the Third Eye blog to express my insight about the many misconceptions about being happy in today's society. For example, in a global poll, conducted by Gallup, out of 1 billion full-time workers, only 15% were satisfied with their jobs. In conclusion, the rest of the 85% of people aren't happy with their jobs. Why do so many people work jobs that bring no fulfilment? Cerear fulfilment is one of the many topics I write about on the Third Eye blog. But above all, everyone has their circumstances for being in the position their in today. People are stuck in these circumstances and don't know how to go on about making the life changes that are needed, or it could be that they are frightened to leave their comfort zone. That's why I want to share my insight in the hopes of helping people take their first step toward a life full of true happiness and fulfilment and stop living unfufilled lifes.</p>
                    </div>
                    <ResponsiveNavbar navStyle={props.navStyle} setNavStyle={props.setNavStyle}/>
                </div>
            </div>
        </>
    )
}

export default AboutPage