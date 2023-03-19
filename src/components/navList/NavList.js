import { useState } from 'react';

import './style.scss';

const NavList = ({handleClick, isActive}) => {
    const [activeTab, setActiveTab] = useState('home')

   const handleItemClick = (event) => {
    event.preventDefault()
    const target = document.querySelector(event.target.hash)
    if (target) {
        window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth"
        })
    }
    setActiveTab(event.target.hash.slice(1))
    handleClick()
}


    return (
        <nav className={`nav-list ${isActive ? '_active' : ''}`}>
            <ul className="nav-list__list" >
                <li className={`item ${activeTab === 'home' ? 'item-active' : ''}`}><a href="#home" className="nav-list__link" onClick={handleItemClick}>Home</a></li>
                <li className={`item ${activeTab === 'about' ? 'item-active' : ''}`} ><a href="#about" className="nav-list__link" onClick={handleItemClick}>About</a></li>
                <li className={`item ${activeTab === 'contact' ? 'item-active' : ''}`}><a href="#contact" className="nav-list__link" onClick={handleItemClick}>Contact</a></li>
                <li className={`item ${activeTab === 'dishes' ? 'item-active' : ''}`}><a href="#dishes" className="nav-list__link" onClick={handleItemClick}>Dishes</a></li>
            </ul>
        </nav>
    );
};

export default NavList;
