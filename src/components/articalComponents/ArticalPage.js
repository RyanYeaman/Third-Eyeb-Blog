import React from 'react'
import ArticalContainer from './ArticalContainer'

const ArticalPage = () => {
  return (
    <div className='artical-page'>
      <p className='about-title'>THIRD EYE</p>
      <ArticalContainer articalPostNumber='1' />
      <ArticalContainer articalPostNumber="2" />
      <ArticalContainer articalPostNumber="3" />
    </div>
  )
}

export default ArticalPage