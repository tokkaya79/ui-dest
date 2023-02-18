import BtnOrder from '../btnOrder/BtnOrder';
import IconList from '../iconList/IconList';
import Logo from '../logo/Logo';
import NavList from '../navList/NavList';

import './style.scss';

const Header = () => {
    return (
        <div className="container">
            <div className="header">
                <Logo />
                <NavList />
                <div className='box'>
                    <IconList />
                    <BtnOrder />
                </div>
            </div>
        </div>
    );
};
export default Header;
