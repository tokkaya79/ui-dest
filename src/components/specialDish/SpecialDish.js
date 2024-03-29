import Btn from '../btn/Btn';
import specialDish1 from './img/specialDish01.webp';
import specialDish2 from './img/specialDish02.webp';
import specialDish3 from './img/specialDish03.webp';

import './style.scss';

const SpecialDish = () => {
    return (
        <section className="special-dish" id="dishes">
            <div className="container">
                <div className="special-dish__inner">
                    <h2 className="special-dish__title title">
                        Special Dishes for you
                    </h2>
                    <p className="special-dish__text text">
                        Made with premium & 100% Organic ingredients
                    </p>
                    <div className="special-dish__cards-box">
                        <div className="special-dish__card">
                            <div className="special-dish__img-box">
                                <img
                                    src={specialDish1}
                                    alt="icon specialDish"
                                />
                            </div>
                            <h3 className="special-dish__subtitle subtitle">
                                Green Salad
                            </h3>
                            <p className="special-dish__text text">
                                A salad combined witha delicious cut of bacon
                                and mixed with tasty and fresh sesome oil.
                            </p>
                        </div>
                        <div className="special-dish__card">
                            <div className="special-dish__img-box">
                                <img
                                    src={specialDish2}
                                    alt="icon specialDish"
                                />
                            </div>
                            <h3 className="special-dish__subtitle subtitle">
                                Beef Salad
                            </h3>
                            <p className="special-dish__text text">
                                A salad combined witha delicious cut of bacon
                                and mixed with tasty and fresh sesome oil.
                            </p>
                        </div>
                        <div className="special-dish__card">
                            <div className="special-dish__img-box">
                                <img
                                    src={specialDish3}
                                    alt="icon specialDish"
                                />
                            </div>
                            <h3 className="special-dish__subtitle subtitle">
                                Nut Salad
                            </h3>
                            <p className="special-dish__text text">
                                A salad combined witha delicious cut of bacon
                                and mixed with tasty and fresh sesome oil.
                            </p>
                        </div>
                    </div>
                    <Btn className="special-dish__btn btn" text='View All' />
                </div>
            </div>
        </section>
    );
};
export default SpecialDish;
