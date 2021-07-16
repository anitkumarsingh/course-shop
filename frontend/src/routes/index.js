import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Header from '../components/Block/Header';
import Footer from '../components/Block/Footer';

const Main = () => {
	return (
		<>
			<Header />
			<div className='main'>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/cart' component={Cart} />
				</Switch>
			</div>
			<Footer />
		</>
	);
};

export default Main;
