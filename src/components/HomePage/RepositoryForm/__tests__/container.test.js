import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";

import RepositoryForm from "../container";

describe("<RepotisoryRow />", () => {
  const clickFn = jest.fn();
  const mockStore = configureStore([]);
  const initialState = { onAddRepository: clickFn };
  const store = mockStore(initialState);

  let container;
  it("renders correctly", () => {
    const wrapper = shallow(<RepositoryForm store={store} />);
    container = wrapper;
    expect(container.dive().dive().dive()).toMatchSnapshot();
  });
});
