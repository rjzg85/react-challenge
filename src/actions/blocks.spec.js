import * as types from "../constants/actionTypes";
import * as actions from "./blocks";

describe("[Block Actions Creator]", () => {
  const url = "http://localhost:3002";
  it("should Start and Fail getting Blocks", () => {
    const dispatch = jest.fn();
    const expected = {
      type: types.GET_BLOCKS_FAILURE,
    };

    expect(typeof actions.getBlocks(url)).toEqual("function");
    // then we simulate calling it with dispatch as the store would do
    actions.getBlocks(url)(dispatch);
    expect(dispatch).toBeCalledWith(expected);
  });
});
