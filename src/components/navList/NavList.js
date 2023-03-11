import './style.scss';

const NavList = () => {
    return (
        <nav className='nav-list'>
            <ul className="nav-list__list">
                <li className="item item-active"><a href="#home" className="nav-list__link">Home</a></li>
                <li className="item"><a href="#about" className="nav-list__link">About</a></li>
                <li className="item"><a href="#contact" className="nav-list__link">Contact</a></li>
                <li className="item"><a href="#dishes" className="nav-list__link">Dishes</a></li>
            </ul>
        </nav>
    );
};

export default NavList;
