import React from 'react';
import loginImg from '../../public/assets/login.png';

const Login = () => {
	return (
		<>
			<section className='contact section' id='contact'>
				<h2 className='section__title'>Login</h2>
				<span className='section__subtitle'>Get In Touch</span>
				<div className='login__container container grid'>
					<div
						style={{
							backgroundImage: `url(${loginImg})`,
							backgroundPosition: 'center center',
							backgroundSize: '100%',
							backgroundRepeat: 'no-repeat',
							height: '28rem'
						}}></div>
					<form action='' className='contact__form grid'>
						<div className='contact__inputs'>
							<div className='contact__content'>
								<label htmlFor='' className='contact__label'>
									Name
								</label>
								<input type='text' className='contact__input' />
							</div>
						</div>
						<div className='contact__content'>
							<label htmlFor='' className='contact__label'>
								Email
							</label>
							<input type='email' className='contact__input' />
						</div>
						<div className='contact__content'>
							<label htmlFor='' className='contact__label'>
								Password
							</label>
							<input type='text' className='contact__input' />
						</div>

						<div>
							<a href='#/' className='button button--flex'>
								Send Message
								<i className='ui uil message button__icon'></i>
							</a>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default Login;
