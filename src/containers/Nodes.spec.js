import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { create } from "react-test-renderer";
import ConnectedNodes, { Nodes } from "./Nodes";
import Node from "../components/Node";

describe("<Nodes />", () => {
  const actions = {
    checkNodeStatuses: jest.fn(),
  };
  const actionsBlock = {
    getBlocks: jest.fn(),
  };

  const nodes = {
    list: [
      {
        url: "https://thawing-springs-53971.herokuapp.com",
        online: false,
        name: "Node 1",
        loading: false,
      },
      {
        url: "https://secret-lowlands-62331.herokuapp.com",
        online: false,
        name: "Node 2",
        loading: false,
      },
    ],
  };
  const blocks = {
    blocks: [
      {
        id: 1,
        types: "blocks",
        attributes: {
          data: "something",
        },
      },
      {
        id: 2,
        types: "blocks 2",
        attributes: {
          data: "something 2",
        },
      },
    ],
    loading: false,
  };

  it("should contain <Node />!!", () => {
    const wrapper = shallow(
      <Nodes actions={actions} nodes={nodes} actionsBlock={actionsBlock} />
    );

    expect(wrapper.find(Node).length).toEqual(2);
  });

  it("should match snapshot", () => {
    const middlewares = [thunk];
    const store = configureMockStore(middlewares)({
      nodes,
      blocks,
    });
    const component = create(
      <Provider store={store}>
        <ConnectedNodes />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it("should match snapshot", () => {
  //   const middlewares = [thunk];
  //   const store = configureMockStore(middlewares)({
  //     nodes,
  //     blockstate,
  //   });
  //   const component = create(
  //     <Provider store={store}>
  //       <ConnectedNodes>
  //         <ConnectedNode blockstate />
  //       </ConnectedNodes>
  //     </Provider>
  //   );
  //   const tree = component.toJSON();

  //   expect(tree).toMatchSnapshot();
  // });
});
