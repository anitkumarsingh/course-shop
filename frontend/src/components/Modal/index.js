/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import PureModal from 'react-pure-modal';
import '../../public/css/modal.css';
import { useHistory } from 'react-router-dom';

const Modal = ({ modal, setModal }) => {
  const [otp, setOtp] = useState('');
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(null);
  const location = useHistory();

  useEffect(() => {
    const selectClose = document.getElementsByClassName('close');
    if (selectClose[0]) {
      selectClose[0].removeAttribute('style');
      selectClose[0].innerHTML = 'x';
      selectClose[0].classList.add('close__position');
    }
  }, [modal]);

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
        <>
          <a
            className="button button--flex"
            onClick={() => makePaymentAndPlaceOrder()}
          >
            Make Payment Now
          </a>
        </>
      }
      isOpen={modal}
      closeButton="close"
      closeButtonPosition="bottom"
      onClose={() => {
        setModal(false);
        return true;
      }}
    >
      <input
        type="text"
        className="otp__input"
        name="otp"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
    </PureModal>
  );
};

export default Modal;
