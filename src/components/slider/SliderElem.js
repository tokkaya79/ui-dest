import { useState } from 'react';

import SliderItemPair from './SliderItemPair';
import arrowNext from './img/arrowNext.svg';
import arrowPrev from './img/arrowPrev.svg';
import arrowPrevDisb from './img/arrowPrevDisb.svg';
import arrowNextDisb from './img/arrowNextDisb.svg';

import './style.scss';

const Slider = ({ reviews }) => {
    
    const [currentPairIndex, setCurrentPairIndex] = useState(0);

    const sliderItemsPairs = reviews.reduce((acc, _, index) => {
        if (index % 2 === 0) {
            acc.push([reviews[index], reviews[index + 1]]);
        }
        return acc;
    }, []);

    const nextPairIndex =
        currentPairIndex < sliderItemsPairs.length - 1 ? true : false;
    const prevPairIndex = currentPairIndex > 0 ? true : false;

    const nextSlide = () => {
        if (nextPairIndex) {
            setCurrentPairIndex(currentPairIndex + 1);
        }
    };

    const prevSlide = () => {
        if (prevPairIndex) {
            setCurrentPairIndex(currentPairIndex - 1);
        }
    };

    return (
        <div className="slider">
            <div className="slider__box flex">
                {sliderItemsPairs.map((pair, index) => (
                    <SliderItemPair
                        key={index}
                        pair={pair}
                        isActive={index === currentPairIndex}
                        nextPairIndex={nextPairIndex}
                        prevPairIndex={prevPairIndex}
                    />
                ))}
            </div>
            <div className="slider__control">
                <button
                    className="prev"
                    onClick={prevSlide}
                    disabled={!prevPairIndex}
                >
                    <img
                        src={prevPairIndex ? arrowPrev : arrowPrevDisb}
                        alt="arrow-prev"
                    />
                </button>
                <button
                    className="next"
                    onClick={nextSlide}
                    disabled={!nextPairIndex}
                >
                    <img
                        src={nextPairIndex ? arrowNext : arrowNextDisb}
                        alt="arrow-next"
                    />
                </button>
            </div>
        </div>
    );
};
export default Slider;
