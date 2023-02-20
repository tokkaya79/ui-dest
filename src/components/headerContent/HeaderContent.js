import './style.scss';
import Btn from '../btn/Btn';
import bgHeader from './img/bg-header.png';
import bgImg from './img/img-header.png';

const HeaderContent = () => {
    return (
        <div className="container">
            <div className="header-content flex">
                <div className="text-box">
                    <h1>
                        Just <span>Eat healthy</span> food to live a healthier
                        life
                    </h1>
                    <p className='text'>
                        Enjoy a healthy life by eating healthy foods that have
                        extraordinary flavors that make your life healthier for
                        today and in the future
                    </p>
                    <Btn />
                </div>
                <div className='img-box'>
                    <img className='bg-header' src={bgHeader} alt="bg-header" />
                    <img className='img-header' src={bgImg} alt="bg-img" />
                </div>
            </div>
        </div>
    );
};
export default HeaderContent;
