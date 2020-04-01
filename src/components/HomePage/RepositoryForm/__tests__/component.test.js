import React from "react";
import { shallow } from "enzyme";

import RepositoryFormComponent from "../component";

describe("<RepositoryFormComponent />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<RepositoryFormComponent isSubmitting={false} />);

    expect(wrapper).toMatchSnapshot();
  });
});
