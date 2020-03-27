import React from "react";
import { shallow } from "enzyme";

import DetailsComponent from "../component";

describe("<DetailsComponent />", () => {
  it("renders correctly", () => {
    const location = { state: { repository: { fullname: "name", clone_url: "url" } } }
    const wrapper = shallow(<DetailsComponent location={location} />);

    expect(wrapper).toMatchSnapshot();
  });
});

