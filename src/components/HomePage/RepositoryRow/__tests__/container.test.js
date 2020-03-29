import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";

import RepotisoryRowContainer from "../container";

describe("<RepotisoryRowContainer />", () => {
  const mockStore = configureStore([]);
  const initialState = { onRemoveRepository: () => {} };
  const store = mockStore(initialState);

  it("renders correctly", () => {
    const wrapper = shallow(<RepotisoryRowContainer
      repository={{}}
      store={store}
    />);
    const container = wrapper.dive();

    expect(container).toMatchSnapshot();
  });
});
