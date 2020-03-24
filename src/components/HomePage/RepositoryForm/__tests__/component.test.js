import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { waitFor } from "@testing-library/dom";
import { RepositoryForm } from "../component";

configure({ adapter: new Adapter() });

describe("<RepotisoryRowComponent />", () => {
  const clickFn = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<RepositoryForm
      onAddRepository={clickFn}
    />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call onAddRepository on submit", async () => {
    const value = { target: { name: "repositoryUrl", value: "facebook/react" } };
    wrapper.find("input").simulate("change", value);

    await waitFor(() => {
      wrapper.find("form").simulate("submit");
      expect(clickFn).toHaveBeenCalledTimes(1);
    });
  });
});
