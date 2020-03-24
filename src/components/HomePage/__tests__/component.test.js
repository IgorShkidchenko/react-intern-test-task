import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import HomePageComponent from "../component";

configure({ adapter: new Adapter() });

describe("<HomePageComponent />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<HomePageComponent />);

    expect(wrapper).toMatchSnapshot();
  });
});
