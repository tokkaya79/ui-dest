import { useState } from 'react';

import BtnOrder from '../btnOrder/BtnOrder';
import BurgerMenu from '../burger/BurgerMenu';
import IconList from '../iconList/IconList';
import Logo from '../logo/Logo';
import NavList from '../navList/NavList';

import './style.scss';

const Header = () => {
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }
    const handleBurgerClick = () => {
        handleClick()
        const navList = document.querySelector('.nav-list')
        const burgerMenu = document.querySelector('.burger-menu')
        navList.classList.toggle('_active')
        burgerMenu.classList.toggle('_active')
    }

    return (
        <section className="header">
            <div className="container">
                <div className="header__inner">
                    <Logo />
                    <NavList />
                    <div className="header__box">
                        <IconList />
                        <BtnOrder />
                        <BurgerMenu isActive={isActive} handleClick={handleBurgerClick}/>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Header;
