import SliderItem from './SliderItem';

const SliderItemPair = ({ pair, isActive }) => {
  return (
    <div className={`slider__item-pair ${isActive ? "active" : ""}`}>
      <SliderItem review={pair[0]} isActive={isActive} />
      <SliderItem review={pair[1]} isActive={isActive} />
    </div>
  );
};

export default SliderItemPair;