import { actionTypes } from '../actions/actionTypes';

const { COURSE_REQUEST, COURSE_SUCCESS, COURSE_FAIL } = actionTypes;

export const coursesReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_REQUEST:
      return { loading: true };
    case COURSE_SUCCESS:
      return { loading: false, courses: action.payload };
    case COURSE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
