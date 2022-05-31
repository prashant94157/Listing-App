import axios from 'axios';
import { DATA_RECEIVED } from '../reducers/types';

export const getData = () => async (dispatch) => {
  try {
    const response = await axios.post(
      'https://hirebus-backend.herokuapp.com/getData',
      {}
    );
    dispatch({
      type: DATA_RECEIVED,
      payload: response.data,
    });
  } catch (error) {
    console.log(error.response.message);
  }
};
