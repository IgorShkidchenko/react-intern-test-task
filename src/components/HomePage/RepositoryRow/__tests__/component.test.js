import React from "react";
import { shallow } from "enzyme";

import RepotisoryRowComponent from "../component";

describe("<RepotisoryRowComponent />", () => {
  const clickFn = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RepotisoryRowComponent
      repository={{ name: "name", stargazers_count: 1 }}
      handleClick={clickFn}
    />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleClick on X click", () => {
    wrapper.find("span").simulate("click");

    expect(clickFn).toHaveBeenCalled();
  });
});
