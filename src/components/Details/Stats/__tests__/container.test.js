import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import StatsContainer from "../container";

configure({ adapter: new Adapter() });

describe("<StatsContainer />", () => {
  it("renders correctly", () => {
    const repository = { watchers: 1, stargazers_count: 1, forks: 1 };
    const wrapper = shallow(<StatsContainer repository={repository} />);

    expect(wrapper).toMatchSnapshot();
  });
});
