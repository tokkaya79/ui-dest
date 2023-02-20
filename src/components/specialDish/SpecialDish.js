import './style.scss';
import specialDish1 from './img/specialDish01.png';
import specialDish2 from './img/specialDish02.png';
import specialDish3 from './img/specialDish03.png';

const SpecialDish = () => {
    return (
        <div className="container">
            <div className="special-dish">
                <h2 className="title">Special Dishes for you</h2>
                <p className="text">
                    Made with premium & 100% Organic ingredients
                </p>
                <div className="cards-box">
                    <div className="card">
                        <div className="img-box">
                            <img
                                src={specialDish1}
                                alt="icon specialDish"
                            />
                        </div>
                        <h3 className="subtitle">Green Salad</h3>
                        <p className="text">
                            A salad combined witha delicious cut of bacon and
                            mixed with tasty and fresh sesome oil.
                        </p>
                    </div>
                    <div className="card">
                        <div className="img-box">
                            <img
                                src={specialDish2}
                                alt="icon specialDish"
                            />
                        </div>
                        <h3 className="subtitle">Beef Salad</h3>
                        <p className="text">
                            A salad combined witha delicious cut of bacon and
                            mixed with tasty and fresh sesome oil.
                        </p>
                    </div>
                    <div className="card">
                        <div className="img-box">
                            <img
                                src={specialDish3}
                                alt="icon specialDish"
                            />
                        </div>
                        <h3 className="subtitle">Nut Salad</h3>
                        <p className="text">
                            A salad combined witha delicious cut of bacon and
                            mixed with tasty and fresh sesome oil.
                        </p>
                    </div>
                </div>
                <button className='btn'>View All</button>
            </div>
        </div>
    );
};
export default SpecialDish;
