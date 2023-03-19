import { useEffect, useState, useRef } from 'react';

import BtnOrder from '../btnOrder/BtnOrder';
import BurgerMenu from '../burger/BurgerMenu';
import IconList from '../iconList/IconList';
import Logo from '../logo/Logo';
import NavList from '../navList/NavList';

import './style.scss';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const navListRef = useRef(null);
    const burgerMenuRef = useRef(null);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    const handleBurgerClick = () => {
        setIsActive(!isActive);
        navListRef.current.classList.toggle('_active');
        burgerMenuRef.current.classList.toggle('_active');
    };

    useEffect(() => {
        const screenWidth = window.innerWidth;
        if (isActive && screenWidth <= 900) {
            document.body.classList.add('lock');
        } else {
            document.body.classList.remove('lock');
        }
    }, [isActive]);

    return (
        <section className="header">
            <div className="container">
                <div className="header__inner">
                    <Logo />
                    <NavList
                        isActive={isActive}
                        handleClick={handleClick}
                        ref={navListRef}
                    />
                    <div className="header__user">
                        <div className="header__box">
                            <IconList />
                            <BtnOrder
                                className="header__btn-order"
                                color="var(--btn-bg-order)"
                                text="Order Now"
                            />
                        </div>
                        <BurgerMenu
                            isActive={isActive}
                            handleClick={handleBurgerClick}
                            ref={burgerMenuRef}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Header;
