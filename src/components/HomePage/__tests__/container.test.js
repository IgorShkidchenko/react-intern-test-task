import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import HomePageContainer from "../container";

configure({ adapter: new Adapter() });

describe("<HomePageContainer />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<HomePageContainer />);

    expect(wrapper).toMatchSnapshot();
  });
});
