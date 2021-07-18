import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Anit Kumar</h1>
            <span className="footer__subtitle">Full Stack Developer</span>
          </div>
          <ul className="footer__links">
            <li>
              <a
                href="https://resume-builder-anit.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="https://resume-builder-anit.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                Resume
              </a>
            </li>
            <li>
              <a href="#contactme" className="footer__link">
                Contact
              </a>
            </li>
          </ul>
          <div className="footer__socials">
            <a href="#/" className="footer__social">
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href="#/" className="footer__social">
              <i className="uil uil-github"></i>
            </a>
            <a href="#/" className="footer__social">
              <i className="uil uil-globe"></i>
            </a>
            <a href="#/" className="footer__social">
              <i className="uil uil-brackets-curly"></i>
            </a>
          </div>
        </div>
        <p className="footer__copy">&#169; Anit Kumar. All right reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
