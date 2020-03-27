import React from "react";
import { shallow } from "enzyme";

import StatsComponent from "../component";

describe("<StatsComponent />", () => {
  it("renders correctly", () => {
    const repository = { watchers: 1, stargazers_count: 1, forks: 1 };
    const wrapper = shallow(<StatsComponent repository={repository} />);

    expect(wrapper).toMatchSnapshot();
  });
});
