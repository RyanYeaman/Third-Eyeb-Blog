import React from 'react'
import NavUnderline from '../assetsComponents/NavUnderline'
import { Link } from "react-router-dom"

const ResponsiveNavbar = (props) => {
  return (
    <nav className='responsive-navbar'>
            <ul className='navbar-list'>
                <li className='items'>
                    <Link onClick={() => {props.setNavStyle('normalStyle')}} to='/' className='links'>Home</Link>
                    <NavUnderline />
                </li>
                <li className='items'>
                    <Link onClick={() => {props.setNavStyle('normalStyle')}} to='/articals' className='links'>Articals</Link>
                    <NavUnderline />
                </li>
                <li className='items'>
                    <Link onClick={() => {props.setNavStyle('changedStyle')}} to='/about' className='links'>About</Link>
                    <NavUnderline />
                </li>
                <li className='items'>
                    <Link onClick={() => {props.setNavStyle('changedStyle')}} to='/contact' className='links'>Contact</Link>
                    <NavUnderline />
                </li>
            </ul>
        </nav>
  )
}

export default ResponsiveNavbar