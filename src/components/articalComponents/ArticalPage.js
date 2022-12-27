import React from 'react'
import ArticalContainer from './ArticalContainer'
import Navbar from '../navComponents/Navbar'

const ArticalPage = (props) => {
  return (
    <>
      <Navbar navStyle={props.navStyle} setNavStyle={props.setNavStyle} />
      <div className='artical-page'>
        <p className='about-title'>THIRD EYE</p>
        <ArticalContainer setNavStyle={props.setNavStyle} articalPostNumber='1' />
        <ArticalContainer articalPostNumber="2" />
        <ArticalContainer articalPostNumber="3" />
      </div>
    </>
  )
}

export default ArticalPage