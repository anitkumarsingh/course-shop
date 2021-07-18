/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import loginImg from '../../public/assets/login.png';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/users';
import { Link } from 'react-router-dom';

const Login = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search
    ? location.search.split('=')[1]
    : userInfo
    ? '/dashboard'
    : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section__title">Login</h2>
        <span className="section__subtitle">Get In Touch</span>
        {error && <span className="section__subtitle">{error}</span>}
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
                Email *
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
                Password *
              </label>
              <input
                type="password"
                className="contact__input"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div onClick={(e) => submitHandler(e)}>
              <a className="button button--flex">
                Login
                <i className="ui uil message button__icon"></i>
              </a>
            </div>
            <p>
              New User?{' '}
              <Link
                to={redirect ? `/register?redirect=${redirect}` : '/register'}
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
