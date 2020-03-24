import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import DetailsComponent from "../component";

configure({ adapter: new Adapter() });

describe("<DetailsComponent />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<DetailsComponent repository={{ fullname: "name", clone_url: "url" }} />);

    expect(wrapper).toMatchSnapshot();
  });
});

