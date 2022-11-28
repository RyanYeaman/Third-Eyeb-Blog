import React from 'react'

const NavUnderline = (props) => {

    return (
        <div className='bar-container'>
            <span className={`bar ${props.navStyles == 'changedStyle' ? 'change-active' : ''}`}></span><span className={`bar ${props.navStyles == 'changedStyle' ? 'change-active' : ''}`}></span>
        </div>
    )
}

export default NavUnderline