import './style.scss';
import desk from './img/desk.png';
import map from './img/map.png';
import flat from './img/flat.png';

const ChooseUs = () => {
    return (
        <section className="choose-us">
            <div className="container">
                <div className="choose-us__inner">
                    <h2 className="choose-us__title title">Why Choose US?</h2>
                    <p className="choose-us__text text">
                        Organic food is grown without the use of synthetic
                        chemicals
                    </p>
                    <div className="choose-us__preferenses">
                        <div className="choose-us__item">
                            <div className="choose-us__img-box">
                                <img
                                    src={desk}
                                    alt="icon-desk"
                                />
                            </div>
                            <h3 className="choose-us__subtitle subtitle">
                                Easy to order
                            </h3>
                            <p className="choose-us__text text">
                                Foods include fresh produce, meats as well as
                                processed
                            </p>
                        </div>
                        <div className="choose-us__item">
                            <div className="choose-us__img-box">
                                <img
                                    src={map}
                                    alt="icon-desk"
                                />
                            </div>
                            <h3 className="choose-us__subtitle subtitle">
                                Easy to order
                            </h3>
                            <p className="choose-us__text text">
                                Place your online Order easily and get the food
                                instantly
                            </p>
                        </div>
                        <div className="choose-us__item">
                            <div className="choose-us__img-box">
                                <img
                                    src={flat}
                                    alt="icon-desk"
                                />
                            </div>
                            <h3 className="choose-us__subtitle subtitle">
                                Easy to order
                            </h3>
                            <p className="choose-us__text text">
                                Organic food is grown without the use of
                                synthetic chemicals
                            </p>
                        </div>
                    </div>
                    <div className="choose-us__numbers">
                        <div className="choose-us__item">
                            <h2 className="choose-us__title title">40+</h2>
                            <p className="choose-us__text-litle text">
                                Food Partners
                            </p>
                        </div>
                        <div>
                            <h2 className="choose-us__title title">459+</h2>
                            <p className="choose-us__text-litle text">
                                Trusted Clients
                            </p>
                        </div>
                        <div>
                            <h2 className="choose-us__title title">12k+</h2>
                            <p className="choose-us__text-litle text">
                                Order Online
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;
