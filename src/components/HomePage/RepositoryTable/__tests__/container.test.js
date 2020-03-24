import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { RepositoryTableContainer } from "../container";

configure({ adapter: new Adapter() });

describe("<RepositoryTableContainer />", () => {
  it("renders correctly", () => {
    const repositories = [{ id: 1, stargazers_count: 1 }, { id: 2, stargazers_count: 2 }];
    const wrapper = shallow(<RepositoryTableContainer repositories={repositories} />);

    expect(wrapper).toMatchSnapshot();
  });
});
