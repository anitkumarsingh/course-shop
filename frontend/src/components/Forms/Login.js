/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { API_BASE_URL } from '../../constant';
import loginImg from '../../public/assets/login.png';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const location = useHistory();
  const loginHandler = async (e) => {
    e.preventDefault();
    const loginData = {
      email,
      password
    };
    try {
      const request = await fetch(`${API_BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });
      const result = await request.json();
      const { message } = result;
      if (message) {
        setMsg(message);
      }
      if (result && !message) {
        localStorage.setItem('userInfo', JSON.stringify(result));
        location.push('/');
      }
    } catch (error) {}
  };

  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section__title">Login</h2>
        <span className="section__subtitle">Get In Touch</span>
        <span className="section__subtitle">{msg && { msg }}</span>
        <div className="login__container container grid">
          <div
            style={{
              backgroundImage: `url(${loginImg})`,
              backgroundPosition: 'center center',
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
              height: '28rem'
            }}
          ></div>
          <form className="contact__form grid">
            <div className="contact__inputs">
              <div className="contact__content">
                <label htmlFor="name" className="contact__label">
                  Name
                </label>
                <input
                  type="text"
                  className="contact__input"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="contact__content">
              <label htmlFor="email" className="contact__label">
                Email
              </label>
              <input
                type="email"
                className="contact__input"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="contact__content">
              <label htmlFor="password" className="contact__label">
                Password
              </label>
              <input
                type="password"
                className="contact__input"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div onClick={(e) => loginHandler(e)}>
              <a className="button button--flex">
                Login
                <i className="ui uil message button__icon"></i>
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
