import './style.scss';
import about1 from './img/about01.png';
import about2 from './img/about02.png';
import about3 from './img/about03.png';

const AboutUs = () => {
    return (
        <div className="container">
            <div className="about-us flex">
                <div className="content">
                    <h2 className="title">About US</h2>
                    <p className='text'>
                        Organic food is grown without the use of synthetic
                        chemicals, such as human-made pesticides and
                        fertilizers, and does not contain genetically modified
                        organisms (GMOs). Organic foods include fresh produce,
                        meats, and dairy products as well as processed foods
                        such as crackers, drinks, and frozen meals.
                    </p>
                <button className='btn'>Learn More</button>
                </div>
                <div className='img-box'>
                    <div className='box1'>
                        <img src={about1} alt="foto-about" />
                        <img src={about2} alt="foto-about" />
                    </div>
                    <div className='box2'>
                        <img src={about3} alt="foto-about" />

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
