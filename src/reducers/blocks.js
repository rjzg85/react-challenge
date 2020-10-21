import {
  GET_BLOCKS_FAILURE,
  GET_BLOCKS_SUCCESS,
  GET_BLOCKS_START,
} from "../constants/actionTypes";
const initialState = {
  blocks: [],
  loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_BLOCKS_SUCCESS:
      return { blocks: payload, loading: false };
    case GET_BLOCKS_FAILURE:
      return { blocks: [], loading: false };
    case GET_BLOCKS_START:
      return { blocks: [], loading: true };
    default:
      return state;
  }
}
