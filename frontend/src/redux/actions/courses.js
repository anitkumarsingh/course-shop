import axios from 'axios';
import { BASE_URL } from '../../constant';
import { actionTypes } from './actionTypes';

const { COURSE_REQUEST, COURSE_SUCCESS, COURSE_FAIL } = actionTypes;

export const getCourses = () => async (dispatch) => {
  try {
    dispatch({ type: COURSE_REQUEST });
    const { data } = await axios(`${BASE_URL}`);
    console.log('asas', data);
    dispatch({
      type: COURSE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: COURSE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
