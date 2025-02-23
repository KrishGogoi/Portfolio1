import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Krishna</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>


                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>


                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>

                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/krishna.gogoi_/" className="footer__social-link" target="_blank">
                        <i class="uil uil-instagram-alt"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/krishnagogoi10/" className="footer__social-link" target="_blank">
                        <i class="uil uil-linkedin-alt"></i>
                    </a>

                    <a href="https://github.com/KrishGogoi" className="footer__social-link" target="_blank">
                        <i class="uil uil-github-alt"></i>
                    </a>

                    <a href="https://www.facebook.com/krishna.gogoi.52438/" className="footer__social-link" target="_blank">
                        <i class="uil uil-facebook"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer