import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import RepotisoryRowComponent from "../component";

configure({ adapter: new Adapter() });

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
