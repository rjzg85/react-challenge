import * as types from "../constants/actionTypes";
import reducer from "./blocks";

const initialState = {
  blocks: [
    { id: 1, data: "testing 1" },
    { id: 2, data: "testing 2" },
  ],
  loading: false,
};
describe("Block Reducer", () => {
  it(
    "testing initial state",
    expect(reducer(undefined, {})).toEqual({
      blocks: [],
      loading: false,
    })
  );

  it(
    "should Blocks ",
    expect(
      reducer(initialState, {
        type: types.GET_BLOCKS_SUCCESS,
        payload: [{ id: 3, data: "testing 3" }],
      })
    ).toEqual({
      blocks: [{ id: 3, data: "testing 3" }],
      loading: false,
    })
  );

  it("should clean up the block array and set loading to false ", () => {
    expect(
      reducer(initialState, {
        type: types.GET_BLOCKS_FAILURE,
        payload: 2,
      })
    ).toEqual({ blocks: [], loading: false });
  });
  it("should clean up block array and set loading to true ", () => {
    expect(
      reducer(initialState, {
        type: types.GET_BLOCKS_START,
        payload: 2,
      })
    ).toEqual({ blocks: [], loading: true });
  });
});
