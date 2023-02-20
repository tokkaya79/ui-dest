import './style.scss';
import freshVeg from './img/freshVeg.png';

const FreshVeg = () => {
    return (
        <div className="container">
            <div className="fresh-veg flex">
                <div className="img-box">
                    <img
                        src={freshVeg}
                        alt="freshVeg"
                    />
                </div>
                <div className="content">
                    <h2 className="title">Fresh Vegetables Every Day</h2>
                    <p className="text">
                        Healthy life as informed declared we enjoy the margaret.
                        Joy horrible moreover man feelings own shy. Request
                        norland neither mistake for yet. Between the for morning
                        assured country believe.
                    </p>
                    <button className="btn">learn more</button>
                </div>
            </div>
        </div>
    );
};
export default FreshVeg;
