import * as types from "../constants/actionTypes";
import * as actions from "./alert";
import uuid from "uuid/dist/v4";
jest.mock("uuid/dist/v4");

describe("[Alert Action]", () => {
  it("should create an action to add set an alert", () => {
    const dispatch = jest.fn();
    uuid.mockImplementation(() => "id");
    const msg = "alert text";
    const expectedAction = {
      type: types.SET_ALERT,
      payload: { id: "id", msg },
    };
    // we expect this to return a function since it is a thunk
    expect(typeof actions.setAlert(msg)).toEqual("function");
    // then we simulate calling it with dispatch as the store would do
    actions.setAlert(msg)(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expectedAction);
  });
});
