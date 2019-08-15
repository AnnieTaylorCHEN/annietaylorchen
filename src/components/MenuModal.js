import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuModal({
    handleMenuClick,
    menuVisibility,
}) {
    let visibility = 'hide'

    if (menuVisibility) {
        visibility = 'show'
    }
    
    return (
        <div  id="menu-modal__container" 
            className={visibility} >
            <button 
                className="menu-model__close" 
                onClick={()=> handleMenuClick()}>
                &times;
            </button>
            <nav className="menu-modal__menu">
                <Link to="/about" className="header__menu__item">About</Link>
                <Link to="/projects" className="header__menu__item">Projects</Link>
                <Link to="/contact" className="header__menu__item">Contact</Link>
            </nav>
        </div>
    )
}
