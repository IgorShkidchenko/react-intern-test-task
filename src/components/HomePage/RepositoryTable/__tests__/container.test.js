import React from "react";
import { shallow } from "enzyme";

import { RepositoryTableContainer } from "../container";

describe("<RepositoryTableContainer />", () => {
  it("renders correctly", () => {
    const repositories = [{ id: 1, stargazers_count: 1 }, { id: 2, stargazers_count: 2 }];
    const wrapper = shallow(<RepositoryTableContainer repositories={repositories} />);

    expect(wrapper).toMatchSnapshot();
  });
});
