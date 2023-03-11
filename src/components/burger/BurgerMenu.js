
import './style.scss';

const BurgerMenu = ({isActive, handleClick}) => {

    return (
        <div className={isActive ? 'burger-menu _active' : 'burger-menu'} onClick={handleClick}>
            <span></span>
        </div>
    );
};

export default BurgerMenu;
