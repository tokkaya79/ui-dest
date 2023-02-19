import './style.scss';

import cart from './img/cart.svg';
import search from './img/search.svg';

const IconList = () => {
    return (
        <div className='icon-list'>
            <ul className='row'>
                <li><img src={search} alt="icon" /></li>
            
                <li> <img src={cart} alt="icon" /></li>
            </ul> 

        </div>
    )
}

export default IconList