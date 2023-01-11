import React from 'react'
import Navbar from '../navComponents/Navbar'
import ResponsiveNavbar from '../navComponents/ResponsiveNavbar'
import BlogPostImgTemp from '../assetsComponents/BlogPostImgTemp'

const BlogPost1 = (props) => {
    return (
        <>
            <Navbar navStyle={props.navStyle} setNavStyle={props.setNavStyle} />
            <div className='blog-post-1'>
                <BlogPostImgTemp />
                <div className='blog-container'>
                    <div className='blog-content'>
                        <div className='blog-content-container'>
                            <h1 className='blog-title'>Take More Control of Your Life <br></br>Chapter #1</h1>
                            <p className='blog-paragraph'>Hey! My name is Ryan, and welcome to my blog.<br /><br />Before we begin the first chapter of the Third Eye Blog, I want to thank you for taking the time to read Chapter 1 on the Third Eye Blog. In this chapter, I wanted to express my thoughts and give advice for taking more control of your life. What do I mean by taking more control of your life? What do I mean by "taking more control"? I’m talking about taking action and getting the most out of what life can offer. To begin the discussion, I wanted to share my theory on why being too comfortable is holding people back. Comfortability can be addicting because when we have too much comfort in our current situation, it can be detrimental to the mental drive that allows us to pursue our dreams. But what exactly do I mean by being comfortable, you might have wondered. I'm referring to someone accepting a circumstance that does not correspond with their previously thought-out aspirations and dreams, And in doing so, this will ensure one thing in your life, regret. Whether that job pays well or minimum wage, it still is not what we want to do with our lives, and chances are, if you are reading this right now, you have probably thought about this before, including me. You have to start getting comfortable with being uncomfortable. Chasing your dreams is not easy, and it never has been, especially when you are put in stressful or self-doubting situations. However, being someone who can sustain themself in an uncomfortable situation, will allow you to strive and push through the inevitable stress that comes with the journey of life, allowing you to achieve more and not give up on what you wanted in this lifetime. How do I get more comfortable with uncomfortable situations?</p>
                        </div>
                        <div className='scroll-indicator-container'>
                            <h1 className='scroll-indicator'>{"Scroll Down ->"}</h1>
                        </div>
                    </div>
                    <ResponsiveNavbar navStyle={props.navStyle} setNavStyle={props.setNavStyle} />
                </div>
            </div>
        </>
    )
}

export default BlogPost1