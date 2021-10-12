import { actionTypes } from '../actions/actionTypes';

const { ORDER_REQUEST, ORDER_SUCCESS, ORDER_FAIL } = actionTypes;

export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_REQUEST:
      return { loading: true };
    case ORDER_SUCCESS:
      return { loading: false, orders: action.payload };
    case ORDER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
