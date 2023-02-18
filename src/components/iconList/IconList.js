import './style.scss';

import cart from './img/cart.svg';
import search from './img/search.svg';

const IconList = () => {
    return (
        <div className='icon-list'>
            <img src={search} alt="icon" />
            <img src={cart} alt="icon" />

        </div>
    )
}

export default IconList