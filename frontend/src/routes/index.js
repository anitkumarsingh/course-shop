import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Header from '../components/Block/Header';
import Footer from '../components/Block/Footer';
import Login from '../components/Forms/Login';
import Register from '../components/Forms/Register';
import Course from '../pages/Course';

const Main = () => {
	return (
		<>
			<Header />
			<div className='main'>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/cart' component={Cart} />
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route path='/course/:id' component={Course} />
				</Switch>
			</div>
			<Footer />
		</>
	);
};

export default Main;
