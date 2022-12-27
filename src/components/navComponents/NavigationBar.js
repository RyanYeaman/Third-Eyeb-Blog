import React from 'react'
import NavUnderline from '../assetsComponents/NavUnderline';
import { Link } from 'react-router-dom';

const NavigationBar = (props) => {

    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='items'>
                    <Link onClick={() => {props.setNavStyle('normalStyle')}} to='/' className={`links ${props.navStyle === 'changedStyle' ? 'change-active' : ''}`}>Home</Link>
                    <NavUnderline navStyles={props.navStyle}/>
                </li>
                <li className='items'>
                    <Link onClick={() => {props.setNavStyle('normalStyle')}} to='/articals' className={`links ${props.navStyle === 'changedStyle' ? 'change-active' : ''}`}>Articals</Link>
                    <NavUnderline navStyles={props.navStyle}/>
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

export default NavigationBar