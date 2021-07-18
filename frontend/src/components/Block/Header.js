/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) setIsUserLoggedIn(true);
    /*==================== MENU SHOW Y HIDDEN ====================*/
    const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      });
    }

    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }

    /*==================== REMOVE MENU MOBILE ====================*/
    const navLink = document.querySelectorAll('.nav__link');

    const removeNavLink = () => {
      const navMenu = document.getElementById('nav-menu');
      navMenu.classList.remove('show-menu');
    };

    navLink.forEach((menus) => menus.addEventListener('click', removeNavLink));

    function scrollHeader() {
      const nav = document.getElementById('header');
      if (this.scrollY >= 80) nav.classList.add('scroll-header');
      else nav.classList.remove('scroll-header');
    }
    window.addEventListener('scroll', scrollHeader);

    /*==================== SHOW SCROLL UP ====================*/
    function scrollUps() {
      const scrollUp = document.getElementById('scroll-up');
      // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
      if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
      else scrollUp.classList.remove('show-scroll');
    }
    window.addEventListener('scroll', scrollUps);

    /*==================== DARK LIGHT THEME ====================*/
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'uil-sun';

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () =>
      themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
        darkTheme
      );
      themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
        iconTheme
      );
    }

    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
      // Add or remove the dark / icon theme
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
      // We save the theme and the current icon that the user chose
      localStorage.setItem('selected-theme', getCurrentTheme());
      localStorage.setItem('selected-icon', getCurrentIcon());
    });
  }, []);

  const LoggedOut = () => {
    localStorage.removeItem('userInfo');
    setIsUserLoggedIn(false);
  };

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <Link to="/" className="nav__logo">
            Anit Kumar
          </Link>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <Link to="/" className="nav__link active-link">
                  <i className="uil uil-estate nav__icon" />
                  Home
                </Link>
              </li>
              <li className="nav__item">
                {isUserLoggedIn ? (
                  <a className="nav__link" onClick={() => LoggedOut()}>
                    <i className="uil uil-user nav__icon" />
                    Logout
                  </a>
                ) : (
                  <Link to="/login" className="nav__link">
                    <i className="uil uil-user nav__icon" />
                    Login
                  </Link>
                )}
              </li>
              <li className="nav__item">
                <Link to="/register" className="nav__link">
                  <i className="uil uil-file-alt nav__icon" />
                  Register
                </Link>
              </li>
            </ul>
            <i className="uil uil-times nav__close" id="nav-close" />
          </div>
          <div className="nav__btns">
            <i className="uil uil-moon change-theme" id="theme-button" />
            <div className="nav__toggle" id="nav-toggle">
              <i className="uil uil-apps" />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
