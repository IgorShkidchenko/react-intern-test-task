import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import DetailsContainer from "../container";

configure({ adapter: new Adapter() });

describe("<DetailsContainer />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<DetailsContainer location={{ state: { repository: {} } }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
