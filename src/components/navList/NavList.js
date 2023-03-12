import { useState } from 'react';

import './style.scss';

const NavList = () => {
    const [activeTab, setActiveTab] = useState('home')

   const handleClick = (event) => {
    event.preventDefault()
    const target = document.querySelector(event.target.hash)
    if (target) {
        window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth"
        })
    }
    setActiveTab(event.target.hash.slice(1))
}


    return (
        <nav className='nav-list'>
            <ul className="nav-list__list">
                <li className={`item ${activeTab === 'home' ? 'item-active' : ''}`}><a href="#home" className="nav-list__link" onClick={handleClick}>Home</a></li>
                <li className={`item ${activeTab === 'about' ? 'item-active' : ''}`}><a href="#about" className="nav-list__link" onClick={handleClick}>About</a></li>
                <li className={`item ${activeTab === 'contact' ? 'item-active' : ''}`}><a href="#contact" className="nav-list__link" onClick={handleClick}>Contact</a></li>
                <li className={`item ${activeTab === 'dishes' ? 'item-active' : ''}`}><a href="#dishes" className="nav-list__link" onClick={handleClick}>Dishes</a></li>
            </ul>
        </nav>
    );
};

export default NavList;
