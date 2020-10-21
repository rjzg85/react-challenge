import reducer from "./alert";
import * as types from "../constants/actionTypes";

const alerts = [
  {
    id: 1,
    msg: "error one",
  },
  {
    id: 2,
    msg: "error two",
  },
  {
    id: 3,
    msg: "error three",
  },
];
describe("alert Reduces", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
  it("should add alert ", () => {
    expect(
      reducer(alerts, {
        type: types.SET_ALERT,
        payload: { msg: "error message", id: "1234" },
      })
    ).toEqual([...alerts, { msg: "error message", id: "1234" }]);
  });

  it("should remove an alert ", () => {
    expect(
      reducer(alerts, {
        type: types.REMOVE_ALERT,
        payload: 2,
      })
    ).toEqual([
      {
        id: 1,
        msg: "error one",
      },
      {
        id: 3,
        msg: "error three",
      },
    ]);
  });
});
