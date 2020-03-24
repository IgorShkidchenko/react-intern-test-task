import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import StatsComponent from "../component";

configure({ adapter: new Adapter() });

describe("<StatsComponent />", () => {
  it("renders correctly", () => {
    const repository = { watchers: 1, stargazers_count: 1, forks: 1 };
    const wrapper = shallow(<StatsComponent repository={repository} />);

    expect(wrapper).toMatchSnapshot();
  });
});
