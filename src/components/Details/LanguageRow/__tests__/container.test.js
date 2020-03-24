import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import LanguageRowContainer from "../container";

configure({ adapter: new Adapter() });

describe("<LanguageRowContainer />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<LanguageRowContainer percentage="1" languageName="name" />);

    expect(wrapper).toMatchSnapshot();
  });
});
