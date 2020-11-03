import { SET_ALERT, REMOVE_ALERT } from './type';
import uuid from 'uuid/v4';

export const setAlert = (msg, alertType, timeout = 5000) => async (
  dispatch
) => {
  const id = await uuid();
  dispatch({ type: SET_ALERT, payload: { msg, alertType, id } });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
