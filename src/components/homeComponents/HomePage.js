import React from 'react';
import NewsLetterForm from '../assetsComponents/NewsLetterForm';
import Navbar from '../navComponents/Navbar';

const HomeIntroduction = (props) => {
  return (
    <>
      <Navbar navStyle={props.navStyle} setNavStyle={props.setNavStyle}/>
      <div className='home-page'>
        <div className='home-introduction-container'>
          <div className='home-introduction-content'>
            <h5 className='home-introduction-title'>THIRD EYE</h5>
            <p className='home-introduction-slogan'>The Blog of Motivation</p>
            <p className='home-introduction-summary'>Join my newsletter for exclusive Third Eye content that will help you succed.</p>
            <NewsLetterForm />
          </div>
          <div className='home-introduction-img-container'>
            <img className='home-introduction-img' src='./images/computer-pic.jpg' alt='' />
          </div>
        </div>

        <div className='home-about'>
          <div className='home-about-img'>
            <img className='home-display-img1' src='./images/About-Img.png' alt='' />
          </div>
          <div className='home-about-content'>
            <h1 className='home-about-title'>
              Showing People They Can Live Any Life They Desire.
            </h1>
            <p className='home-about-summary'>
              A lot of people struggle with following their dreams & passions, especially when you having “role models” that guide you the wrong way. Trust me I know how this feels, it sucks. luckly for me I was able to break out of my “poor-minded” shell and start doing exacly what I wanted to do with my life, I didn’t care if my perants or friends thought the idea was bad.
              I just wanted to start doing what made me happy, in my case this what software development & competing in muay thai. With the advice given from this blog you’ll learn how to over come that stigma of not following what societys “script” and go make a life of your own.

            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeIntroduction