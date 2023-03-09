
import SliderElem from "../slider/SliderElem";
import { reviews } from "../slider/helpers/ReviewList";


import './style.scss';

const HappyClients = () => {
    return (
        <div className="happy-clients">
            <div className="container">
                <h2 className="title">Happy Clients Says</h2>
                <SliderElem reviews={reviews}/>

            </div>
        </div>
    )
}
export default HappyClients