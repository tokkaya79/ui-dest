import Btn from '../btn/Btn';

import freshVeg from './img/freshVeg.webp';

import './style.scss';

const FreshVeg = () => {
    return (
        <section className="fresh-veg">
            <div className="container">
                <div className="fresh-veg__inner flex">
                    <div className="fresh-veg__img-box">
                        <img
                            src={freshVeg}
                            alt="freshVeg"
                        />
                    </div>
                    <div className="fresh-veg__content">
                        <h2 className="fresh-veg__title title">
                            Fresh Vegetables Every Day
                        </h2>
                        <p className="fresh-veg__text text">
                            Healthy life as informed declared we enjoy the
                            margaret. Joy horrible moreover man feelings own
                            shy. Request norland neither mistake for yet.
                            Between the for morning assured country believe.
                        </p>
                        <Btn className="fresh-veg__btn btn" text='learn more' /> 
                    </div>
                </div>
            </div>
        </section>
    );
};
export default FreshVeg;
