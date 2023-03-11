import { useState } from 'react';
import './style.scss';

const EmailInputForm = () => {
    const [email, setEmail] = useState({ email: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            sendEmail();
        }
    };
    function validate() {
        if (email.trim() === '') {
            alert('Enter the email');
            return false;
        }
        if (!isValidEmail(email.trim())) {
            alert('Enter a valid email');
            return false;
        }
        return true;
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function sendEmail() {
        alert('Your email successfully sent');
        setEmail('');
    }

    return (
        <form
            className="address-form"
            onSubmit={handleSubmit}
        >
            <label className="address-form__label">
                <input
                    className="address-form__input"
                    name="email"
                    type="email"
                    value="Enter your email"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </label>
            <button
                className="address-form__btn btn"
                type="submit"
            >
                Get Started
            </button>
        </form>
    );
};

export default EmailInputForm;
