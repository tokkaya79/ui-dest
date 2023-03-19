import Btn from '../btn/Btn';

import bgHeader from './img/bg-header.webp';
import imgHeader from './img/img-header.webp';

import './style.scss';

const HeaderContent = () => {

    return (
        <section className="header-content" id="home">
            <div className="container">
                <div className="header-content__wrapper">
                    <div className="header-content__block">
                        <h1 className='header-content__title'>
                            <span className='header-content__span'>Just <span className='header-content__span-green'>Eat healthy</span></span> food to live a healthier
                            life
                        </h1>
                        <p className='header-content__text'>
                            Enjoy a healthy life by eating healthy foods that have
                            extraordinary flavors that make your life healthier for
                            today and in the future
                        </p>
                        <Btn text='Order Now' style={{ backgroundColor: `var(--bg-green)` }}/>
                    </div>
                    <div className='header-content__images'>
                        <img className='header-content__image-bg' src={bgHeader} alt="bg-img" />
                        <img className='header-content__image-dish'  src={imgHeader} alt="dish-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HeaderContent;
