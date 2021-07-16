import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cart from '../pages/Cart';
import Home from '../pages/Home';

const Main = () => {
	return (
		<>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/cart' component={Cart} />
			</Switch>
		</>
	);
};

export default Main;
