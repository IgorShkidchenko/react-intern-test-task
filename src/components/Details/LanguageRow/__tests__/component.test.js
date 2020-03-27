import React from "react";
import { shallow } from "enzyme";

import LanguageRowComponent from "../component";

describe("<LanguageRowComponent />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<LanguageRowComponent percentage="1" languageName="name" />);

    expect(wrapper).toMatchSnapshot();
  });
});
