import { combineReducers } from 'redux';
import { userLoginReducer, userRegisterReducer } from './users';
import { coursesReducer } from './courses';
import { orderReducer } from './orders';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  courses: coursesReducer,
  placeOrder: orderReducer
});

export default rootReducer;
