/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import loginImg from '../../public/assets/25794-4-credit-card-hd.png';
import LoaderImg from '../../public/assets/294.svg';
import Modal from '../Modal';

const Payment = (props) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [cardNo, setCardNo] = useState('');
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { price } = props?.match?.params;

  useEffect(() => {
    const getEmail = JSON.parse(localStorage.getItem('userInfo'));
    if (getEmail) {
      console.log('email', getEmail.email);
      setEmail(getEmail.email);
    }
  }, [price]);

  const fakeOTPSending = () => {
    setIsLoading(true);
    setTimeout(() => {
      setModal(true);
      setIsLoading(false);
    }, 3000);
  };
  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section__title">Payment Method</h2>
        <span className="section__subtitle">Secure Payment</span>
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
                  Name as Printed on Card
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
              <label htmlFor="cardNumber" className="contact__label">
                Card Number
              </label>
              <input
                type="password"
                className="contact__input"
                value={cardNo}
                name="password"
                onChange={(e) => setCardNo(e.target.value)}
              />
            </div>
            <div className="contact__inputs grid">
              <div className="contact__content">
                <label htmlFor="cardNumber" className="contact__label">
                  Expiring On
                </label>
                <input
                  type="password"
                  className="contact__input"
                  value={cardNo}
                  name="password"
                  onChange={(e) => setCardNo(e.target.value)}
                />
              </div>
              <div className="contact__content">
                <label htmlFor="cardNumber" className="contact__label">
                  vcc
                </label>
                <input
                  type="password"
                  className="contact__input"
                  value={cardNo}
                  name="password"
                  onChange={(e) => setCardNo(e.target.value)}
                />
              </div>
            </div>
            <div onClick={() => fakeOTPSending()}>
              <a className="button button--flex">
                <i className="uil uil-rupee-sign"></i> {price} Pay Now
                <span>{isLoading && <img src={LoaderImg} alt="loader" />}</span>
              </a>
            </div>
          </form>
        </div>
      </section>
      <Modal modal={modal} setModal={() => setModal()} />
    </>
  );
};

export default Payment;
