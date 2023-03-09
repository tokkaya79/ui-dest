import './style.scss';

const SliderItem = ({ review, isActive }) => {

    return (
        <div className={`slider__item ${isActive ? 'active' : ''}`}>
            <div className="slider__top">
                <div className="slider__img-box">
                    <img
                        className="slider__img"
                        src={review.img}
                        alt="img"
                    />
                </div>
                <div className="slider__person">
                    <h3 className="slider__name subtitle">{review.name}</h3>
                    <p className="slider__prof text">{review.prof}</p>
                </div>
            </div>

            <div className="slider__content">
                <p className="slider__review text">{review.review}</p>
            </div>
        </div>
    );
};

export default SliderItem;
