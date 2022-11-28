import React from 'react'
import NewsLetterForm from '../assetsComponents/NewsLetterForm'

const TopNewsletterBar = () => {
  return (
    <div className='newsletter-bar'>
        <div className='newsletter-bar-container'>
          <p className='newsletter-bar-paragraph'>Start making better choices with The Third Eye Newsletter.</p>
          <NewsLetterForm />
        </div>
    </div>
  )
}

export default TopNewsletterBar