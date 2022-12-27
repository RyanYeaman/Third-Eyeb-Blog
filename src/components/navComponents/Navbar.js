import React from 'react'
import TopNewsletterBar from './TopNewsletterBar'
import NavigationBar from './NavigationBar'

const Navbar = (props) => {
  return (
    <>
      <TopNewsletterBar />
      <NavigationBar navStyle={props.navStyle} setNavStyle={props.setNavStyle}/>
    </>
  )
}

export default Navbar