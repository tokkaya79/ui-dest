import Logo from '../logo/Logo';
import './style.scss';

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul>
                        <li>
                            <Logo />
                        </li>
                        <li>
                            <p className="footer__text">
                                On formed merits hunted unable merely by mr
                                whence or.
                            </p>
                        </li>
                    </ul>
                    <ul>
                        <li className="footer__subtitle subtitle">Home</li>
                        <li className="footer__text">
                            <a href="/">Company</a>
                        </li>
                        <li className="footer__text">
                            <a href="/">News</a>
                        </li>
                        <li className="footer__text">
                            <a href="/">Team</a>
                        </li>
                    </ul>
                    <ul>
                        <li className="footer__subtitle subtitle">About</li>
                        <li className="footer__text">
                            <a href="/">History</a>
                        </li>
                        <li className="footer__text">
                            <a href="/">Service</a>
                        </li>
                        <li className="footer__text">
                            <a href="/">Pricing</a>
                        </li>
                    </ul>
                    <ul>
                        <li className="footer__subtitle subtitle">Partner</li>
                        <li className="footer__text">
                            <a href="/">Business</a>
                        </li>
                        <li className="footer__text">
                            <a href="/">Plan</a>
                        </li>
                        <li className="footer__text">
                            <a href="/">Marketing</a>
                        </li>
                    </ul>
                    <ul>
                        <li className="footer__subtitle subtitle">Contact</li>
                        <li className="footer__text text">
                            <a href="mailto:ul.desk@gmail.com">UI.desk</a>
                        </li>
                        <li className="footer__text">
                            <a href="tel:+3804659548487">(465)954-8487</a>
                        </li>
                        <li className="footer__text">
                            <p className="footer__text">Lahore, Pakistan</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__copyright">
                <p className="footer__copyright-text">
                    © Copyright 2020 by ui.desk. All right reserved.
                </p>
            </div>
        </section>
    );
};
export default Footer;
