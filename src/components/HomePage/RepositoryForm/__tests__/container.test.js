import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";

import RepositoryForm from "../container";

describe("<RepotisoryRow />", () => {
  const mockStore = configureStore([]);
  const initialState = { onAddRepository: () => {} };
  const store = mockStore(initialState);

  it("renders correctly", () => {
    const wrapper = shallow(<RepositoryForm store={store} />);
    const container = wrapper.dive().dive().dive();

    expect(container).toMatchSnapshot();
  });
});
