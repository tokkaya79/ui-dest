import './style.scss';
import desk from './img/desk.png';
import map from './img/map.png';
import flat from './img/flat.png';

const ChooseUs = () => {
    return (
        <div className="container">
            <div className="choose-us">
                <h2 className="title">Why Choose US?</h2>
                <p className="text">Organic food is grown without the use of synthetic chemicals</p>
                <div className='preferenses'>
                    <div className='item'>
                        <div className='img-box'>
                            <img src={desk} alt="icon-desk" />
                        </div>
                        <h3 className='subtitle'>Easy to order</h3>
                        <p className='text'>Foods include fresh produce, meats as well as processed</p>
                    </div>
                    <div className='item'>
                        <div className='img-box'>
                            <img src={map} alt="icon-desk" />
                        </div>
                        <h3 className='subtitle'>Easy to order</h3>
                        <p className='text'>Place your online Order easily and get the food instantly</p>
                    </div>
                    <div className='item'>
                        <div className='img-box'>
                            <img src={flat} alt="icon-desk" />
                        </div>
                        <h3 className='subtitle'>Easy to order</h3>
                        <p className='text'>Organic food is grown without the use of synthetic chemicals</p>
                    </div>
                </div>
                <div className='numbers'>
                    <div className='item'>
                        <h2 className='title'>40+</h2>
                        <p className='text'>Food Partners</p>
                    </div>
                     <div>
                        <h2 className='title'>459+</h2>
                        <p className='text'>Trusted Clients</p>
                    </div>
                     <div>
                        <h2 className='title'>12k+</h2>
                        <p className='text'>Order Online</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;
