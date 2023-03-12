import EmailInputForm from './EmailInputForm';
import './style.scss';

const FormLetter = () => {
    return (
        <section className="form-letter" id="contact">
            <h2 className="form-letter__title title">Subscribe to the Newsletter</h2>
            <h3 className="form-letter__subtitle text">Enter your email below to get our daily offers and news</h3>
            <div className="form-letter__form-box">
                <EmailInputForm/>
            </div>
        </section>
    )
}

export default FormLetter