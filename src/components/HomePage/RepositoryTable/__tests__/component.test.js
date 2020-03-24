import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import RepositoryRowComponent from "../../RepositoryRow/component";
import RepositoryTableComponent from "../component";

configure({ adapter: new Adapter() });

describe("<RepositoryTableComponent />", () => {
  it("renders correctly", () => {
    const rows = [
      <RepositoryRowComponent
        repository={{ name: "name", stargazers_count: 1 }}
        handleClick={() => {}}
        key="name"
      />,
      <RepositoryRowComponent
        repository={{ name: "name2", stargazers_count: 2 }}
        handleClick={() => {}}
        key="name2"
      />,
    ];
    const wrapper = shallow(<RepositoryTableComponent rows={rows} />);
    expect(wrapper).toMatchSnapshot();
  });
});

