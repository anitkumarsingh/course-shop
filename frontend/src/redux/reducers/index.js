import { combineReducers } from 'redux';
import { userLoginReducer, userRegisterReducer } from './users';
import { coursesReducers } from './courses';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  courses: coursesReducers
});

export default rootReducer;
