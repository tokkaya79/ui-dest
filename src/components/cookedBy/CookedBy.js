import './style.scss';
import cookedBy from './img/cookedBy.png';
import checkMark from './img/checkMark.svg';

const CookedBy = () => {
    return (
        <div className="container">
            <div className="cooked-by flex">
                <div className="content">
                    <h2 className="title">Fresh Vegetables Every Day</h2>
                    <p className="text">
                        Healthy life as informed declared we enjoy the margaret.
                        Joy horrible moreover man feelings own shy. Request
                        norland neither mistake for yet. Between the for morning
                        assured country believe.
                    </p>
                    <ul>
                        <li>
                            <span><img src={checkMark} alt="mark" /></span>
                            <p className="text">A guaranteed delicious meal</p>
                        </li>
                        <li>
                            <span><img src={checkMark} alt="mark" /></span>
                            <p className="text">Food is guaranteed hygienic</p>
                        </li>
                        <li>
                            <span><img src={checkMark} alt="mark" /></span>
                            <p className="text">Cooked quickly</p>
                        </li>
                    </ul>
                </div>
                <div className="img-box">
                    <img
                        src={cookedBy}
                        alt="cookedBy"
                    />
                </div>
            </div>
        </div>
    );
};
export default CookedBy;
