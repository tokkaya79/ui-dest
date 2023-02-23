import './style.scss';
import cookedBy from './img/cookedBy.png';
import checkMark from './img/checkMark.svg';

const CookedBy = () => {
    return (
        <div className="container">
            <div className="cooked-by flex">
                <div className="cooked-by__content">
                    <h2 className="cooked-by__title title">
                        Cooked by the Best Chefs
                    </h2>
                    <p className="cooked-by__text text">
                        Believing neglected so so allowance existence departure
                        in. In design active temper be uneasy. Thirty for remove
                        plenty regard you summer though. He preference
                        connection astonished on of ye.
                    </p>
                    <ul>
                        <li>
                            <span>
                                <img
                                    src={checkMark}
                                    alt="mark"
                                />
                            </span>
                            <p className="cooked-by__text text">
                                A guaranteed delicious meal
                            </p>
                        </li>
                        <li>
                            <span>
                                <img
                                    src={checkMark}
                                    alt="mark"
                                />
                            </span>
                            <p className="cooked-by__text text">
                                Food is guaranteed hygienic
                            </p>
                        </li>
                        <li>
                            <span>
                                <img
                                    src={checkMark}
                                    alt="mark"
                                />
                            </span>
                            <p className="cooked-by__text text">
                                Cooked quickly
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="cooked-by__img-box">
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
