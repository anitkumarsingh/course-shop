/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import { useHistory } from 'react-router-dom';

const Modal = ({ modal, setModal }) => {
  const [otp, setOtp] = useState('');
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(null);
  const location = useHistory();

  const makePaymentAndPlaceOrder = () => {
    setTimeout(() => {
      setModal(false);
      if (otp === '123456') {
        setIsPaymentSuccess(true);
        location.push('/');
      } else {
        setModal(true);
        setIsPaymentSuccess(false);
      }
    }, 3000);
  };
  return (
    <PureModal
      header="Enter OTP "
      footer={
        <a
          className="button button--flex"
          onClick={() => makePaymentAndPlaceOrder()}
        >
          Make Payment Now
        </a>
      }
      isOpen={modal}
      closeButton="close"
      closeButtonPosition="bottom"
      onClose={() => {
        setModal(false);
        return true;
      }}
    >
      <form className="contact__form grid">
        <div className="contact__content">
          <label htmlFor="otp" className="contact__label">
            OTP
          </label>
          <input
            type="text"
            className="contact__input"
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
      </form>
    </PureModal>
  );
};

export default Modal;
