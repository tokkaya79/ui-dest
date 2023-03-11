import './style.scss';
import Btn from '../btn/Btn';
import bgHeader from './img/bg-header.png';
import bgImg from './img/img-header.png';

const HeaderContent = () => {
    return (
        <section className="header-content" id="home">
            <div className="container">
                <div className="header-content__content">
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
                        <Btn />
                    </div>
                    <div className='header-content__images'>
                        <img className='header-content__image' src={bgHeader} alt="bg-img" />
                        <img className='header-content__imageGreen' src={bgImg} alt="bg-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HeaderContent;
