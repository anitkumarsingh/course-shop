import { combineReducers } from 'redux';
import { userLoginReducer, userRegisterReducer } from './users';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer
});

export default rootReducer;
