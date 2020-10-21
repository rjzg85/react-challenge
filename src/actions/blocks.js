import {
  GET_BLOCKS_FAILURE,
  GET_BLOCKS_START,
  GET_BLOCKS_SUCCESS,
} from "../constants/actionTypes";
import { setAlert } from "./alert";

export const getBlocks = (url) => async (dispatch) => {
  try {
    dispatch({ type: GET_BLOCKS_START });
    const res = await fetch(`${url}/api/v1/blocks`);
    if (res.status != 200) {
      dispatch({ type: GET_BLOCKS_FAILURE });
    }
    const json = await res.json();
    setTimeout(() => {
      dispatch({
        type: GET_BLOCKS_SUCCESS,
        payload: json.data,
      });
    }, 500);
  } catch (error) {
    dispatch(setAlert(error.message));
    dispatch({ type: GET_BLOCKS_FAILURE });
  }
};
