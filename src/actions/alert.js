import { SET_ALERT, REMOVE_ALERT } from "../constants/actionTypes";
import { v4 as uuidv4 } from "uuid";

export const setAlert = (msg, timeout = 3000) => (dispatch) => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: {
      msg,
      id,
    },
  });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
