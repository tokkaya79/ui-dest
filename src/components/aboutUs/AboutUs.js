import './style.scss';
import about1 from './img/about01.png';
import about2 from './img/about02.png';
import about3 from './img/about03.png';

const AboutUs = () => {
    return (
        <div className="container">
            <div className="about-us flex">
                <div className="about-us__content">
                    <h2 className="about-us__title title">About US</h2>
                    <p className='about-us__text text'>
                        Organic food is grown without the use of synthetic
                        chemicals, such as human-made pesticides and
                        fertilizers, and does not contain genetically modified
                        organisms (GMOs). Organic foods include fresh produce,
                        meats, and dairy products as well as processed foods
                        such as crackers, drinks, and frozen meals.
                    </p>
                <button className='about-us__btn btn'>Learn More</button>
                </div>
                <div className='about-us__img-box'>
                    <div className='about-us__box1'>
                        <img src={about1} alt="foto-about" />
                        <img src={about2} alt="foto-about" />
                    </div>
                    <div className='about-us__box2'>
                        <img src={about3} alt="foto-about" />

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
