import React from "react";
import { shallow } from "enzyme";

import HomePageComponent from "../component";

describe("<HomePageComponent />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<HomePageComponent />);

    expect(wrapper).toMatchSnapshot();
  });
});
