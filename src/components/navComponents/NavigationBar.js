import React from 'react'
import NavUnderline from '../assetsComponents/NavUnderline';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavigationBar = () => {
    const [navStyle, setNavStyle] = useState("normalStyle")
    console.log(navStyle)

    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='items'>
                    <Link onClick={() => {setNavStyle('normalStyle')}} to='/' className={`links ${navStyle == 'changedStyle' ? 'change-active' : ''}`}>Home</Link>
                    <NavUnderline navStyles={navStyle}/>
                </li>
                <li className='items'>
                    <Link onClick={() => {setNavStyle('normalStyle')}} to='/articals' className={`links ${navStyle == 'changedStyle' ? 'change-active' : ''}`}>Articals</Link>
                    <NavUnderline navStyles={navStyle}/>
                </li>
                <li className='items'>
                    <Link onClick={() => {setNavStyle('changedStyle')}} to='/about' className='links'>About</Link>
                    <NavUnderline />
                </li>
                <li className='items'>
                    <Link onClick={() => {setNavStyle('changedStyle')}} to='/contact' className='links'>Contact</Link>
                    <NavUnderline />
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar