/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import RegisterationImg from '../../public/assets/unnamed.png';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/actions/users';
import { Link } from 'react-router-dom';

const Register = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(register(email, password));
    }
  };
  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section__title">Register</h2>
        <span className="section__subtitle">Get In Touch</span>
        {error && <span className="section__subtitle">{error}</span>}
        <div className="register__container container grid">
          <div
            style={{
              backgroundImage: `url(${RegisterationImg})`,
              backgroundPosition: 'center center',
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
              height: '28rem'
            }}
          ></div>
          <form action="" className="contact__form grid">
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
                Email*
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
                Password*
              </label>
              <input
                type="password"
                className="contact__input"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {message && <p className="section__subtitle">Get In Touch</p>}
            </div>
            <div className="contact__content">
              <label htmlFor="confirmPass" className="contact__label">
                Confirm Password*
              </label>
              <input
                type="password"
                className="contact__input"
                value={confirmPassword}
                name="confirmPass"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div onClick={(e) => submitHandler(e)}>
              <a className="button button--flex">
                Register Me
                <i className="ui uil message button__icon"></i>
              </a>
            </div>
            <p>
              {' '}
              Have an Account?{' '}
              <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
