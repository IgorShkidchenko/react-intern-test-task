import React from "react";
import { shallow } from "enzyme";
import { waitFor } from "@testing-library/dom";
import configureStore from "redux-mock-store";

import RepositoryForm from "../container";

describe("<RepotisoryRow />", () => {
  const clickFn = jest.fn();
  const mockStore = configureStore([]);
  const initialState = { onAddRepository: clickFn };
  const store = mockStore(initialState);

  let container;
  beforeEach(() => {
    const wrapper = shallow(<RepositoryForm store={store} />);
    container = wrapper.dive().dive().dive();
  });

  it("renders correctly", () => {
    expect(container).toMatchSnapshot();
  });

  it("should call onAddRepository on submit", async () => {
    const value = { target: { name: "repositoryUrl", value: "facebook/react" } };
    container.find("input").simulate("change", value);

    await waitFor(() => {
      container.find("form").simulate("submit");
      expect(clickFn).toHaveBeenCalledTimes(1);
    });
  });
});
